const marketingParams = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const

type ContactLinkOptions = {
  service?: string
  source?: string
}

export function buildContactHref({ service, source }: ContactLinkOptions = {}) {
  const params = new URLSearchParams()

  if (service) {
    params.set("service", service)
  }

  if (source) {
    params.set("source", source)
  }

  return params.size > 0 ? `/contact?${params.toString()}` : "/contact"
}

export function getMarketingParams() {
  return marketingParams
}
