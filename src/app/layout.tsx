import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SplashScreen } from "@/components/splash-screen";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Suraj Pandey — Fullstack Developer",
  description:
    "Portfolio of Suraj Pandey, Fullstack Developer from Delhi — Next.js, Node.js, PHP, payment gateways, dashboards and premium UI.",
  openGraph: {
    title: "Suraj Pandey — Fullstack Developer",
    description:
      "Next.js, Node.js, payment gateways, trading platforms and premium dashboards.",
    images: ["/images/suraj-portrait.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans dark:bg-black">
        <ThemeProvider>
          <SplashScreen />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
