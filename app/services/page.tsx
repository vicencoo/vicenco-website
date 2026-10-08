import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { ServicesView } from "@/components/views/services";

export const metadata: Metadata = {
  title: en.nav.services,
  description: en.pages.services,
};

export default function ServicesPage() {
  return <ServicesView />;
}
