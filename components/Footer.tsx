"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { pageKeys, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-2">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <span className="font-serif text-2xl">Vicenco</span>
            </Link>
            <p className="mt-4 max-w-sm text-muted">{t.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {pageKeys.map((k) => (
              <Link key={k} href={`/${k}`} className="transition-colors hover:text-gold-2">
                {t.nav[k]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p
        className="pointer-events-none mt-10 select-none text-center font-serif text-[22vw] leading-[0.8] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(201,169,110,0.25)]"
        aria-hidden
      >
        Vicenco
      </p>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-faint sm:flex-row sm:px-8">
          <span>
            © {site.year} {site.name}. {t.footer.rights}
          </span>
          <span>{t.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}
