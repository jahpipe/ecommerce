// src/schemas/jwtSchema.ts
import { z } from "zod";

export const JWTPayloadSchema = z.object({
  id: z.string(),
  role: z.enum(["customer", "admin", "user"]),
});

export type JWTPayload = z.infer<typeof JWTPayloadSchema>;
