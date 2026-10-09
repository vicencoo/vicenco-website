"use client";

import { useLanguage } from "@/lib/i18n";
import { PageHero } from "@/components/ui";

/** Privacy Policy and Terms of Service share one layout. */
export function LegalView({ doc }: { doc: "privacy" | "terms" }) {
  const { t } = useLanguage();
  const page = t.legal[doc];

  return (
    <>
      <PageHero home={t.nav.home} crumb={page.label} title={page.title} em={page.titleEm} lead={page.lead} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <nav className="sticky top-28" aria-label={t.legal.toc}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-faint">{t.legal.toc}</p>
              <ol className="mt-6 space-y-1 border-l border-line">
                {page.sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#section-${i + 1}`}
                      className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-5 text-sm text-muted transition-colors hover:border-gold hover:text-gold-2"
                    >
                      <span className="text-faint">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t.legal.updated}: {t.legal.date}
            </p>

            <div className="mt-12 space-y-14">
              {page.sections.map((s, i) => (
                <section key={s.title} id={`section-${i + 1}`} className="scroll-mt-28">
                  <h2 className="flex items-baseline gap-4 font-serif text-3xl sm:text-4xl">
                    <span className="font-sans text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
