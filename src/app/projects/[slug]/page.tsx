import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNavbar } from "@/components/sections/site-navbar";
import { Footer } from "@/components/sections/footer";
import { ProjectDetail } from "@/components/project/project-detail";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Suraj Pandey`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

async function ProjectContent({
  params,
}: {
  params: PageProps<"/projects/[slug]">["params"];
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);
  return <ProjectDetail project={project} prev={prev} next={next} />;
}

// Every slug is prerendered via generateStaticParams, so the content is in the
// initial HTML — no Suspense fallback, which would keep it hidden until the
// streamed reveal script runs.
export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <div className="relative w-full overflow-x-clip">
      <SiteNavbar />
      <main>
        <ProjectContent params={params} />
      </main>
      <Footer />
    </div>
  );
}
