import { ServiceLandingPage } from "@/components/service-landing-page"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-stabilization`
const contactEmail = "hex@hexglyph.com"
const auditHref = `mailto:${contactEmail}?subject=AI%20App%20Stabilization%20Audit`

const title = "AI App Stabilization for Lovable, Bolt.new, v0 and Cursor Apps"
const description =
  "Senior full-stack technical audits and stabilization sprints for AI-generated apps, Lovable apps, Bolt.new apps, v0 apps, Cursor-generated code, unstable MVPs, React app bugs, and Next.js performance issues."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI generated app",
    "AI-generated app stabilization",
    "Lovable app",
    "Bolt.new app",
    "v0 app",
    "Cursor generated code",
    "MVP needs fixing",
    "React app bugs",
    "Next.js app performance",
    "codebase cleanup",
    "technical audit",
  ],
  alternates: {
    canonical: "/ai-app-stabilization",
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
        alt: "AI app stabilization for Lovable, Bolt.new, v0 and Cursor apps",
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

export default function AiAppStabilizationPage() {
  return (
    <ServiceLandingPage
      badge="AI-generated app stabilization"
      title="Stabilize your AI-generated app for real users, real data, and production delivery."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI generated app, Lovable app, Bolt.new app, v0 app, Cursor generated code, React app bugs, Next.js app performance, codebase cleanup, technical audit."
      heroStats={[
        { label: "Generated UI", value: "Needs validation" },
        { label: "Auth flow", value: "High risk" },
        { label: "Next.js routes", value: "Performance pass" },
        { label: "Deployment", value: "Checklist missing" },
      ]}
      symptomTitle="Platform-specific fixes"
      symptomDescription="AI builders are useful for speed. The risk appears later: unclear architecture, incomplete production basics, fragile integrations, hidden security issues, and code that becomes expensive to extend."
      symptoms={[
        {
          title: "Lovable app needs fixing",
          description: "The prototype works in demo mode, but auth, database rules, deployment, UX, or error handling fail when real users touch it.",
        },
        {
          title: "Bolt.new app is unstable",
          description: "The app shipped fast, but generated code is hard to maintain, routes break, dependencies conflict, or production deploys are unreliable.",
        },
        {
          title: "v0 app needs production engineering",
          description: "The UI looks good, but the application still needs business logic, validation, accessibility, state handling, and production hardening.",
        },
        {
          title: "Cursor-generated code needs cleanup",
          description: "AI-assisted coding created useful features, but the codebase now needs refactoring, tests, clearer architecture, and safer implementation patterns.",
        },
      ]}
      deliverablesTitle="Technical audit"
      deliverablesDescription="The audit identifies failure points, dependency risks, refactor candidates, and the order of implementation work."
      deliverables={[
        "Fix unstable app behavior and launch-blocking bugs",
        "Clean up Cursor-generated code and duplicated components",
        "Refactor MVP architecture without rewriting everything",
        "Resolve React app bugs, state issues, and broken UI flows",
        "Improve Next.js app performance, routing, metadata, and rendering",
        "Add validation, error handling, logging, and production checklists",
        "Review authentication, authorization, and data access risks",
        "Create a technical audit with severity, effort, and recommended order",
      ]}
      valuesTitle="Senior full-stack developer judgment for generated apps under production pressure."
      valuesDescription="The work combines AI-assisted analysis with human engineering decisions across architecture, UX, security, performance, and deployment."
      values={[
        {
          title: "Audit",
          description: "A written diagnosis of app structure, risks, bugs, performance, and delivery gaps.",
        },
        {
          title: "Stabilize",
          description: "Critical React and Next.js fixes, validation, error handling, and codebase cleanup.",
        },
        {
          title: "Refactor",
          description: "MVP refactoring that reduces fragility without forcing a full rewrite.",
        },
        {
          title: "Launch",
          description: "Production-readiness checklist, deployment notes, and handoff documentation.",
        },
      ]}
      process={[
        {
          title: "Codebase intake",
          description: "Share the repository, deployment target, current bugs, business goals, and where the AI-generated app is failing.",
        },
        {
          title: "Technical audit",
          description: "Hexglyph reviews architecture, React/Next.js structure, generated code quality, security basics, UX, accessibility, and performance.",
        },
        {
          title: "Risk-ranked plan",
          description: "You receive a prioritized backlog that separates critical fixes, cleanup work, refactoring, and production-readiness tasks.",
        },
        {
          title: "Stabilization sprint",
          description: "A senior full-stack developer fixes the highest-risk issues and prepares the MVP or AI app for launch, handoff, or scaling.",
        },
      ]}
      signals={[
        "AI generated app",
        "Lovable app",
        "Bolt.new app",
        "v0 app",
        "Cursor generated code",
        "MVP needs fixing",
        "React app bugs",
        "Next.js app performance",
        "codebase cleanup",
        "technical audit",
      ]}
      faqs={[
        {
          question: "Can Hexglyph fix a Lovable app that works as a prototype but breaks in production?",
          answer:
            "Yes. Hexglyph stabilizes Lovable apps by reviewing generated code, auth flows, database access, deployment settings, validation, UX issues, and production-readiness gaps.",
        },
        {
          question: "Do you work on Bolt.new apps and v0 apps?",
          answer:
            "Yes. Hexglyph works on Bolt.new apps, v0 apps, and other AI-generated React or Next.js applications that need senior engineering before launch.",
        },
        {
          question: "Can you clean up Cursor-generated code?",
          answer:
            "Yes. Hexglyph can audit and refactor Cursor-generated code, reduce duplication, improve structure, fix bugs, add validation, and document the codebase for future development.",
        },
        {
          question: "What do I get from the technical audit?",
          answer:
            "You get a clear diagnosis: architecture notes, bug and risk assessment, UX and accessibility findings, Next.js performance issues, security basics, and a prioritized stabilization plan.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "Dedicated entry page for codebase audits, risk maps, implementation plans, and paid discovery.",
        },
        {
          href: "/legacy-modernization",
          title: "Legacy modernization",
          description: "Service page for rescuing brittle internal tools, old web systems, and slow delivery pipelines.",
        },
        {
          href: "/",
          title: "Hexglyph home",
          description: "Overview of stabilization packages, case studies, and the broader service offer.",
        },
      ]}
      contactTitle="Need technical review or implementation support for an unstable AI app?"
      contactDescription="Send the repository context and current issues to start with a technical audit or a scoped implementation sprint."
    />
  )
}
