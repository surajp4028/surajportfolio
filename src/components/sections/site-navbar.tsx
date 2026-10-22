"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, profile } from "@/data/profile";

function Logo() {
  const pathname = usePathname();
  return (
    <Link
      href="/#top"
      data-testid="logo"
      // On the home page, a repeat click on "/#top" doesn't change the URL,
      // so the browser wouldn't scroll; scroll to the top ourselves.
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "/");
      }}
      className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm font-normal"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]">
        SP
      </span>
      <span className="font-semibold text-black dark:text-white">
        Suraj<span className="text-sky-500">.dev</span>
      </span>
    </Link>
  );
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar className="fixed top-4">
      <NavBody>
        <Logo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-3">
          <ThemeToggle />
          <NavbarButton href="/#contact" variant="gradient">
            Hire me
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              data-testid="mobile-menu-toggle"
              className="cursor-pointer"
            >
              <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
            </button>
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="relative w-full text-lg text-neutral-700 dark:text-neutral-200"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3">
            <NavbarButton
              href={profile.cv}
              download
              variant="primary"
              className="w-full"
            >
              Download CV
            </NavbarButton>
            <NavbarButton
              href="/#contact"
              onClick={() => setOpen(false)}
              variant="gradient"
              className="w-full"
            >
              Hire me
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
