import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/vibe-code-rescue`
const auditHref = buildContactHref({ service: "vibe-code-rescue", source: "vibe-code-rescue-page" })

const title = "Vibe Code Rescue for AI-Generated Apps"
const description =
  "Hexglyph rescues AI-generated apps built with Lovable, Bolt, v0, Cursor, Claude Code, and Replit when fast delivery created structural debt, fragile flows, and launch risk."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "vibe code rescue",
    "vibe coded app rescue",
    "AI-generated app rescue",
    "Lovable app rescue",
    "Bolt app rescue",
    "v0 app rescue",
    "Cursor app rescue",
    "Claude Code app rescue",
  ],
  alternates: {
    canonical: "/vibe-code-rescue",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-ai-app-stabilization.svg",
        width: 1200,
        height: 630,
        alt: "Vibe code rescue for AI-generated apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-ai-app-stabilization.svg"],
  },
}

export default function VibeCodeRescuePage() {
  return (
    <ServiceLandingPage
      badge="Vibe code rescue"
      title="Rescue your vibe-coded app before it collapses"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: vibe code rescue, vibe coded app rescue, AI-generated app rescue, Lovable app rescue, Bolt app rescue, v0 app rescue, Cursor app rescue, Claude Code app rescue."
      heroStats={[
        { label: "Architecture", value: "Messy" },
        { label: "Bug risk", value: "High" },
        { label: "Launch confidence", value: "Low" },
        { label: "Rescue path", value: "Needed" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This page is for founders and teams that moved fast with AI app builders or AI coding tools, got useful momentum, and now need to rescue the product before fragile code, setup, and delivery risk catch up."
      audiences={[
        "Founders who shipped a demo or MVP with Lovable, Bolt, v0, Cursor, Claude Code, or Replit and now need senior cleanup.",
        "Teams with a working product surface but a shaky codebase, unclear auth, missing operational basics, or repeated regressions.",
        "Products that can still be saved through targeted correction instead of a wasteful full rewrite.",
        "Apps approaching launch, customer pilots, or handoff while still carrying obvious structural fragility.",
      ]}
      symptomTitle="What vibe-coded apps usually look like before rescue"
      symptomDescription="The product may already work enough to sell the idea, but the codebase underneath is usually full of duplication, weak boundaries, missing checks, unclear data flow, and production basics that never got finished."
      symptoms={[
        {
          title: "The app moves fast, but every change feels risky",
          description: "Generated code helped create momentum, but the structure is now too fragile for confident iteration.",
        },
        {
          title: "Launch blockers are spread across code and setup",
          description: "The problem is rarely one bug. It is usually a mix of weak auth, environment drift, duplication, missing validation, and half-finished operational work.",
        },
        {
          title: "The team does not know what to fix first",
          description: "There are too many visible problems, so the rescue needs a senior sequence that addresses the real failure points first.",
        },
        {
          title: "A rewrite feels tempting, but may be unnecessary",
          description: "Many apps can be rescued through targeted hardening, cleanup, and production engineering instead of throwing away the working parts.",
        },
      ]}
      deliverablesTitle="Rescue the AI-generated app without wasting the useful parts"
      deliverablesDescription="Hexglyph reviews the codebase, environment, auth, data flow, generated patterns, and release blockers, then defines the smallest credible path to make the app stable enough for real use."
      deliverables={[
        "Audit structural risk across code, auth, data, and environment setup",
        "Rank the failure points that matter most before launch or handoff",
        "Clean up duplication, fragile flows, and generated-code shortcuts",
        "Fix high-risk bugs, broken validation, and obvious production blockers",
        "Tighten deployment assumptions, environment hygiene, and release discipline",
        "Stabilize the app around the highest-leverage issues first",
        "Document what still needs to happen after the rescue sprint",
        "Leave the product in a state that can move into launch, hardening, or handoff",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The rescue is tailored to the actual AI builder or coding workflow already used to create the app."
      tools={[
        "Lovable",
        "Bolt.new",
        "v0",
        "Cursor",
        "Claude Code",
        "Replit",
        "Next.js",
        "React",
        "Supabase",
        "Firebase",
        "Postgres",
        "Vercel",
      ]}
      valuesTitle="Rescue work is about preserving velocity without keeping the fragility."
      valuesDescription="The goal is to keep the working parts of the app, cut the structural risk, and make the next engineering step more defensible."
      values={[
        {
          title: "Triage",
          description: "Identify which failures are cosmetic, which are dangerous, and which are blocking delivery right now.",
        },
        {
          title: "Stabilize",
          description: "Correct the parts of the app that are making every new feature or release feel unnecessarily dangerous.",
        },
        {
          title: "Preserve",
          description: "Keep the useful product progress instead of defaulting to a rewrite when a rescue is enough.",
        },
        {
          title: "Prepare",
          description: "Leave the app in a better state for production readiness, security review, or continued product work.",
        },
      ]}
      process={[
        {
          title: "Repo and launch-pressure intake",
          description: "Share the repo, current deployment, builder history, and the points where confidence is already breaking down.",
        },
        {
          title: "Rescue diagnosis",
          description: "Hexglyph reviews the code, setup, auth, data flow, generated patterns, and release assumptions to identify the real rescue path.",
        },
        {
          title: "Priority corrections",
          description: "The highest-risk issues are fixed first so the app becomes safer to launch, demo, or hand off without wasting time on lower-value cleanup.",
        },
        {
          title: "Next-step definition",
          description: "The app leaves the rescue sprint with a clearer path into production readiness, security hardening, or deeper product development.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The rescue should produce a stronger product and a shorter list of non-negotiable next steps."
      expectedOutputs={[
        "A risk-ranked rescue plan for the AI-generated app.",
        "The highest-leverage fixes applied across code, setup, auth, or release blockers.",
        "A clearer answer to whether the current app can keep evolving or needs deeper intervention later.",
        "A codebase that is more realistic to stabilize, ship, or hand off without constant fear of regressions.",
      ]}
      signals={[
        "vibe code rescue",
        "vibe coded app rescue",
        "AI-generated app rescue",
        "Lovable app rescue",
        "Bolt app rescue",
        "v0 app rescue",
        "Cursor app rescue",
        "Claude Code app rescue",
      ]}
      faqs={[
        {
          question: "What is vibe code rescue?",
          answer:
            "Vibe code rescue is targeted senior engineering work for AI-generated apps that moved fast with tools like Lovable, Bolt, v0, Cursor, Claude Code, or Replit and now need structural correction before they become too fragile to ship.",
        },
        {
          question: "Do you always rewrite the app?",
          answer:
            "No. The point is usually to rescue the current app through a ranked correction path, keeping the useful progress and avoiding a rewrite unless the architecture genuinely justifies it.",
        },
        {
          question: "Is this only for code problems?",
          answer:
            "No. Rescue work often includes code, auth, setup, deployment assumptions, environment hygiene, and other production blockers around the app.",
        },
        {
          question: "What usually comes after a rescue sprint?",
          answer:
            "The next step is often production readiness, a security review, or more targeted product development once the immediate fragility has been reduced.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For launch hardening once the structural rescue work is done.",
        },
        {
          href: "/ai-generated-code-audit",
          title: "AI-generated code audit",
          description: "For a narrower audit of generated code quality, security, and maintainability risk.",
        },
        {
          href: "/cursor-code-cleanup",
          title: "Cursor code cleanup",
          description: "For teams whose main problem is specifically Cursor-generated code duplication and structure.",
        },
      ]}
      contactTitle="Need to rescue a vibe-coded app before launch?"
      contactDescription="Send the repo, builder stack, and the points where the app already feels unstable. Hexglyph can map the rescue path and fix the highest-risk seams first."
    />
  )
}
