import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { en } from "@/lib/dictionaries/en";
import { sq } from "@/lib/dictionaries/sq";
import { it } from "@/lib/dictionaries/it";
import { isLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";

const dictionaries = { en, sq, it };

// The preview image shown when a link to the site is shared (WhatsApp, Facebook, LinkedIn, X…).
export const alt = en.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = dictionaries[isLanguage(lang) ? lang : "en"];
  const logo = await readFile(join(process.cwd(), "public/vinsaltech-logo-header-white.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 85% 15%, #163066 0%, #070d17 55%)",
          color: "#e8eef8",
        }}
      >
        <img src={logoSrc} width={406 * 1.1} height={73.3 * 1.1} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 950 }}>{t.meta.tagline}</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#2F6BFF" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
