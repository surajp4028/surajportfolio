"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/project/project-card";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div
        className="relative mb-6 flex flex-wrap justify-center gap-2"
        role="tablist"
      >
        {filters.map((f) => {
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.category === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "text-white dark:text-black"
                  : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
              )}
            >
              {active && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">
                {f} <span className="opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
