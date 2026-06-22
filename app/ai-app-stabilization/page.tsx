import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  FileSearch,
  Gauge,
  GitBranch,
  Mail,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/ai-app-stabilization`
const contactEmail = "hex@hexglyph.com"
const auditHref = `mailto:${contactEmail}?subject=AI%20App%20Stabilization%20Audit`

const title = "AI App Stabilization for Lovable, Bolt.new, v0 and Cursor Apps | Hexglyph"
const description =
  "Senior full-stack technical audits and stabilization sprints for AI-generated apps, Lovable apps, Bolt.new apps, v0 apps, Cursor-generated code, unstable MVPs, React app bugs, and Next.js performance issues."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI generated app",
    "AI-generated app stabilization",
    "Lovable app",
    "Lovable app developer",
    "Bolt.new app",
    "v0 app",
    "Cursor generated code",
    "MVP needs fixing",
    "React app bugs",
    "Next.js app performance",
    "codebase cleanup",
    "technical audit",
    "production ready",
    "refactor MVP",
    "fix unstable app",
    "senior full stack developer needed",
  ],
  alternates: {
    canonical: "/ai-app-stabilization",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const platformIssues = [
  {
    title: "Lovable app needs fixing",
    description:
      "Your Lovable prototype works in demo mode, but auth, database rules, deployment, UX, or error handling fail when real users touch it.",
  },
  {
    title: "Bolt.new app is unstable",
    description:
      "The Bolt.new app shipped fast, but generated code is hard to maintain, routes break, dependencies conflict, or production deploys are unreliable.",
  },
  {
    title: "v0 app needs production engineering",
    description:
      "The v0 UI looks good, but the application needs business logic, validation, accessibility, state handling, data flow, and production hardening.",
  },
  {
    title: "Cursor-generated code needs cleanup",
    description:
      "AI-assisted coding created useful features, but the codebase now needs refactoring, tests, clearer architecture, and safer implementation patterns.",
  },
]

const fixes = [
  "Fix unstable app behavior and launch-blocking bugs",
  "Clean up Cursor-generated code and duplicated components",
  "Refactor MVP architecture without rewriting everything",
  "Resolve React app bugs, state issues, and broken UI flows",
  "Improve Next.js app performance, routing, metadata, and rendering",
  "Add validation, error handling, logging, and production checklists",
  "Review authentication, authorization, and data access risks",
  "Create a technical audit with severity, effort, and recommended order",
]

const signals = [
  "AI generated app",
  "Lovable app",
  "Bolt.new app",
  "v0 app",
  "Cursor generated code",
  "MVP needs fixing",
  "React app bugs",
  "Next.js app performance",
  "codebase cleanup",
  "technical audit",
  "production ready",
  "refactor MVP",
  "fix unstable app",
  "senior full stack developer needed",
]

const process = [
  {
    title: "Codebase intake",
    description: "Share the repository, deployment target, current bugs, business goals, and where the AI-generated app is failing.",
  },
  {
    title: "Technical audit",
    description: "Hexglyph reviews architecture, React/Next.js structure, generated code quality, security basics, UX, accessibility, and performance.",
  },
  {
    title: "Risk-ranked plan",
    description: "You receive a prioritized backlog that separates critical fixes, cleanup work, refactoring, and production-readiness tasks.",
  },
  {
    title: "Stabilization sprint",
    description: "A senior full-stack developer fixes the highest-risk issues and prepares the MVP or AI app for launch, handoff, or scaling.",
  },
]

const faqs = [
  {
    question: "Can Hexglyph fix a Lovable app that works as a prototype but breaks in production?",
    answer:
      "Yes. Hexglyph stabilizes Lovable apps by reviewing generated code, auth flows, database access, deployment settings, validation, UX issues, and production-readiness gaps.",
  },
  {
    question: "Do you work on Bolt.new apps and v0 apps?",
    answer:
      "Yes. Hexglyph works on Bolt.new apps, v0 apps, and other AI-generated React or Next.js applications that need senior engineering before launch.",
  },
  {
    question: "Can you clean up Cursor-generated code?",
    answer:
      "Yes. Hexglyph can audit and refactor Cursor-generated code, reduce duplication, improve structure, fix bugs, add validation, and document the codebase for future development.",
  },
  {
    question: "Is this for MVPs that need fixing before investors or customers see them?",
    answer:
      "Yes. The service is designed for unstable MVPs that need bug fixes, codebase cleanup, performance work, and production hardening before a public launch or stakeholder demo.",
  },
  {
    question: "What do I get from the technical audit?",
    answer:
      "You get a clear diagnosis: architecture notes, bug and risk assessment, UX and accessibility findings, Next.js performance issues, security basics, and a prioritized stabilization plan.",
  },
]

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI App Stabilization",
    serviceType: "Technical audit and stabilization for AI-generated apps",
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Hexglyph",
      url: baseUrl,
      email: contactEmail,
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Founders, agencies, small teams, and companies with unstable MVPs or AI-generated apps",
    },
    description,
    keywords: signals.join(", "),
    offers: [
      {
        "@type": "Offer",
        name: "Technical Audit",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: 500,
        },
      },
      {
        "@type": "Offer",
        name: "Stabilization Sprint",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: 2000,
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI App Stabilization",
        item: pageUrl,
      },
    ],
  },
]

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export default function AiAppStabilizationPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <JsonLd />
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060607]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="Hexglyph home">
            <Image src="/hexglyph-logo.png" alt="" width={34} height={34} className="rounded-md" priority />
            <span className="text-lg font-medium text-white">Hexglyph</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#platforms" className="transition-colors hover:text-white">
              Platforms
            </a>
            <a href="#audit" className="transition-colors hover:text-white">
              Audit
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/[0.08] px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(124,92,255,0.20),rgba(6,6,7,0))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_460px] lg:items-center">
          <div>
            <Badge className="mb-6 rounded-md border-white/[0.12] bg-white/[0.06] px-3 py-1 text-zinc-200 hover:bg-white/[0.06]">
              AI-generated app stabilization
            </Badge>
            <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-normal text-white md:text-7xl">
              Fix your AI-generated app before users see it break.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
              Hexglyph stabilizes Lovable apps, Bolt.new apps, v0 apps, Cursor-generated code, and unstable MVPs with senior
              full-stack technical audits, React bug fixing, Next.js performance work, codebase cleanup, and production-ready
              refactoring.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
                <a href={auditHref}>
                  Request AI App Audit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/[0.14] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white"
              >
                <a href="#audit">See What Gets Fixed</a>
              </Button>
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-6 text-zinc-500">
              Search intent match: AI generated app, Lovable app, Bolt.new app, v0 app, Cursor generated code, MVP needs
              fixing, React app bugs, Next.js app performance, codebase cleanup, technical audit, production ready, refactor
              MVP, fix unstable app, senior full stack developer needed.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/[0.10] bg-[#0d0d10] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/[0.08] p-5">
              <p className="text-sm text-violet-300">Stabilization workspace</p>
              <h2 className="mt-1 text-2xl font-medium text-white">AI app audit map</h2>
            </div>
            <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
              {[
                ["Generated UI", "Needs validation"],
                ["Auth flow", "High risk"],
                ["Next.js routes", "Performance pass"],
                ["Deployment", "Checklist missing"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#111114] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                  <p className="mt-4 text-lg font-medium text-zinc-100">{value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 p-5">
              {["Fix launch blockers", "Refactor fragile code", "Prepare production handoff"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.035] p-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-violet-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">Platform-specific fixes</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">
              Built for the new wave of AI-generated apps.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              AI builders are useful for speed. The risk appears later: unclear architecture, incomplete production basics,
              fragile integrations, hidden security issues, and code that becomes expensive to extend.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-2 lg:grid-cols-4">
            {platformIssues.map((item) => (
              <div key={item.title} className="bg-[#0d0d10] p-6">
                <Bot className="mb-6 h-5 w-5 text-violet-300" />
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="border-y border-zinc-200 bg-[#f7f7f2] px-4 py-24 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[420px_1fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-700">Technical audit</p>
            <h2 className="text-balance text-3xl font-medium md:text-5xl">Turn a fragile MVP into a production-ready plan.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              A Hexglyph technical audit gives founders and agencies a direct answer: what is broken, what is risky, what
              should be refactored, and what must be fixed before launch.
            </p>
            <Button asChild size="lg" className="mt-8 bg-zinc-950 text-white hover:bg-zinc-800">
              <a href={auditHref}>
                Start Technical Audit
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {fixes.map((item) => (
              <div key={item} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <CheckCircle2 className="mb-5 h-5 w-5 text-zinc-950" />
                <p className="text-sm leading-6 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">How Hexglyph is different</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">
              Senior full-stack developer judgment, not just another prompt.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              The work combines AI-assisted analysis with human engineering decisions across architecture, UX, security,
              performance, and deployment.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-4">
            {[
              [FileSearch, "Audit", "A written diagnosis of app structure, risks, bugs, performance, and delivery gaps."],
              [Wrench, "Stabilize", "Critical React and Next.js fixes, validation, error handling, and codebase cleanup."],
              [GitBranch, "Refactor", "MVP refactoring that reduces fragility without forcing a full rewrite."],
              [ShieldCheck, "Launch", "Production-readiness checklist, deployment notes, and handoff documentation."],
            ].map(([Icon, heading, body]) => {
              const ToolIcon = Icon as typeof FileSearch

              return (
                <div key={heading as string} className="bg-[#0d0d10] p-6">
                  <ToolIcon className="mb-8 h-5 w-5 text-violet-300" />
                  <h3 className="text-lg font-medium text-white">{heading as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{body as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#0a0a0c] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">Process</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">
              From AI-generated prototype to reliable software.
            </h2>
          </div>
          <div className="space-y-3">
            {process.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-white/[0.10] bg-white/[0.035] p-5">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-500">0{index + 1}</p>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-4 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-700">Search and answer engine coverage</p>
            <h2 className="text-balance text-3xl font-medium md:text-5xl">The page targets the exact phrases buyers use.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              These phrases are included as visible service language, not hidden keyword stuffing, so both search engines and
              AI answer engines can understand what Hexglyph does.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {signals.map((item) => (
              <Badge key={item} variant="outline" className="rounded-md border-zinc-200 bg-white px-3 py-1 text-zinc-700">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">FAQ</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">Direct answers for qualified buyers.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-white/[0.10] bg-white/[0.035] p-5">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/[0.10] bg-white/[0.035] p-6 md:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">Next step</p>
            <h2 className="text-balance text-4xl font-medium text-white md:text-5xl">Need a senior full-stack developer to fix an unstable AI app?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Send the repository context and current issues. Hexglyph can start with a focused technical audit before you
              spend more money on feature work.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <a href={auditHref}>
                Request Stabilization Audit
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/[0.14] bg-transparent text-white hover:bg-white/[0.08] hover:text-white"
            >
              <a href={`mailto:${contactEmail}`}>
                <Mail className="h-5 w-5" />
                Contact by Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
