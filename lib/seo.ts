import type { Metadata } from "next";
import { en } from "./dictionaries/en";
import { pageKeys, site } from "./site";

// Search keywords — what people type into Google to find a studio like yours.
export const keywords = [
  "web development Albania",
  "website design Albania",
  "web design Tirana",
  "custom software development",
  "web application development",
  "e-commerce website",
  "online store development",
  "UI/UX design",
  "Next.js developer",
  "faqe interneti",
  "zhvillim software",
  "dyqan online",
  site.name,
];

// Every public page, used by the sitemap. Add new pages here.
type Route = { path: string; priority: number; changeFrequency: "monthly" | "yearly" };
export const routes: Route[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  ...pageKeys.map((k): Route => ({ path: `/${k}`, priority: 0.8, changeFrequency: "monthly" })),
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: en.meta.title };

export const openGraphBase = {
  siteName: site.name,
  type: "website",
  locale: "en_US",
  alternateLocale: ["sq_AL"],
} satisfies Metadata["openGraph"];

// Metadata for an inner page: title, description, canonical URL and social previews.
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    // Inner pages reuse the site-wide preview image from app/opengraph-image.tsx.
    openGraph: { ...openGraphBase, url: path, title: fullTitle, description, images: [shareImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [shareImage] },
  };
}

// Structured data (JSON-LD): tells Google who you are, what you offer and how to reach you.
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/vinsaltech-logo-header.svg`,
      image: `${site.url}/opengraph-image`,
      description: en.meta.description,
      email: site.email,
      telephone: `+${site.whatsapp}`,
      areaServed: [{ "@type": "Country", name: "Albania" }, "Worldwide"],
      knowsLanguage: ["en", "sq"],
      sameAs: [`https://instagram.com/${site.instagram}`],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: `+${site.whatsapp}`,
        availableLanguage: ["English", "Albanian"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: en.nav.services,
        itemListElement: en.services.items.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: ["en", "sq"],
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};
