import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/technical-audit`
const auditHref = buildContactHref({ service: "technical-audit", source: "technical-audit-page" })

const title = "Technical Audit Service for MVPs, AI Apps and Legacy Systems"
const description =
  "Technical audits for unstable MVPs, AI-generated apps, and legacy systems. Get a risk-ranked diagnosis, architecture review, delivery plan, and production-readiness recommendations."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "technical audit service",
    "codebase audit",
    "software audit",
    "MVP technical audit",
    "Next.js audit",
    "React audit",
    "legacy system audit",
    "production readiness audit",
  ],
  alternates: {
    canonical: "/technical-audit",
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
        alt: "Technical audit service for MVPs, AI apps and legacy systems",
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

export default function TechnicalAuditPage() {
  return (
    <ServiceLandingPage
      badge="Technical audit service"
      title="Get a technical audit before you spend more money building the wrong thing."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: codebase audit, software audit, architecture review, production-readiness assessment, and technical discovery."
      heroStats={[
        { label: "Architecture", value: "Mapped" },
        { label: "Critical risks", value: "Ranked" },
        { label: "Delivery blockers", value: "Visible" },
        { label: "Next steps", value: "Prioritized" },
      ]}
      symptomTitle="When an audit is the right first move"
      symptomDescription="A technical audit is useful when the system already exists, the team is uncertain what to fix first, and every new feature risks compounding hidden problems."
      symptoms={[
        {
          title: "The roadmap keeps slipping",
          description: "Features take longer than expected because the team lacks a shared picture of technical debt, coupling, and hidden dependencies.",
        },
        {
          title: "Nobody trusts the codebase",
          description: "Changes feel risky, regressions are common, and no one can clearly explain what should be fixed before launch.",
        },
        {
          title: "You need external senior judgment",
          description: "Founders or agencies want an independent engineering read before hiring, refactoring, or committing more budget.",
        },
        {
          title: "Production readiness is unclear",
          description: "The app may work in demos, but validation, security basics, observability, deployment, and performance still feel uncertain.",
        },
      ]}
      deliverablesTitle="Audit deliverables"
      deliverablesDescription="The output is a practical decision package that helps you choose scope, order, and implementation priorities with less ambiguity."
      deliverables={[
        "Architecture review with clear risk notes",
        "Severity-ranked bug and delivery blocker list",
        "UX, accessibility, and performance findings",
        "Validation, auth, and security-basics review",
        "Production-readiness checklist",
        "Prioritized backlog with recommended order",
        "Scope guidance for the first stabilization sprint",
        "Written handoff that another engineer can actually use",
      ]}
      valuesTitle="What the audit is meant to provide."
      valuesDescription="The audit reduces uncertainty and produces an implementation plan with clearer priorities, tradeoffs, and next steps."
      values={[
        {
          title: "Independent diagnosis",
          description: "An outside senior review catches architecture drift, risky shortcuts, and overlooked blockers faster than another internal debate.",
        },
        {
          title: "Budget protection",
          description: "The audit helps stop feature spending on top of fragile foundations by making the hidden repair work explicit.",
        },
        {
          title: "Implementation-ready output",
          description: "Findings are organized so they can become backlog items, sprint scope, and delivery decisions immediately.",
        },
        {
          title: "Shared working view",
          description: "Founders, partners, or internal teams can see what is broken, what is urgent, and what the next engineering step should be.",
        },
      ]}
      process={[
        {
          title: "Context intake",
          description: "Share the repository, product goals, known issues, deployment context, and what is currently blocking confidence.",
        },
        {
          title: "Code and product review",
          description: "Hexglyph examines architecture, flows, reliability risks, frontend and backend concerns, and operational gaps.",
        },
        {
          title: "Risk map and decisions",
          description: "You receive a ranked view of what is urgent, what can wait, and where implementation effort should start.",
        },
        {
          title: "Sprint recommendation",
          description: "The audit closes with a practical path: stabilization sprint, targeted refactor, or narrower corrective work.",
        },
      ]}
      signals={[
        "technical audit service",
        "codebase audit",
        "software audit",
        "MVP technical audit",
        "Next.js audit",
        "React audit",
        "legacy system audit",
        "production readiness audit",
      ]}
      faqs={[
        {
          question: "What is included in a technical audit?",
          answer:
            "A Hexglyph technical audit covers architecture, bugs, code quality, delivery blockers, UX and accessibility issues, performance concerns, security basics, and production-readiness gaps.",
        },
        {
          question: "Is this useful before hiring more developers?",
          answer:
            "Yes. A technical audit helps founders and agencies understand the real state of the system before expanding the team or committing more delivery budget.",
        },
        {
          question: "Can the audit lead into implementation?",
          answer:
            "Yes. The audit is designed to feed directly into a stabilization sprint or targeted remediation plan, with clear priorities and scope guidance.",
        },
        {
          question: "Do you audit AI-generated apps and legacy systems too?",
          answer:
            "Yes. The same audit structure works for AI-generated apps, fragile MVPs, and older internal systems that need senior technical diagnosis.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For Lovable, Bolt.new, v0, and Cursor-generated apps that need senior engineering before launch.",
        },
        {
          href: "/legacy-modernization",
          title: "Legacy modernization",
          description: "For brittle internal tools and older systems that need safer delivery and controlled refactoring.",
        },
        {
          href: "/",
          title: "Hexglyph home",
          description: "See packages, case studies, and the broader software rescue positioning.",
        },
      ]}
      contactTitle="Need a technical audit for an existing codebase?"
      contactDescription="Send the repository context, deployment target, and the decisions you are stuck on. Hexglyph can turn that into a clear diagnosis and next-step plan."
    />
  )
}
