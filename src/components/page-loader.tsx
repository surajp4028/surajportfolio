// Route loading screen. Pure CSS animation (no client JS) so it can show
// instantly as a prefetched loading.tsx fallback, before any hydration.
export function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* hero grid + soft brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-loader-pulse rounded-full bg-gradient-to-r from-sky-400/30 via-indigo-500/30 to-fuchsia-500/30 blur-3xl" />

      {/* logo with a light travelling around its border */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-loader-ring rounded-[1.4rem] [background:conic-gradient(from_var(--loader-angle),transparent_0deg,#38bdf8_90deg,#6366f1_180deg,#d946ef_270deg,transparent_360deg)] p-[2px] [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]" />
        <div className="absolute inset-0 animate-loader-ring rounded-[1.4rem] [background:conic-gradient(from_var(--loader-angle),transparent_0deg,#38bdf8_90deg,#6366f1_180deg,#d946ef_270deg,transparent_360deg)] opacity-60 blur-md" />
        <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-500 text-2xl font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.6)]">
          SP
        </span>
      </div>

      {/* name with a shimmer sweep */}
      <p className="relative mt-7 animate-shimmer bg-[linear-gradient(110deg,#525252,45%,#e5e5e5,55%,#525252)] bg-[length:200%_100%] bg-clip-text text-lg font-semibold tracking-tight text-transparent dark:bg-[linear-gradient(110deg,#a3a3a3,45%,#ffffff,55%,#a3a3a3)]">
        Suraj<span className="text-sky-500">.dev</span>
      </p>

      {/* indeterminate progress line */}
      <div className="relative mt-4 h-[3px] w-44 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div className="absolute inset-y-0 left-0 w-2/5 animate-loader-bar rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
      </div>

      <span className="sr-only">{label}…</span>
    </div>
  );
}
