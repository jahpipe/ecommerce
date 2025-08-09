import { z } from "zod";

const AddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export const RegisterSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6), // Add min length for password security
  role: z.enum(["customer", "admin", "user"]),
  address: AddressSchema.optional(),
});
