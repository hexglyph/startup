import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { translations } from "@/lib/translations"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LifeBuoy,
  ListChecks,
  Mail,
  Map,
  MonitorCheck,
  PackageCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

const t = translations.en
const auditHref = `mailto:${t.footer.contact}?subject=Technical%20Audit%20Request`

const navItems = [
  { href: "/ai-app-stabilization", label: t.nav.aiAppStabilization },
  { href: "#services", label: t.nav.services },
  { href: "#packages", label: t.nav.packages },
  { href: "#case-studies", label: t.nav.caseStudies },
  { href: "#process", label: t.nav.process },
  { href: "#contact", label: t.nav.contact },
]

const serviceIcons: Record<string, LucideIcon> = {
  generated: Bot,
  mvp: Rocket,
  legacy: GitBranch,
  performance: Gauge,
  basics: ShieldCheck,
}

const packageIcons: Record<string, LucideIcon> = {
  audit: ClipboardCheck,
  sprint: Wrench,
  implementation: Sparkles,
}

const caseIcons: Record<string, LucideIcon> = {
  orquestra: Layers3,
  portal: Globe2,
  urban: Map,
}

const standardIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Database,
  ai: Bot,
  quality: MonitorCheck,
}

const workspaceItems = [
  { label: "Audit", value: "Active" },
  { label: "Risks", value: "12" },
  { label: "Fix plan", value: "Ready" },
  { label: "Handoff", value: "Draft" },
]

