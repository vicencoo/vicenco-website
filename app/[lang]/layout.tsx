import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { languages, languageScript } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n-server";
import { site } from "@/lib/site";
import { keywords, languageAlternates, openGraphBase, organizationJsonLd } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InlineScript } from "@/components/InlineScript";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/language-context";
import { Spotlight } from "@/components/Spotlight";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

// Every page is prerendered once per language.
export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#070d17",
};

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getDictionary();
  return {
    metadataBase: new URL(site.url),
    // Inner pages set a short title, e.g. "Services — VinsalTech".
    title: { default: t.meta.title, template: `%s — ${site.name}` },
    description: t.meta.description,
    keywords,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    alternates: languageAlternates(lang, "/"),
    openGraph: {
      ...openGraphBase(lang),
      url: lang === "en" ? "/" : `/${lang}`,
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { lang, t } = await getDictionary();

  return (
    // The language script may hide the page while it redirects a first-time visitor.
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={languageScript} />
        {/* Without JavaScript, show content that would otherwise fade in on scroll. */}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <JsonLd data={organizationJsonLd(lang, t)} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink">
        <LanguageProvider>
          <div className="grain" aria-hidden />
          <Spotlight />
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
