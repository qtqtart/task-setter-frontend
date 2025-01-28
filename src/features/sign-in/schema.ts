import { z } from "zod";

export const SignInSchema = z.object({
  login: z
    .string()
    .min(1, {
      message: "so short",
    })
    .max(255, {
      message: "so long",
    }),
  password: z
    .string()
    .min(1, {
      message: "so short",
    })
    .max(255, {
      message: " so long",
    }),
});
