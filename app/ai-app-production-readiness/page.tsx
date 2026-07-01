import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-production-readiness`
const auditHref = buildContactHref({
  service: "ai-app-production-readiness",
  source: "ai-app-production-readiness-page",
})

const title = "AI App Production Readiness Review for Vibe-Coded MVPs"
const description =
  "Hexglyph reviews AI-built apps made with Lovable, Bolt, v0, Cursor, Claude Code, and Replit, then hardens security, architecture, deployment, observability, and maintainability for production."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI app production readiness",
    "AI-built app production ready",
    "vibe coded app production readiness",
    "Lovable app production ready",
    "Bolt app production readiness",
    "Cursor app production readiness",
    "AI-generated MVP production checklist",
    "AI app launch review",
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
        alt: "AI app production readiness review for vibe-coded MVPs",
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
      title="Make your AI-built app production-ready"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app production readiness, AI-built app production ready, vibe coded app production readiness, Lovable app production ready, Bolt app production readiness, Cursor app production readiness, AI-generated MVP production checklist."
      heroStats={[
        { label: "Security", value: "Needs hardening" },
        { label: "Observability", value: "Thin" },
        { label: "Rollback path", value: "Missing" },
        { label: "Launch checklist", value: "Incomplete" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This page is for founders and product teams that already have an AI-built MVP in motion and need a launch-readiness review before more users, more data, or more spend make the weak spots obvious."
      audiences={[
        "Lovable, Bolt, v0, Cursor, Claude Code, or Replit apps that already have a working prototype and now need production engineering.",
        "Startup teams preparing a first launch, pilot, sales demo rollout, or handoff to internal engineering.",
        "Products that have UI and basic flows, but still lack a real production checklist.",
        "Teams that want hardening without wasting time on a full rewrite when targeted engineering is enough.",
      ]}
      symptomTitle="Why AI-built apps still fail close to launch"
      symptomDescription="The prototype can look convincing long before the production layer exists. The real risk usually sits in security, authentication, environment hygiene, observability, deployment, rollback, rate limits, backups, and cost control."
      symptoms={[
        {
          title: "The app works in demos, not in production conditions",
          description: "Happy-path flows exist, but real failure states, concurrency, data integrity, and runtime visibility are still weak or missing.",
        },
        {
          title: "Launch risk is spread across too many hidden seams",
          description: "Security, auth, logging, rollbacks, backups, and environment configuration have not been reviewed as one production system.",
        },
        {
          title: "Generated code left operational debt behind",
          description: "The app shipped fast, but the production basics around it were never completed with senior engineering discipline.",
        },
        {
          title: "Every new user increases the cost of weak assumptions",
          description: "The later these issues are found, the more expensive they become in credibility, incidents, and engineering time.",
        },
      ]}
      deliverablesTitle="A production-readiness review for AI-built MVPs"
      deliverablesDescription="Before launch, Hexglyph reviews authentication, authorization, database integrity, API routes, environment variables, logging, backups, rate limits, deployment configuration, rollback, and AI-specific runtime risks."
      deliverables={[
        "Review authentication, authorization, session handling, and role boundaries",
        "Check database integrity, migrations, schema assumptions, and recovery risk",
        "Review secrets management, environment variables, staging and production split",
        "Assess logging, error handling, observability, alerts, and incident visibility",
        "Review rate limits, third-party provider failure handling, retries, and fallbacks",
        "Check deployment, rollback, backups, domain setup, and release assumptions",
        "Review cost controls, accessibility, performance, and maintainability risks",
        "Produce a ranked checklist of production blockers and next hardening actions",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The review covers the app builders, frameworks, providers, and operational tools that usually surround an AI-built MVP."
      tools={[
        "Lovable",
        "Bolt.new",
        "v0",
        "Cursor",
        "Claude Code",
        "Replit",
        "Next.js",
        "React",
        "Vercel",
        "Supabase",
        "Firebase",
        "Postgres",
        "Sentry",
        "PostHog",
      ]}
      valuesTitle="Production readiness is where the launch becomes defensible."
      valuesDescription="The goal is to expose the missing operational layer before it turns into avoidable outages, security issues, or broken trust with early users."
      values={[
        {
          title: "Stress",
          description: "Look at the app through realistic launch and runtime failure modes instead of happy-path internal demos.",
        },
        {
          title: "Harden",
          description: "Surface and fix the missing production basics around auth, deployment, observability, and data safety.",
        },
        {
          title: "Sequence",
          description: "Clarify what must happen before launch and what can wait for the first post-launch hardening wave.",
        },
        {
          title: "Launch",
          description: "Leave the team with a production checklist that is concrete enough to act on immediately.",
        },
      ]}
      process={[
        {
          title: "Launch-context intake",
          description: "Share the current repo, environment setup, launch target, incidents, and where the team still lacks operational confidence.",
        },
        {
          title: "Production-readiness review",
          description: "Hexglyph reviews the app across security, auth, data, deployment, logging, fallbacks, rollback, and AI-specific production risk.",
        },
        {
          title: "Risk-ranked checklist",
          description: "You receive a ranked list of blockers, weak assumptions, and the hardening order that matters most before launch.",
        },
        {
          title: "Execution path",
          description: "The next step becomes a targeted hardening sprint, narrower remediation work, or a defined go-live checklist.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The output is a concrete production checklist rather than a vague recommendation that the app should be 'more robust'."
      expectedOutputs={[
        "A ranked production-readiness checklist covering security, auth, data, logging, deployment, and operational risk.",
        "A short list of launch blockers that should be fixed before more traffic or paying users arrive.",
        "Implementation-ready notes for rollback, backups, observability, and AI-specific failure handling.",
        "A clear view of what can launch now, what must be hardened first, and what belongs in post-launch cleanup.",
      ]}
      signals={[
        "AI app production readiness",
        "AI-built app production ready",
        "vibe coded app production readiness",
        "Lovable app production ready",
        "Bolt app production readiness",
        "Cursor app production readiness",
        "AI-generated MVP production checklist",
        "AI app launch review",
      ]}
      faqs={[
        {
          question: "Can an app built with Lovable or Bolt go to production?",
          answer:
            "Yes, but it usually needs a real production-readiness review first. Hexglyph checks the missing engineering layer around auth, data, deployment, observability, and operational safety.",
        },
        {
          question: "What usually breaks in AI-generated apps close to launch?",
          answer:
            "Common failures include weak authentication, missing authorization checks, exposed secrets, incomplete environment separation, poor error handling, thin logging, weak rollback paths, and brittle third-party integrations.",
        },
        {
          question: "Do you rebuild the app or stabilize the existing code?",
          answer:
            "Usually the right move is targeted stabilization and hardening. The review is meant to clarify whether the current app can be safely corrected or whether a deeper change is justified.",
        },
        {
          question: "What do I receive after the production-readiness review?",
          answer:
            "You receive a ranked launch-readiness checklist, the highest-risk blockers, and a practical hardening sequence for what should happen before and after launch.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For prompt injection, auth bypass, secret exposure, RAG leaks, and other security-specific AI app risks.",
        },
        {
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For AI-generated apps that already feel structurally fragile before launch even starts.",
        },
        {
          href: "/ai-app-setup",
          title: "AI app setup and configuration",
          description: "For environment, provider, auth, and deployment plumbing that usually blocks production readiness.",
        },
      ]}
      contactTitle="Need a production-readiness review before launch?"
      contactDescription="Send the repo, deployment target, and what still feels risky before release. Hexglyph can turn that into a concrete hardening checklist and execution path."
    />
  )
}
