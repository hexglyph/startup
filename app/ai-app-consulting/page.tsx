import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-consulting`
const auditHref = buildContactHref({ service: "ai-app-consulting", source: "ai-app-consulting-page" })

const title = "AI App Consulting for Architecture, Scope and Delivery Decisions"
const description =
  "AI app consulting for founders and product teams that need help scoping features, reviewing architecture, choosing the right implementation path, and deciding what to build or fix next."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI app consulting",
    "AI app consultant",
    "AI app architecture review",
    "AI app strategy",
    "AI MVP consulting",
    "LLM app consulting",
    "AI product consulting",
    "technical consulting for AI apps",
  ],
  alternates: {
    canonical: "/ai-app-consulting",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-technical-audit.svg",
        width: 1200,
        height: 630,
        alt: "AI app consulting for architecture, scope and delivery decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-technical-audit.svg"],
  },
}

export default function AiAppConsultingPage() {
  return (
    <ServiceLandingPage
      badge="AI app consulting"
      title="Get senior engineering judgment before the AI app gets more expensive."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app consulting, AI app consultant, AI app architecture review, AI app strategy, AI MVP consulting, LLM app consulting, AI product consulting, technical consulting for AI apps."
      heroStats={[
        { label: "Architecture", value: "Needs review" },
        { label: "Scope drift", value: "High" },
        { label: "Tech choices", value: "Unclear" },
        { label: "Next move", value: "Blocked" },
      ]}
      symptomTitle="When consulting is the highest-leverage step"
      symptomDescription="Sometimes the biggest problem is not raw implementation capacity. It is a lack of confidence about architecture, sequencing, risk, and what the product should do next."
      symptoms={[
        {
          title: "The team is debating too many options",
          description: "Different people are pushing different stacks, AI patterns, or product bets, but no one has reduced the choices to a practical build path.",
        },
        {
          title: "A prototype exists but the direction is weak",
          description: "The app may already run, but the architecture, scope, and delivery model still feel improvised or hard to defend.",
        },
        {
          title: "You need an outside technical opinion",
          description: "Founders, agencies, or internal teams want a senior engineering read before hiring more people or expanding scope.",
        },
        {
          title: "Build versus refactor is not obvious",
          description: "It is unclear whether the current AI app should be extended, stabilized, partly rewritten, or re-scoped.",
        },
      ]}
      deliverablesTitle="Consulting output"
      deliverablesDescription="The consulting work is designed to turn uncertainty into a concrete build, refactor, or launch decision package."
      deliverables={[
        "Review the current product concept and codebase direction",
        "Assess architecture fit for the actual user and business flow",
        "Clarify what belongs in the next release and what should wait",
        "Identify risky implementation shortcuts before they spread",
        "Recommend build, refactor, or stabilization paths",
        "Map dependencies across AI features, data, and product operations",
        "Create a practical backlog with sequencing guidance",
        "Support founder or team decisions with senior technical framing",
      ]}
      valuesTitle="Consulting that produces engineering decisions, not generic brainstorming."
      valuesDescription="The output should help the team stop circling and start moving with a more coherent technical path."
      values={[
        {
          title: "Clarify",
          description: "Reduce ambiguity around architecture, sequencing, and scope so engineering work starts from a stronger base.",
        },
        {
          title: "Challenge",
          description: "Surface weak assumptions, brittle shortcuts, and unnecessary complexity before they become delivery debt.",
        },
        {
          title: "Prioritize",
          description: "Separate what is critical for the next release from what is merely interesting or premature.",
        },
        {
          title: "Translate",
          description: "Turn product pressure into a technical plan another engineer can execute with less confusion.",
        },
      ]}
      process={[
        {
          title: "Context intake",
          description: "Share the current product goal, repository, AI workflow, blockers, and the decisions that feel uncertain.",
        },
        {
          title: "Architecture and scope review",
          description: "Hexglyph reviews the app shape, stack choices, missing pieces, and delivery risks against the intended outcome.",
        },
        {
          title: "Decision framing",
          description: "You receive a clear recommendation for what to build, cut, refactor, or validate before spending more engineering time.",
        },
        {
          title: "Execution handoff",
          description: "The consulting output can feed directly into an internal sprint, external build partner, or a follow-on Hexglyph implementation scope.",
        },
      ]}
      signals={[
        "AI app consulting",
        "AI app consultant",
        "AI app architecture review",
        "AI app strategy",
        "AI MVP consulting",
        "LLM app consulting",
        "AI product consulting",
        "technical consulting for AI apps",
      ]}
      faqs={[
        {
          question: "What does AI app consulting include?",
          answer:
            "Hexglyph AI app consulting covers scope review, architecture judgment, implementation sequencing, risk mapping, and recommendations for what to build, fix, or delay.",
        },
        {
          question: "Is this useful if we already have developers?",
          answer:
            "Yes. Consulting is often most useful when a team can build, but needs outside senior judgment on architecture, scope, or how to avoid expensive rework.",
        },
        {
          question: "Can consulting start from a generated app or an MVP?",
          answer:
            "Yes. Hexglyph can review AI-generated apps, partially built MVPs, or existing codebases that need clearer technical direction.",
        },
        {
          question: "Can consulting lead into implementation support?",
          answer:
            "Yes. If needed, consulting can be followed by a technical audit, stabilization sprint, or a narrower implementation scope.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For a deeper written diagnosis of an existing codebase and its delivery risks.",
        },
        {
          href: "/ai-app-development",
          title: "AI app development help",
          description: "For teams that already know the direction and now need focused build support.",
        },
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For generated or fragile AI apps that already exist and need engineering correction.",
        },
      ]}
      contactTitle="Need AI app consulting before the next delivery decision?"
      contactDescription="Send the current product context, repo, and the technical choices you are stuck on. Hexglyph can frame the next move with less ambiguity."
    />
  )
}
