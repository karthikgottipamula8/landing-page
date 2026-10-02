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
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jobhikeguide.com"),
  title: "Job Hike Guide for Telugu IT Professionals | Bhargavi Papolu",
  description:
    "A practical, art-directed digital guide for Telugu IT professionals navigating appraisals, salary conversations, job switches, and career growth.",
  keywords: [
    "Job Hike Guide",
    "Bhargavi Papolu",
    "Telugu IT Professionals",
    "IT Career Growth",
    "Salary Hike Telugu",
    "Appraisal Preparation",
    "Software Developer Career",
    "Salary Negotiation India",
  ],
  authors: [{ name: "Bhargavi Papolu" }],
  openGraph: {
    title: "Job Hike Guide for Telugu IT Professionals | Bhargavi Papolu",
    description:
      "A practical, art-directed digital guide for Telugu IT professionals navigating appraisals, salary conversations, job switches, and career growth.",
    url: "https://jobhikeguide.com",
    siteName: "Bhargavi Papolu - Job Hike Guide",
    images: [
      {
        url: "/assets/bhargavi-cutout.png",
        width: 1024,
        height: 1024,
        alt: "Bhargavi Papolu - Job Hike Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Hike Guide for Telugu IT Professionals | Bhargavi Papolu",
    description:
      "A practical career & salary guide for Telugu IT professionals by Bhargavi Papolu.",
    images: ["/assets/bhargavi-cutout.png"],
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
        {/* Subtle paper grain texture overlay across entire site */}
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
