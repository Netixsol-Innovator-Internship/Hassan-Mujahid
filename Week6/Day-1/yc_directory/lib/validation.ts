import { z } from "zod";
import { validateImageUrl } from "./action";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(30),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      return await validateImageUrl(url);
    }),
  pitch: z.string().min(10),
});
