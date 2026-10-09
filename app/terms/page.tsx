import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { LegalView } from "@/components/views/legal";

export const metadata: Metadata = {
  title: en.legal.terms.label,
  description: en.legal.terms.lead,
};

export default function TermsPage() {
  return <LegalView doc="terms" />;
}
