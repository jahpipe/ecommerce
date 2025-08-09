import dotenv from "dotenv";
dotenv.config();

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;
export const ACCESS_EXPIRE = process.env.ACCESS_EXPIRE || "15m";
export const REFRESH_EXPIRE = process.env.REFRESH_EXPIRE || "7d";