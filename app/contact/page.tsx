import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Mail, ShieldCheck } from "lucide-react"

import { LeadIntakeForm } from "@/components/lead-intake-form"
import { serviceLabels } from "@/lib/service-pages"

export const metadata: Metadata = {
  title: "Request a Review",
  description: "Contact Hexglyph to request a technical audit, AI app consulting review, stabilization sprint, or scoped implementation plan.",
  alternates: {
    canonical: "/contact",
  },
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const service = typeof params.service === "string" ? params.service : ""
  const source = typeof params.source === "string" ? params.source : "contact-page"
  const selectedService = serviceLabels[service] ?? "Technical Audit"

  return (
    <main className="min-h-screen bg-[#060607] px-4 py-12 text-white md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(243,239,230,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,234,212,0.08),transparent_38%,rgba(255,255,255,0.02))]" />
            <div className="relative">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Lead intake</p>
              <h1 className="max-w-3xl text-balance text-4xl font-medium leading-[1.02] text-white md:text-6xl">
                Request a scoped review before the next engineering spend.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                This form routes directly to Hexglyph with attribution data for the current visit. Use it for {selectedService}, implementation support, or a broader stabilization discussion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Senior technical review", "US client friendly", "1 business day response"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-white">Audit-first framing</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Start with risk ranking and next-step decisions instead of opening with generic dev capacity.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-white">Campaign attribution</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    The form keeps the landing URL, referrer, UTMs, and Google click IDs attached to the lead.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <Mail className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-white">Email fallback</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    If a procurement flow requires it, clients can still write directly to hex@hexglyph.com.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-[#0d0d10] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:p-8">
            <div className="mb-8 border-b border-white/10 pb-6">
              <p className="text-sm text-emerald-300">Primary conversion</p>
              <h2 className="mt-1 text-3xl font-medium text-white">Request Audit</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Use a work email, select the budget range, and describe the current delivery problem. The thank-you page can then be used as the Google Ads destination conversion.
              </p>
            </div>
            <LeadIntakeForm service={service} source={source} />
          </section>
        </div>
      </div>
    </main>
  )
}
