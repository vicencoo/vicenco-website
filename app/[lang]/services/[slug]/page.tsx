import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { en } from "@/lib/dictionaries/en";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailView } from "@/components/views/service-detail";

// Slugs are the same in every language (/services/e-commerce, /sq/services/e-commerce…).
export function generateStaticParams() {
  return en.services.items.map((s) => ({ slug: s.slug }));
}

async function getService(params: PageProps<"/[lang]/services/[slug]">["params"]) {
  const { slug } = await params;
  const { lang, t } = await getDictionary();
  const service = t.services.items.find((s) => s.slug === slug);
  if (!service) notFound();
  return { lang, t, service };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, service } = await getService(params);
  return pageMetadata({ lang, path: `/services/${service.slug}`, title: service.metaTitle, description: service.text });
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { lang, t, service } = await getService(params);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(lang, [
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(lang, service)} />
      <JsonLd data={faqJsonLd(service.faq)} />
      <ServiceDetailView lang={lang} t={t} service={service} />
    </>
  );
}
