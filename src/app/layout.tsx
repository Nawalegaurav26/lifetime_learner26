import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import CanvasBg from "@/components/CanvasBg";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport = {
  themeColor: "#0f172a",
};

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
  },
  other: {
    bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    yandex: 'index, follow',
    baiduspider: 'index, follow',
    slurp: 'index, follow',
  },
  manifest: "/manifest.json",
  verification: {
    google: "google3cb44203118b2807",
    other: {
      "msvalidate.01": "BING_VERIFICATION_CODE_HERE",
      "yandex-verification": "YANDEX_VERIFICATION_CODE_HERE",
      "baidu-site-verification": "BAIDU_VERIFICATION_CODE_HERE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
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
      "name": "CertiOwn",
      "url": "https://certiown.com"
    },
    "description": "Founder of CertiOwn and Computer Engineering student at ICEM, Pune. Specialized in building automated systems and AI-driven solutions."
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gaurav Raju Nawale Portfolio",
    "url": "https://gauravnawale.com",
    "author": {
      "@type": "Person",
      "name": "Gaurav Raju Nawale"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <Analytics />
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
