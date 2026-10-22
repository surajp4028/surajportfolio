"use client";
import { motion } from "motion/react";
import { IconDownload, IconArrowRight, IconMapPin } from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { techStack } from "@/components/tech-icons";
import { HeroSparkles } from "@/components/hero-sparkles";
import { ProfilePhoto } from "@/components/profile-photo";
import { profile, stats } from "@/data/profile";

const words = [
  "premium dashboards",
  "payment gateways",
  "trading platforms",
  "Next.js apps",
  "high-converting websites",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex w-full flex-col items-center overflow-clip pt-36 md:pt-44"
    >
      {/* grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/25 via-indigo-500/25 to-fuchsia-500/25 blur-3xl dark:from-sky-500/15 dark:via-indigo-500/15 dark:to-fuchsia-500/15" />
      <Spotlight />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.a
          href="#contact"
          {...fadeUp(0)}
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur md:text-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for freelance & full-time roles
          <IconArrowRight
            size={14}
            className="transition group-hover:translate-x-0.5"
          />
        </motion.a>

        <motion.div {...fadeUp(0.1)} className="mt-8 flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 opacity-70 blur-md" />
            <ProfilePhoto
              size={56}
              className="rounded-full border-2 border-white dark:border-neutral-900"
            />
          </div>
          <div className="text-left">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Hi, I&apos;m
            </p>
            <p className="font-semibold text-neutral-900 dark:text-white">
              {profile.name}
            </p>
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="mt-6 bg-gradient-to-b from-neutral-950 to-neutral-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-8xl dark:from-white dark:to-neutral-500"
        >
          {profile.role}
        </motion.h1>
        <HeroSparkles />

        <motion.div
          {...fadeUp(0.3)}
          className="-mt-20 flex min-h-[4.5rem] flex-col relative z-10 items-center text-xl font-medium text-neutral-600 sm:block sm:min-h-0 md:text-3xl dark:text-neutral-400"
        >
          <span>I build</span>
          <FlipWords
            words={words}
            className="font-semibold text-sky-600 dark:text-sky-400"
          />
        </motion.div>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-neutral-400"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MovingBorderButton
            as="a"
            href={profile.cv}
            download
            data-testid="download-cv"
            borderRadius="1rem"
            duration={3000}
            containerClassName="h-12 w-48"
            className="gap-2 border-neutral-200 bg-white/90 text-sm font-semibold text-neutral-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white"
          >
            <IconDownload size={18} /> Download CV
          </MovingBorderButton>
          <a
            href="#contact"
            data-testid="hire-me"
            className="group relative inline-flex h-12 w-48 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-600 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(56,189,248,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.35),55%,transparent)] bg-[length:200%_100%]" />
            <span className="relative">Hire me</span>
            <IconArrowRight
              size={18}
              className="relative transition group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.6)}
          className="mt-6 flex items-center gap-1 text-sm text-neutral-500"
        >
          <IconMapPin size={16} /> {profile.location} · Open to remote work
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 text-neutral-500 dark:text-neutral-400"
        >
          {techStack.slice(0, 10).map(({ name, icon: Icon }) => (
            <Icon
              key={name}
              title={name}
              className="h-6 w-6 opacity-70 transition hover:scale-110 hover:opacity-100"
            />
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.8)}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white px-4 py-5 dark:bg-neutral-950"
            >
              <p className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-3xl font-bold text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Aceternity MacBook Scroll: the lid opens as you scroll */}
      {/* overflow-x-clip (not hidden) so the MacBook stage can stay sticky */}
      <div className="relative z-10 mt-10 w-full overflow-x-clip md:mt-24 xl:mt-32">
        <MacbookScroll
          src="/images/dashboard.webp"
          showGradient={false}
          title={
            <span className="text-neutral-800 dark:text-neutral-200">
              <span className="mx-auto inline-block max-w-3xl text-[2.9rem] leading-tight text-balance md:text-4xl">
                Efficient code, clean design & user-friendly UI/UX —
              </span>
              <br />
              <span className="mt-2 inline-block bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-[6rem] leading-none font-bold text-transparent md:text-[6.5rem]">
                Built to Delight
              </span>
            </span>
          }
          badge={
            <span className="flex h-10 w-10 -rotate-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg">
              SP
            </span>
          }
        />
      </div>
    </section>
  );
}
