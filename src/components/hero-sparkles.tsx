"use client";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { useMounted } from "@/hooks/use-mounted";

// Aceternity "sparkles" glow line that sits under the hero title.
export function HeroSparkles() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const dark = !mounted || resolvedTheme === "dark";

  return (
    <div className="relative h-32 w-full max-w-[40rem]">
      <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
      <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
      {mounted && (
        <SparklesCore
          key={dark ? "dark" : "light"}
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={900}
          className="h-full w-full"
          particleColor={dark ? "#FFFFFF" : "#4f46e5"}
        />
      )}
      <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(320px_140px_at_top,transparent_20%,white)] dark:bg-black" />
    </div>
  );
}
