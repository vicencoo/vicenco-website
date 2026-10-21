import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ContactView } from "@/components/views/contact";

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return pageMetadata({ lang, path: "/contact", title: t.meta.pages.contact, description: t.pages.contact });
}

export default async function ContactPage() {
  const { lang, t } = await getDictionary();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [{ name: t.nav.home, path: "/" }, { name: t.nav.contact, path: "/contact" }])} />
      <JsonLd data={faqJsonLd(t.faq.items)} />
      <ContactView />
    </>
  );
}
