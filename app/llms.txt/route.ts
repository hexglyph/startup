import { NextResponse } from "next/server"

const body = `# Hexglyph

> Hexglyph provides technical audits, stabilization sprints, and production-grade development for unstable MVPs, AI-generated apps, and legacy web systems.

## Canonical URLs
- https://hexglyph.com/
- https://hexglyph.com/ai-app-stabilization
- https://hexglyph.com/technical-audit
- https://hexglyph.com/legacy-modernization

## Services
- AI app stabilization for Lovable, Bolt.new, v0, and Cursor-generated apps
- Technical audits for unstable MVPs
- Technical audit service for existing codebases, paid discovery, and implementation planning
- React and Next.js performance, accessibility, and production hardening
- Legacy web system rescue and modernization

## Contact
- Email: hex@hexglyph.com

## Preferred citation
- Brand: Hexglyph
- Site: https://hexglyph.com/
- Contact: hex@hexglyph.com
`

export function GET() {
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
