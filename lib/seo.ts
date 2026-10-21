import type { Metadata } from "next";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { languages, localePath, ogLocales, type Language } from "./i18n";
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
  "sviluppo siti web",
  site.name,
];

// Every public page (without language prefix), used by the sitemap. Add new pages here.
type Route = { path: string; priority: number; changeFrequency: "monthly" | "yearly" };
export const routes: Route[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  ...pageKeys.map((k): Route => ({ path: `/${k}`, priority: 0.8, changeFrequency: "monthly" })),
  ...en.services.items.map((s): Route => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: "monthly" })),
  ...en.work.items.map((w): Route => ({ path: `/work/${w.slug}`, priority: 0.6, changeFrequency: "yearly" })),
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;

/** Canonical URL plus links to the same page in every language (hreflang). */
export function languageAlternates(lang: Language, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      ...Object.fromEntries(languages.map((l) => [l, localePath(l, path)])),
      "x-default": path,
    },
  };
}

export function openGraphBase(lang: Language) {
  return {
    siteName: site.name,
    type: "website",
    locale: ogLocales[lang],
    alternateLocale: languages.filter((l) => l !== lang).map((l) => ogLocales[l]),
  } satisfies Metadata["openGraph"];
}

// Metadata for an inner page: title, description, canonical URL, translations and social previews.
// Inner pages reuse the preview image from app/[lang]/opengraph-image.tsx in their own language.
export function pageMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Language;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  const images = [{ url: localePath(lang, "/opengraph-image"), width: 1200, height: 630, alt: fullTitle }];
  return {
    title,
    description,
    alternates: languageAlternates(lang, path),
    openGraph: { ...openGraphBase(lang), url: localePath(lang, path), title: fullTitle, description, images },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
  };
}

// Structured data (JSON-LD): tells Google who you are, what you offer and how to reach you.
const organizationId = `${site.url}/#organization`;

export function organizationJsonLd(lang: Language, t: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        logo: `${site.url}/vinsaltech-logo-header.svg`,
        image: `${site.url}/opengraph-image`,
        description: t.meta.description,
        email: site.email,
        telephone: `+${site.whatsapp}`,
        address: { "@type": "PostalAddress", addressCountry: "AL" },
        areaServed: [{ "@type": "Country", name: "Albania" }, { "@type": "Country", name: "Italy" }, "Worldwide"],
        knowsLanguage: [...languages],
        sameAs: [`https://instagram.com/${site.instagram}`],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          telephone: `+${site.whatsapp}`,
          availableLanguage: ["English", "Albanian", "Italian"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.nav.services,
          itemListElement: t.services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              url: absoluteUrl(localePath(lang, `/services/${s.slug}`)),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: [...languages],
        publisher: { "@id": organizationId },
      },
    ],
  };
}

/** The "Home › Services › E-commerce" trail Google can show in search results. */
export function breadcrumbJsonLd(lang: Language, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(localePath(lang, c.path)),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(lang: Language, service: Dictionary["services"]["items"][number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    description: service.text,
    url: absoluteUrl(localePath(lang, `/services/${service.slug}`)),
    inLanguage: lang,
    provider: { "@id": organizationId },
    areaServed: ["Albania", "Italy", "Worldwide"],
  };
}

export function caseStudyJsonLd(lang: Language, project: Dictionary["work"]["items"][number]) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.text,
    url: absoluteUrl(localePath(lang, `/work/${project.slug}`)),
    image: absoluteUrl(project.image),
    inLanguage: lang,
    creator: { "@id": organizationId },
    sameAs: project.url,
  };
}
