import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { AboutView } from "@/components/views/about";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/about", title: t.meta.pages.about, description: t.pages.about });
}

export default async function AboutPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.nav.about, path: "/about" }])} />
      <AboutView />
    </>
  );
}
