import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { pageMetadata } from "@/lib/seo";
import { ServicesView } from "@/components/views/services";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Web Design & Development Services",
  description: en.pages.services,
});

export default function ServicesPage() {
  return <ServicesView />;
}
