import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ServicesView } from "@/components/views/services";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/services", title: t.meta.pages.services, description: t.pages.services });
}

export default async function ServicesPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }])} />
      <ServicesView />
    </>
  );
}
