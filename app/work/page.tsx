import type { Metadata } from "next";
import { en } from "@/lib/dictionaries/en";
import { pageMetadata } from "@/lib/seo";
import { WorkView } from "@/components/views/work";

export const metadata: Metadata = pageMetadata({
  path: "/work",
  title: "Our Work: Website & Software Projects",
  description: en.pages.work,
});

export default function WorkPage() {
  return <WorkView />;
}
