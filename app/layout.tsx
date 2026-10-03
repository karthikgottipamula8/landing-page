import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { PRODUCT } from "@/config/product";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#181818",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Salary Worth & Negotiation Playbook | Know Your Number Before HR Gives You Theirs",
  description:
    "Find your realistic market salary, calculate your negotiation range, build your evidence, and know exactly what to say when asking HR for more. Practical worksheets, 5-Number method & HR scripts.",
  keywords: [
    "Salary Worth Playbook",
    "Salary Negotiation India",
    "Appraisal Preparation",
    "Expected CTC",
    "5-Number Salary Method",
    "Salary Hike Scripts",
    "HR Negotiation India",
    "Job Switch CTC",
  ],
  authors: [{ name: "Salary Worth & Negotiation Playbook" }],
  openGraph: {
    title: "Salary Worth & Negotiation Playbook | Know Your Number Before HR Gives You Theirs",
    description:
      "Find your realistic market salary, calculate your negotiation range, build your evidence, and know exactly what to say when asking HR for more.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Worth & Negotiation Playbook",
    description: "Know your number before HR gives you theirs. Instant digital access for ₹299.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${jakarta.variable} ${caveat.variable}`}>
      <body className="font-body selection:bg-coral selection:text-white bg-paper text-charcoal antialiased">
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
