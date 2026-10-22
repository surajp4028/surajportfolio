"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconCalendar,
  IconCategory,
  IconUser,
  IconBriefcase,
} from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowCard } from "@/components/glow-card";
import { ProjectCover } from "@/components/project/project-cover";
import { toolIcon } from "@/components/tech-icons";
import { useMounted } from "@/hooks/use-mounted";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

const domain = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-[20px] bg-white dark:bg-neutral-950">
      <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="mx-auto truncate rounded-md bg-neutral-100 px-4 py-1 text-xs text-neutral-500 dark:bg-neutral-900">
          {project.href ? domain(project.href) : `${project.slug}.app`}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} screenshot`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover object-top"
          />
        ) : (
          <ProjectCover project={project} />
        )}
      </div>
    </div>
  );
}

function NavCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const next = direction === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-sky-400/60 hover:shadow-[0_0_40px_-12px] hover:shadow-sky-500/50 dark:border-neutral-800 dark:bg-neutral-950",
        next && "flex-row-reverse text-right",
      )}
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        ) : (
          <div
            className={cn("h-full w-full bg-gradient-to-br", project.accent)}
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "flex items-center gap-1 text-xs text-neutral-500",
            next && "justify-end",
          )}
        >
          {next ? (
            <>
              Next project{" "}
              <IconArrowRight
                size={14}
                className="transition group-hover:translate-x-1"
              />
            </>
          ) : (
            <>
              <IconArrowLeft
                size={14}
                className="transition group-hover:-translate-x-1"
              />{" "}
              Previous project
            </>
          )}
        </p>
        <p className="mt-1 truncate font-semibold text-neutral-900 dark:text-white">
          {project.title}
        </p>
      </div>
    </Link>
  );
}

export function ProjectDetail({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const mounted = useMounted();
  const meta = [
    {
      icon: IconUser,
      label: "Client",
      value: project.client ?? "Confidential",
    },
    { icon: IconCalendar, label: "Year", value: project.year ?? "—" },
    { icon: IconBriefcase, label: "Role", value: project.role },
    { icon: IconCategory, label: "Category", value: project.category },
  ];

  return (
    <article className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)] bg-[size:48px_48px]" />
        <div
          className={cn(
            "pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r opacity-25 blur-3xl dark:opacity-20",
            project.accent,
          )}
        />
        <Spotlight />

        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <motion.nav
            {...fadeUp(0)}
            className="flex items-center gap-2 text-sm text-neutral-500"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 hover:text-sky-500"
            >
              <IconArrowLeft size={16} /> All projects
            </Link>
            <span>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">
              {project.category}
            </span>
          </motion.nav>

          <motion.div
            {...fadeUp(0.05)}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
              <span
                className={cn(
                  "h-2 w-2 rounded-full bg-gradient-to-r",
                  project.accent,
                )}
              />
              {project.tagline}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 bg-gradient-to-b from-neutral-950 to-neutral-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-7xl dark:from-white dark:to-neutral-500"
          >
            {project.title}
          </motion.h1>

          <div className="mt-6 max-w-3xl">
            {mounted ? (
              <TextGenerateEffect
                words={project.summary}
                duration={0.4}
                staggerDelay={0.025}
                className="font-normal [&_div]:mt-0 [&_div]:text-lg [&_div]:leading-relaxed [&_div]:tracking-normal [&_span]:text-neutral-600 md:[&_div]:text-xl dark:[&_span]:text-neutral-400"
              />
            ) : (
              <p className="text-lg text-neutral-600 md:text-xl dark:text-neutral-400">
                {project.summary}
              </p>
            )}
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            {project.href && (
              <MovingBorderButton
                as="a"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-testid="visit-live"
                borderRadius="1rem"
                duration={3000}
                containerClassName="h-12 w-52"
                className="gap-2 border-neutral-200 bg-white/90 text-sm font-semibold text-neutral-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white"
              >
                Visit live site <IconArrowUpRight size={18} />
              </MovingBorderButton>
            )}
            <Link
              href="/#contact"
              className="group relative inline-flex h-12 w-56 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-600 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(56,189,248,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] transition hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.35),55%,transparent)] bg-[length:200%_100%]" />
              <span className="relative">Start a similar project</span>
              <IconArrowRight
                size={18}
                className="relative transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.dl
            {...fadeUp(0.25)}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800"
          >
            {meta.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white px-5 py-4 dark:bg-neutral-950"
              >
                <dt className="flex items-center gap-1.5 text-xs tracking-wide text-neutral-500 uppercase">
                  <Icon size={14} /> {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Cover */}
      <motion.section
        {...fadeUp(0)}
        className="relative mx-auto max-w-6xl px-4"
      >
        <BackgroundGradient
          className="rounded-[20px]"
          containerClassName="rounded-[24px]"
        >
          <BrowserFrame project={project} />
        </BackgroundGradient>
      </motion.section>

      {/* Overview + tools */}
      <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-[1fr_340px]">
        <motion.div {...fadeUp(0)}>
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase dark:text-sky-400">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl dark:text-white">
            About the project
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
            {project.overview.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.aside
          {...fadeUp(0.1)}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <GlowCard innerClassName="p-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              Tools used
            </p>
            <ul
              className="mt-4 grid grid-cols-2 gap-2"
              data-testid="tools-used"
            >
              {project.tools.map((name) => {
                const tool = toolIcon(name);
                const Icon = tool?.icon;
                return (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {Icon ? (
                      <Icon
                        className="h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                        style={{
                          color:
                            tool.color === "currentColor"
                              ? undefined
                              : tool.color,
                        }}
                      />
                    ) : (
                      <span
                        className={cn(
                          "h-2 w-2 shrink-0 rounded-full bg-gradient-to-r",
                          project.accent,
                        )}
                      />
                    )}
                    <span className="truncate">{name}</span>
                  </li>
                );
              })}
            </ul>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-between rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                {domain(project.href)} <IconArrowUpRight size={16} />
              </a>
            )}
          </GlowCard>
        </motion.aside>
      </section>

      {/* Highlights */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase dark:text-sky-400"
        >
          Highlights
        </motion.p>
        <motion.h2
          {...fadeUp(0.05)}
          className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl dark:text-white"
        >
          What I delivered
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.highlights.map((h, i) => (
            <motion.div key={h.title} {...fadeUp(0.05 * i)}>
              <GlowCard>
                <span
                  className={cn(
                    "w-fit bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent",
                    project.accent,
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {h.text}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-4">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl font-bold text-neutral-900 md:text-4xl dark:text-white"
          >
            More screens
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp(0.05)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900",
                  // A lone last image spans the full row.
                  project.gallery!.length % 2 === 1 &&
                    i === project.gallery!.length - 1
                    ? "aspect-[16/9] md:col-span-2"
                    : "aspect-[4/3]",
                )}
              >
                <Image
                  src={src}
                  alt={`${project.title} screen`}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-contain transition duration-700 group-hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 text-center md:px-16">
          {mounted && <BackgroundBeams />}
          <div className="relative z-10">
            <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Want something like this?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              I design and build fast, secure websites, e-commerce stores and
              fintech dashboards. Let&apos;s talk about yours.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            >
              Hire me <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <nav className="mx-auto mt-12 mb-24 grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-2">
        <NavCard project={prev} direction="prev" />
        <NavCard project={next} direction="next" />
      </nav>
    </article>
  );
}
