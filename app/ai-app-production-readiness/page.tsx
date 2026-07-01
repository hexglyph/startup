import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-production-readiness`
const auditHref = buildContactHref({
  service: "ai-app-production-readiness",
  source: "ai-app-production-readiness-page",
})

const title = "AI App Production Readiness for Launch, Deployment and Stability"
const description =
  "AI app production readiness support for teams preparing launch. Review deployment, monitoring, error handling, environment separation, fallback behavior, and operational basics before real users arrive."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI app production readiness",
    "AI app launch support",
    "AI app deployment",
    "production ready AI app",
    "AI app production checklist",
    "AI app monitoring",
    "AI app observability",
    "AI app launch engineering",
  ],
  alternates: {
    canonical: "/ai-app-production-readiness",
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
        alt: "AI app production readiness for launch, deployment and stability",
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

export default function AiAppProductionReadinessPage() {
  return (
    <ServiceLandingPage
      badge="AI app production readiness"
      title="Prepare the AI app for launch, not just for another internal demo."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app production readiness, AI app launch support, AI app deployment, production ready AI app, AI app production checklist, AI app monitoring, AI app observability, AI app launch engineering."
      heroStats={[
        { label: "Deployment path", value: "Needs review" },
        { label: "Monitoring", value: "Thin" },
        { label: "Failure modes", value: "Unchecked" },
        { label: "Launch checklist", value: "Incomplete" },
      ]}
      symptomTitle="Why launch still feels risky"
      symptomDescription="AI apps often look finished before the launch-critical work is done. Production readiness is where operational reality, traffic, costs, and real user behavior expose what the app is still missing."
      symptoms={[
        {
          title: "The app works in demo mode, not in production mode",
          description: "Basic flows work during a walkthrough, but error states, rate limits, concurrency, or real-user behavior have not been handled well enough.",
        },
        {
          title: "Deployment exists but confidence does not",
          description: "There may already be a live environment, yet rollback, observability, config hygiene, and failure handling are still weak.",
        },
        {
          title: "Operational gaps are still open",
          description: "Logging, alerts, cost awareness, fallback behavior, and incident response notes are missing or too informal to trust.",
        },
        {
          title: "The launch date is close",
          description: "The team needs focused engineering judgment on what must be hardened now versus what can wait until after release.",
        },
      ]}
      deliverablesTitle="Launch-readiness review"
      deliverablesDescription="The work focuses on the operational and release layer that sits between a working product and a dependable launch."
      deliverables={[
        "Review deployment flow, environments, and release assumptions",
        "Harden error handling, retries, and user-facing failure states",
        "Check logging, monitoring, alerts, and operational visibility",
        "Review environment separation and production configuration hygiene",
        "Identify missing fallback behavior for AI and integration failures",
        "Map launch blockers by severity and remediation effort",
        "Create a production-readiness checklist for the current release",
        "Document the next hardening steps after launch",
      ]}
      valuesTitle="Production readiness is where the launch gets defensible."
      valuesDescription="The goal is to remove avoidable launch risk by making the operational layer visible, prioritized, and actionable."
      values={[
        {
          title: "Stress",
          description: "Look at the app through realistic production failure modes instead of happy-path demos.",
        },
        {
          title: "Harden",
          description: "Fix or surface the areas where deployment, runtime behavior, and operator visibility are still weak.",
        },
        {
          title: "Sequence",
          description: "Clarify what is essential before launch and what belongs in the first post-launch hardening wave.",
        },
        {
          title: "Launch",
          description: "Leave the team with a cleaner release path and more confidence in what the system can handle.",
        },
      ]}
      process={[
        {
          title: "Release context intake",
          description: "Share the current environments, launch target, known incidents, and where operational confidence is still low.",
        },
        {
          title: "Production review",
          description: "Hexglyph reviews the live path across deployment, runtime behavior, observability, and AI-specific failure handling.",
        },
        {
          title: "Risk-ranked hardening list",
          description: "You receive a release-focused view of what must be fixed now, monitored closely, or deferred intentionally.",
        },
        {
          title: "Launch support path",
          description: "The outcome is a clearer launch checklist, a stabilization scope, or a set of targeted production fixes.",
        },
      ]}
      signals={[
        "AI app production readiness",
        "AI app launch support",
        "AI app deployment",
        "production ready AI app",
        "AI app production checklist",
        "AI app monitoring",
        "AI app observability",
        "AI app launch engineering",
      ]}
      faqs={[
        {
          question: "What is included in AI app production readiness work?",
          answer:
            "Hexglyph reviews deployment assumptions, environment setup, failure handling, observability, fallback behavior, and release blockers that affect a safe AI app launch.",
        },
        {
          question: "Is this different from a technical audit?",
          answer:
            "Yes. A technical audit covers the broader codebase and delivery picture. Production readiness is narrower and focused on launch, runtime risk, and operational confidence.",
        },
        {
          question: "Can this help if the app is already live?",
          answer:
            "Yes. Production readiness work is also useful for existing AI apps that launched quickly and now need more reliable operations and release discipline.",
        },
        {
          question: "Do you handle implementation after the review?",
          answer:
            "Yes. If needed, Hexglyph can follow the review with a targeted hardening sprint to fix the highest-risk issues before or after launch.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For auth, permission, secret, and data exposure risks that often surface before launch.",
        },
        {
          href: "/ai-app-setup",
          title: "AI app setup and configuration",
          description: "For environment, provider, and deployment plumbing that often blocks production readiness.",
        },
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For broader bug fixing and refactoring when launch blockers live inside the app itself.",
        },
      ]}
      contactTitle="Need an AI app launch-readiness review?"
      contactDescription="Send the repo, deployment target, and what still feels risky before release. Hexglyph can turn that into a focused hardening and launch plan."
    />
  )
}
