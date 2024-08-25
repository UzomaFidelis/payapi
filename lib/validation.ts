import { z, ZodType } from "zod";
import { FormData } from "./types";

export const ContactSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email(),
  companyName: z.string().min(1, { message: "Enter your company name" }),
  title: z.string().min(1, { message: "Enter your message title" }),
  message: z.string().min(1, { message: "Enter your message" }),
});
