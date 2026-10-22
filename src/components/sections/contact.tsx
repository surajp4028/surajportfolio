"use client";
import { useState } from "react";
import { useMounted } from "@/hooks/use-mounted";
import { AnimatePresence, motion } from "motion/react";
import {
  IconSend,
  IconCircleCheck,
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconMapPin,
  IconLoader2,
  IconDownload,
  IconWorld,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import WorldMap from "@/components/ui/world-map";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { SectionHeading } from "@/components/section-heading";
import { contactServices, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const delhi = { lat: 28.6139, lng: 77.209, label: "Delhi" };
const mapDots = [
  { start: delhi, end: { lat: 51.5072, lng: -0.1276, label: "London" } },
  { start: delhi, end: { lat: 40.7128, lng: -74.006, label: "New York" } },
  { start: delhi, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
  { start: delhi, end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } },
  { start: delhi, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
  { start: delhi, end: { lat: 43.6532, lng: -79.3832, label: "Toronto" } },
];

const contactLinks = [
  { icon: IconMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: IconPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: IconBrandLinkedin, label: "linkedin.com/in/suraj-pandey", href: profile.linkedin },
  { icon: IconMapPin, label: profile.location, href: undefined },
];

const dockIcon = "h-full w-full text-neutral-600 dark:text-neutral-300";
const dockItems = [
  { title: "Email", icon: <IconMail className={dockIcon} />, href: `mailto:${profile.email}` },
  { title: "LinkedIn", icon: <IconBrandLinkedin className={dockIcon} />, href: profile.linkedin },
  { title: "WhatsApp", icon: <IconBrandWhatsapp className={dockIcon} />, href: `https://wa.me/${profile.phone.replace(/\D/g, "")}` },
  { title: "Website", icon: <IconWorld className={dockIcon} />, href: profile.website },
  { title: "Download CV", icon: <IconDownload className={dockIcon} />, href: profile.cv },
];

type Status = "idle" | "sending" | "sent" | "error";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const mounted = useMounted();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something awesome"
          description="Have a project, a role or just an idea? Drop a message — I usually reply within 24 hours."
        />

        <div className="relative mx-auto -mt-4 mb-10 max-w-5xl">
          {mounted && <WorldMap dots={mapDots} lineColor="#0ea5e9" />}
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 p-8 text-white lg:col-span-2 dark:border-neutral-800">
            {mounted && <BackgroundBeams />}
            {mounted && <Meteors number={18} />}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">Hire me</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Freelance projects, full-time roles or consulting — Next.js,
                Node.js, payments and premium UI.
              </p>
              <ul className="mt-8 space-y-4">
                {contactLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm text-neutral-300 transition hover:text-sky-400"
                      >
                        <span className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <Icon size={18} />
                        </span>
                        {label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm text-neutral-300">
                        <span className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <Icon size={18} />
                        </span>
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <p className="mb-3 text-xs tracking-wider text-neutral-500 uppercase">
                  Find me on
                </p>
                <FloatingDock
                  desktopClassName="bg-white/5 border border-white/10 w-fit mx-0"
                  mobileClassName="translate-y-0"
                  items={dockItems}
                />
              </div>
            </div>
          </div>

          <div className="shadow-input relative rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 lg:col-span-3 dark:border-neutral-800 dark:bg-black">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  data-testid="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 15 }}
                    className="rounded-full bg-emerald-500/10 p-4 text-emerald-500 shadow-[0_0_40px_-5px] shadow-emerald-500/50"
                  >
                    <IconCircleCheck size={48} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
                    Thanks for reaching out — it&apos;s in my inbox. I&apos;ll reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  data-testid="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    Send a message
                  </h3>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <LabelInputContainer>
                      <Label htmlFor="name">Your name</Label>
                      <Input id="name" name="name" placeholder="Tyler Durden" required minLength={2} />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                    </LabelInputContainer>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <LabelInputContainer>
                      <Label htmlFor="service">Service</Label>
                      <Select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        data-testid="service-select"
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        {contactServices.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </Select>
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Next.js dashboard project" />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline and budget..."
                      required
                      minLength={10}
                    />
                  </LabelInputContainer>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-500">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group/btn relative flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-70 dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                  >
                    {status === "sending" ? (
                      <>
                        <IconLoader2 size={18} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send message <IconSend size={18} />
                      </>
                    )}
                    <BottomGradient />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
