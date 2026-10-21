import { NextResponse, type NextRequest } from "next/server";
import { defaultLanguage, isLanguage } from "@/lib/i18n";

// English pages are served without a prefix (/services) from app/[lang] with lang = "en".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === defaultLanguage) {
    // Next.js links English share images under /en; serve those as they are.
    if (pathname.endsWith("/opengraph-image")) return;
    // /en/services → /services, so each English page has a single address.
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLanguage.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (isLanguage(first)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLanguage}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals, Vercel analytics and files with an extension (images, robots.txt, sitemap.xml…).
  matcher: ["/((?!_next|_vercel|api|.*\\..*).*)"],
};
