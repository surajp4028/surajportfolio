import type { Metadata } from "next";
import Image from "next/image";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Suraj Pandey — Resume",
  description: "Printable resume of Suraj Pandey, Fullstack Developer.",
};

const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Next.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Aceternity UI", "Bootstrap"] },
  { group: "Backend & APIs", items: ["Node.js", "Express", "PHP", "REST APIs", "Webhooks", "JWT auth", "Better Auth"] },
  { group: "Payments", items: ["PG integration", "PG plugins", "Refund flows", "Merchant onboarding / KYC", "Razorpay"] },
  { group: "Data & Cloud", items: ["MySQL", "MongoDB", "AWS S3", "Git & GitHub"] },
  { group: "CMS & E-commerce", items: ["WordPress", "WooCommerce", "Shopify"] },
  { group: "Graphic & UI/UX Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Premiere Pro"] },
  { group: "Testing & Tools", items: ["Postman", "UAT / API testing", "JIRA"] },
];

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 border-b border-neutral-200 pb-1 text-[11px] font-bold tracking-[0.2em] text-sky-700 uppercase">
    {children}
  </h2>
);

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-100 py-8 text-neutral-900 print:bg-white print:py-0">
      <style>{`@page { size: A4; margin: 14mm 14mm; } @media print { html, body { background: #fff !important; color-scheme: light !important; } }`}</style>
      <article className="mx-auto max-w-[210mm] bg-white p-10 text-[12.5px] leading-relaxed shadow-xl print:max-w-none print:p-0 print:shadow-none">
        <header className="flex items-center gap-6 border-b-2 border-neutral-900 pb-5">
          <Image
            src={profile.cvPhoto}
            alt={profile.name}
            width={88}
            height={88}
            // Full-resolution original so the photo stays sharp when the PDF is zoomed.
            unoptimized
            className="h-[88px] w-[88px] rounded-xl object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
            <p className="text-base font-semibold text-sky-700">{profile.role}</p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-neutral-600">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>linkedin.com/in/suraj-pandey-225459197</a>
              <a href={profile.website}>vishnuit.co.in</a>
            </p>
          </div>
        </header>

        <section className="mt-5">
          <H>Summary</H>
          <p className="text-neutral-700">{profile.summary}</p>
        </section>

        <div className="mt-5 grid grid-cols-[1fr_200px] gap-7">
          <section>
            <H>Experience</H>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={job.company} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[14px] font-bold">{job.role}</h3>
                    <span className="shrink-0 text-[11px] text-neutral-500">
                      {job.place.split("·").slice(1).join("·").trim()}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-sky-700">{job.company}</p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-neutral-700 marker:text-sky-600">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <section>
              <H>Skills</H>
              <div className="space-y-2.5">
                {skills.map((s) => (
                  <div key={s.group}>
                    <p className="text-[11px] font-bold">{s.group}</p>
                    <p className="text-[11px] text-neutral-600">{s.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <H>Education</H>
              <div className="space-y-2.5">
                {education.map((e) => (
                  <div key={e.title}>
                    <p className="text-[11px] font-bold">{e.title}</p>
                    <p className="text-[11px] text-neutral-600">{e.school}</p>
                    <p className="text-[11px] text-neutral-500">
                      {e.period} · {e.score}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <H>Projects</H>
              <ul className="space-y-1.5 text-[11px]">
                {projects.filter((p) => p.href).slice(0, 8).map((p) => (
                  <li key={p.title}>
                    <span className="font-bold">{p.title}</span>
                    {p.href && (
                      <a href={p.href} className="block text-sky-700">
                        {p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
