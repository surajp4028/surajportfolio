"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PageLoader } from "@/components/page-loader";

// The home page is prerendered, so loading.tsx never shows on a direct visit.
// This splash is part of the server HTML (visible from first paint) and fades
// out once the page has loaded, with a short minimum so it doesn't just flash.
const MIN_VISIBLE_MS = 900;

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let timer: ReturnType<typeof setTimeout>;
    const hide = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      timer = setTimeout(() => setVisible(false), wait);
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[95]"
        >
          <PageLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
