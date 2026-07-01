import type { MetadataRoute } from "next"
import { servicePageCatalog } from "@/lib/service-pages"

const baseUrl = "https://hexglyph.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePageCatalog.map((page) => ({
      url: `${baseUrl}${page.href}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ]
}
