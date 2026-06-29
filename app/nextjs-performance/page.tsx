import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildContactHref } from "@/lib/contact"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/nextjs-performance`
const auditHref = buildContactHref({ service: "nextjs-performance", source: "nextjs-performance-page" })

const title = "Next.js Performance Audit and React App Optimization"
const description =
  "Next.js performance audits and React app optimization for teams dealing with slow pages, weak Core Web Vitals, heavy bundles, broken rendering patterns, and poor user-perceived speed."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Next.js performance audit",
    "React app optimization",
    "Core Web Vitals consulting",
    "slow Next.js app",
    "improve Next.js performance",
    "frontend performance audit",
  ],
  alternates: {
    canonical: "/nextjs-performance",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-nextjs-performance.svg",
        width: 1200,
        height: 630,
        alt: "Next.js performance audit and React app optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-nextjs-performance.svg"],
  },
}

export default function NextjsPerformancePage() {
  return (
    <ServiceLandingPage
      badge="Next.js performance audit"
      title="Fix a slow Next.js app before weak performance starts killing trust and conversion."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="Main indexing terms: Next.js performance audit, React app optimization, Core Web Vitals consulting, and frontend performance audit."
      heroStats={[
        { label: "Render path", value: "Analyzed" },
        { label: "Bundle weight", value: "Reduced" },
        { label: "CWV risk", value: "Measured" },
        { label: "Speed plan", value: "Prioritized" },
      ]}
      symptomTitle="When performance becomes a product problem"
      symptomDescription="Slow frontend delivery is rarely just a polish issue. It usually signals broader problems in rendering strategy, component design, data flow, bundle discipline, or page architecture."
      symptoms={[
        {
          title: "Pages feel slow even when the server is fine",
          description: "The app responds, but rendering, hydration, or client-side work still makes the product feel heavier than it should.",
        },
        {
          title: "The bundle keeps growing",
          description: "Features were added faster than performance discipline, and now the frontend carries more code than the user needs on first load.",
        },
        {
          title: "Core Web Vitals are weak or inconsistent",
          description: "The site may be usable, but UX, discoverability, and conversion are weakened by unstable metrics and rough loading behavior.",
        },
        {
          title: "The team lacks a ranked view of the real bottlenecks",
          description: "People suspect caching, images, rendering mode, or component behavior, but there is no ranked performance diagnosis to guide effort.",
        },
      ]}
      deliverablesTitle="Performance scope"
      deliverablesDescription="The audit focuses on the changes that most improve user-perceived speed, stability, and rendering efficiency."
      deliverables={[
        "Next.js rendering and route analysis",
        "Bundle and client-side weight review",
        "Hydration and interaction-cost assessment",
        "Image, font, and asset-loading recommendations",
        "Core Web Vitals risk review",
        "Component and state-flow performance findings",
        "Prioritized performance backlog",
        "Implementation guidance for the highest-leverage fixes",
      ]}
      valuesTitle="What the performance audit should provide."
      valuesDescription="Performance work is more effective when the constraints are identified first and the implementation sequence is explicit."
      values={[
        {
          title: "Better perceived speed",
          description: "Users feel the improvement when the loading path, rendering behavior, and interaction cost are addressed intentionally.",
        },
        {
          title: "Lower interaction friction",
          description: "Faster and cleaner pages reduce friction in signup, navigation, and other interaction-heavy flows.",
        },
        {
          title: "Less wasted engineering effort",
          description: "The ranked plan prevents time being spent on low-impact optimization while the real bottlenecks stay untouched.",
        },
        {
          title: "Stronger technical baseline",
          description: "The app becomes easier to scale because the performance work also clarifies better architectural and rendering decisions.",
        },
      ]}
      process={[
        {
          title: "Context intake",
          description: "Share the routes that feel slow, the user flows that matter most, and any performance metrics or complaints already observed.",
        },
        {
          title: "Performance audit",
          description: "Hexglyph reviews rendering patterns, bundle strategy, asset loading, interaction cost, and the frontend decisions driving the slowdown.",
        },
        {
          title: "Ranked fix plan",
          description: "You receive a clear view of which performance issues matter most and how to address them in sensible order.",
        },
        {
          title: "Optimization sprint",
          description: "If needed, the highest-leverage fixes can be implemented first to improve speed without destabilizing the application.",
        },
      ]}
      signals={[
        "Next.js performance audit",
        "React app optimization",
        "Core Web Vitals consulting",
        "slow Next.js app",
        "improve Next.js performance",
        "frontend performance audit",
      ]}
      faqs={[
        {
          question: "What does a Next.js performance audit include?",
          answer:
            "A Next.js performance audit includes rendering analysis, bundle review, hydration cost assessment, asset-loading recommendations, Core Web Vitals risk review, and a prioritized optimization plan.",
        },
        {
          question: "Is this only for SEO metrics?",
          answer:
            "No. Performance work also affects trust, perceived quality, conversion, retention, and overall product usability beyond search visibility.",
        },
        {
          question: "Do you optimize React code too?",
          answer:
            "Yes. The audit looks at React component patterns, state flow, rendering behavior, and the frontend decisions that drive user-perceived slowness.",
        },
        {
          question: "Can performance work happen through targeted improvements?",
          answer:
            "Yes. Most apps benefit more from ranked optimization and architectural correction than from throwing away the existing codebase.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For broader diagnosis across architecture, risk, and delivery beyond performance alone.",
        },
        {
          href: "/mvp-rescue",
          title: "MVP rescue",
          description: "For unstable products where performance is only one part of a bigger launch-readiness problem.",
        },
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For AI-generated apps that also need structure, cleanup, and production hardening.",
        },
      ]}
      contactTitle="Need to fix a slow Next.js app with a clearer view of the main bottlenecks?"
      contactDescription="Send the route context, the slow flows, and any current metrics or complaints. Hexglyph can turn that into a ranked performance plan."
    />
  )
}
