export type ServicePageEntry = {
  slug: string
  href: string
  title: string
  description: string
  serviceLabel: string
}

export const servicePageCatalog: ServicePageEntry[] = [
  {
    slug: "technical-audit",
    href: "/technical-audit",
    title: "Technical audit service",
    description: "Codebase audits, risk maps, implementation planning, and production-readiness reviews.",
    serviceLabel: "Technical Audit",
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
    description: "Senior build support for founders and teams shipping a new AI app beyond the prototype stage.",
    serviceLabel: "AI App Development",
  },
  {
    slug: "ai-app-consulting",
    href: "/ai-app-consulting",
    title: "AI app consulting",
    description: "Architecture, scope, and delivery consulting for new or partially built AI apps.",
    serviceLabel: "AI App Consulting",
  },
  {
    slug: "ai-app-production-readiness",
    href: "/ai-app-production-readiness",
    title: "AI app production readiness",
    description: "Launch preparation for AI apps covering deployment, monitoring, fallbacks, and operational basics.",
    serviceLabel: "AI App Production Readiness",
  },
  {
    slug: "ai-app-security-review",
    href: "/ai-app-security-review",
    title: "AI app security review",
    description: "Security reviews for AI apps covering auth, secrets, permissions, and data exposure risks.",
    serviceLabel: "AI App Security Review",
  },
  {
    slug: "ai-app-setup",
    href: "/ai-app-setup",
    title: "AI app setup and configuration",
    description: "Help with AI app environments, provider setup, integrations, and deployment configuration.",
    serviceLabel: "AI App Setup and Configuration",
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
    description: "Cleanup and refactoring for AI-generated codebases with duplication and fragile architecture.",
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
