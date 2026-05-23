import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  service: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // Log the lead so the business can see it in server logs.
    // In production this would forward to email / CRM.
    console.log("[NEW LEAD]", JSON.stringify(data));
    return { ok: true };
  });
