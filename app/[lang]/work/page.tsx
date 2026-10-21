import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { WorkView } from "@/components/views/work";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/work", title: t.meta.pages.work, description: t.pages.work });
}

export default async function WorkPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.nav.work, path: "/work" }])} />
      <WorkView />
    </>
  );
}
