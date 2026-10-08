import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { AboutView } from "@/components/views/about";

export const metadata: Metadata = {
  title: en.nav.about,
  description: en.pages.about,
};

export default function AboutPage() {
  return <AboutView />;
}
