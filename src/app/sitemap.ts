import type { MetadataRoute } from "next";
import { rankedSlugs } from "@/lib/projectData";

const siteUrl = "https://yiyixu.com";

// Required by `output: "export"`.
export const dynamic = "force-static";

// Generated at build time so new projects can't fall out of sync.
// /nat is intentionally left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...rankedSlugs.map((slug) => ({
      url: `${siteUrl}/projects/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
