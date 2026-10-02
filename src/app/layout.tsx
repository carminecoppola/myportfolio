import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const siteUrl = "https://carminecoppola-portfolio.vercel.app";
const title = "Carmine Coppola — Machine learning and HPC";
const description =
  "Research fellow working on edge vision, high-performance computing and the evaluation of machine learning systems. Naples, Italy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: profile.name, title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0c" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: "Research Fellow",
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Naples Parthenope" },
  address: { "@type": "PostalAddress", addressLocality: "Naples", addressCountry: "IT" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Machine learning", "Computer vision", "High-performance computing", "Edge computing"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
