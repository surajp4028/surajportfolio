"use client";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { SectionHeading } from "@/components/section-heading";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ProjectCard } from "@/components/project/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <span className="inline-flex flex-wrap items-center justify-center gap-x-3">
            Projects I&apos;m
            <PointerHighlight
              rectangleClassName="border-sky-500/60 dark:border-sky-400/60"
              pointerClassName="text-sky-500"
            >
              <span className="px-1 text-neutral-900 dark:text-white">
                proud of
              </span>
            </PointerHighlight>
          </span>
        }
        description="Fintech platforms, client websites and e-commerce stores. Click a card for the full case study."
      />

      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          data-testid="view-all-projects"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_-6px] hover:shadow-sky-500/50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
        >
          View all {projects.length} projects
          <IconArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
