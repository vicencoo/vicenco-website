"use client";

// Runs once from the server HTML, before the first paint. In the browser React renders it as
// plain text so it doesn't run twice or warn about script tags (see Next.js "Preventing Flash").
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
