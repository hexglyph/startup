import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { GoogleAdsScript } from "@/components/google-ads-script"
import { MarketingAttributionScript } from "@/components/marketing-attribution-script"
import "./globals.css"

const siteUrl = "https://hexglyph.com"
const siteName = "Hexglyph"
const defaultTitle = "Hexglyph | Technical Audits and Software Stabilization"
const defaultDescription =
  "Technical audits, stabilization sprints, and implementation work for unstable MVPs, AI-generated apps, and legacy web systems."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  keywords: [
    "AI app stabilization",
    "technical audit",
    "software stabilization",
    "unstable MVP",
    "Next.js consulting",
    "React performance",
    "legacy modernization",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-home.svg",
        width: 1200,
        height: 630,
        alt: "Hexglyph technical audits and software stabilization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-home.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/hexglyph-logo.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  generator: "v1.1.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#060607" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <GoogleAdsScript />
        <MarketingAttributionScript />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
