import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-development`
const auditHref = buildContactHref({ service: "ai-app-development", source: "ai-app-development-page" })

const title = "AI App Development Help for Founders and Product Teams"
const description =
  "AI app development help for founders and product teams building a real AI product beyond the prototype stage. Get senior support for architecture, features, integrations, launch scope, and production-ready delivery."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI app development",
    "AI app development help",
    "build AI app",
    "AI app developer",
    "AI MVP development",
    "LLM app development",
    "AI product engineering",
    "launch AI app",
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
        alt: "AI app development help for founders and product teams",
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
      badge="AI app development help"
      title="Build the AI app past the prototype stage and into a usable product."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app development, AI app development help, build AI app, AI app developer, AI MVP development, LLM app development, AI product engineering, launch AI app."
      heroStats={[
        { label: "Product scope", value: "Needs shaping" },
        { label: "Core workflows", value: "In progress" },
        { label: "Integrations", value: "Pending" },
        { label: "Launch path", value: "Needs owner" },
      ]}
      symptomTitle="When build support is the real need"
      symptomDescription="Many teams already have a demo, a generated UI, or a partially built repository. The gap is turning that into a coherent AI app with working flows, integrations, and production-grade basics."
      symptoms={[
        {
          title: "The idea is validated but the product is not finished",
          description: "You know what the AI app should do, but the actual engineering work needed for auth, workflows, data, and edge cases is still missing.",
        },
        {
          title: "The prototype does not survive real usage",
          description: "The initial build looked promising, but actual usage reveals broken flows, weak state handling, or missing operational basics.",
        },
        {
          title: "The team needs a senior build partner",
          description: "Founders or product teams need help translating product goals into architecture, implementation choices, and a deliverable first release.",
        },
        {
          title: "The AI product needs focused shipping help",
          description: "The main blocker is not brainstorming. It is building the right slice, avoiding waste, and shipping something that can keep improving.",
        },
      ]}
      deliverablesTitle="Build scope"
      deliverablesDescription="This work turns an AI app concept, prototype, or partial codebase into a clearer and more production-aware implementation track."
      deliverables={[
        "Shape the first real release scope for the AI app",
        "Review architecture choices for frontend, backend, and AI workflows",
        "Implement critical flows, business logic, and product glue code",
        "Add auth, validation, and operational basics where needed",
        "Connect APIs, LLM providers, storage, queues, or external services",
        "Reduce throwaway work from generated or rushed code",
        "Prepare the codebase for handoff, follow-on development, or launch",
        "Document the recommended next build sequence",
      ]}
      valuesTitle="Senior product engineering for AI apps that need to become real software."
      valuesDescription="The goal is not just to make the demo look finished. It is to build the parts that make the AI app usable, maintainable, and worth shipping."
      values={[
        {
          title: "Scope",
          description: "Turn vague product intent into a realistic build slice with clearer priorities and fewer dead ends.",
        },
        {
          title: "Build",
          description: "Implement the highest-value flows across frontend, backend, and AI-driven behavior.",
        },
        {
          title: "Integrate",
          description: "Connect providers, APIs, storage, and supporting systems without leaving brittle seams behind.",
        },
        {
          title: "Prepare",
          description: "Leave the product in a state that can move into stabilization, launch, or team handoff without guesswork.",
        },
      ]}
      process={[
        {
          title: "Product and repo intake",
          description: "Share the current app, product direction, user flow goals, and what is already built versus still missing.",
        },
        {
          title: "Build sequence definition",
          description: "Hexglyph identifies the critical path for the next usable release and where architecture choices need tightening.",
        },
        {
          title: "Implementation sprint",
          description: "Core product slices are built or completed with attention to maintainability, operational basics, and delivery momentum.",
        },
        {
          title: "Launch handoff",
          description: "You leave with a clearer codebase, next-step plan, and a narrower list of what still needs to happen before scale.",
        },
      ]}
      signals={[
        "AI app development",
        "AI app development help",
        "build AI app",
        "AI app developer",
        "AI MVP development",
        "LLM app development",
        "AI product engineering",
        "launch AI app",
      ]}
      faqs={[
        {
          question: "Can Hexglyph help build an AI app from an early prototype?",
          answer:
            "Yes. Hexglyph can help shape and implement the next real release of an AI app when the prototype, generated UI, or partial codebase is not yet a usable product.",
        },
        {
          question: "Do you only work on fixes, or also on new AI app development?",
          answer:
            "Both. Hexglyph handles stabilization work, but can also help founders and teams build missing product slices, integrations, and production-grade foundations for a new AI app.",
        },
        {
          question: "Can this include architecture and scope guidance?",
          answer:
            "Yes. AI app development help often starts with scoping and architecture choices so implementation time goes into the right release slice instead of avoidable rework.",
        },
        {
          question: "Is this a fit if an AI builder already generated part of the app?",
          answer:
            "Yes. Hexglyph can work from generated or partially built codebases and turn them into cleaner, more reliable product foundations.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-consulting",
          title: "AI app consulting",
          description: "For scope, architecture, and product-delivery decisions before or during the build.",
        },
        {
          href: "/ai-app-setup",
          title: "AI app setup and configuration",
          description: "For provider setup, environment configuration, and delivery plumbing around the core app.",
        },
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For launch preparation once the AI app exists and needs operational hardening.",
        },
      ]}
      contactTitle="Need senior help building or finishing an AI app?"
      contactDescription="Send the current repo, the product goal, and what is blocked. Hexglyph can scope the next build slice or step into implementation support."
    />
  )
}
