"use client"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | undefined>

export function trackGoogleAdsEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("event", eventName, params)
}

export function trackLeadSubmission(details: {
  service?: string
  source?: string
  value?: number
}) {
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

  trackGoogleAdsEvent("generate_lead", {
    currency: "USD",
    value: details.value ?? 1,
    service: details.service,
    source: details.source,
  })

  if (conversionId && conversionLabel) {
    trackGoogleAdsEvent("conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
      currency: "USD",
      value: details.value ?? 1,
    })
  }
}
