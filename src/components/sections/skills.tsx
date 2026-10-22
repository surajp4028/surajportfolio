"use client";
import {
  IconLayout,
  IconServer,
  IconDatabase,
  IconShoppingCart,
  IconPalette,
  IconUsers,
} from "@tabler/icons-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SectionHeading } from "@/components/section-heading";
import { techStack, type Tech } from "@/components/tech-icons";
import { skillGroups } from "@/data/profile";
import { cn } from "@/lib/utils";

const groupIcons = [
  IconLayout,
  IconServer,
  IconDatabase,
  IconShoppingCart,
  IconPalette,
  IconUsers,
];

function LogoPill({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <li className="group flex shrink-0 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px] hover:shadow-sky-500/40 dark:border-neutral-800 dark:bg-neutral-900">
      <Icon
        className="h-7 w-7 text-neutral-900 dark:text-white"
        style={{ color: tech.color === "currentColor" ? undefined : tech.color }}
      />
      <span className="text-sm font-medium whitespace-nowrap text-neutral-700 dark:text-neutral-200">
        {tech.name}
      </span>
    </li>
  );
}

// Logo marquee using the same scroll keyframes as Aceternity's infinite moving cards.
function Marquee({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  return (
    <div className="relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-4 py-2 hover:[animation-play-state:paused]",
        )}
        style={
          {
            "--animation-duration": "45s",
            "--animation-direction": reverse ? "reverse" : "forwards",
          } as React.CSSProperties
        }
      >
        {[...items, ...items].map((t, i) => (
          <LogoPill key={`${t.name}-${i}`} tech={t} />
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Skills & tools"
          title="The stack I ship with"
          description="Modern frontend, solid backend, and the design tools to make it beautiful."
        />
      </div>

      <div className="flex flex-col gap-4">
        <Marquee items={techStack.slice(0, half)} />
        <Marquee items={techStack.slice(half)} reverse />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <HoverEffect
          items={skillGroups.map((g, i) => {
            const Icon = groupIcons[i];
            return {
              ...g,
              icon: (
                <div className="w-fit rounded-xl bg-gradient-to-br from-sky-500/15 to-fuchsia-500/15 p-2.5 text-sky-600 dark:text-sky-400">
                  <Icon size={22} />
                </div>
              ),
            };
          })}
        />
      </div>
    </section>
  );
}
