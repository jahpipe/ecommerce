import bcrypt from "bcrypt";
import { AccountInput } from "../../schema/AccountSchema/AccountSchema";
import mongoose, { Schema, Document, Model } from "mongoose";

export interface AccountDocuments extends AccountInput, Document {
  _id: string;
  passwordChecker(passwordToCheck: string): Promise<boolean>;
}

// Sub-schema for address
const AddressSchema = new Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
  country: { type: String },
});

// Main schema
const AccountModelSchema: Schema<AccountDocuments> = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      enum: ["customer", "admin", "user"],
      default: "customer",
    },
    address: { type: AddressSchema, required: false },
  },
  {
    timestamps: true, // adds createdAt and updatedAt as Date types
    toJSON: {
      transform: (_doc, ret: any) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

// Hash password before save
AccountModelSchema.pre<AccountDocuments>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password as string, salt);
  next();
});

// Method to compare password
AccountModelSchema.methods.passwordChecker = async function (
  passwordToCheck: string
): Promise<boolean> {
  return bcrypt.compare(passwordToCheck, this.password);
};

export const AccountModel: Model<AccountDocuments> = mongoose.model<
  AccountDocuments
>("Users", AccountModelSchema);

export default AccountModel;
