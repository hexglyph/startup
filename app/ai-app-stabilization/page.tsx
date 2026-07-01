import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-stabilization`
const auditHref = buildContactHref({ service: "ai-app-stabilization", source: "ai-app-stabilization-page" })

const title = "AI-Generated App Stabilization for Lovable, Bolt, v0, Cursor and Replit"
const description =
  "Hexglyph stabilizes AI-generated apps built with Lovable, Bolt, v0, Cursor, Claude Code, and Replit when the prototype works just well enough to hide structural, security, and launch risk."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI generated app stabilization",
    "AI-generated app stabilization",
    "Lovable app fix",
    "Bolt app fix",
    "v0 app hardening",
    "Cursor generated code",
    "Replit app fix",
    "MVP needs fixing",
    "vibe coded app fix",
    "AI-built app stabilization",
    "production hardening for generated apps",
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
      title="Stabilize your AI-generated app before users find the weak spots"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI-generated app stabilization, Lovable app fix, Bolt app fix, v0 app hardening, Cursor generated code, Replit app fix, vibe coded app fix, AI-built app stabilization."
      heroStats={[
        { label: "Generated UI", value: "Needs validation" },
        { label: "Auth flow", value: "High risk" },
        { label: "Next.js routes", value: "Performance pass" },
        { label: "Deployment", value: "Checklist missing" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This is for teams that already shipped or demoed an AI-built app and now need senior engineering to stop fragile code, missing checks, and operational gaps from wrecking the next release."
      audiences={[
        "Lovable, Bolt, v0, Cursor, Claude Code, and Replit apps that already have users, demos, or investor pressure.",
        "Founder-built MVPs that need stabilization before launch or handoff.",
        "Teams seeing auth bugs, integration issues, deployment drift, or repeated regressions in generated code.",
        "Products that can still be stabilized without defaulting to a full rewrite.",
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
      toolingTitle="Tools covered"
      toolingDescription="This stabilization work starts from the AI builder or coding workflow already used to create the app."
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
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The output should move the app from fragile demo quality toward a credible release path."
      expectedOutputs={[
        "A prioritized list of stabilization fixes across code, auth, data, and deployment.",
        "The highest-risk bugs, weak flows, and structural problems either fixed or clearly sequenced.",
        "A clearer path into production readiness, security review, or launch hardening.",
        "An app that is safer to keep extending instead of becoming more fragile with every new feature.",
      ]}
      signals={[
        "AI generated app stabilization",
        "Lovable app fix",
        "Bolt app fix",
        "v0 app hardening",
        "Cursor generated code",
        "Replit app fix",
        "vibe coded app fix",
        "AI-built app stabilization",
        "production hardening for generated apps",
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
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For a more explicit rescue angle when the AI-generated app is already showing structural collapse.",
        },
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For launch preparation once the AI app is stable enough to focus on deployment and operations.",
        },
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For auth, secrets, permissions, and data-exposure checks before broader rollout.",
        },
      ]}
      contactTitle="Need implementation support for an unstable AI-built app?"
      contactDescription="Send the repository context, builder stack, and the current failures to start with a stabilization review or a scoped implementation sprint."
    />
  )
}
