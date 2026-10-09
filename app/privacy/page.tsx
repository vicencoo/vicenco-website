import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { LegalView } from "@/components/views/legal";

export const metadata: Metadata = {
  title: en.legal.privacy.label,
  description: en.legal.privacy.lead,
};

export default function PrivacyPage() {
  return <LegalView doc="privacy" />;
}
