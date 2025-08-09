import jwt, { SignOptions, Secret } from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_EXPIRE,
  REFRESH_EXPIRE,
} from "../config/jwt";
import { StringValue } from "ms";
import { JWTPayload } from "../schema/jwtSchema/jwtSchema";


export const signAccessToken = (payload: JWTPayload): string => {
  const options: SignOptions = {
    expiresIn: ACCESS_EXPIRE as StringValue,
  };

  return jwt.sign(payload, ACCESS_TOKEN_SECRET as Secret, options);
};

export const signRefreshToken = (payload: JWTPayload): string => {
  const options: SignOptions = {
    expiresIn: REFRESH_EXPIRE as StringValue,
  };

  return jwt.sign(payload, REFRESH_TOKEN_SECRET as Secret, options);
};