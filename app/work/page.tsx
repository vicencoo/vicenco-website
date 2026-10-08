import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { WorkView } from "@/components/views/work";

export const metadata: Metadata = {
  title: en.nav.work,
  description: en.pages.work,
};

export default function WorkPage() {
  return <WorkView />;
}
