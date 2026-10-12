import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { pageMetadata } from "@/lib/seo";
import { ContactView } from "@/components/views/contact";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Us",
  description: en.pages.contact,
});

export default function ContactPage() {
  return <ContactView />;
}
