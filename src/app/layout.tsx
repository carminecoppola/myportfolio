import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://carminecoppola.dev"; // Update with your domain
const siteTitle = "Carmine Coppola - ML & HPC Engineer";
const siteDescription =
  "Professional portfolio of Carmine Coppola. Machine Learning, Computer Vision, HPC, GPU Optimization, and AI Research Engineer.";
const siteImage = `${siteUrl}/og-image.jpg`; // Optional: add OG image later

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [
    {
      name: "Carmine Coppola",
      url: "https://github.com/carminecoppola",
    },
  ],
  keywords: [
    "Machine Learning",
    "Computer Vision",
    "HPC",
    "GPU Optimization",
    "AI Research",
    "Scientific Computing",
    "Software Engineering",
    "Deep Learning",
    "Neural Networks",
    "Python",
    "C++",
    "TensorFlow",
    "CUDA",
    "MPI",
  ],
  creator: "Carmine Coppola",
  category: "Technology, Research, Engineering",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@carminecoppola", // Update with your Twitter handle if you have one
    images: [siteImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteTitle,
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body>
        <div className="min-h-screen bg-black text-zinc-100">
          {children}
        </div>
      </body>
    </html>
  );
}
