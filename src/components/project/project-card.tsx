"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconArrowUpRight } from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProjectCover } from "@/components/project/project-cover";
import type { Project } from "@/data/projects";

export function ProjectCard({ project: p }: { project: Project }) {
  const router = useRouter();
  const href = `/projects/${p.slug}`;
  return (
    // The 3D-lifted CardItems sit above the overlay link, so the wrapper handles clicks too.
    <div
      className="h-full cursor-pointer"
      onClick={() => router.push(href)}
      data-testid="project-card"
    >
      <CardContainer containerClassName="py-6 h-full" className="h-full w-full">
        <CardBody className="group/card relative flex h-full w-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/[0.15] dark:bg-neutral-950 dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.15]">
          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${p.title}`}
            className="absolute inset-0 z-10 rounded-2xl"
          />
          <CardItem
            translateZ="30"
            className="flex w-full items-center justify-between"
          >
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium tracking-wide text-neutral-600 uppercase dark:bg-neutral-900 dark:text-neutral-400">
              {p.category}
            </span>
            {p.year && (
              <span className="text-xs text-neutral-500">{p.year}</span>
            )}
          </CardItem>
          <CardItem
            translateZ="50"
            className="mt-3 text-xl font-bold text-neutral-900 dark:text-white"
          >
            {p.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400"
          >
            {p.summary}
          </CardItem>
          <CardItem translateZ="100" className="mt-5 w-full">
            <div className="relative h-44 w-full overflow-hidden rounded-xl">
              {p.cover ? (
                <Image
                  src={p.cover}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top transition duration-500 group-hover/card:scale-105"
                />
              ) : (
                <ProjectCover project={p} compact />
              )}
            </div>
          </CardItem>
          <CardItem translateZ="40" className="mt-4 flex flex-wrap gap-2">
            {p.tools.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
              >
                {t}
              </span>
            ))}
          </CardItem>
          <div className="mt-auto flex items-center justify-between pt-6">
            <CardItem translateZ={20} className="text-xs text-neutral-500">
              {p.client ?? p.role}
            </CardItem>
            <CardItem
              translateZ={20}
              className="inline-flex items-center gap-1 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white transition group-hover/card:gap-2 dark:bg-white dark:text-black"
            >
              View project <IconArrowUpRight size={14} />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
