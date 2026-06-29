import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  GitBranch,
  Mail,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const contactEmail = "hex@hexglyph.com"
const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const relatedIcons: LucideIcon[] = [FileSearch, Wrench, GitBranch]
const valueIcons: LucideIcon[] = [Sparkles, ShieldCheck, CheckCircle2, FileSearch]

export type ServiceLandingPageProps = {
  badge: string
  title: string
  description: string
  pageUrl: string
  auditHref: string
  introNote: string
  heroStats: Array<{ label: string; value: string }>
  symptomTitle: string
  symptomDescription: string
  symptoms: Array<{ title: string; description: string }>
  deliverablesTitle: string
  deliverablesDescription: string
  deliverables: string[]
  valuesTitle: string
  valuesDescription: string
  values: Array<{ title: string; description: string }>
  process: Array<{ title: string; description: string }>
  signals: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedPages: Array<{ href: string; title: string; description: string }>
  contactTitle: string
  contactDescription: string
}

export function buildServicePageSchema({
  title,
  description,
  pageUrl,
  faqs,
  signals,
}: Pick<ServiceLandingPageProps, "title" | "description" | "pageUrl" | "faqs" | "signals">) {
  const baseUrl = "https://hexglyph.com"

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: title,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: "Hexglyph",
        url: baseUrl,
        email: contactEmail,
      },
      areaServed: "Worldwide",
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
          name: "Implementation Sprint",
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
          name: title,
          item: pageUrl,
        },
      ],
    },
  ]
}

function JsonLd({ schema }: { schema: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export function ServiceLandingPage(props: ServiceLandingPageProps) {
  const schema = buildServicePageSchema(props)

  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <JsonLd schema={schema} />

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060607]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Hexglyph home">
            <Image src="/hexglyph-logo.png" alt="Hexglyph logo" width={34} height={34} className="rounded-md" priority />
            <span className="text-lg font-medium text-white">Hexglyph</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/[0.08] px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(75,180,160,0.18),rgba(6,6,7,0))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <Badge className="mb-6 rounded-md border-white/[0.12] bg-white/[0.06] px-3 py-1 text-zinc-200 hover:bg-white/[0.06]">
              {props.badge}
            </Badge>
            <h1 className="max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-normal text-white md:text-7xl">
              {props.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-300">{props.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
                <a href={props.auditHref}>
                  Request Technical Audit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/[0.14] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white"
              >
                <a href="#deliverables">See Deliverables</a>
              </Button>
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-6 text-zinc-300">{props.introNote}</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/[0.10] bg-[#0d0d10] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/[0.08] p-5">
            <p className="text-sm text-emerald-300">Audit view</p>
            <p className="mt-1 text-2xl font-medium text-white">Current working assumptions</p>
            </div>
            <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
              {props.heroStats.map((item) => (
                <div key={item.label} className="bg-[#111114] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{item.label}</p>
                  <p className="mt-4 text-lg font-medium text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 p-5">
              {props.deliverables.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.035] p-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">{props.symptomTitle}</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">Common failure points.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">{props.symptomDescription}</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-2 lg:grid-cols-4">
            {props.symptoms.map((item, index) => {
              const Icon = relatedIcons[index % relatedIcons.length]

              return (
                <article key={item.title} className="bg-[#0d0d10] p-6">
                  <Icon className="mb-6 h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="deliverables" className="border-y border-zinc-200 bg-[#f3efe6] px-4 py-24 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[420px_1fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-800">{props.deliverablesTitle}</p>
            <h2 className="text-balance text-3xl font-medium md:text-5xl">{props.valuesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">{props.deliverablesDescription}</p>
            <Button asChild size="lg" className="mt-8 bg-zinc-950 text-white hover:bg-zinc-800">
              <a href={props.auditHref}>
                Start Audit Scope
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {props.deliverables.map((item) => (
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
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Working approach</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">{props.valuesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">{props.valuesDescription}</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-2 lg:grid-cols-4">
            {props.values.map((item, index) => {
              const Icon = valueIcons[index % valueIcons.length]

              return (
                <div key={item.title} className="bg-[#0d0d10] p-6">
                  <Icon className="mb-8 h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/[0.08] bg-[#0a0a0c] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Process</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">Sequence of work.</h2>
          </div>
          <div className="space-y-3">
            {props.process.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-white/[0.10] bg-white/[0.035] p-5">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-300">0{index + 1}</p>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3efe6] px-4 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-800">Indexing language</p>
            <h2 className="text-balance text-3xl font-medium md:text-5xl">Search terms used on the page.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              These terms are present in visible copy so search systems can map the page to the service being offered.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {props.signals.map((item) => (
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
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">FAQ</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">Frequently asked questions.</h2>
          </div>
          <div className="space-y-3">
            {props.faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-white/[0.10] bg-white/[0.035] p-5">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Related pages</p>
            <h2 className="text-balance text-3xl font-medium text-white md:text-5xl">Related service pages.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {props.relatedPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-white/[0.10] bg-white/[0.035] p-6 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.05]"
              >
                <p className="text-lg font-medium text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/[0.10] bg-white/[0.035] p-6 md:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Next step</p>
            <h2 className="text-balance text-4xl font-medium text-white md:text-5xl">{props.contactTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{props.contactDescription}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <a href={props.auditHref}>
                Request Audit
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
