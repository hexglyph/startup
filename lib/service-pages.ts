export type ServicePageEntry = {
  slug: string
  href: string
  title: string
  description: string
  serviceLabel: string
}

export const servicePageCatalog: ServicePageEntry[] = [
  {
    slug: "ai-app-production-readiness",
    href: "/ai-app-production-readiness",
    title: "AI app production readiness",
    description: "Production-readiness reviews for AI-built MVPs before launch, handoff, or wider rollout.",
    serviceLabel: "AI App Production Readiness",
  },
  {
    slug: "ai-app-security-review",
    href: "/ai-app-security-review",
    title: "AI app security review",
    description: "Security reviews for LLM, RAG, agentic, and AI-generated apps before production.",
    serviceLabel: "AI App Security Review",
  },
  {
    slug: "vibe-code-rescue",
    href: "/vibe-code-rescue",
    title: "Vibe code rescue",
    description: "Rescue fragile AI-generated apps built with Lovable, Bolt, v0, Cursor, Claude Code, and Replit.",
    serviceLabel: "Vibe Code Rescue",
  },
  {
    slug: "ai-generated-code-audit",
    href: "/ai-generated-code-audit",
    title: "AI-generated code audit",
    description: "Audit generated code for security, structure, maintainability, and production risk.",
    serviceLabel: "AI-Generated Code Audit",
  },
  {
    slug: "ai-app-stabilization",
    href: "/ai-app-stabilization",
    title: "AI app stabilization",
    description: "Stabilization and refactoring for Lovable, Bolt.new, v0, and Cursor-generated apps.",
    serviceLabel: "AI App Stabilization",
  },
  {
    slug: "ai-app-development",
    href: "/ai-app-development",
    title: "AI app development help",
    description: "Senior build support for founders finishing AI products after the prototype stage.",
    serviceLabel: "AI App Development",
  },
  {
    slug: "ai-app-consulting",
    href: "/ai-app-consulting",
    title: "AI app technical consulting",
    description: "Technical decision support for AI app architecture, risk, vendor review, and delivery.",
    serviceLabel: "AI App Consulting",
  },
  {
    slug: "ai-app-setup",
    href: "/ai-app-setup",
    title: "AI app setup and configuration",
    description: "Set up AI-built apps correctly across providers, environments, auth, and deployment plumbing.",
    serviceLabel: "AI App Setup and Configuration",
  },
  {
    slug: "technical-audit",
    href: "/technical-audit",
    title: "Technical audit service",
    description: "Codebase audits, risk maps, implementation planning, and production-readiness reviews.",
    serviceLabel: "Technical Audit",
  },
  {
    slug: "legacy-modernization",
    href: "/legacy-modernization",
    title: "Legacy modernization",
    description: "Controlled modernization work for brittle internal tools and aging web systems.",
    serviceLabel: "Legacy Modernization",
  },
  {
    slug: "mvp-rescue",
    href: "/mvp-rescue",
    title: "MVP rescue",
    description: "Launch-focused recovery work for unstable startup products close to release.",
    serviceLabel: "MVP Rescue",
  },
  {
    slug: "cursor-code-cleanup",
    href: "/cursor-code-cleanup",
    title: "Cursor code cleanup",
    description: "Cleanup and refactoring for Cursor-generated codebases with duplication and fragile architecture.",
    serviceLabel: "Cursor Code Cleanup",
  },
  {
    slug: "nextjs-performance",
    href: "/nextjs-performance",
    title: "Next.js performance",
    description: "Performance and Core Web Vitals work for slow React and Next.js applications.",
    serviceLabel: "Next.js Performance",
  },
]

export const serviceLabels = Object.fromEntries(
  servicePageCatalog.map((page) => [page.slug, page.serviceLabel]),
) as Record<string, string>
