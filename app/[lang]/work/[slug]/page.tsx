import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { en } from "@/lib/dictionaries/en";
import { getDictionary } from "@/lib/i18n-server";
import { breadcrumbJsonLd, caseStudyJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { WorkDetailView } from "@/components/views/work-detail";

export function generateStaticParams() {
  return en.work.items.map((w) => ({ slug: w.slug }));
}

async function getProject(params: PageProps<"/[lang]/work/[slug]">["params"]) {
  const { slug } = await params;
  const { lang, t } = await getDictionary();
  const project = t.work.items.find((w) => w.slug === slug);
  if (!project) notFound();
  return { lang, t, project };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, t, project } = await getProject(params);
  return pageMetadata({
    lang,
    path: `/work/${project.slug}`,
    title: `${project.name} — ${t.workDetail.caseStudy}`,
    description: project.text,
  });
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, t, project } = await getProject(params);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(lang, [
          { name: t.nav.home, path: "/" },
          { name: t.nav.work, path: "/work" },
          { name: project.name, path: `/work/${project.slug}` },
        ])}
      />
      <JsonLd data={caseStudyJsonLd(lang, project)} />
      <WorkDetailView slug={project.slug} />
    </>
  );
}
