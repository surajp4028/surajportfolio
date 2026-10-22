import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium tracking-wide text-neutral-600 uppercase backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_2px] shadow-sky-500/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl dark:from-white dark:to-neutral-400">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-neutral-600 md:text-lg dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}
