"use client";
import { IconSchool } from "@tabler/icons-react";
import { Timeline } from "@/components/ui/timeline";
import { GlowCard } from "@/components/glow-card";
import { Meteors } from "@/components/ui/meteors";
import { useMounted } from "@/hooks/use-mounted";
import { SectionHeading } from "@/components/section-heading";
import { education, experience } from "@/data/profile";

export function Experience() {
  const mounted = useMounted();
  const data = experience.map((job) => ({
    title: job.period,
    content: (
      <GlowCard innerClassName="p-6 md:p-8">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl dark:text-white">
            {job.role}
          </h3>
          <div className="flex items-center gap-3">
            {job.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Current
              </span>
            )}
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
              >
                {job.company}
              </a>
            ) : (
              <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
                {job.company}
              </span>
            )}
          </div>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{job.place}</p>
        <ul className="mt-5 space-y-3">
          {job.points.map((p) => (
            <li
              key={p}
              className="flex gap-3 text-sm text-neutral-700 md:text-base dark:text-neutral-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>
      </GlowCard>
    ),
  }));

  return (
    <section id="experience" className="relative">
      <Timeline
        data={data}
        heading={
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text font-bold text-transparent dark:from-white dark:to-neutral-400">
            Experience
          </span>
        }
        description="4+ years building products for payment-gateway, fintech, immigration and clinical-research companies."
      />

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <SectionHeading eyebrow="Education" title="Where I learned" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {education.map((e) => (
            <GlowCard key={e.title}>
              {/* Meteors use Math.random, so they render after mount only. */}
              {mounted && (
                <Meteors
                  number={12}
                  className="bg-sky-400 before:from-sky-400"
                />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <div className="rounded-lg border border-neutral-200 p-2 text-fuchsia-600 dark:border-neutral-700 dark:text-fuchsia-400">
                  <IconSchool size={20} />
                </div>
                <span className="text-xs text-neutral-500">{e.period}</span>
              </div>
              <h3 className="relative z-10 mt-4 font-semibold text-neutral-900 dark:text-white">
                {e.title}
              </h3>
              <p className="relative z-10 mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {e.school}
              </p>
              <p className="relative z-10 mt-4 w-fit rounded-full bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 px-3 py-1 text-sm font-semibold text-sky-700 dark:text-sky-300">
                {e.score}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
