"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  IconBrandLinkedin,
  IconDownload,
  IconMapPin,
  IconX,
} from "@tabler/icons-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

// Profile photo that pops open into a card on click. With `size` it renders a
// square avatar; without it, it fills its container with the full portrait.
export function ProfilePhoto({
  size,
  className,
  imageClassName,
}: {
  size?: number;
  className?: string;
  imageClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${profile.name}'s photo`}
        data-testid="profile-photo"
        whileHover={{ scale: size ? 1.06 : 1.02 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative block cursor-zoom-in overflow-hidden",
          className,
        )}
        style={size ? { width: size, height: size } : undefined}
      >
        {size ? (
          <Image
            src={profile.photo}
            alt={profile.name}
            width={size * 2}
            height={size * 2}
            priority
            className={cn("h-full w-full object-cover", imageClassName)}
          />
        ) : (
          <Image
            src={profile.photoFull}
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className={cn("object-cover", imageClassName)}
          />
        )}
      </motion.button>

      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {open && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { delay: 0.1 } }}
                  onClick={(e) =>
                    e.target === e.currentTarget && setOpen(false)
                  }
                  data-testid="profile-overlay"
                  className="fixed inset-0 z-[100] grid place-items-center bg-black/40 p-4 backdrop-blur-md"
                >
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={profile.name}
                    data-testid="profile-popup"
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.6,
                      filter: "blur(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: 40,
                      scale: 0.7,
                      filter: "blur(8px)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
                  >
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40 blur-3xl" />
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close photo"
                      className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                    >
                      <IconX size={16} />
                    </button>

                    <motion.div
                      initial={{ scale: 1.25 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative aspect-[1080/1203] max-h-[60vh] w-full overflow-hidden"
                    >
                      <Image
                        src={profile.photoFull}
                        alt={profile.name}
                        fill
                        sizes="384px"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.15 },
                      }}
                      exit={{ opacity: 0 }}
                      className="relative -mt-10 px-6 pb-6"
                    >
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        {profile.name}
                      </h3>
                      <p className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text font-semibold text-transparent">
                        {profile.role}
                      </p>
                      <p className="mt-2 flex items-center gap-1 text-sm text-neutral-500">
                        <IconMapPin size={14} /> {profile.location}
                      </p>
                      <div className="mt-5 flex gap-2">
                        <a
                          href={profile.cv}
                          download
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-sky-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(56,189,248,0.8)]"
                        >
                          <IconDownload size={16} /> Download CV
                        </a>
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn"
                          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-3 text-neutral-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-neutral-800 dark:text-neutral-300"
                        >
                          <IconBrandLinkedin size={18} />
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>,
          // Portal out of animated ancestors: a CSS filter/transform on a parent
          // would otherwise become the containing block for `position: fixed`.
          document.body,
        )}
    </>
  );
}
