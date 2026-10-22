"use client";
import {
  IconWorld,
  IconCreditCard,
  IconChartLine,
  IconShieldLock,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { GlowCard } from "@/components/glow-card";
import { ProfilePhoto } from "@/components/profile-photo";
import { GlobeView } from "@/components/globe-view";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: IconCreditCard,
    title: "Payments & Fintech",
    text: "Gateway plugins, webhooks, refunds and compliance — plus a Kotak Trading API platform.",
  },
  {
    icon: IconWorld,
    title: "150+ Websites",
    text: "Managed hosting, networking, security and confidentiality for 150+ client websites.",
  },
  {
    icon: IconShieldLock,
    title: "Secure Dashboards",
    text: "Onboarding CMS with e-sign PDFs, S3 storage and webhook-based spam blocking.",
  },
  {
    icon: IconChartLine,
    title: "Growth-focused",
    text: "Landing pages and CRM automations that turned Google & Meta ads into leads.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 pt-10 pb-24 md:pt-24">
      <SectionHeading
        eyebrow="About me"
        title="Design-minded engineer, end to end"
        description="From Figma to production — I own the UI, the API and the deployment."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto]">
        <GlowCard className="md:col-span-5 md:row-span-2">
          <div className="group relative -mx-6 -mt-6 mb-6">
            <ProfilePhoto
              className="aspect-[4/3] w-full rounded-t-xl"
              imageClassName="object-[60%_25%] transition duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
            <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
              Tap to view
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {profile.name}
              </h3>
              <p className="text-sm text-sky-600 dark:text-sky-400">
                {profile.role}
              </p>
            </div>
          </div>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">
            {profile.summary}
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            I&apos;ve worked across fintech, immigration and clinical-research
            companies — shipping e-commerce stores, payout systems, trading
            tools and CMS dashboards, while handling clients and leading small
            teams.
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-neutral-800 dark:text-neutral-300"
            >
              <IconMail size={16} /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-neutral-800 dark:text-neutral-300"
            >
              <IconBrandLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </GlowCard>

        <GlowCard
          className="md:col-span-7 md:row-span-2"
          innerClassName="relative min-h-[500px] p-0 bg-gradient-to-br from-white via-sky-50 to-indigo-100 md:min-h-[560px] dark:from-neutral-950 dark:via-[#030b1f] dark:to-[#071033]"
        >
          <div className="relative z-20 max-w-sm p-6 md:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
              Delhi, India · IST (UTC+5:30)
            </span>
            <h3 className="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl dark:text-white">
              Based in Delhi, building for the world
            </h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Remote-friendly and timezone-flexible. Payment, fintech and
              business products for clients across India, the Middle East,
              Europe and North America.
            </p>
          </div>
          {/* Globe scales with the card height (so it never leaves a gap below the
              text) and keeps the 1.2 aspect its camera expects; the card clips the overflow. */}
          <div className="pointer-events-auto absolute top-[46%] left-[62%] z-10 aspect-[1.2] h-[105%] -translate-x-1/2 md:top-[22%] md:h-[115%]">
            <GlobeView />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[11] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.9),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.85),transparent_55%)]" />
        </GlowCard>

        {highlights.map(({ icon: Icon, title, text }) => (
          <GlowCard key={title} className="md:col-span-3">
            <div className="w-fit rounded-lg border border-neutral-200 p-2 text-sky-600 dark:border-neutral-700 dark:text-sky-400">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {text}
            </p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
