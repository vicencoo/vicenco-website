import type { MetadataRoute } from "next";
import { languages, localePath } from "@/lib/i18n";
import { absoluteUrl, routes } from "@/lib/seo";

// Served at /sitemap.xml — submit this URL in Google Search Console.
// Every page is listed once per language, each linking to its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((r) => {
    const alternates = {
      languages: Object.fromEntries(languages.map((l) => [l, absoluteUrl(localePath(l, r.path))])),
    };
    return languages.map((lang) => ({
      url: absoluteUrl(localePath(lang, r.path)),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates,
    }));
  });
}
