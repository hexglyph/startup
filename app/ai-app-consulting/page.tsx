import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-consulting`
const auditHref = buildContactHref({ service: "ai-app-consulting", source: "ai-app-consulting-page" })

const title = "AI App Technical Consulting for Startups and Product Teams"
const description =
  "Hexglyph provides technical consulting for AI app architecture, risk, scope, vendor review, provider selection, delivery sequencing, and production planning for startups and product teams."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI app technical consulting",
    "AI product technical advisor",
    "AI software architecture consulting",
    "LLM app architecture consultant",
    "AI implementation consultant for startups",
    "RAG architecture consulting",
    "agent architecture consulting",
    "AI build versus buy",
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
        alt: "AI app technical consulting for startups and product teams",
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
      badge="AI app technical consulting"
      title="Technical consulting for AI app architecture, risk and delivery"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app technical consulting, AI product technical advisor, AI software architecture consulting, LLM app architecture consultant, AI implementation consultant for startups, RAG architecture consulting."
      heroStats={[
        { label: "Architecture", value: "Needs review" },
        { label: "Scope drift", value: "High" },
        { label: "Provider choice", value: "Open" },
        { label: "Delivery plan", value: "Blocked" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This is for founders, product leads, and teams that already have activity around an AI product but need sharper technical decision support before they spend more money building."
      audiences={[
        "Startups choosing between building on generated output, extending it, or replacing parts of it.",
        "Product teams deciding between providers, RAG architecture, agent patterns, or internal build versus vendor options.",
        "Founders who need an outside senior technical advisor before hiring more engineers or approving more scope.",
        "Teams with an existing MVP that need a realistic stabilization or launch sequence instead of more debate.",
      ]}
      symptomTitle="When consulting is the highest-leverage move"
      symptomDescription="The problem is often not raw coding capacity. It is weak technical decision-making around architecture, scope, sequencing, risk, and what the product should actually become next."
      symptoms={[
        {
          title: "The team is circling around too many options",
          description: "Provider choices, architecture patterns, and feature priorities are still being debated without a defensible implementation path.",
        },
        {
          title: "The product exists, but the technical direction is thin",
          description: "A demo, generated app, or partial codebase exists, but the team still lacks a strong technical frame for what to build, fix, or cut next.",
        },
        {
          title: "Build versus refactor is unclear",
          description: "It is not obvious whether the app should be stabilized, partly rewritten, kept as is, or re-scoped to protect delivery.",
        },
        {
          title: "Budget is being spent faster than clarity improves",
          description: "The team needs senior judgment that reduces ambiguity before more effort disappears into the wrong implementation path.",
        },
      ]}
      deliverablesTitle="Turn product pressure into defensible technical decisions"
      deliverablesDescription="The consulting work is meant to convert uncertainty into a practical architecture, scope, and delivery direction that another engineer or team can act on."
      deliverables={[
        "Review architecture choices for frontend, backend, AI workflows, and delivery seams",
        "Assess build versus buy decisions around providers, vendors, or internal tooling",
        "Recommend model and provider choices based on product risk and operational fit",
        "Review RAG, agent, and orchestration patterns against the actual product need",
        "Estimate delivery and maintenance cost drivers before they become budget traps",
        "Set a realistic security baseline and production path for the current product stage",
        "Translate findings into a roadmap and next-sprint decision package",
        "Support founder and product-team decisions with outside senior technical judgment",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The consulting work is anchored in the actual systems, providers, and architecture options already under consideration."
      tools={[
        "OpenAI",
        "Anthropic",
        "RAG",
        "Agentic apps",
        "Lovable",
        "Bolt.new",
        "v0",
        "Cursor",
        "Claude Code",
        "Replit",
        "Supabase",
        "Firebase",
      ]}
      valuesTitle="Consulting that produces engineering direction, not generic brainstorming."
      valuesDescription="The output should help the team stop circling and start building with a more coherent technical path."
      values={[
        {
          title: "Clarify",
          description: "Reduce ambiguity around architecture, provider choice, delivery order, and what really belongs in the next release.",
        },
        {
          title: "Challenge",
          description: "Surface weak assumptions, brittle shortcuts, and unnecessary complexity before they become product debt.",
        },
        {
          title: "Prioritize",
          description: "Separate must-have technical work from everything that is merely interesting, fashionable, or premature.",
        },
        {
          title: "Translate",
          description: "Turn product pressure into a technical plan another team can actually execute.",
        },
      ]}
      process={[
        {
          title: "Context intake",
          description: "Share the current product, repository, architecture options, blockers, and the decisions that still feel unstable.",
        },
        {
          title: "Architecture and risk review",
          description: "Hexglyph reviews the product shape, provider choices, delivery model, operational assumptions, and where the real technical risk sits.",
        },
        {
          title: "Decision package",
          description: "You receive a practical recommendation for what to build, delay, re-scope, or harden before more engineering time gets spent.",
        },
        {
          title: "Execution handoff",
          description: "The consulting output can feed directly into an internal build sprint, an agency handoff, or a narrower Hexglyph implementation scope.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The point is to leave with technical decisions that are actionable enough to change what gets built next."
      expectedOutputs={[
        "An architecture read on whether the current AI product direction is viable or drifting.",
        "A recommended path for build versus refactor versus partial replacement.",
        "A clearer roadmap for scope, provider choice, security baseline, and delivery order.",
        "A technical decision package another engineer can use without decoding vague strategy language.",
      ]}
      signals={[
        "AI app technical consulting",
        "AI product technical advisor",
        "AI software architecture consulting",
        "LLM app architecture consultant",
        "AI implementation consultant for startups",
        "RAG architecture consulting",
        "agent architecture consulting",
        "AI build versus buy",
      ]}
      faqs={[
        {
          question: "What does AI app technical consulting include?",
          answer:
            "Hexglyph reviews architecture, scope, provider decisions, RAG or agent patterns, delivery sequencing, production risk, and the next technical decision package for the team.",
        },
        {
          question: "Is this useful if we already have developers?",
          answer:
            "Yes. Consulting is often most useful when a team can build, but needs outside senior judgment on architecture, scope, vendor choice, or how to avoid expensive rework.",
        },
        {
          question: "Can consulting start from a generated app or early MVP?",
          answer:
            "Yes. A generated app, founder-built prototype, or partially shipped MVP is a common starting point for this kind of technical decision support.",
        },
        {
          question: "Can consulting lead into implementation support?",
          answer:
            "Yes. The next step is often a technical audit, a stabilization sprint, or a more focused production-readiness or security scope.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For a broader written diagnosis of the existing codebase and its delivery risks.",
        },
        {
          href: "/ai-app-development",
          title: "AI app development for founder-built MVPs",
          description: "For teams that already know the direction and now need focused implementation help.",
        },
        {
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For AI-built apps where delivery speed created structural debt that now needs correction.",
        },
      ]}
      contactTitle="Need outside technical judgment before the next AI app decision?"
      contactDescription="Send the current product context, architecture choices, and where the team is stuck. Hexglyph can help frame the next move with less ambiguity."
    />
  )
}
