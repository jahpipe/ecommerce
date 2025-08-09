import AccountModel from "../../models/AccountModel/AccountModel";
import { AccountDocuments } from "../../models/AccountModel/AccountModel";
import { LoginSchema } from "../../schema/AccountSchema/LoginSchema";
import { signRefreshToken, signAccessToken } from "../../utils/token";
import { RegisterSchema } from "../../schema/AccountSchema/registerSchema"; // adjust path if needed


export const register = async (data: unknown): Promise<AccountDocuments> => {
  // validation of input using RegisterSchema
  const validation = RegisterSchema.safeParse(data);
  if (!validation.success) {
    throw new Error(`input error ${validation.error.format()}`);
  }

  const { username, email, password, role, address } = validation.data;

  const existingAccount = await AccountModel.findOne({ $or: [{ username }, { email }] });
  if (existingAccount) {
    throw new Error("account already exists!");
  }

  const newAccount = new AccountModel({ username, email, password, role, address });
  await newAccount.save();
  return newAccount;
};



export const login = async (
  data: unknown
): Promise<{ account: AccountDocuments; refreshToken: string; accessToken: string }> => {
  // validation of input
  const validationLogin = LoginSchema
    .safeParse(data) // optional: omit password from input if you only want username/email+password separately


  if (!validationLogin.success) {
    throw new Error(`input error ${validationLogin.error.format()}`);
  }

  const { username, email, password } = validationLogin.data;

  const account = await AccountModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!account) {
    throw new Error("username or email is wrong!");
  }

  const passwordIsCorrect = await account.passwordChecker(password);

  if (!passwordIsCorrect) {
    throw new Error("password is wrong!");
  }

  const refreshToken = signRefreshToken({ id: account._id, role: account.role });
  const accessToken = signAccessToken({ id: account._id, role: account.role });

  return { account, refreshToken, accessToken };
};
