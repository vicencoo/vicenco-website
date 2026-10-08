import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { en } from "@/lib/dictionaries/en";
import { LanguageProvider, languageScript } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/Spotlight";
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

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Inner pages set a short title, e.g. "Services — Vicenco".
  title: { default: en.meta.title, template: `%s — ${site.name}` },
  description: en.meta.description,
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The language script may change `lang` before React loads.
    <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink">
        <LanguageProvider>
          <div className="grain" aria-hidden />
          <Spotlight />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
