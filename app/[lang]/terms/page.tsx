import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { LegalView } from "@/components/views/legal";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/terms", title: t.legal.terms.label, description: t.legal.terms.lead });
}

export default async function TermsPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.legal.terms.label, path: "/terms" }])} />
      <LegalView doc="terms" />
    </>
  );
}
