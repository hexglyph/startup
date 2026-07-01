import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-development`
const auditHref = buildContactHref({ service: "ai-app-development", source: "ai-app-development-page" })

const title = "AI App Development for Founder-Built MVPs"
const description =
  "Hexglyph helps founders and product teams move from an AI-generated prototype to a real product. Get senior support for feature completion, architecture, integrations, auth, deployment, and launch-ready engineering."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI app development for startups",
    "AI MVP development",
    "AI app development for founders",
    "custom AI app development Next.js",
    "AI SaaS MVP development",
    "LLM app development",
    "founder built AI app",
    "AI-generated prototype to product",
  ],
  alternates: {
    canonical: "/ai-app-development",
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
        alt: "AI app development for founder-built MVPs",
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

export default function AiAppDevelopmentPage() {
  return (
    <ServiceLandingPage
      badge="AI app development for founders"
      title="AI app development after the prototype stage"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app development for startups, AI MVP development, AI app development for founders, custom AI app development Next.js, AI SaaS MVP development, LLM app development."
      heroStats={[
        { label: "Prototype", value: "Already built" },
        { label: "Core product", value: "Incomplete" },
        { label: "Integrations", value: "Needs wiring" },
        { label: "Launch path", value: "Unclear" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This is for teams that already have a prototype, generated app, or founder-built MVP and now need senior engineering to turn it into a usable product."
      audiences={[
        "Founder-built MVPs that already have a demo, but not a release-grade product.",
        "Startup teams moving from Lovable, Bolt, v0, Cursor, or Replit output into a real app.",
        "Agencies or product teams that need a senior build partner to finish the critical path.",
        "Products that need auth, business logic, integrations, and maintainability before launch.",
      ]}
      symptomTitle="Where development usually stalls"
      symptomDescription="The hard part is rarely generating the first screens. The hard part is building the missing product layer: business logic, integrations, auth, operational basics, and maintainable code."
      symptoms={[
        {
          title: "The app looks real but is not product-complete",
          description: "The UI exists, but the workflows, permissions, data handling, and edge cases still need proper engineering.",
        },
        {
          title: "The prototype cannot survive real users",
          description: "Generated code or a quick founder build starts breaking when authentication, real data, and external services enter the picture.",
        },
        {
          title: "The team needs senior build judgment",
          description: "There is already motion, but the next release needs someone who can shape architecture and implementation at the same time.",
        },
        {
          title: "Roadmap pressure is stronger than engineering clarity",
          description: "The team knows what should happen commercially, but the app still lacks the build sequence needed to get there safely.",
        },
      ]}
      deliverablesTitle="Build the next real release of the AI app"
      deliverablesDescription="Hexglyph steps in after the prototype stage to complete the product slice that turns a promising demo into something people can actually use."
      deliverables={[
        "Scope the next production-relevant release instead of another vague prototype iteration",
        "Implement missing frontend, backend, and AI workflow logic",
        "Add auth, validation, data boundaries, and core business rules",
        "Connect LLM providers, APIs, storage, email, payments, or background jobs",
        "Reduce risky generated-code shortcuts before they spread further",
        "Harden the implementation around error handling and failure states",
        "Prepare the app for stabilization, launch, or handoff",
        "Document the next build sequence so the product can keep moving",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="This work starts from the tools and stack already in the repository instead of pretending the app is being built from zero."
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
      valuesTitle="Senior product engineering for AI apps that need to become real software."
      valuesDescription="The goal is not to make the prototype look slightly nicer. It is to build the product layer that makes the AI app usable, extendable, and worth shipping."
      values={[
        {
          title: "Scope",
          description: "Turn founder intent into a build slice that is realistic enough to ship and specific enough to implement.",
        },
        {
          title: "Build",
          description: "Complete the highest-leverage product flows across frontend, backend, and AI behavior.",
        },
        {
          title: "Integrate",
          description: "Connect the app to the real providers and systems it depends on in production.",
        },
        {
          title: "Prepare",
          description: "Leave the codebase ready for stabilization, launch, or continued product work instead of another messy handoff.",
        },
      ]}
      process={[
        {
          title: "Prototype intake",
          description: "Share the current repo, product goal, known blockers, and the difference between what demos well and what is actually missing.",
        },
        {
          title: "Critical-path definition",
          description: "Hexglyph identifies the product slice that matters next and the technical choices that need tightening before implementation continues.",
        },
        {
          title: "Focused implementation",
          description: "The missing release-critical pieces are built with attention to maintainability, operational basics, and realistic product behavior.",
        },
        {
          title: "Launch handoff",
          description: "You leave with a stronger codebase, clearer next steps, and a narrower path into stabilization or production readiness.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The result should look like an implementation-ready product slice, not another concept deck."
      expectedOutputs={[
        "A clearer release scope for the next working version of the AI app.",
        "Implemented or completed product flows across frontend, backend, and AI features.",
        "Technical notes for what still needs to happen before launch or scale.",
        "A codebase that is easier to stabilize, hand off, or keep extending.",
      ]}
      signals={[
        "AI app development for startups",
        "AI MVP development",
        "AI app development for founders",
        "custom AI app development Next.js",
        "AI SaaS MVP development",
        "LLM app development",
        "founder built AI app",
        "AI-generated prototype to product",
      ]}
      faqs={[
        {
          question: "Can Hexglyph help after a founder already built the first version?",
          answer:
            "Yes. Hexglyph is specifically useful when a founder-built or AI-generated MVP already exists, but the app still needs product-grade engineering before a serious release.",
        },
        {
          question: "Is this different from generic AI app development agency work?",
          answer:
            "Yes. The focus is not a generic custom-software pitch. The focus is finishing and hardening an existing prototype or early MVP that already has momentum.",
        },
        {
          question: "Do you work from generated apps and half-finished repositories?",
          answer:
            "Yes. That is a common starting point. Hexglyph can work from code generated with Lovable, Bolt, v0, Cursor, Claude Code, Replit, or internal founder-built prototypes.",
        },
        {
          question: "What happens after this page's scope is complete?",
          answer:
            "The usual next step is AI app stabilization, production readiness, or a security review depending on which risks remain before launch.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-consulting",
          title: "AI app technical consulting",
          description: "For teams that need architecture and sequencing decisions before more implementation work.",
        },
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For teams moving from working product slices into launch preparation and operational hardening.",
        },
        {
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For products already moving fast but now showing structural cracks from generated code.",
        },
      ]}
      contactTitle="Need help turning the prototype into a real AI product?"
      contactDescription="Send the current repo, the product goal, and what is still missing between the demo and a release people can actually use."
    />
  )
}