function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "center",
}: {
  eyebrow: string
  title: string
  description: string
  tone?: "dark" | "light"
  align?: "center" | "left"
}) {
  const isDark = tone === "dark"
  const alignment = align === "center" ? "mx-auto text-center" : ""

  return (
    <div className={`${alignment} mb-12 max-w-3xl`}>
      <p className={isDark ? "mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300" : "mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-700"}>
        {eyebrow}
      </p>
      <h2 className={isDark ? "text-balance text-3xl font-medium text-white md:text-5xl" : "text-balance text-3xl font-medium text-zinc-950 md:text-5xl"}>
        {title}
      </h2>
      <p className={isDark ? "mt-5 text-lg leading-8 text-zinc-400" : "mt-5 text-lg leading-8 text-zinc-600"}>
        {description}
      </p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060607]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Hexglyph home">
            <Image src="/hexglyph-logo.png" alt="" width={34} height={34} className="rounded-md" priority />
            <span className="text-lg font-medium text-white">Hexglyph</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-white/[0.08] px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(124,92,255,0.18),rgba(6,6,7,0))]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-6 border-white/[0.12] bg-white/[0.06] px-3 py-1 text-zinc-200 hover:bg-white/[0.06]">
              {t.hero.eyebrow}
            </Badge>
            <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-normal text-white md:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-zinc-400">{t.hero.description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
                <a href={auditHref}>
                  {t.hero.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/[0.14] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white"
              >
                <a href="#packages">{t.hero.secondaryCta}</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-lg border border-white/[0.10] bg-[#0d0d10] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="grid border-b border-white/[0.08] md:grid-cols-[240px_1fr]">
              <aside className="hidden border-r border-white/[0.08] bg-white/[0.025] p-4 md:block">
                <div className="mb-6 flex items-center gap-2 text-sm font-medium text-zinc-200">
                  <FileSearch className="h-4 w-4 text-violet-300" />
                  Rescue OS
                </div>
                <div className="space-y-1">
                  {workspaceItems.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-400">
                      <span>{item.label}</span>
                      <span className="text-xs text-zinc-500">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-md border border-white/[0.08] bg-black/25 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Target</p>
                  <p className="mt-2 text-sm text-zinc-300">Production-ready release</p>
                </div>
              </aside>

              <div>
                <div className="flex flex-col gap-4 border-b border-white/[0.08] p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-violet-300">{t.hero.panel.eyebrow}</p>
                    <h2 className="mt-1 text-2xl font-medium text-white">{t.hero.panel.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.hero.proofPoints.map((point) => (
                      <span key={point} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-0 lg:grid-cols-[1fr_360px]">
                  <div className="grid gap-0 sm:grid-cols-2">
                    {t.hero.panel.items.map((item) => (
                      <div key={item.label} className="border-b border-r border-white/[0.08] p-5">
                        <div className="mb-4 flex items-center justify-between gap-4 text-sm">
                          <span className="text-zinc-300">{item.label}</span>
                          <span className="text-zinc-500">{item.value}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                          <div className={item.barClassName} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-l border-white/[0.08] bg-black/20 p-5">
                    <p className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-500">Audit output</p>
                    <div className="space-y-3">
                      {t.hero.panel.notes.map((note, index) => (
                        <div key={note} className="flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.035] p-3 text-sm text-zinc-300">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-400/10 text-xs text-violet-200">
                            {index + 1}
                          </span>
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="border-t border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-6 text-zinc-400">
              {t.hero.positioning}
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...t.services} />
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-2 lg:grid-cols-5">
            {t.services.items.map((item) => {
              const Icon = serviceIcons[item.id] ?? LifeBuoy

              return (
                <Card key={item.id} className="h-full rounded-none border-0 bg-[#0d0d10] shadow-none">
                  <CardHeader className="space-y-5 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="border-y border-zinc-200 bg-[#f7f7f2] px-4 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...t.packages} tone="light" />
          <div className="grid gap-4 lg:grid-cols-3">
            {t.packages.items.map((item) => {
              const Icon = packageIcons[item.id] ?? PackageCheck

              return (
                <Card key={item.id} className="flex h-full flex-col rounded-lg border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <CardHeader className="p-6">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className="rounded-md border-zinc-200 bg-zinc-50 text-zinc-700">
                        {item.price}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-medium text-zinc-950">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-700">{item.subtitle}</p>
                    <p className="pt-4 leading-7 text-zinc-600">{item.description}</p>
                  </CardHeader>
                  <CardContent className="mt-auto px-6 pb-6">
                    <ul className="space-y-3 text-sm text-zinc-700">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-950" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="case-studies" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...t.caseStudies} />
          <div className="space-y-3">
            {t.caseStudies.items.map((item) => {
              const Icon = caseIcons[item.id] ?? Globe2

              return (
                <div key={item.id} className="grid gap-6 rounded-lg border border-white/[0.10] bg-white/[0.035] p-5 md:grid-cols-[220px_1fr]">
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((stackItem) => (
                        <Badge key={stackItem} variant="outline" className="rounded-md border-white/[0.10] bg-white/[0.04] text-zinc-300">
                          {stackItem}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Problem</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Solution</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Outcome</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/[0.08] bg-[#0a0a0c] px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...t.process} />
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-5">
            {t.process.steps.map((step, index) => (
              <div key={step.title} className="bg-[#111114] p-5">
                <p className="mb-8 text-xs uppercase tracking-[0.18em] text-zinc-500">0{index + 1}</p>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2] px-4 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...t.standards} tone="light" />
          <div className="grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
            {t.standards.groups.map((group) => {
              const Icon = standardIcons[group.id] ?? ListChecks

              return (
                <div key={group.id} className="bg-white p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-zinc-950">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="rounded-md border-zinc-200 bg-zinc-50 text-zinc-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/[0.10] bg-white/[0.035] p-6 md:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">{t.cta.eyebrow}</p>
            <h2 className="text-balance text-4xl font-medium text-white md:text-5xl">{t.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{t.cta.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <a href={auditHref}>
                {t.cta.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/[0.14] bg-transparent text-white hover:bg-white/[0.08] hover:text-white"
            >
              <a href={`mailto:${t.footer.contact}`}>
                <Mail className="h-5 w-5" />
                {t.cta.secondary}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/hexglyph-logo.png" alt="" width={30} height={30} className="rounded-md" />
            <div>
              <p className="font-medium text-white">Hexglyph</p>
              <p className="text-sm text-zinc-500">{t.footer.tagline}</p>
            </div>
          </div>
          <div className="text-sm text-zinc-500 md:text-right">
            <p>{t.footer.contact}</p>
            <p className="mt-1">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
