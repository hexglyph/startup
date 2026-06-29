import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/cursor-code-cleanup`
const auditHref = buildContactHref({ service: "cursor-code-cleanup", source: "cursor-code-cleanup-page" })

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
      title="Clean up AI-generated code so the codebase stays maintainable as the product grows."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: Cursor code cleanup, AI-generated code refactoring, codebase cleanup service, and generated code maintenance."
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
      deliverablesDescription="The work turns generated output into a codebase that a team can maintain, extend, and ship with more confidence."
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
      valuesDescription="Cleanup is useful when generated output is already in use but the codebase structure is slowing down maintenance and extension."
      values={[
        {
          title: "Preserve current work",
          description: "The work keeps the valuable parts of generated output while reducing the patterns that will create repeated friction later.",
        },
        {
          title: "Lower maintenance cost",
          description: "A cleaner structure means fewer regressions, less duplicated work, and faster iteration for the humans maintaining the code.",
        },
        {
          title: "Improve team readability",
          description: "When architecture and responsibilities become clearer, the codebase is easier to change and easier to hand off.",
        },
        {
          title: "Support ongoing delivery",
          description: "Cleanup makes the codebase easier to ship, maintain, and extend under normal delivery pressure.",
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
            "Yes. The usual goal is targeted refactoring and structural cleanup that keeps the useful work and improves the weakest parts first.",
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
      contactDescription="Send the repository context and the parts that already feel duplicated, fragile, or hard to extend to start with a cleanup and refactor plan."
    />
  )
}
