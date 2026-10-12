import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { pageMetadata } from "@/lib/seo";
import { AboutView } from "@/components/views/about";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Us",
  description: en.pages.about,
});

export default function AboutPage() {
  return <AboutView />;
}
