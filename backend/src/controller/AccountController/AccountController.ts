import * as AccountServices from "../../services/AccountServices/AccountServices";
import { Request, Response } from "express";
import { AccountSchema } from "../../schema/AccountSchema/AccountSchema";
import { LoginSchema } from "../../schema/AccountSchema/LoginSchema";
import { RegisterSchema } from "../../schema/AccountSchema/registerSchema";

export const registerController = async (req: Request, res: Response) => {
  // Validate input with Zod
  const registerValidation = RegisterSchema.safeParse(req.body);

  if (!registerValidation.success) {
    return res.status(400).json({ message: "Validation failed!", errors: registerValidation.error.format() });
  }

try {
  const account = await AccountServices.register(registerValidation.data);
  return res.status(201).json({ message: "Account created successfully", account });
} catch (error: any) {
  if (error.message === "account already exists!") {
    return res.status(409).json({ message: error.message });
  }
  return res.status(500).json({ message: "Internal server error", error: error.message || error });
}

};


export const loginController = async (req: Request, res: Response) =>{
  //vlidation of zod//

  const loginValidation = LoginSchema.safeParse(req.body);

  if (!loginValidation.success){
    return res.status(400).json({message: "login Validation Faild", errors: loginValidation.error.format()})
  }

  try{
      const {account, refreshToken, accessToken} = await AccountServices.login(loginValidation.data)
      res.status(200).json({message: "login Succesfully", account, accessToken, refreshToken})
  }catch(error: any){
          return res.status(500).json({ message: "Internal server error", error: error.message || error });
  }
}