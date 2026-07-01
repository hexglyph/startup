import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-generated-code-audit`
const auditHref = buildContactHref({ service: "ai-generated-code-audit", source: "ai-generated-code-audit-page" })

const title = "AI-Generated Code Audit for Security, Structure and Delivery Risk"
const description =
  "Hexglyph audits AI-generated code for security, architecture, maintainability, duplication, validation gaps, and production-readiness risk across apps built with Cursor, Lovable, Bolt, v0, Claude Code, and Replit."

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI-generated code audit",
    "AI generated code security audit",
    "vibe coding security review",
    "generated code architecture review",
    "Lovable code audit",
    "Cursor code audit",
    "Bolt code audit",
    "v0 code audit",
  ],
  alternates: {
    canonical: "/ai-generated-code-audit",
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
        alt: "AI-generated code audit for security, structure and delivery risk",
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

export default function AiGeneratedCodeAuditPage() {
  return (
    <ServiceLandingPage
      badge="AI-generated code audit"
      title="Audit AI-generated code before it turns into production debt"
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: AI-generated code audit, AI generated code security audit, vibe coding security review, generated code architecture review, Lovable code audit, Cursor code audit, Bolt code audit, v0 code audit."
      heroStats={[
        { label: "Duplication", value: "Likely high" },
        { label: "Validation", value: "Needs review" },
        { label: "Security", value: "Unchecked" },
        { label: "Maintainability", value: "At risk" },
      ]}
      audiencesTitle="Who this is for"
      audiencesDescription="This audit is for teams that already have generated code in production or close to production and need to know where the real structural, security, and maintainability risks are before more work piles on."
      audiences={[
        "Products built quickly with Cursor, Lovable, Bolt, v0, Claude Code, Replit, or similar tooling where code quality is now a business risk.",
        "Teams that need an outside read on whether generated output is safe to keep extending.",
        "Founders who suspect the app works only because nobody has stressed the weak paths yet.",
        "Products preparing for launch, handoff, or a fundraising-driven credibility check on technical quality.",
      ]}
      symptomTitle="What generated code audits usually uncover"
      symptomDescription="Generated output often ships with duplicated flows, weak boundaries, missing server-side validation, unsafe secrets handling, brittle state logic, and inconsistent architecture that becomes harder to spot once the app starts growing."
      symptoms={[
        {
          title: "The code works, but nobody trusts it",
          description: "The app may already have users or demos, yet the codebase feels like output rather than engineering and every change feels harder than it should.",
        },
        {
          title: "Security and maintainability are mixed together",
          description: "The same generated shortcuts that create duplication often also leave secrets, auth, validation, and permission boundaries too loose.",
        },
        {
          title: "The architecture is expensive to reason about",
          description: "Files, modules, components, and data flow no longer communicate clear responsibility, which slows every next improvement.",
        },
        {
          title: "Nobody knows whether cleanup or hardening matters first",
          description: "The audit needs to separate structural mess from real production risk so the team can act in the right order.",
        },
      ]}
      deliverablesTitle="A risk-ranked audit of generated code quality and exposure"
      deliverablesDescription="Hexglyph audits generated code for duplication, weak boundaries, unsafe patterns, missing validation, brittle architecture, permission risk, exposed secrets, dependency concerns, and the production cost of keeping the current structure."
      deliverables={[
        "Review generated-code structure, duplication, and file or module boundaries",
        "Check for missing validation, unsafe state handling, and fragile flow logic",
        "Review auth, permissions, secrets, and server-side safety assumptions",
        "Identify insecure API routes, exposed client logic, and weak data boundaries",
        "Assess maintainability risk across naming, responsibility, and data flow clarity",
        "Review dependency risk and generated-code shortcuts that raise regression cost",
        "Separate launch-blocking issues from lower-priority cleanup work",
        "Produce a ranked plan for refactor, hardening, and safe continued development",
      ]}
      toolingTitle="Tools covered"
      toolingDescription="The audit is designed for real AI-generated repositories, not clean-room example apps."
      tools={[
        "Cursor",
        "Lovable",
        "Bolt.new",
        "v0",
        "Claude Code",
        "Replit",
        "Next.js",
        "React",
        "Supabase",
        "Firebase",
        "Postgres",
        "TypeScript",
      ]}
      valuesTitle="Generated code still needs real engineering judgment."
      valuesDescription="The audit helps the team understand what is salvageable, what is risky, and what should be fixed first before more features make the problem deeper."
      values={[
        {
          title: "Expose",
          description: "Make the structural and security weaknesses visible while they can still be corrected on purpose.",
        },
        {
          title: "Rank",
          description: "Separate business-critical risk from cleanup work that can wait until after launch or handoff.",
        },
        {
          title: "Translate",
          description: "Turn the audit into concrete remediation items another engineer can actually implement.",
        },
        {
          title: "Protect",
          description: "Reduce the chance that generated output silently becomes the most expensive part of the product later.",
        },
      ]}
      process={[
        {
          title: "Repository intake",
          description: "Share the repo, generated tooling history, production context, and the parts of the app that already feel hardest to trust.",
        },
        {
          title: "Audit pass",
          description: "Hexglyph reviews code structure, validation, auth, secrets, state, data flow, and maintainability risk in the generated output.",
        },
        {
          title: "Risk map",
          description: "You receive a ranked picture of what is dangerous, what is merely messy, and what should be corrected first.",
        },
        {
          title: "Correction path",
          description: "The audit can feed directly into cleanup, security remediation, production hardening, or a larger rescue sprint.",
        },
      ]}
      expectedOutputTitle="Expected output"
      expectedOutputDescription="The output should reduce uncertainty about generated code and make the next engineering move much easier to justify."
      expectedOutputs={[
        "A ranked audit of generated code quality, exposure, and maintainability risk.",
        "A distinction between structural cleanup, security issues, and launch blockers.",
        "A practical remediation order for what to fix now versus later.",
        "A better answer to whether the current generated app can be safely extended or needs deeper correction.",
      ]}
      signals={[
        "AI-generated code audit",
        "AI generated code security audit",
        "vibe coding security review",
        "generated code architecture review",
        "Lovable code audit",
        "Cursor code audit",
        "Bolt code audit",
        "v0 code audit",
      ]}
      faqs={[
        {
          question: "What is an AI-generated code audit?",
          answer:
            "It is a senior engineering review of code produced with AI tools to identify structural fragility, security gaps, weak validation, duplication, and the delivery risk of keeping the current codebase shape.",
        },
        {
          question: "Is this different from cleanup or rescue work?",
          answer:
            "Yes. The audit is the diagnosis. Cleanup and rescue work are the implementation steps that follow once the highest-risk issues and structural weaknesses are ranked.",
        },
        {
          question: "Can you audit generated code without rewriting the app?",
          answer:
            "Yes. The usual goal is to understand where the current codebase is safe to keep, where it needs correction, and what changes matter most before broader refactoring.",
        },
        {
          question: "What usually comes after the audit?",
          answer:
            "The usual next step is cursor code cleanup, security remediation, production hardening, or a broader vibe code rescue scope depending on the results.",
        },
      ]}
      relatedPages={[
        {
          href: "/cursor-code-cleanup",
          title: "Cursor code cleanup",
          description: "For cleanup and refactoring when the main issue is Cursor-generated code quality and duplication.",
        },
        {
          href: "/ai-app-security-review",
          title: "AI app security review",
          description: "For AI-specific security risks around prompts, agents, auth, secrets, and data exposure.",
        },
        {
          href: "/vibe-code-rescue",
          title: "Vibe code rescue",
          description: "For broader rescue work when the problem is larger than code quality alone.",
        },
      ]}
      contactTitle="Need an audit of AI-generated code before it gets more expensive?"
      contactDescription="Send the repo, the generator stack, and the parts of the codebase that already feel fragile. Hexglyph can map the structural and security risks before more scope lands on top of them."
    />
  )
}
