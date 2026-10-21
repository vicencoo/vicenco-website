import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { LegalView } from "@/components/views/legal";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/privacy", title: t.legal.privacy.label, description: t.legal.privacy.lead });
}

export default async function PrivacyPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.legal.privacy.label, path: "/privacy" }])} />
      <LegalView doc="privacy" />
    </>
  );
}
