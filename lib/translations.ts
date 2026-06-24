export const translations = {
  en: {
    nav: {
      aiAppStabilization: "AI App Stabilization",
      services: "Services",
      packages: "Packages",
      caseStudies: "Case Studies",
      process: "How It Works",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Technical audits and stabilization",
      title: "Technical audits, stabilization sprints, and implementation for existing software.",
      description:
        "Hexglyph works on AI-generated apps, unstable MVPs, and legacy web systems that need technical review, refactoring, and implementation support.",
      primaryCta: "Get a Technical Audit",
      secondaryCta: "See Stabilization Packages",
      positioning:
        "Typical engagements include Lovable, Bolt, v0, and Cursor-generated projects, unstable MVPs, legacy internal tools, and React or Next.js applications.",
      proofPoints: ["Technical review", "Implementation sprint", "Handoff notes"],
      panel: {
        eyebrow: "Technical audit snapshot",
        title: "Current state and next steps",
        items: [
          {
            label: "Code maintainability",
            value: "High risk",
            barClassName: "h-full w-[86%] rounded-full bg-amber-300",
          },
          {
            label: "Production readiness",
            value: "Needs work",
            barClassName: "h-full w-[58%] rounded-full bg-blue-300",
          },
          {
            label: "Critical bugs",
            value: "Prioritized",
            barClassName: "h-full w-[72%] rounded-full bg-rose-300",
          },
          {
            label: "Stabilization path",
            value: "Clear",
            barClassName: "h-full w-[94%] rounded-full bg-emerald-300",
          },
        ],
        notes: ["Risk map", "Deployment checklist", "Backlog by severity", "Fixed-scope sprint plan"],
      },
    },
    services: {
      eyebrow: "What we fix",
      title: "For systems that already exist and still need engineering work",
      description:
        "The work is structured for clients who already have software in place and need technical review, correction, or implementation help.",
      items: [
        {
          id: "generated",
          title: "AI-generated apps that broke after the prototype",
          description: "Code generated fast, now hard to maintain, deploy, extend, or trust in production.",
        },
        {
          id: "mvp",
          title: "Unstable MVPs before launch",
          description: "Bugs, missing validation, weak architecture, poor UX, and unclear deployment steps.",
        },
        {
          id: "legacy",
          title: "Legacy internal tools",
          description: "Old systems, manual workflows, fragile integrations, and missing documentation.",
        },
        {
          id: "performance",
          title: "React and Next.js performance issues",
          description: "Slow pages, inconsistent components, accessibility issues, and weak conversion paths.",
        },
        {
          id: "basics",
          title: "Missing production basics",
          description: "No tests, logs, error handling, deployment checklist, or technical handoff notes.",
        },
      ],
    },
    packages: {
      eyebrow: "Stabilization packages",
      title: "Start with review, then move into implementation",
      description:
        "The service is split into review and implementation stages so scope and budget are easier to define.",
      items: [
        {
          id: "audit",
          title: "Technical Audit",
          subtitle: "Best first step",
          price: "From US$ 500",
          description:
            "A senior review of the codebase, architecture, UX, risks, deployment path, and highest-value fixes before more development budget is spent.",
          features: [
            "Codebase and architecture review",
            "UX, accessibility, and performance review",
            "Security and validation checklist",
            "Prioritized backlog with severity and effort",
            "Fixed-price stabilization proposal",
          ],
        },
        {
          id: "sprint",
          title: "Stabilization Sprint",
          subtitle: "For launch-critical fixes",
          price: "From US$ 2,000",
          description:
            "A focused implementation sprint to fix the highest-risk issues and prepare the application for production, handoff, or future scaling.",
          features: [
            "Critical bug fixes and refactoring",
            "Input validation and error handling",
            "Logging and basic test coverage",
            "Deployment improvements",
            "Technical documentation and handoff notes",
          ],
        },
        {
          id: "implementation",
          title: "AI and Automation Implementation",
          subtitle: "Custom scope",
          price: "Custom",
          description:
            "AI features and workflow automation added after the application has the technical foundation to support them reliably.",
          features: [
            "OpenAI and Azure OpenAI integration",
            "RAG and intelligent search",
            "Workflow automation and internal tools",
            "AI-assisted dashboards and reports",
            "Implementation plan tied to business value",
          ],
        },
      ],
    },
    caseStudies: {
      eyebrow: "Case studies",
      title: "Public-sector and AI work reframed as problem-solving proof",
      description:
        "Existing projects still matter, but they work harder when presented as concrete problems, technical solutions, and operational outcomes.",
      items: [
        {
          id: "orquestra",
          title: "Orquestra",
          problem:
            "Technical teams need a local-first workspace for governed work items, observable LLM agent sessions, modernization pipelines, and portfolio snapshots.",
          solution:
            "A desktop-oriented orchestration platform with structured work management, agent session visibility, modernization flows, and project context snapshots.",
          outcome:
            "A stronger base for repeatable engineering work, safer AI-assisted delivery, and clearer technical handoffs across complex projects.",
          stack: ["Local-first", "LLM agents", "Legacy modernization"],
        },
        {
          id: "portal",
          title: "Municipal Intelligence Portal",
          problem: "Public-sector data was fragmented, slow to discover, and difficult to turn into strategic information.",
          solution:
            "AI-assisted search, vector databases, unified interfaces, and structured insights for municipal intelligence workflows.",
          outcome:
            "Faster discovery of municipal information and a scalable base for public-sector intelligence products.",
          stack: ["Next.js", "AI assistants", "Vector search"],
        },
        {
          id: "urban",
          title: "Urban Management Suite",
          problem: "City operations require monitoring, alerts, automation, and predictive indicators across disconnected workflows.",
          solution:
            "An operational dashboard with automation, alerts, predictive analytics, and centralized visibility for city management.",
          outcome:
            "A clearer operating view for decision-making, prioritization, and automation opportunities.",
          stack: ["Dashboards", "Automation", "Predictive analytics"],
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "A working sequence from review to implementation",
      description:
        "The sequence is designed for remote work with written decisions, explicit scope, and staged implementation.",
      steps: [
        {
          title: "Technical Intake",
          description: "You share the repository, product context, current issues, and deployment target.",
        },
        {
          title: "AI-assisted Audit",
          description: "We analyze architecture, code quality, UX, accessibility, performance, security basics, and delivery risks.",
        },
        {
          title: "Prioritized Plan",
          description: "You receive a backlog with severity, effort, dependencies, and recommended implementation order.",
        },
        {
          title: "Stabilization Sprint",
          description: "We fix the critical issues and prepare the application for production, launch, or handoff.",
        },
        {
          title: "Documentation",
          description: "You receive technical notes, deployment instructions, improvement backlog, and next-step recommendations.",
        },
      ],
    },
    standards: {
      eyebrow: "Built with production standards",
      title: "Technical stack and delivery scope",
      description:
        "These are the main technologies and delivery concerns covered in typical engagements.",
      groups: [
        {
          id: "frontend",
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessibility"],
        },
        {
          id: "backend",
          title: "Backend",
          items: ["Node.js", "PostgreSQL", "APIs", "Validation", "Logs"],
        },
        {
          id: "ai",
          title: "AI",
          items: ["OpenAI API", "Azure OpenAI", "RAG", "AI Search", "Automation"],
        },
        {
          id: "quality",
          title: "Delivery",
          items: ["Testing", "Performance", "Deployment", "Documentation", "Handoff"],
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Have an unstable app or MVP?",
      description:
        "Send the repository and current issues to start with a technical audit or scoped implementation sprint.",
      primary: "Request Audit",
      secondary: "Contact by Email",
    },
    footer: {
      tagline: "Technical audits, stabilization, and implementation for existing software.",
      copyright: "(c) 2026 Hexglyph. Production-ready software for international clients.",
      contact: "hex@hexglyph.com",
    },
  },
} as const

export type Language = keyof typeof translations
