import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

// Aceternity "glowing effect" card shell: outer border + mouse-tracking glow.
export function GlowCard({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full rounded-[1.25rem] border border-neutral-200 p-2 md:rounded-[1.5rem] md:p-3 dark:border-neutral-800",
        className,
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0px_0px_27px_0px_#2D2D2D]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
