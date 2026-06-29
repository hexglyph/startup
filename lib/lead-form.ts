import { z } from "zod"

export const leadFormSchema = z.object({
  name: z.string().min(2, "Enter your name.").max(120),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Enter your company name.").max(160),
  website: z.string().url("Enter a valid URL.").or(z.literal("")).optional(),
  budget: z.string().min(1, "Select a budget range.").max(80),
  problem: z.string().min(30, "Describe the current problem in a bit more detail.").max(4000),
  service: z.string().max(120).optional(),
  source: z.string().max(120).optional(),
  landingPage: z.string().max(500).optional(),
  referrer: z.string().max(500).optional(),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
  utmTerm: z.string().max(200).optional(),
  utmContent: z.string().max(200).optional(),
  gclid: z.string().max(200).optional(),
  gbraid: z.string().max(200).optional(),
  wbraid: z.string().max(200).optional(),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>
