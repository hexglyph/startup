import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hexglyph",
    short_name: "Hexglyph",
    description:
      "Technical audits, stabilization sprints, and implementation work for unstable MVPs, AI-generated apps, and legacy web systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#060607",
    theme_color: "#060607",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/hexglyph-logo.png",
        type: "image/png",
      },
    ],
  }
}
