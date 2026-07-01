import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { serviceLabels } from "@/lib/service-pages"

export const metadata: Metadata = {
  title: "Thanks",
  description: "Lead confirmation page for Hexglyph technical audit requests.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const service = typeof params.service === "string" ? params.service : ""
  const serviceLabel = serviceLabels[service] ?? "technical review"

  return (
    <main className="min-h-screen bg-[#060607] px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#0d0d10] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300/12 text-emerald-300">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Lead received</p>
        <h1 className="mt-4 text-balance text-4xl font-medium leading-tight text-white md:text-5xl">
          Thanks. Your request for {serviceLabel} is in.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Hexglyph will review the context and reply by email. If useful, send repository access, deployment links, or a shortlist of current blockers in a follow-up message.
        </p>

        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">1. Internal review</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">The request is reviewed against the service context and current delivery risk.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">2. Response</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">Expect a follow-up with clarifying questions, a proposed audit angle, or a scoped next step.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">3. Scope decision</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">If the fit is right, the next step is usually a technical audit or a fixed-scope stabilization sprint.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#f3efe6] px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Return Home
          </Link>
          <Link
            href="/technical-audit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
          >
            Review Audit Service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
