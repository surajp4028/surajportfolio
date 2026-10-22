import type { Metadata } from "next";
import { SiteNavbar } from "@/components/sections/site-navbar";
import { Footer } from "@/components/sections/footer";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsGrid } from "@/components/project/projects-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Suraj Pandey",
  description:
    "Fintech platforms, websites, e-commerce stores and brand design work by Suraj Pandey.",
};

export default function ProjectsPage() {
  return (
    <div className="relative w-full overflow-x-clip">
      <SiteNavbar />
      <main className="relative mx-auto max-w-7xl px-4 pt-36 pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] bg-[size:48px_48px]" />
        <SectionHeading
          eyebrow={`${projects.length} projects`}
          title="Everything I've built"
          description="Payment-gateway products, client websites, e-commerce stores and brand design. Open any project for the full story."
          className="relative"
        />
        <ProjectsGrid projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
