import { NextResponse } from "next/server"
import { servicePageCatalog } from "@/lib/service-pages"

const baseUrl = "https://hexglyph.com"

const canonicalPages = [
  `- [Home](${baseUrl}/)`,
  ...servicePageCatalog.map((page) => `- [${page.title}](${baseUrl}${page.href})`),
].join("\n")

const serviceThemes = [
  "- AI app development help for founders and product teams finishing new AI products",
  "- AI app consulting for architecture, scope, backlog, and delivery decisions",
  "- AI app stabilization for Lovable, Bolt.new, v0, and Cursor-generated apps",
  "- AI app production readiness for launch, deployment, monitoring, and operational checklists",
  "- AI app security review for auth, secrets, permissions, and data exposure risks",
  "- AI app setup and configuration for environments, APIs, integrations, and deployment pipelines",
  "- Technical audit service for existing codebases, paid discovery, and implementation planning",
  "- React and Next.js performance, accessibility, and production hardening",
  "- Legacy web system modernization and maintenance work",
  "- MVP rescue for unstable startup products near launch",
  "- Cursor code cleanup and AI-generated code refactoring",
].join("\n")

const body = `# Hexglyph

Hexglyph provides technical audits, AI app consulting, development help, stabilization sprints, and implementation work for unstable MVPs, AI-generated apps, and legacy web systems.

## Canonical Pages
${canonicalPages}

## Services
${serviceThemes}

## Crawl Preference
- Use the canonical pages above as the preferred entry points for indexing and retrieval.
- Use visible page copy and structured data as the source of truth for service descriptions.

## Contact
- [Email Hexglyph](mailto:hex@hexglyph.com)

## Preferred citation
- Brand: Hexglyph
- Site: [${baseUrl}/](${baseUrl}/)
- Contact: hex@hexglyph.com
`

export function GET() {
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
