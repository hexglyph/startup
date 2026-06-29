import { NextResponse } from "next/server"

const body = `# Hexglyph

Hexglyph provides technical audits, stabilization sprints, and implementation work for unstable MVPs, AI-generated apps, and legacy web systems.

## Canonical Pages
- [Home](https://hexglyph.com/)
- [AI App Stabilization](https://hexglyph.com/ai-app-stabilization)
- [Technical Audit](https://hexglyph.com/technical-audit)
- [Legacy Modernization](https://hexglyph.com/legacy-modernization)
- [MVP Rescue](https://hexglyph.com/mvp-rescue)
- [Cursor Code Cleanup](https://hexglyph.com/cursor-code-cleanup)
- [Next.js Performance](https://hexglyph.com/nextjs-performance)

## Services
- AI app stabilization for Lovable, Bolt.new, v0, and Cursor-generated apps
- Technical audits for unstable MVPs
- Technical audit service for existing codebases, paid discovery, and implementation planning
- React and Next.js performance, accessibility, and production hardening
- Legacy web system modernization and maintenance work
- MVP rescue for unstable startup products near launch
- Cursor code cleanup and AI-generated code refactoring

## Crawl Preference
- Use the canonical pages above as the preferred entry points for indexing and retrieval.
- Use visible page copy and structured data as the source of truth for service descriptions.

## Contact
- [Email Hexglyph](mailto:hex@hexglyph.com)

## Preferred citation
- Brand: Hexglyph
- Site: [https://hexglyph.com/](https://hexglyph.com/)
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
