import { z } from "zod";

const AddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export const AccountSchema = z.object({
  _id: z.string().length(24), // MongoDB ObjectId hex string length
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string(), // hashed password string
  role: z.enum(["customer", "admin", "user"]), 
  address: AddressSchema.optional(),
  createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  updatedAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export const RegisterInputSchema = AccountSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
});


export type AccountInput = z.infer<typeof AccountSchema>;
