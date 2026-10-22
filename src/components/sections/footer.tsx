"use client";
import { IconBrandLinkedin, IconMail, IconWorld } from "@tabler/icons-react";
import { navItems, profile } from "@/data/profile";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 pb-10 dark:border-neutral-800">
      <div className="mx-auto hidden h-[16rem] max-w-6xl items-center justify-center md:flex">
        <TextHoverEffect text="SURAJ" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="text-sm text-neutral-500">
          © 2026 {profile.name}. Built with Next.js & Aceternity UI.
        </p>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
          {navItems.map((i) => (
            <a key={i.link} href={i.link} className="hover:text-sky-500">
              {i.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-3 text-neutral-600 dark:text-neutral-400">
          <a aria-label="Email" href={`mailto:${profile.email}`} className="hover:text-sky-500">
            <IconMail size={20} />
          </a>
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-500">
            <IconBrandLinkedin size={20} />
          </a>
          <a aria-label="Website" href={profile.website} target="_blank" rel="noreferrer" className="hover:text-sky-500">
            <IconWorld size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
