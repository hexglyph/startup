import { ServiceLandingPage } from "@/components/service-landing-page"
import type { Metadata } from "next"

const baseUrl = "https://hexglyph.com"
const pageUrl = `${baseUrl}/mvp-rescue`
const contactEmail = "hex@hexglyph.com"
const auditHref = `mailto:${contactEmail}?subject=MVP%20Rescue%20Audit`

const title = "MVP Rescue Service for Unstable Startup Products"
const description =
  "MVP rescue for unstable startup products that need bug fixes, code cleanup, architecture review, production hardening, and a clear path to launch."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "MVP rescue",
    "unstable MVP",
    "fix MVP before launch",
    "startup app rescue",
    "production ready MVP",
    "MVP technical audit",
    "bug fixing for MVP",
  ],
  alternates: {
    canonical: "/mvp-rescue",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Hexglyph",
    type: "website",
    images: [
      {
        url: "/og-mvp-rescue.svg",
        width: 1200,
        height: 630,
        alt: "MVP rescue service for unstable startup products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-mvp-rescue.svg"],
  },
}

export default function MvpRescuePage() {
  return (
    <ServiceLandingPage
      badge="MVP rescue"
      title="Rescue an unstable MVP before launch, demos, or investor scrutiny make the problems visible."
      description={description}
      pageUrl={pageUrl}
      auditHref={auditHref}
      introNote="This page targets buyers searching MVP rescue, unstable MVP fixes, startup app rescue, pre-launch bug fixing, and production-readiness help."
      heroStats={[
        { label: "Launch blockers", value: "Visible" },
        { label: "Bug risk", value: "Ranked" },
        { label: "Refactor path", value: "Scoped" },
        { label: "Release plan", value: "Clear" },
      ]}
      symptomTitle="When an MVP needs rescue"
      symptomDescription="Early products usually fail in the same places: fragile auth, weak validation, broken flows, rushed architecture, and no confidence about what breaks under real usage."
      symptoms={[
        {
          title: "The demo worked, the real product does not",
          description: "Once real users, real data, or real transactions arrive, the MVP exposes reliability gaps that were hidden in prototype mode.",
        },
        {
          title: "Feature work keeps piling onto unstable code",
          description: "The team adds more scope because launch pressure is high, but the base gets more expensive to change every week.",
        },
        {
          title: "There is no clean launch checklist",
          description: "Validation, logging, accessibility, deployment, and performance are still unclear, so nobody can say with confidence that the product is ready.",
        },
        {
          title: "Every fix creates another regression",
          description: "The codebase lacks enough structure for safe iteration, which turns basic launch prep into a slow and error-prone process.",
        },
      ]}
      deliverablesTitle="Rescue scope"
      deliverablesDescription="The work is designed to move an MVP from unstable and ambiguous to launchable and understandable, without pretending the only answer is a full rebuild."
      deliverables={[
        "Technical audit focused on launch blockers",
        "Severity-ranked bug and reliability backlog",
        "Critical flow review for signup, billing, auth, and data handling",
        "Validation and error-handling improvements",
        "Production-readiness checklist",
        "Targeted refactor recommendations for fragile modules",
        "Performance and UX issues that hurt first impressions",
        "A practical sprint plan to stabilize before launch",
      ]}
      valuesTitle="Launch clarity matters more than another feature."
      valuesDescription="Founders usually do not need more surface area first. They need to know what is brittle, what is launch-critical, and how to stabilize without losing momentum."
      values={[
        {
          title: "Faster clarity",
          description: "The rescue process compresses uncertainty so launch decisions are based on visible engineering risk instead of guesswork.",
        },
        {
          title: "Less wasted build effort",
          description: "Instead of piling features onto fragile code, the team gets a ranked path for the fixes that actually protect the launch.",
        },
        {
          title: "Better founder confidence",
          description: "The product becomes easier to explain to investors, partners, and internal stakeholders because the risks and fixes are explicit.",
        },
        {
          title: "Safer post-launch growth",
          description: "A rescued MVP is easier to extend after launch because the worst fragility has already been identified and addressed.",
        },
      ]}
      process={[
        {
          title: "Product intake",
          description: "Share the repository, current launch pressure, major issues, and the flows that matter most to the business.",
        },
        {
          title: "MVP audit",
          description: "Hexglyph reviews architecture, core flows, bugs, UX issues, production gaps, and the specific technical debt that threatens launch.",
        },
        {
          title: "Rescue plan",
          description: "You get a ranked view of what must be fixed now, what can wait, and which refactors reduce the highest risk quickly.",
        },
        {
          title: "Stabilization sprint",
          description: "Implementation focuses on launch blockers first so the MVP becomes trustworthy enough for real users and public exposure.",
        },
      ]}
      signals={[
        "MVP rescue",
        "unstable MVP",
        "fix MVP before launch",
        "startup app rescue",
        "production ready MVP",
        "MVP technical audit",
        "bug fixing for MVP",
      ]}
      faqs={[
        {
          question: "What does MVP rescue include?",
          answer:
            "MVP rescue includes technical audit, bug triage, production-readiness review, validation and error-handling improvements, targeted refactor guidance, and a ranked stabilization plan.",
        },
        {
          question: "Is this for products close to launch?",
          answer:
            "Yes. This service is specifically useful when the MVP is close to launch, demo, or investor exposure but the codebase and user flows still feel unstable.",
        },
        {
          question: "Do you recommend a full rewrite for unstable MVPs?",
          answer:
            "Not by default. Most unstable MVPs benefit more from risk-ranked rescue and targeted stabilization than from a rewrite-first decision made under pressure.",
        },
        {
          question: "Can rescue work continue into implementation?",
          answer:
            "Yes. The audit phase is designed to lead directly into a focused stabilization sprint when implementation support is needed.",
        },
      ]}
      relatedPages={[
        {
          href: "/technical-audit",
          title: "Technical audit service",
          description: "For buyers who first need diagnosis, risk maps, and a clear implementation plan.",
        },
        {
          href: "/ai-app-stabilization",
          title: "AI app stabilization",
          description: "For AI-generated apps from Lovable, Bolt.new, v0, and Cursor that need production engineering.",
        },
        {
          href: "/legacy-modernization",
          title: "Legacy modernization",
          description: "For older systems and internal tools that need controlled refactoring without a rewrite-first approach.",
        },
      ]}
      contactTitle="Need to rescue an MVP before launch pressure turns into public failure?"
      contactDescription="Send the product context, current launch concerns, and the parts that already feel brittle. Hexglyph can turn that into a focused rescue plan."
    />
  )
}
