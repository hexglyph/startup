import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-security-review`
const auditHref = buildContactHref({ service: "ai-app-security-review", source: "ai-app-security-review-page" })

const title = "AI App Security Review for Auth, Secrets and Data Exposure Risks"
const description =
  "AI app security review for teams that need senior engineering review of auth flows, secrets handling, permissions, file uploads, third-party integrations, and data exposure risks before production."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI app security review",
    "AI app security audit",
    "AI app security consulting",
    "LLM app security",
    "AI app auth review",
    "AI app secrets management",
    "AI app permissions review",
    "prompt injection review",
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
        alt: "AI app security review for auth, secrets and data exposure risks",
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
      title="Review the security basics before the AI app exposes the wrong thing."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI app security review, AI app security audit, AI app security consulting, LLM app security, AI app auth review, AI app secrets management, AI app permissions review, prompt injection review."
      heroStats={[
        { label: "Auth", value: "Needs review" },
        { label: "Secrets", value: "At risk" },
        { label: "Permissions", value: "Unclear" },
        { label: "Data exposure", value: "Unchecked" },
      ]}
      symptomTitle="Where AI apps often expose avoidable risk"
      symptomDescription="AI products move fast, which makes it easy to postpone security basics. The result is often permissive access, exposed secrets, weak admin paths, and unclear data boundaries around AI features."
      symptoms={[
        {
          title: "Secrets and provider keys are handled loosely",
          description: "Environment variables, API keys, service credentials, or client-side access patterns may already be exposing unnecessary risk.",
        },
        {
          title: "Auth and permissions are too trusting",
          description: "The app may authenticate users, but role boundaries, admin actions, and server-side authorization checks are still weak or inconsistent.",
        },
        {
          title: "Uploads, prompts, or outputs are under-reviewed",
          description: "File handling, prompt input, generated output, and integration callbacks may not yet have the right boundaries or review depth.",
        },
        {
          title: "Launch pressure is pushing security late",
          description: "The team needs a focused review of the highest-risk basics before more users, more data, and more integrations raise the cost of mistakes.",
        },
      ]}
      deliverablesTitle="Security-focused review"
      deliverablesDescription="This is a senior engineering review of practical application security risks around how the AI app is currently built and operated."
      deliverables={[
        "Review auth flows and server-side authorization assumptions",
        "Check secret handling and unsafe client exposure patterns",
        "Review permission boundaries for users, staff, and admins",
        "Assess file uploads, external callbacks, and integration entry points",
        "Flag risky data exposure or logging behavior",
        "Review AI-specific surfaces such as prompt and output handling",
        "Prioritize remediation by severity and delivery effort",
        "Document implementation-ready security fixes for the next sprint",
      ]}
      valuesTitle="Security review focused on practical product risk, not checkbox theater."
      valuesDescription="The work is meant to catch the application-layer issues that commonly slip through fast AI product delivery."
      values={[
        {
          title: "Constrain",
          description: "Tighten the boundaries around who can do what, what can be accessed, and what the system should expose.",
        },
        {
          title: "Surface",
          description: "Find the risky assumptions in auth, integrations, uploads, and AI-driven flows before they become incidents.",
        },
        {
          title: "Prioritize",
          description: "Separate critical security fixes from lower-risk cleanup so the team can act without freezing delivery.",
        },
        {
          title: "Remediate",
          description: "Leave with a fix list that engineers can actually implement instead of vague warnings.",
        },
      ]}
      process={[
        {
          title: "Security context intake",
          description: "Share the current auth model, sensitive flows, integrations, deployment model, and what already worries the team.",
        },
        {
          title: "Application-layer review",
          description: "Hexglyph reviews the practical security posture of the app, especially where fast delivery may have left weak boundaries.",
        },
        {
          title: "Severity-ranked findings",
          description: "You receive a focused view of which risks are highest, why they matter, and what needs to change first.",
        },
        {
          title: "Implementation path",
          description: "The review can lead into a remediation sprint, a broader technical audit, or specific launch-blocking fixes.",
        },
      ]}
      signals={[
        "AI app security review",
        "AI app security audit",
        "AI app security consulting",
        "LLM app security",
        "AI app auth review",
        "AI app secrets management",
        "AI app permissions review",
        "prompt injection review",
      ]}
      faqs={[
        {
          question: "Is this a penetration test?",
          answer:
            "No. This is an engineering-led application security review focused on auth, secrets, permissions, integrations, data exposure, and practical remediation guidance for the AI app.",
        },
        {
          question: "Do you review AI-specific risks too?",
          answer:
            "Yes. The review can include prompt and output handling, integration boundaries, logging behavior, and other AI-specific surfaces that interact with the rest of the application.",
        },
        {
          question: "Can this happen before launch?",
          answer:
            "Yes. That is often the best time to do it, because the team can still fix the highest-risk issues before more users and data increase exposure.",
        },
        {
          question: "Can the review turn into remediation work?",
          answer:
            "Yes. Hexglyph can follow the review with targeted security fixes, stabilization work, or a broader production-readiness sprint.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-production-readiness",
          title: "AI app production readiness",
          description: "For broader launch hardening across deployment, monitoring, and runtime risk.",
        },
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For a wider engineering diagnosis beyond the security-specific risk layer.",
        },
        {
          href: "/ai-app-setup",
          title: "AI app setup and configuration",
          description: "For environment and integration fixes when security issues stem from configuration drift.",
        },
      ]}
      contactTitle="Need a security review before more users hit the AI app?"
      contactDescription="Send the current auth model, deployment context, and the parts that feel risky. Hexglyph can review the exposure points and define the next remediation step."
    />
  )
}
