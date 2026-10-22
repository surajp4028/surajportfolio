"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { profile } from "@/data/profile";

const waLink = `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Suraj, I saw your portfolio and would like to discuss a project.",
)}`;

// Floating WhatsApp chat button: pops in after load, a light sweep shines
// across it every few seconds, and it widens to a label on hover.
export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.4 }}
      whileTap={{ scale: 0.92 }}
      className="fixed right-4 bottom-4 z-[80] md:right-6 md:bottom-6"
    >
      {/* soft pulse ring */}
      <span className="pointer-events-none absolute inset-1 animate-ping rounded-full bg-emerald-400/25 [animation-duration:2.8s]" />

      <motion.span
        layout
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="relative flex h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] px-[13px] text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/25"
      >
        {/* shine sweep */}
        <span className="pointer-events-none absolute inset-0 animate-wa-shine bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)] bg-[length:250%_100%]" />
        <motion.span
          animate={{ rotate: [0, -12, 12, -8, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
          className="relative flex"
        >
          <SiWhatsapp className="h-[18px] w-[18px]" />
        </motion.span>
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.span
              key="label"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden pr-0.5 text-[13px] font-semibold whitespace-nowrap"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.a>
  );
}
