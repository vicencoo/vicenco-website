import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { pageMetadata } from "@/lib/seo";
import { LegalView } from "@/components/views/legal";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: en.legal.terms.label,
  description: en.legal.terms.lead,
});

export default function TermsPage() {
  return <LegalView doc="terms" />;
}
