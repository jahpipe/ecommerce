// src/middleware/authenticateToken.ts
import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/jwt";
import { JWTPayloadSchema } from "../schema/jwtSchema/jwtSchema";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Expecting: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Missing access token!" });
  }

  try {
    const decoded = Jwt.verify(token, ACCESS_TOKEN_SECRET);

    const parsed = JWTPayloadSchema.safeParse(decoded);

    if (!parsed.success) {
      return res.status(401).json({ message: "Invalid token payload!" });
    }

    req.user = parsed.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};