"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { IconArrowUpRight, IconPlaneTilt } from "@tabler/icons-react";
import { useSyncExternalStore } from "react";
import { CloudShader } from "@/components/ui/cloud-shader";
import { LiquidGlassLayer } from "@/components/ui/liquid-glass";
import { cn } from "@/lib/utils";

// Dotted bezel wall, one per edge, each tilted into the page. The triangle clip
// sits on an untransformed wrapper so the four seams meet exactly.
const walls = [
  {
    clip: "[clip-path:polygon(0_0,100%_0,50%_50%)]",
    plane: "-inset-x-1/4 inset-y-0 origin-top [transform:rotateX(-40deg)]",
  },
  {
    clip: "[clip-path:polygon(0_100%,100%_100%,50%_50%)]",
    plane: "-inset-x-1/4 inset-y-0 origin-bottom [transform:rotateX(40deg)]",
  },
  {
    clip: "[clip-path:polygon(0_0,0_100%,50%_50%)]",
    plane: "inset-x-0 -inset-y-1/4 origin-left [transform:rotateY(40deg)]",
  },
  {
    clip: "[clip-path:polygon(100%_0,100%_100%,50%_50%)]",
    plane: "inset-x-0 -inset-y-1/4 origin-right [transform:rotateY(-40deg)]",
  },
];

// Phones skip the liquid glass (an SVG backdrop filter over an animated canvas
// is too heavy for mobile GPUs), as in Aceternity's demo.
const mobileQuery = "(max-width: 767px)";
function useIsMobile() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(mobileQuery);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );
}

// Based on Aceternity's Cloud Shader "Plane Window" demo: a window rounded at
// the top whose frame runs past the card's bottom edge (so it reads as cut
// straight), with the drifting sky and a wing view inside.
export function PlaneWindowCard({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 px-2 pt-4 md:px-3 md:pt-5",
        className,
      )}
    >
      {/* black shell → dark bezel → the view; 110% tall so the bottom is cut off */}
      <div className="h-[110%] w-full rounded-t-[56px] bg-neutral-950 p-0.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),0_12px_32px_rgba(0,0,0,0.6)] md:rounded-t-[110px]">
        <div className="relative h-full overflow-hidden rounded-t-[54px] bg-neutral-900 p-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.12),inset_0_-8px_20px_rgba(0,0,0,0.55)] md:rounded-t-[108px] md:p-4">
          <div aria-hidden className="absolute inset-0">
            {walls.map((w) => (
              <div
                key={w.clip}
                className={cn("absolute inset-0 [perspective:2000px]", w.clip)}
              >
                <div
                  className={cn(
                    "absolute bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:12px_12px]",
                    w.plane,
                  )}
                />
              </div>
            ))}
          </div>

          <div className="relative h-full overflow-hidden rounded-t-[42px] bg-gradient-to-t from-[#8cbfe8] to-[#3876ba] md:rounded-t-[94px]">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              {/* rendered at half size and scaled 2x: the clouds are soft, and
                  the GPU does a quarter of the work */}
              <div className="absolute h-1/2 w-1/2 origin-top-left scale-200">
                <CloudShader
                  speed={1}
                  count={isMobile ? 3 : 6}
                  className="absolute inset-0 min-h-0"
                />
              </div>
            </motion.div>

            {/* the window glass: refracts the rim and saturates the sky */}
            {isMobile ? (
              <div className="pointer-events-none absolute inset-0 z-[15] bg-white/[0.04] backdrop-saturate-150" />
            ) : (
              <LiquidGlassLayer
                className="absolute inset-0 z-[15]"
                radius={94}
                bevelDepth={36}
                aberration={0}
                frost={0}
              />
            )}

            <div className="relative z-20 px-6 pt-10 md:px-10 md:pt-14">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <IconPlaneTilt size={14} /> Ready for takeoff
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_12px_rgba(15,42,67,0.35)] md:text-5xl">
                Tested end to end
              </h3>
              <p className="mt-4 max-w-md text-base text-balance text-white/85">
                UAT and onboarding-API testing with Postman collections, sprint
                tracking in JIRA and hands-on merchant support.
              </p>
              <a
                href="https://www.imoneypay.in/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                imoneypay.in <IconArrowUpRight size={16} />
              </a>
            </div>

            {/* window-seat wing view with a gentle in-flight bob */}
            <motion.div
              className="pointer-events-none absolute -bottom-6 left-0 z-10 w-[105%] sm:w-[85%] lg:w-[82%]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/plane-wing.png"
                alt="Airplane wing above the clouds"
                width={2200}
                height={1227}
                sizes="(max-width: 1024px) 95vw, 640px"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
