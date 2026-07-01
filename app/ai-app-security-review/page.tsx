import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-security-review`
const auditHref = buildContactHref({ service: "ai-app-security-review", source: "ai-app-security-review-page" })

const title = "AI App Security Review for LLM, RAG and Agentic Apps"
const description =
  "Hexglyph reviews LLM, RAG, agentic, and AI-generated apps for prompt injection, auth bypass, exposed keys, unsafe tool calls, RAG data leaks, vector exposure, and other application-security risks before production."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI app security review",
    "LLM app security review",
    "AI-generated code security audit",
    "vibe coding security review",
    "Lovable app security audit",
    "Cursor code security review",
    "RAG security review",
    "agentic app security review",
  ],
  alternates: {
    canonical: "/ai-app-security-review",
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
        alt: "AI app security review for LLM, RAG and agentic apps",
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

export default function AiAppSecurityReviewPage() {
  return (
    <ServiceLandingPage
      badge="AI app security review"
      title="Security review for AI-generated and LLM-powered apps"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app security review, LLM app security review, AI-generated code security audit, vibe coding security review, Lovable app security audit, Cursor code security review, RAG security review, agentic app security review."
      heroStats={[
        { label: "Auth", value: "Needs review" },
        { label: "Secrets", value: "At risk" },
        { label: "RAG exposure", value: "Unchecked" },
        { label: "Agent permissions", value: "Unbounded" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This review is for teams shipping LLM, RAG, agentic, or AI-generated apps that already work, but may be exposing avoidable security risk around auth, permissions, data, prompts, or integrations."
      audiences={[
        "AI-built apps using Lovable, Bolt, v0, Cursor, Claude Code, or Replit that have not had a serious application-security review yet.",
        "RAG products that touch user documents, embeddings, vector stores, or retrieval layers with unclear access boundaries.",
        "Agentic workflows that can trigger actions, call tools, or touch third-party systems with more power than intended.",
        "Startup teams preparing launch, enterprise pilots, or sales rollouts where security mistakes become much more expensive.",
      ]}
      symptomTitle="Where AI app security usually gets soft"
      symptomDescription="Fast-moving AI products often postpone security basics. The result is usually weak authorization, exposed API keys, unsafe tool calls, RAG leaks, unreviewed prompts, and server-side assumptions that never got pressure-tested."
      symptoms={[
        {
          title: "Auth exists, but authorization is weak",
          description: "Users may be authenticated, yet role checks, admin boundaries, and server-side enforcement are still inconsistent or incomplete.",
        },
        {
          title: "Secrets and provider keys are handled loosely",
          description: "Environment variables, third-party credentials, or client-side access patterns may already be exposing more than they should.",
        },
        {
          title: "AI-specific attack surfaces are under-reviewed",
          description: "Prompt injection, system prompt leakage, unsafe output handling, excessive agent permissions, and RAG data exposure are often still open.",
        },
        {
          title: "Generated code created blind spots",
          description: "The product may already work, but the code around uploads, callbacks, API routes, vector stores, or Supabase and Firebase rules still needs a real security pass.",
        },
      ]}
      deliverablesTitle="A security review for LLM, RAG, and AI-generated apps"
      deliverablesDescription="Hexglyph reviews prompt injection exposure, authorization bypass, hardcoded secrets, unsafe tool access, RAG data leaks, vector-store exposure, insecure API routes, missing server-side validation, dependency risk, and Supabase or Firebase misconfiguration."
      deliverables={[
        "Review authentication flows and server-side authorization boundaries",
        "Check exposed API keys, hardcoded secrets, and unsafe client-access patterns",
        "Review prompt injection, system prompt leakage, and unsafe output handling risks",
        "Assess RAG data exposure, vector-store access, and document-boundary controls",
        "Review agent permissions, unsafe tool calls, and excessive action scope",
        "Check insecure API routes, missing validation, uploads, callbacks, and webhooks",
        "Review Supabase or Firebase auth and RLS or rules misconfiguration",
        "Produce a ranked remediation plan for the highest-risk security issues",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The review is grounded in the actual AI app stack, not abstract security theory."
      tools={[
        "Lovable",
        "Bolt.new",
        "v0",
        "Cursor",
        "Claude Code",
        "Replit",
        "OpenAI",
        "Anthropic",
        "RAG",
        "Agentic apps",
        "Supabase",
        "Firebase",
        "Postgres",
        "Vercel",
      ]}
      valuesTitle="Security review focused on practical product risk, not checkbox theater."
      valuesDescription="The work is meant to catch the application-layer issues that slip through fast AI product delivery and to leave the team with a remediation list they can actually implement."
      values={[
        {
          title: "Constrain",
          description: "Tighten who can do what, what can be accessed, and what the system should expose through prompts, tools, and APIs.",
        },
        {
          title: "Surface",
          description: "Find risky assumptions around auth, secrets, data, outputs, and integrations before they become incidents.",
        },
        {
          title: "Prioritize",
          description: "Separate critical security fixes from lower-risk cleanup so the team can act without freezing product delivery.",
        },
        {
          title: "Remediate",
          description: "Turn findings into implementation-ready work instead of generic warnings that never get converted into code changes.",
        },
      ]}
      process={[
        {
          title: "Security-context intake",
          description: "Share the current auth model, sensitive flows, AI provider usage, retrieval layers, deployment setup, and what already worries the team.",
        },
        {
          title: "Application-layer review",
          description: "Hexglyph reviews the app across auth, secrets, prompts, outputs, RAG, agent permissions, callbacks, integrations, and exposure points created by fast delivery.",
        },
        {
          title: "Severity-ranked findings",
          description: "You receive the highest-risk issues first, with why they matter, where they live, and what needs to change.",
        },
        {
          title: "Remediation path",
          description: "The next step becomes a security-fix sprint, broader production-readiness work, or a deeper technical audit depending on the remaining risk.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The output should help the team reduce security risk immediately, not just feel more informed."
      expectedOutputs={[
        "A ranked risk list for auth, secrets, prompts, outputs, RAG layers, agent permissions, and exposed integrations.",
        "A practical remediation checklist for what should change before launch or broader rollout.",
        "A clearer map of where generated code or fast delivery created the biggest security blind spots.",
        "Implementation-ready security fixes that can be turned into backlog items without reinterpretation.",
      ]}
      signals={[
        "AI app security review",
        "LLM app security review",
        "AI-generated code security audit",
        "vibe coding security review",
        "Lovable app security audit",
        "Cursor code security review",
        "RAG security review",
        "agentic app security review",
      ]}
      faqs={[
        {
          question: "Is this a penetration test?",
          answer:
            "No. This is an engineering-led application-security review focused on auth, secrets, permissions, prompts, outputs, RAG, agents, integrations, and practical remediation guidance for the app.",
        },
        {
          question: "Do you review AI-specific risks too?",
          answer:
            "Yes. The review explicitly looks at prompt injection, output handling, system prompt leakage, RAG data exposure, vector-store access, and agent or tool overreach.",
        },
        {
          question: "Can this happen before launch?",
          answer:
            "Yes. That is often the best timing, because the team can still fix the highest-risk issues before more users, more data, or enterprise buyers increase exposure.",
        },
        {
          question: "Can the review turn into remediation work?",
          answer:
            "Yes. Hexglyph can follow the review with targeted security fixes, production-readiness work, or a broader stabilization sprint depending on what the app still needs.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For broader launch hardening across deployment, observability, rollback, and operational confidence.",
        },
        {
          href: "/ai-generated-code-audit",
          title: "AI-generated code audit",
          description: "For structural and security review of generated code before it becomes hidden production debt.",
        },
        {
          href: "/ai-app-setup",
          title: "AI app setup and configuration",
          description: "For environment, provider, auth, and rules configuration fixes when the risk sits in setup seams.",
        },
      ]}
      contactTitle="Need a security review before more users hit the AI app?"
      contactDescription="Send the repo, auth model, provider stack, and what feels risky. Hexglyph can review the exposure points and define the next remediation step."
    />
  )
}
