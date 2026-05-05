import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import CanvasBg from "@/components/CanvasBg";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Raju Nawale | System Architect & SaaS Founder",
  description: "Personal portfolio of Gaurav Raju Nawale, a Computer Engineering student and founder of CertiOwn. Specialized in building automated systems, AI research, and scalable SaaS architectures.",
  keywords: [
    "Gaurav Raju Nawale", 
    "Computer Engineering Portfolio", 
    "CertiOwn Founder", 
    "SaaS Architecture", 
    "Next.js Developer", 
    "System Architect", 
    "AI Research",
    "Automation Systems"
  ],
  authors: [{ name: "Gaurav Raju Nawale" }],
  creator: "Gaurav Raju Nawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravnawale.com", // Replace with actual domain if known
    title: "Gaurav Raju Nawale | System Architect & SaaS Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn.",
    siteName: "Gaurav Raju Nawale Portfolio",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Raju Nawale Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Raju Nawale | System Architect & SaaS Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn.",
    images: ["/portfolio_v3.png"],
  },
  alternates: {
    canonical: "https://gauravnawale.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    // Adding instructions for other major bots
    other: {
      bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      yandex: 'index, follow',
      baiduspider: 'index, follow',
      slurp: 'index, follow', // Yahoo
    },
  },
  verification: {
    google: "google3cb44203118b2807", // Matching the verification file in public/
    // yandex: 'yandex-verification-code',
    // me: 'my-email@example.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gaurav Raju Nawale",
    "alternateName": "Gaurav Nawale",
    "url": "https://gauravnawale.com",
    "image": "https://gauravnawale.com/profile.jpg",
    "sameAs": [
      "https://github.com/Nawalegaurav26",
      "https://linkedin.com/in/nawalegaurav26",
      "https://www.instagram.com/lifetime_learner26/"
    ],
    "jobTitle": "System Architect & SaaS Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "CertiOwn"
    },
    "description": "Founder of CertiOwn and Computer Engineering student at ICEM, Pune. Specialized in building automated systems and AI-driven solutions."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Security and Bot accessibility */}
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CanvasBg />
        <Preloader />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
