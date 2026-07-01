import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-setup`
const auditHref = buildContactHref({ service: "ai-app-setup", source: "ai-app-setup-page" })

const title = "AI App Setup for Founders Using Lovable, Bolt, v0 and Cursor"
const description =
  "Hexglyph helps founders set up AI-built apps correctly across GitHub, Vercel, environment variables, auth, database configuration, webhooks, monitoring, and deployment plumbing before fragile setup causes production issues."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Lovable app setup",
    "Bolt app setup",
    "v0 app setup",
    "Cursor app setup",
    "AI app setup for founders",
    "setup AI MVP for production",
    "deploy AI generated app",
    "AI app configuration service",
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
        alt: "AI app setup for founders using Lovable, Bolt, v0 and Cursor",
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
      title="Set up your AI-built app correctly before it breaks"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: Lovable app setup, Bolt app setup, v0 app setup, Cursor app setup, AI app setup for founders, setup AI MVP for production, deploy AI generated app, AI app configuration service."
      heroStats={[
        { label: "Git and deploy", value: "Needs alignment" },
        { label: "Auth and DB", value: "Partially wired" },
        { label: "Env config", value: "Drifting" },
        { label: "Monitoring", value: "Missing" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This page is for founders and early teams that already have an AI-generated or founder-built app, but still need the setup layer around it to be correctly wired before launch."
      audiences={[
        "Founders using Lovable, Bolt, v0, Cursor, Claude Code, or Replit to ship an MVP without a full internal DevOps or platform team.",
        "Products that work locally but still break once auth, domains, staging, or production deployment enter the picture.",
        "Teams missing a clean staging and production split across app, provider, and database configuration.",
        "Apps blocked by configuration, integration, or deployment plumbing rather than missing UI screens.",
      ]}
      symptomTitle="Where setup problems usually hide"
      symptomDescription="Many AI apps are not blocked by the headline feature. They are blocked by GitHub setup, Vercel configuration, auth, database rules, environment drift, webhook failures, or a deployment flow that only works on one machine."
      symptoms={[
        {
          title: "The app runs locally but not cleanly in production",
          description: "Environment variables, domains, callbacks, secrets, or provider settings break once the app moves beyond local development.",
        },
        {
          title: "Auth and database wiring is only half-finished",
          description: "Supabase, Firebase, Postgres, roles, or app rules may exist, but the setup still lacks a reliable production path.",
        },
        {
          title: "Operational tooling is missing",
          description: "Monitoring, analytics, error tracking, backups, and release notes have not been set up with enough discipline to support real users.",
        },
        {
          title: "The team needs correction, not another rewrite",
          description: "The fastest path is often fixing the setup and integration layer rather than rebuilding the whole product from scratch.",
        },
      ]}
      deliverablesTitle="Setup the AI-built app correctly for real delivery"
      deliverablesDescription="The scope covers GitHub setup, Vercel setup, environment variables, database setup, auth setup, CI and CD, monitoring, backups, domains, email, analytics, error tracking, and staging versus production separation."
      deliverables={[
        "Review GitHub workflow, repository structure, and deployment assumptions",
        "Set up or correct Vercel, domains, environment variables, and callback URLs",
        "Review database setup across Supabase, Firebase, Postgres, or similar services",
        "Wire authentication, email, payment, webhook, or callback flows correctly",
        "Establish staging and production separation with safer config hygiene",
        "Add monitoring, analytics, error tracking, and operational visibility",
        "Review backups, scheduled jobs, and runbook-level setup gaps",
        "Document the configuration layer so the app is easier to maintain and hand off",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The setup work is about the real services and operational seams already around the product."
      tools={[
        "GitHub",
        "Vercel",
        "Lovable",
        "Bolt.new",
        "v0",
        "Cursor",
        "Claude Code",
        "Replit",
        "Supabase",
        "Firebase",
        "Postgres",
        "Sentry",
        "PostHog",
      ]}
      valuesTitle="Good setup work removes hidden delivery friction."
      valuesDescription="The goal is to make the supporting layer around the AI app predictable enough that product work stops being blocked by configuration drift and deployment improvisation."
      values={[
        {
          title: "Align",
          description: "Make local, staging, and production behavior more consistent so deployment stops being guesswork.",
        },
        {
          title: "Connect",
          description: "Wire providers, auth, databases, emails, webhooks, and app dependencies in a way that is easier to maintain.",
        },
        {
          title: "Document",
          description: "Capture what the app needs to run, deploy, recover, and hand off without relying on founder memory.",
        },
        {
          title: "Stabilize",
          description: "Reduce avoidable outages and delivery blockers caused by broken configuration or missing operational setup.",
        },
      ]}
      process={[
        {
          title: "Environment intake",
          description: "Share the stack, providers, deployment target, auth model, and the exact setup points that are failing or still unclear.",
        },
        {
          title: "Configuration review",
          description: "Hexglyph reviews repository setup, environments, service wiring, secrets handling, deployment assumptions, and the operational gaps around the app.",
        },
        {
          title: "Targeted correction",
          description: "The setup layer is fixed and documented so the app behaves more predictably across the environments that matter.",
        },
        {
          title: "Launch path",
          description: "The next step becomes cleaner production readiness, security work, or broader stabilization once the configuration layer stops being the blocker.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The point is to leave with an app that is actually wired for delivery, not just a local project that still depends on manual luck."
      expectedOutputs={[
        "A cleaner configuration layer across GitHub, hosting, auth, database, and providers.",
        "A documented list of required environment variables, services, and deployment assumptions.",
        "A safer split between staging and production with fewer setup surprises.",
        "A clearer path into launch hardening, security review, or broader stabilization.",
      ]}
      signals={[
        "Lovable app setup",
        "Bolt app setup",
        "v0 app setup",
        "Cursor app setup",
        "AI app setup for founders",
        "setup AI MVP for production",
        "deploy AI generated app",
        "AI app configuration service",
      ]}
      faqs={[
        {
          question: "Can Hexglyph help configure an AI app that already exists?",
          answer:
            "Yes. Hexglyph works on existing AI apps that need provider setup, environment cleanup, auth fixes, deployment correction, webhook wiring, or better staging and production configuration.",
        },
        {
          question: "Is this only about LLM providers?",
          answer:
            "No. AI app setup also includes GitHub, hosting, auth, databases, emails, payments, webhooks, analytics, and error tracking around the AI functionality itself.",
        },
        {
          question: "Can setup work include security improvements?",
          answer:
            "Yes. Setup work often overlaps with safer secret handling, auth configuration, environment separation, and tighter integration boundaries before production.",
        },
        {
          question: "Does this lead into launch support?",
          answer:
            "Yes. Once the setup layer is corrected, the next step is often production-readiness work, a security review, or broader app stabilization.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For launch-focused hardening once the environment and deployment plumbing are in better shape.",
        },
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For auth, secrets, and permission risks tied to the configuration and provider layer.",
        },
        {
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For AI-built apps where setup problems overlap with structural weakness in the codebase itself.",
        },
      ]}
      contactTitle="Need help wiring the AI app correctly?"
      contactDescription="Send the stack, providers, deployment target, and the setup points still breaking. Hexglyph can review the configuration layer and tighten the highest-risk seams."
    />
  )
}
