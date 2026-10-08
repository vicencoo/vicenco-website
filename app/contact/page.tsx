import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { ContactView } from "@/components/views/contact";

export const metadata: Metadata = {
  title: en.nav.contact,
  description: en.pages.contact,
};

export default function ContactPage() {
  return <ContactView />;
}
