import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "sq"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const saved = request.cookies.get("lang")?.value;
  if (saved && locales.includes(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  return preferred.find((l) => locales.includes(l)) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (current) {
    // Remember the chosen language for the next visit to "/".
    const response = NextResponse.next();
    if (request.cookies.get("lang")?.value !== current) {
      response.cookies.set("lang", current, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return response;
  }

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
