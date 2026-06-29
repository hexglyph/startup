"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { getMarketingParams } from "@/lib/contact"
import { trackGoogleAdsEvent } from "@/lib/google-ads"

type LeadCtaLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  ctaId: string
}

export const LeadCtaLink = React.forwardRef<HTMLAnchorElement, LeadCtaLinkProps>(
  ({ href, onClick, ctaId, ...props }, ref) => {
    const searchParams = useSearchParams()
    const marketingKeys = getMarketingParams()

    let resolvedHref = href

    if (typeof href === "string" && href.startsWith("/")) {
      const url = new URL(href, "https://hexglyph.com")

      for (const key of marketingKeys) {
        const value = searchParams.get(key)

        if (value && !url.searchParams.has(key)) {
          url.searchParams.set(key, value)
        }
      }

      resolvedHref = `${url.pathname}${url.search}${url.hash}`
    }

    return (
      <Link
        ref={ref}
        href={resolvedHref}
        onClick={(event) => {
          trackGoogleAdsEvent("select_content", {
            content_type: "lead_cta",
            item_id: ctaId,
          })

          onClick?.(event)
        }}
        {...props}
      />
    )
  }
)

LeadCtaLink.displayName = "LeadCtaLink"
