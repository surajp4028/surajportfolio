"use client";
import { IconWebhook } from "@tabler/icons-react";
import { SiRazorpay, SiWoocommerce, SiWordpress } from "react-icons/si";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { cn } from "@/lib/utils";

const events = [
  { name: "payment.captured", tone: "bg-emerald-400" },
  { name: "refund.processed", tone: "bg-sky-400" },
  { name: "signature verified", tone: "bg-fuchsia-400" },
];

// "PG plugins, webhooks & refunds" card: beams fall like incoming webhook
// events and burst when they land (Aceternity Background Beams With Collision).
export function PgBeamsCard({ className }: { className?: string }) {
  return (
    <BackgroundBeamsWithCollision
      className={cn(
        "h-full items-start justify-start rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-950 to-indigo-950 dark:from-indigo-950 dark:to-slate-950",
        className,
      )}
    >
      <div className="relative z-20 flex h-full w-full flex-col p-6 md:p-7">
        <div className="flex items-center gap-2">
          {[
            { Icon: SiRazorpay, label: "Razorpay", color: "#3395FF" },
            { Icon: SiWoocommerce, label: "WooCommerce", color: "#A77DC4" },
            { Icon: SiWordpress, label: "WordPress", color: "#ffffff" },
            { Icon: IconWebhook, label: "Webhooks", color: "#f0abfc" },
          ].map(({ Icon, label, color }) => (
            <span
              key={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <Icon className="h-4 w-4" style={{ color }} />
            </span>
          ))}
        </div>

        <h3 className="mt-5 bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent xl:text-3xl">
          PG plugins, webhooks & refunds — done right
        </h3>
        <p className="mt-3 text-sm text-indigo-100/80">
          Payment gateway plugins for e-commerce platforms with signed webhooks,
          callbacks, refund flows and secure transaction handling.
        </p>

        <ul className="mt-auto space-y-1.5 pt-4">
          {events.map((e) => (
            <li
              key={e.name}
              className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-indigo-100 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                    e.tone,
                  )}
                />
                <span
                  className={cn(
                    "relative inline-flex h-2 w-2 rounded-full",
                    e.tone,
                  )}
                />
              </span>
              {e.name}
              <span className="text-emerald-300">200 OK</span>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
