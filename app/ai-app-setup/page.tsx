import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-setup`
const auditHref = buildContactHref({ service: "ai-app-setup", source: "ai-app-setup-page" })

const title = "AI App Setup and Configuration for APIs, Integrations and Environments"
const description =
  "AI app setup and configuration support for teams that need help connecting APIs, providers, environments, webhooks, storage, auth, and deployment plumbing without fragile production surprises."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI app setup",
    "AI app configuration",
    "AI app integrations",
    "AI app environment setup",
    "AI app API setup",
    "AI app deployment configuration",
    "AI app provider setup",
    "AI app webhook setup",
  ],
  alternates: {
    canonical: "/ai-app-setup",
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
        alt: "AI app setup and configuration for APIs, integrations and environments",
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

export default function AiAppSetupPage() {
  return (
    <ServiceLandingPage
      badge="AI app setup and configuration"
      title="Connect the AI app properly across providers, environments, and delivery plumbing."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app setup, AI app configuration, AI app integrations, AI app environment setup, AI app API setup, AI app deployment configuration, AI app provider setup, AI app webhook setup."
      heroStats={[
        { label: "Env config", value: "Drifting" },
        { label: "Providers", value: "Partially wired" },
        { label: "Webhooks", value: "Needs validation" },
        { label: "Deploy config", value: "Fragile" },
      ]}
      symptomTitle="Why configuration work keeps becoming delivery work"
      symptomDescription="Many AI apps are not blocked by headline features. They are blocked by the setup layer around them: broken environment variables, incomplete provider wiring, unreliable webhooks, or deployment configuration that only works on one machine."
      symptoms={[
        {
          title: "Development and production do not match",
          description: "The app runs locally, but environment variables, credentials, domains, or service configuration break once the deployment target changes.",
        },
        {
          title: "Provider integration is incomplete",
          description: "The LLM, vector store, auth provider, email system, payment flow, or storage layer is only partially connected and still fragile.",
        },
        {
          title: "Operational wiring is missing",
          description: "Webhooks, background jobs, scheduled tasks, file handling, or callback flows still need a reliable implementation path.",
        },
        {
          title: "The team needs clean setup, not another rewrite",
          description: "The fastest path is often to correct the integration and configuration layer instead of rebuilding the whole app.",
        },
      ]}
      deliverablesTitle="Setup and integration support"
      deliverablesDescription="The focus here is getting the AI app properly wired so environments, providers, and dependent systems behave reliably."
      deliverables={[
        "Review and correct environment configuration across stages",
        "Connect AI providers, APIs, storage, and supporting services",
        "Set up auth, email, payment, webhook, or callback flows",
        "Resolve deployment configuration and domain-related issues",
        "Improve secrets handling and configuration hygiene",
        "Document required variables, dependencies, and runbook notes",
        "Reduce setup drift between local, staging, and production",
        "Prepare the app for cleaner launch or handoff",
      ]}
      valuesTitle="Good configuration work removes hidden delivery friction."
      valuesDescription="The goal is to make the supporting system around the AI app predictable enough that product work stops getting blocked by setup drift."
      values={[
        {
          title: "Align",
          description: "Make local, staging, and production behavior more consistent so deployment stops being guesswork.",
        },
        {
          title: "Connect",
          description: "Wire external systems, AI providers, and product dependencies in a way that is easier to maintain.",
        },
        {
          title: "Document",
          description: "Capture what the app needs to run, deploy, and recover without relying on tribal knowledge.",
        },
        {
          title: "Stabilize",
          description: "Reduce avoidable outages and blockers caused by broken configuration or integration seams.",
        },
      ]}
      process={[
        {
          title: "Environment intake",
          description: "Share the current stack, provider list, deployment target, and the exact points where setup is failing.",
        },
        {
          title: "Configuration review",
          description: "Hexglyph checks environment structure, service wiring, secrets handling, integration flow, and deployment assumptions.",
        },
        {
          title: "Targeted corrections",
          description: "The setup layer is cleaned up and documented so the app behaves more predictably across the environments that matter.",
        },
        {
          title: "Operational handoff",
          description: "You leave with cleaner configuration, implementation notes, and a clearer path into stabilization or launch.",
        },
      ]}
      signals={[
        "AI app setup",
        "AI app configuration",
        "AI app integrations",
        "AI app environment setup",
        "AI app API setup",
        "AI app deployment configuration",
        "AI app provider setup",
        "AI app webhook setup",
      ]}
      faqs={[
        {
          question: "Can Hexglyph help configure an AI app that already exists?",
          answer:
            "Yes. Hexglyph can work on existing AI apps that need provider setup, environment cleanup, integration wiring, webhook fixes, or deployment configuration support.",
        },
        {
          question: "Is this only for LLM providers?",
          answer:
            "No. AI app setup often includes auth, storage, email, payments, webhooks, queues, and other systems around the AI functionality itself.",
        },
        {
          question: "Can configuration work include security improvements?",
          answer:
            "Yes. Configuration work often overlaps with secret handling, environment separation, and safer integration patterns, especially before production.",
        },
        {
          question: "Does this lead into launch support?",
          answer:
            "Yes. Once the setup layer is corrected, the next step is often production-readiness work or broader app stabilization.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-development",
          title: "AI app development help",
          description: "For teams that need the core product built or completed alongside the setup layer.",
        },
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For launch-focused hardening once the environment and integrations are in better shape.",
        },
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For auth, secret, and permission risks tied to the configuration layer.",
        },
      ]}
      contactTitle="Need help wiring the AI app correctly?"
      contactDescription="Send the stack, providers, deployment target, and the broken setup points. Hexglyph can review the configuration layer and fix the highest-risk seams."
    />
  )
}
