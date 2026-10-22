import { toolIcon } from "@/components/tech-icons";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// Generated artwork for projects without a screenshot (e.g. private fintech work).
export function ProjectCover({
  project,
  compact,
  className,
}: {
  project: Project;
  compact?: boolean;
  className?: string;
}) {
  const icons = project.tools
    .map((t) => toolIcon(t))
    .filter((t) => t !== undefined)
    .slice(0, compact ? 4 : 6);

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br text-white",
        project.accent,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_80%)] bg-[size:28px_28px]" />
      <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
      <p
        className={cn(
          "relative px-6 text-center font-bold tracking-tight drop-shadow-sm",
          compact ? "text-xl" : "text-3xl md:text-5xl",
        )}
      >
        {project.title}
      </p>
      <p
        className={cn(
          "relative mt-2 text-white/80",
          compact ? "text-xs" : "text-sm md:text-base",
        )}
      >
        {project.tagline}
      </p>
      <div className={cn("relative flex gap-3", compact ? "mt-4" : "mt-8")}>
        {icons.map(({ name, icon: Icon }) => (
          <span
            key={name}
            title={name}
            className={cn(
              "flex items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur",
              compact ? "h-9 w-9" : "h-12 w-12 md:h-14 md:w-14",
            )}
          >
            <Icon className={compact ? "h-4 w-4" : "h-6 w-6"} />
          </span>
        ))}
      </div>
    </div>
  );
}
