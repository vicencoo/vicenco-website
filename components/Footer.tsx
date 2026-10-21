import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { pageKeys, site } from "@/lib/site";
import { Wordmark } from "./Logo";

const linkClass = "text-[15px] text-muted transition-colors duration-300 hover:text-brand-2";

export function Footer({ lang, t }: { lang: Language; t: Dictionary }) {
  const href = (path: string) => localePath(lang, path);
  const pages = [{ href: "/", label: t.nav.home }, ...pageKeys.map((k) => ({ href: `/${k}`, label: t.nav[k] }))];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-2">
      <div className="orb -bottom-40 left-1/4 h-[360px] w-[360px] text-brand/[0.07]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-0">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 lg:pr-12">
            <Link href={href("/")} className="inline-flex items-center gap-3">
              <Wordmark />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          <FooterColumn title={t.footer.company}>
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={href(p.href)} className={linkClass}>
                  {p.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t.nav.services}>
            {t.services.items.map((s) => (
              <li key={s.title}>
                <Link href={href(`/services/${s.slug}`)} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t.nav.contact} className="col-span-2 lg:col-span-1">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                +{site.whatsapp}
              </a>
            </li>
            <li className="text-[15px] text-muted">{t.footer.location}</li>
            <li className="flex gap-3 pt-2">
              <SocialLink href={`https://instagram.com/${site.instagram}`} label={t.contact.instagram}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </SocialLink>
              <SocialLink href={`https://wa.me/${site.whatsapp}`} label={t.contact.whatsapp}>
                <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
                <path d="M9 8.5c.3 2.9 3.6 6.2 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2-1.5 1Z" />
              </SocialLink>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-7 pr-20 text-sm text-faint sm:flex-row sm:items-center sm:pr-24">
          <span>
            © {site.year} {site.name}. {t.footer.rights}
          </span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label={t.footer.company}>
            <Link href={href("/privacy")} className="transition-colors hover:text-brand-2">
              {t.legal.privacy.label}
            </Link>
            <Link href={href("/terms")} className="transition-colors hover:text-brand-2">
              {t.legal.terms.label}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`lg:border-l lg:border-line lg:px-10 ${className}`}>
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.25em] text-ink">{title}</h3>
      <ul className="mt-6 space-y-3.5">{children}</ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/[0.06] text-brand-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
