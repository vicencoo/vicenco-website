import type { MetadataRoute } from "next";
import { routes } from "@/lib/seo";
import { site } from "@/lib/site";

// Served at /sitemap.xml — submit this URL in Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
