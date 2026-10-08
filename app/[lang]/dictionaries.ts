import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Dictionary } from "./dictionaries/en";
import { pageKeys } from "@/lib/site";

export const locales = ["en", "sq"] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.en),
  sq: () => import("./dictionaries/sq").then((m) => m.sq),
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const getDictionary = (locale: Locale) => dictionaries[locale]();

/** Loads the dictionary for a route, returning 404 for unknown languages. */
export async function load(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, t: await getDictionary(lang) };
}

/** Title, description and EN/SQ alternates for an inner page. */
export async function pageMetadata(
  params: Promise<{ lang: string }>,
  page: (typeof pageKeys)[number]
): Promise<Metadata> {
  const { lang, t } = await load(params);
  return {
    title: t.nav[page],
    description: t.pages[page],
    alternates: {
      canonical: `/${lang}/${page}`,
      languages: { en: `/en/${page}`, sq: `/sq/${page}` },
    },
  };
}
