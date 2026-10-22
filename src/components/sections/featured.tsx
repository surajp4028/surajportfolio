"use client";
import Image from "next/image";
import {
  IconChecklist,
  IconFileCertificate,
  IconShieldCheck,
} from "@tabler/icons-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { PlaneWindowCard } from "@/components/plane-window-card";
import { PgBeamsCard } from "@/components/pg-beams-card";
import dynamic from "next/dynamic";

// Client-only: react-syntax-highlighter's line-number styles don't hydrate cleanly.
const CodeBlock = dynamic(
  () => import("@/components/ui/code-block").then((m) => m.CodeBlock),
  {
    ssr: false,
    loading: () => (
      <div className="h-[547px] w-full animate-pulse rounded-lg bg-slate-900" />
    ),
  },
);
import { SectionHeading } from "@/components/section-heading";

const Panel = ({
  icon: Icon,
  stat,
  label,
}: {
  icon: typeof IconChecklist;
  stat: string;
  label: string;
}) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white">
    <Icon size={44} stroke={1.5} />
    <p className="text-4xl font-bold">{stat}</p>
    <p className="text-sm text-white/80">{label}</p>
  </div>
);

// Screenshots have merchant names, IDs and faces blurred before publishing.
const Screen = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-full w-full bg-white">
    <Image src={src} alt={alt} fill sizes="448px" className="object-cover object-left-top" />
  </div>
);

const steps = [
  {
    title: "Merchant application journey",
    description:
      "Multi-step Next.js onboarding: business details, KYC documents, bank account and agreement — with autosave and real-time status for every application.",
    content: <Screen src="/images/projects/onboarding-merchant.webp" alt="Merchant onboarding dashboard" />,
  },
  {
    title: "Maker → Checker → Approver",
    description:
      "Department queues with role-based access. Makers complete, checkers verify, approvers sign off — discrepancies flow back with comments.",
    content: <Screen src="/images/projects/onboarding-applications.webp" alt="Applications queue" />,
  },
  {
    title: "Risk, block & unblock",
    description:
      "Risk queue for flagged merchants, blocked applications and login blocks, plus an unblock-pending workflow so nothing slips through.",
    content: <Panel icon={IconShieldCheck} stat="Risk-first" label="Blocked · Unblock pending · Rejected" />,
  },
  {
    title: "PG & bank push APIs",
    description:
      "Approved merchants are pushed to the payment gateway to create PG merchant IDs and to the bank for account verification — tracked as follow-ups.",
    content: <Panel icon={IconFileCertificate} stat="Auto push" label="PG merchant ID · Bank verified" />,
  },
  {
    title: "PG health & daily status email",
    description:
      "Live PG-health indicator, review-aging tracking and an automated daily status email to the team with every queue's numbers.",
    content: <Screen src="/images/projects/onboarding-admin.webp" alt="Admin dashboard with queues and follow-ups" />,
  },
];

const webhookCode = `// Verify & process a payment-gateway webhook (Next.js route handler)
import crypto from "node:crypto";

export async function POST(req: Request) {
  const raw = await req.text();
  const signature = req.headers.get("x-pg-signature") ?? "";
  const expected = crypto
    .createHmac("sha256", process.env.PG_WEBHOOK_SECRET!)
    .update(raw)
    .digest("hex");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const event = JSON.parse(raw);
  switch (event.type) {
    case "payment.captured": await markOrderPaid(event.data); break;
    case "refund.processed": await markRefunded(event.data); break;
    case "merchant.activated": await notifyMerchant(event.data); break;
  }
  return Response.json({ ok: true });
}`;

const pushCode = `// Push an approved merchant to the PG and the bank
export async function pushApprovedMerchant(id: string) {
  const app = await db.application.findUnique({ where: { id } });
  if (app?.status !== "APPROVED") throw new Error("Not approved");

  const [pg, bank] = await Promise.allSettled([
    pgClient.createMerchant(toPgPayload(app)),
    bankClient.verifyAccount(app.bankAccount),
  ]);

  await db.application.update({
    where: { id },
    data: {
      pgMerchantId: pg.status === "fulfilled" ? pg.value.merchantId : null,
      bankVerified: bank.status === "fulfilled" && bank.value.verified,
    },
  });
}`;

export function Featured() {
  return (
    <section id="featured" className="relative mx-auto max-w-7xl px-4 py-24">
      <SectionHeading
        eyebrow="Featured case study"
        title="Merchant onboarding for a payment gateway"
        description="As Fullstack Developer at I Money Pay Pvt. Ltd. (a payment gateway company), I build the platform that takes a merchant from sign-up to live payments."
      />

      <StickyScroll content={steps} contentClassName="h-72 w-[28rem]" />

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PgBeamsCard className="col-span-1 h-[420px] md:h-[420px]" />
        <PlaneWindowCard className="col-span-1 h-[420px] lg:col-span-2" />
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm text-neutral-500">
          Illustrative snippets of the patterns I use (not production code).
        </p>
        <CodeBlock
          language="typescript"
          filename="payments.ts"
          tabs={[
            { name: "webhook/route.ts", code: webhookCode, language: "typescript", highlightLines: [5, 6, 7, 8, 9, 10] },
            { name: "push-merchant.ts", code: pushCode, language: "typescript", highlightLines: [6, 7, 8, 9] },
          ]}
        />
      </div>
    </section>
  );
}
