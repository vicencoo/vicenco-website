import { load, pageMetadata } from "../dictionaries";
import { CtaBand, PageHero } from "@/components/ui";
import { Stats, WorkGrid } from "@/components/sections";

export function generateMetadata({ params }: PageProps<"/[lang]/work">) {
  return pageMetadata(params, "work");
}

export default async function WorkPage({ params }: PageProps<"/[lang]/work">) {
  const { lang, t } = await load(params);

  return (
    <>
      <PageHero lang={lang} home={t.nav.home} crumb={t.nav.work} title={t.work.title} em={t.work.titleEm} lead={t.pages.work} />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <WorkGrid t={t} />
        </div>
      </section>

      <Stats t={t} />
      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
