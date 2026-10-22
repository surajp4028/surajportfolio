# Suraj Pandey — Portfolio

Personal portfolio built with **Next.js 16**, **Tailwind CSS v4** and **Aceternity UI** components, with dark and light mode.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where to edit

| What | File |
| --- | --- |
| Name, summary, experience, projects, education, skills text | `src/data/profile.ts` |
| Tech logos (marquee + hero) | `src/components/tech-icons.tsx` |
| Page sections | `src/components/sections/*` |
| Aceternity components (copied from the registry) | `src/components/ui/*` |
| Images (photo, dashboard preview) | `public/images/` |
| Downloadable CV (PDF, generated from `/resume`) | `public/Suraj-Pandey-CV.pdf` |
| Printable resume page | `src/app/resume/page.tsx` → http://localhost:3000/resume |

## Regenerate the CV PDF

The PDF is printed from the `/resume` page, which reads the same data as the site (`src/data/profile.ts`). After editing:

```bash
npm run build && npm start
```

then, in a second terminal:

```bash
npm run cv:pdf
```

It uses Brave by default; set `BROWSER_PATH` to use Chrome instead.

## Contact form

`POST /api/contact` validates the message and emails it to you with [Resend](https://resend.com). Settings live in `.env` (git-ignored):

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=surajp4028@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

`onboarding@resend.dev` works without a verified domain, but Resend then only delivers to the email you signed up to Resend with. To send from your own address (e.g. `hello@vishnuit.co.in`), verify the domain in Resend and change `CONTACT_FROM_EMAIL`. Add the same variables in your hosting provider (e.g. Vercel → Settings → Environment Variables) when you deploy.

### WhatsApp alerts (UltraMsg)

After the email is sent, the same enquiry is sent to your WhatsApp via [UltraMsg](https://ultramsg.com) (best-effort — if it fails, the form still succeeds). Settings in `.env`:

```
ULTRAMSG_INSTANCE_ID=instance123456
ULTRAMSG_TOKEN=...
ULTRAMSG_TO=+91XXXXXXXXXX   # international format, with country code
```

The UltraMsg instance must stay linked to a WhatsApp account (scan its QR under WhatsApp → Linked devices). If alerts stop, check the instance status in the UltraMsg dashboard.

Set `NEXT_PUBLIC_SITE_URL` to your live domain for correct social preview images.
