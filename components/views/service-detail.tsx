import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { Arrow } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Check, CtaBand, PageHero, SectionHead } from "@/components/ui";
import { FaqList, ProcessSteps, WorkGrid } from "@/components/sections";

type Service = Dictionary["services"]["items"][number];

/** A page per service: what it is, what's included, who it's for, FAQ and related projects. */
export function ServiceDetailView({ lang, t, service }: { lang: Language; t: Dictionary; service: Service }) {
  const d = t.serviceDetail;
  const related = t.work.items.filter((w) => w.services.includes(service.slug));
  const others = t.services.items.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        lang={lang}
        home={t.nav.home}
        parent={{ href: "/services", label: t.nav.services }}
        crumb={service.title}
        title={service.title}
        lead={service.text}
      />

      {/* Overview + what's included */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">{d.intro}</p>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">{service.metaTitle}</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line-2 px-3 py-1 text-xs tracking-wide text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="brand-border rounded-3xl bg-surface/70 p-8 sm:p-10">
              <h2 className="font-serif text-3xl">{d.includes}</h2>
              <ul className="mt-8 space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check small />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ideal for */}
      <section className="border-t border-line bg-bg-2 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.services.eyebrow} title={d.idealFor} />
          <div className="mt-10 sm:mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.idealFor.map((item, i) => (
              <Reveal key={item} delay={i * 100} className="h-full">
                <div className="flex h-full items-start gap-4 bg-bg-2 p-7">
                  <Check />
                  <p className="leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} em={t.process.titleEm} />
          <div className="mt-12 sm:mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-bg-2 py-20 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow={t.faq.eyebrow} title={d.faq} />
          <FaqList items={service.faq} />
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="border-t border-line py-20 sm:py-36">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHead eyebrow={t.work.eyebrow} title={d.work} />
            <div className="mt-10 sm:mt-16">
              <WorkGrid lang={lang} t={t} items={related} limit={2} />
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="border-t border-line bg-bg-2 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.services.eyebrow} title={d.other} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={localePath(lang, `/services/${s.slug}`)}
                  className="group flex h-full items-center justify-between gap-6 rounded-2xl border border-line bg-bg p-7 transition-colors duration-500 hover:border-brand/40 hover:bg-surface"
                >
                  <span className="font-serif text-2xl">{s.title}</span>
                  <Arrow className="text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
