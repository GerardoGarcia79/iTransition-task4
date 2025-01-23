import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "Email must be at least 1 character" })
    .max(50, { message: "Email must be less than 50 characters" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 character" })
    .max(50, { message: "Password must be less than 50 characters" })
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: "Password cannot be empty or contain only spaces",
    }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  position: z
    .string()
    .min(3, { message: "Position must be at least 3 characters" })
    .max(50, { message: "Position must be less than 50 characters" }),
});
