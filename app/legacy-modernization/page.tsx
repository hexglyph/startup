import { ServiceLandingPage } from "@/components/service-landing-page"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/legacy-modernization`
const contactEmail = "hex@hexglyph.com"
const auditHref = `mailto:${contactEmail}?subject=Legacy%20System%20Modernization%20Audit`

const title = "Legacy System Modernization for Internal Tools and Aging Web Apps"
const description =
  "Legacy system modernization for internal tools, aging web apps, and fragile operational platforms. Technical audits, controlled refactoring, production hardening, and modernization plans without reckless rewrites."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "legacy system modernization",
    "legacy application modernization",
    "internal tool modernization",
    "legacy web app rescue",
    "software refactor service",
    "rewrite without full rewrite",
    "technical debt cleanup",
    "production hardening",
  ],
  alternates: {
    canonical: "/legacy-modernization",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-legacy-modernization.svg",
        width: 1200,
        height: 630,
        alt: "Legacy system modernization for internal tools and aging web apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-legacy-modernization.svg"],
  },
}

export default function LegacyModernizationPage() {
  return (
    <ServiceLandingPage
      badge="Legacy system modernization"
      title="Modernize fragile internal tools and aging web apps with a phased, lower-risk delivery plan."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: legacy system modernization, internal tool modernization, controlled refactoring, production hardening, and technical debt cleanup."
      heroStats={[
        { label: "Manual workflows", value: "Reduced" },
        { label: "Technical debt", value: "Mapped" },
        { label: "Refactor path", value: "Controlled" },
        { label: "Operational risk", value: "Lowered" },
      ]}
      symptomTitle="Legacy modernization without fantasy planning"
      symptomDescription="Older systems rarely need a dramatic rewrite first. They need diagnosis, risk control, and a phased plan that improves reliability while the business keeps operating."
      symptoms={[
        {
          title: "The tool is business-critical but brittle",
          description: "Internal operations depend on it, yet small changes cause regressions, slowdowns, or unexpected failures.",
        },
        {
          title: "The stack is inconsistent",
          description: "Different patterns, old dependencies, missing documentation, and ad hoc fixes make onboarding and maintenance expensive.",
        },
        {
          title: "Manual work keeps filling the gaps",
          description: "Because the software is unreliable, teams create spreadsheets, side processes, and human workarounds to keep things moving.",
        },
        {
          title: "A full rewrite is too risky",
          description: "The business cannot afford to stop operations for a multi-month rebuild with unclear migration scope and uncertain outcomes.",
        },
      ]}
      deliverablesTitle="Modernization scope"
      deliverablesDescription="The modernization path is designed to reduce operational risk, clarify where refactoring pays off, and avoid throwing away working business logic without reason."
      deliverables={[
        "Legacy system technical audit",
        "Dependency, architecture, and fragility review",
        "Risk-ranked modernization backlog",
        "Controlled refactor recommendations",
        "Operational bottleneck and workflow analysis",
        "Performance, validation, and reliability fixes",
        "Documentation and handoff improvements",
        "Phased modernization plan without full rewrite assumptions",
      ]}
      valuesTitle="Modernization that respects the business constraint."
      valuesDescription="The work is designed to make an aging system safer to operate, easier to change, and cheaper to extend over time."
      values={[
        {
          title: "Controlled change",
          description: "The system improves in phases so the business can keep operating while technical risk is reduced.",
        },
        {
          title: "Less wasted rebuild work",
          description: "Useful logic is preserved where it still serves the system, while fragile parts are isolated, cleaned up, or replaced intentionally.",
        },
        {
          title: "Clear modernization economics",
          description: "You get a better view of which repairs are urgent, which refactors pay back, and where a rewrite truly is justified.",
        },
        {
          title: "Operational resilience",
          description: "The result is a tool or platform with fewer operational failures, clearer ownership, and better support for future automation work.",
        },
      ]}
      process={[
        {
          title: "System intake",
          description: "Share what the system does, who depends on it, where it breaks, and which workflows are currently held together manually.",
        },
        {
          title: "Legacy audit",
          description: "Hexglyph reviews architecture drift, dependencies, fragile modules, operational pain points, and modernization constraints.",
        },
        {
          title: "Refactor strategy",
          description: "You receive a phased plan that separates short-term hardening from deeper structural changes and optional future migration work.",
        },
        {
          title: "Stabilization and modernization",
          description: "Implementation starts with the highest-risk pieces first so the platform becomes safer before larger changes are attempted.",
        },
      ]}
      signals={[
        "legacy system modernization",
        "legacy application modernization",
        "internal tool modernization",
        "legacy web app rescue",
        "software refactor service",
        "technical debt cleanup",
        "production hardening",
      ]}
      faqs={[
        {
          question: "Do legacy systems always need a rewrite?",
          answer:
            "No. Many legacy systems benefit more from audit, hardening, and phased refactoring than from a full rewrite that creates delivery risk and migration uncertainty.",
        },
        {
          question: "Can you work on internal tools that only my team uses?",
          answer:
            "Yes. Internal tools often carry high operational importance even when they are not customer-facing, and they are strong candidates for modernization work.",
        },
        {
          question: "What does modernization include beyond code cleanup?",
          answer:
            "Modernization includes architecture decisions, dependency cleanup, workflow analysis, reliability work, documentation, production hardening, and a phased implementation plan.",
        },
        {
          question: "Can modernization happen while the system stays live?",
          answer:
            "Yes. The preferred approach is controlled incremental change so the business keeps operating while the most fragile areas are improved first.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For teams that first need diagnosis, backlog prioritization, and implementation planning.",
        },
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For newer AI-generated apps that need cleanup, hardening, and senior engineering oversight.",
        },
        {
          href: "/",
          title: "Hexglyph home",
          description: "Overview of software rescue, packages, and case-study framing.",
        },
      ]}
      contactTitle="Need a modernization plan for an aging internal system?"
      contactDescription="Send the system context, business dependency, and current failure modes. Hexglyph can map the risk and define a controlled modernization plan."
    />
  )
}
