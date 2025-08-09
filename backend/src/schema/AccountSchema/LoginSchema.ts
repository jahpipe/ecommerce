import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
  password: z.string().min(6),
}).refine(data => data.username || data.email, {
  message: "Either username or email is required",
});
