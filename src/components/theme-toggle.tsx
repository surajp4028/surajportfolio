"use client";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      data-testid="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative z-20 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <IconMoon size={18} /> : <IconSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
