"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { trackGoogleAdsEvent, trackLeadSubmission } from "@/lib/google-ads"
import { leadFormSchema, type LeadFormValues } from "@/lib/lead-form"

type LeadIntakeFormProps = {
  service?: string
  source?: string
}

const budgetOptions = [
  "US$ 500 - 2,000",
  "US$ 2,000 - 5,000",
  "US$ 5,000 - 12,000",
  "US$ 12,000+",
]

export function LeadIntakeForm({ service, source }: LeadIntakeFormProps) {
  const router = useRouter()
  const [formError, setFormError] = useState<string | null>(null)

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      budget: "",
      problem: "",
      service: service ?? "",
      source: source ?? "",
      landingPage: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
      gclid: "",
      gbraid: "",
      wbraid: "",
    },
  })

  useEffect(() => {
    const url = new URL(window.location.href)
    const referrer = document.referrer
    const attribution = window.localStorage.getItem("hexglyph_attribution")

    form.setValue("landingPage", url.href)
    form.setValue("referrer", referrer)

    const currentParams = new URLSearchParams(url.search)
    const merged = new Map<string, string>()

    const setParamIfPresent = (key: string, value: string | null) => {
      if (value) {
        merged.set(key, value)
      }
    }

    ;["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"].forEach((key) => {
      setParamIfPresent(key, currentParams.get(key))
    })

    if (referrer.startsWith(window.location.origin)) {
      const referrerUrl = new URL(referrer)
      ;["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"].forEach((key) => {
        setParamIfPresent(key, referrerUrl.searchParams.get(key))
      })
    }

    if (attribution) {
      try {
        const parsed = JSON.parse(attribution) as Record<string, string>

        Object.entries(parsed).forEach(([key, value]) => {
          if (typeof value === "string" && !merged.has(key)) {
            merged.set(key, value)
          }
        })
      } catch {
        // Ignore broken localStorage payloads.
      }
    }

    form.setValue("utmSource", merged.get("utm_source") ?? "")
    form.setValue("utmMedium", merged.get("utm_medium") ?? "")
    form.setValue("utmCampaign", merged.get("utm_campaign") ?? "")
    form.setValue("utmTerm", merged.get("utm_term") ?? "")
    form.setValue("utmContent", merged.get("utm_content") ?? "")
    form.setValue("gclid", merged.get("gclid") ?? "")
    form.setValue("gbraid", merged.get("gbraid") ?? "")
    form.setValue("wbraid", merged.get("wbraid") ?? "")

    trackGoogleAdsEvent("view_item", {
      item_category: "lead_form",
      item_name: service ?? "general",
    })
  }, [form, service])

  const onSubmit = form.handleSubmit(async (values) => {
    setFormError(null)

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      setFormError("The request could not be sent right now. Email hex@hexglyph.com if the issue persists.")
      return
    }

    trackLeadSubmission({
      service: values.service,
      source: values.source,
    })

    const redirectParams = new URLSearchParams()

    if (values.service) {
      redirectParams.set("service", values.service)
    }

    router.push(`/thank-you${redirectParams.size > 0 ? `?${redirectParams.toString()}` : ""}`)
  })

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-100">
            Name
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Smith"
            className="h-12 border-white/10 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500"
            {...form.register("name")}
          />
          {form.formState.errors.name ? <p className="text-sm text-rose-300">{form.formState.errors.name.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-100">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="jane@company.com"
            className="h-12 border-white/10 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500"
            {...form.register("email")}
          />
          {form.formState.errors.email ? <p className="text-sm text-rose-300">{form.formState.errors.email.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-zinc-100">
            Company
          </Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Acme Inc."
            className="h-12 border-white/10 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500"
            {...form.register("company")}
          />
          {form.formState.errors.company ? <p className="text-sm text-rose-300">{form.formState.errors.company.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-zinc-100">
            Website
          </Label>
          <Input
            id="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            placeholder="https://company.com"
            className="h-12 border-white/10 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500"
            {...form.register("website")}
          />
          {form.formState.errors.website ? <p className="text-sm text-rose-300">{form.formState.errors.website.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget" className="text-zinc-100">
          Budget Range
        </Label>
        <select
          id="budget"
          className="h-12 w-full rounded-md border border-white/10 bg-[#121216] px-3 text-sm text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]"
          {...form.register("budget")}
          defaultValue=""
        >
          <option value="" disabled>
            Select a range...
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {form.formState.errors.budget ? <p className="text-sm text-rose-300">{form.formState.errors.budget.message}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="problem" className="text-zinc-100">
          Current Problem
        </Label>
        <Textarea
          id="problem"
          rows={7}
          placeholder="Describe the app, what is unstable, and what needs to happen next..."
          className="min-h-40 border-white/10 bg-white/[0.04] text-zinc-100 placeholder:text-zinc-500"
          {...form.register("problem")}
        />
        {form.formState.errors.problem ? <p className="text-sm text-rose-300">{form.formState.errors.problem.message}</p> : null}
      </div>

      <input type="hidden" {...form.register("service")} />
      <input type="hidden" {...form.register("source")} />
      <input type="hidden" {...form.register("landingPage")} />
      <input type="hidden" {...form.register("referrer")} />
      <input type="hidden" {...form.register("utmSource")} />
      <input type="hidden" {...form.register("utmMedium")} />
      <input type="hidden" {...form.register("utmCampaign")} />
      <input type="hidden" {...form.register("utmTerm")} />
      <input type="hidden" {...form.register("utmContent")} />
      <input type="hidden" {...form.register("gclid")} />
      <input type="hidden" {...form.register("gbraid")} />
      <input type="hidden" {...form.register("wbraid")} />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-zinc-300">Replies usually go out within 1 business day.</p>
          <p className="text-xs text-zinc-500">Campaign traffic, source page, and UTM data are attached automatically.</p>
          {formError ? <p className="text-sm text-rose-300">{formError}</p> : null}
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="min-w-44 bg-[#f3efe6] text-zinc-950 hover:bg-white"
        >
          {form.formState.isSubmitting ? "Sending..." : "Request Audit"}
        </Button>
      </div>
    </form>
  )
}
