import { ServiceLandingPage } from "@/components/service-landing-page"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/cursor-code-cleanup`
const contactEmail = "hex@hexglyph.com"
const auditHref = `mailto:${contactEmail}?subject=Cursor%20Code%20Cleanup%20Audit`

const title = "Cursor Code Cleanup and AI-Generated Code Refactoring"
const description =
  "Cursor code cleanup and AI-generated code refactoring for teams that shipped fast and now need better structure, fewer regressions, safer patterns, and production-grade delivery."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Cursor code cleanup",
    "AI generated code refactoring",
    "cleanup Cursor generated code",
    "fix AI generated app code",
    "codebase cleanup service",
    "refactor generated code",
  ],
  alternates: {
    canonical: "/cursor-code-cleanup",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-cursor-code-cleanup.svg",
        width: 1200,
        height: 630,
        alt: "Cursor code cleanup and AI-generated code refactoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-cursor-code-cleanup.svg"],
  },
}

export default function CursorCodeCleanupPage() {
  return (
    <ServiceLandingPage
      badge="Cursor code cleanup"
      title="Clean up AI-generated code before it turns useful velocity into long-term drag."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="This page targets buyers searching Cursor code cleanup, AI-generated code refactoring, codebase cleanup service, and help fixing generated code before it compounds technical debt."
      heroStats={[
        { label: "Duplication", value: "Reduced" },
        { label: "Structure", value: "Clarified" },
        { label: "Bug risk", value: "Lower" },
        { label: "Handoff", value: "Cleaner" },
      ]}
      symptomTitle="When generated code starts costing more than it saves"
      symptomDescription="AI-assisted coding is useful for speed, but teams eventually hit a point where unclear patterns, duplication, and fragile decisions make every next change more expensive."
      symptoms={[
        {
          title: "The app works, but nobody trusts the structure",
          description: "Generated code produced visible progress, but the resulting architecture is hard to reason about and risky to extend.",
        },
        {
          title: "The same logic appears in too many places",
          description: "Repeated components, copied flows, and inconsistent patterns create hidden maintenance cost and regression risk.",
        },
        {
          title: "The code reads like output, not engineering",
          description: "The implementation lacks naming discipline, strong boundaries, and clear responsibility lines that a team can work with confidently.",
        },
        {
          title: "Launch pressure arrived before cleanup did",
          description: "The team used generated code to move fast, but now the product needs safer patterns, validation, and production discipline.",
        },
      ]}
      deliverablesTitle="Cleanup scope"
      deliverablesDescription="The goal is not cosmetic cleanup. The goal is to turn generated code into a codebase that humans can maintain, extend, and trust under production pressure."
      deliverables={[
        "Audit of generated-code structure and fragility",
        "Duplication and component consistency review",
        "Refactor guidance for state, data flow, and boundaries",
        "Validation and error-handling improvements",
        "Higher-risk bug patterns identified and ranked",
        "Safer organization for files, modules, and responsibilities",
        "Production-hardening recommendations",
        "A handoff-ready plan for continued development",
      ]}
      valuesTitle="Generated code still needs senior engineering judgment."
      valuesDescription="Cleanup matters when the output has become useful enough to keep, but too messy to scale. The job is to preserve momentum while removing the structural drag."
      values={[
        {
          title: "Preserve useful progress",
          description: "The work keeps the valuable parts of generated output while reducing the patterns that will create repeated friction later.",
        },
        {
          title: "Lower maintenance cost",
          description: "A cleaner structure means fewer regressions, less duplicated work, and faster iteration for the humans maintaining the code.",
        },
        {
          title: "Improve team confidence",
          description: "When the architecture and responsibilities become clearer, the codebase feels safer to touch and easier to hand off.",
        },
        {
          title: "Make production delivery realistic",
          description: "Cleanup is what turns a generated prototype into something the team can responsibly ship and improve.",
        },
      ]}
      process={[
        {
          title: "Repository intake",
          description: "Share the codebase, generated tooling context, known pain points, and the areas that already feel difficult to change.",
        },
        {
          title: "Cleanup audit",
          description: "Hexglyph reviews duplication, unclear architecture, risky patterns, code hygiene, and the production-readiness gaps left by AI-generated output.",
        },
        {
          title: "Refactor plan",
          description: "You receive a practical plan for which cleanup work matters first and how to reduce fragility without stalling delivery.",
        },
        {
          title: "Implementation sprint",
          description: "If needed, the highest-leverage cleanup and hardening work is implemented first so the product becomes easier to evolve safely.",
        },
      ]}
      signals={[
        "Cursor code cleanup",
        "AI generated code refactoring",
        "cleanup Cursor generated code",
        "fix AI generated app code",
        "codebase cleanup service",
        "refactor generated code",
      ]}
      faqs={[
        {
          question: "What is Cursor code cleanup?",
          answer:
            "Cursor code cleanup is the process of auditing and refactoring AI-generated code so it becomes easier to maintain, less duplicated, safer to change, and more production-ready.",
        },
        {
          question: "Do you only work on Cursor output?",
          answer:
            "No. The same cleanup approach also applies to code generated with other AI tools when the result needs stronger engineering structure and safer implementation.",
        },
        {
          question: "Can cleanup happen without rewriting the app?",
          answer:
            "Yes. The usual goal is targeted refactoring and structural cleanup that preserves useful work rather than replacing everything.",
        },
        {
          question: "Is this useful before launch?",
          answer:
            "Yes. Cleanup is especially useful before launch when the app is already useful, but the codebase is too fragile for confident shipping.",
        },
      ]}
      relatedPages={[
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For broader stabilization of AI-generated apps beyond code cleanup alone.",
        },
        {
          href: "/mvp-rescue",
          title: "MVP rescue",
          description: "For unstable startup products that need launch-focused bug fixing and production hardening.",
        },
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For diagnosis, prioritization, and a risk-ranked implementation plan.",
        },
      ]}
      contactTitle="Need to clean up AI-generated code before it slows every next decision?"
      contactDescription="Send the repository context and the parts that already feel duplicated, fragile, or hard to extend. Hexglyph can turn that into a cleanup and refactor plan."
    />
  )
}
