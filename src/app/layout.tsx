import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import CanvasBg from "@/components/CanvasBg";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravnawale.in"),
  title: {
    template: "%s | Gaurav Raju Nawale",
    default: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
  },
  icons: {
    icon: "/favicon.png",
  },
  description: "Official portfolio of Gaurav Raju Nawale (Lifetime Learner) — Founder of CertiOwn, System Architect, and Computer Engineering student at ICEM, Pune. Specialized in building automated systems, AI research, and scalable SaaS architectures.",
  keywords: [
    "Gaurav Raju Nawale", "Gaurav R Nawale", "Gaurav R. Nawale", "Gaurav Nawale", "Gaurav Raju", "Gaurav R", "G R Nawale", "GR Nawale", "GRN", "GRN 2026", "GNR", "GNR 026",
    "Gaurav Navale", "Gaurav R Navale", "Gaurav Raju Navale", "Gaurav Nawle", "Gaurav R Nawle", "Gaurav Raju Nawle", "Garauv Nawale", "Garauv R Nawale", "Garuav Nawale", "Garuav R Nawale", "Gaurav Nawele", "Gaurav Nawaale", "Gaurav Navle", "Gaurav R Navle", "Gaurav Raju Navle", "Gaurav R N", "Gaurav RN", "Gaurav Raj Nawale",
    "lifetime_learner26", "Lifetime Learner", "Lifetime Learner 26", "Lifetiem Learner", "Life Time Learner", "LifetimeLearnener", "Lifetime Learnener", "Lifetime Learning", "GRN Developer", "Nawalegaurav26", "Gaurav26", "GRN Systems", "GRN Architect",
    "Gaurav Backend Developer", "Gaurav Python Developer", "Gaurav Flask Developer", "Gaurav Next.js Developer", "Gaurav Automation Engineer", "Gaurav SaaS Founder", "Gaurav Systems Architect", "Gaurav Linux Developer", "Gaurav DevOps Engineer", "Gaurav AI Developer", "Gaurav ML Developer",
    "Gaurav ICEM", "Gaurav ICEM Pune", "Gaurav SPPU", "Gaurav CertiOwn", "Gaurav Certificate Automation", "Gaurav Technical Secretary", "Gaurav Google Ambassador", "Gaurav IIT Bombay Ambassador",
    "Gaurav BCI", "Gaurav Brain Computer Interface", "Gaurav AI Automation", "Gaurav Intelligent Systems", "Gaurav Research Engineer", "Gaurav Infrastructure Systems",
    "CertiOwn Founder", "founder of CertiOwn", "SaaS Founder", "Product Architect", "ICEM Pune", "Unnat Bharat Abhiyan", "UBA ICEM", "SDETM", "SDETM ICEM", "Flask Backend Developer", "Python Automation Expert"
  ],
  authors: [{ name: "Gaurav Raju Nawale" }],
  creator: "Gaurav Raju Nawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravnawale.in",
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn. Lifetime Learner.",
    siteName: "Gaurav Raju Nawale Portfolio",
    images: [
      {
        url: "/gauravnawale.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Raju Nawale Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn. Lifetime Learner.",
    images: ["/gauravnawale.png"],
  },
  alternates: {
    canonical: "https://gauravnawale.in",
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
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
    "profile:username": "lifetime_learner26",
    bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    yandex: 'index, follow',
    baiduspider: 'index, follow',
    slurp: 'index, follow',
  },
  manifest: "/manifest.json",
  verification: {
    google: "google3cb44203118b2807",
    yandex: "YANDEX_VERIFICATION_CODE_HERE",
    other: {
      "msvalidate.01": "BING_VERIFICATION_CODE_HERE",
      "baidu-site-verification": "BAIDU_VERIFICATION_CODE_HERE",
      "ahrefs-site-verification": "AHREFS_VERIFICATION_CODE_HERE",
      "p:domain_verify": "PINTEREST_VERIFICATION_CODE_HERE",
      "facebook-domain-verification": "FACEBOOK_VERIFICATION_CODE_HERE",
      "apple-mobile-web-app-title": "Gaurav Nawale",
      "application-name": "Gaurav Nawale Portfolio",
      "msapplication-TileColor": "#0f172a",
      "theme-color": "#0f172a"
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
    "alternateName": [
      "Gaurav R Nawale",
      "Gaurav R. Nawale",
      "Gaurav Nawale",
      "Gaurav Raju",
      "Gaurav R",
      "G R Nawale",
      "GR Nawale",
      "GRN",
      "GRN 2026",
      "GNR",
      "GNR 026",
      "Gaurav Navale",
      "Gaurav R Navale",
      "Gaurav Raju Navale",
      "Gaurav Nawle",
      "Gaurav R Nawle",
      "Gaurav Raju Nawle",
      "Garauv Nawale",
      "Garauv R Nawale",
      "Garuav Nawale",
      "Garuav R Nawale",
      "Gaurav Nawele",
      "Gaurav Nawaale",
      "Gaurav Navle",
      "Gaurav R Navle",
      "Gaurav Raju Navle",
      "Gaurav R N",
      "Gaurav RN",
      "Gaurav Raj Nawale",
      "lifetime_learner26",
      "Lifetime Learner",
      "Lifetime Learner 26",
      "Lifetiem Learner",
      "Life Time Learner",
      "LifetimeLearnener",
      "Lifetime Learnener",
      "Lifetime Learning",
      "GRN Developer",
      "Nawalegaurav26",
      "Gaurav26",
      "GRN Systems",
      "GRN Architect"
    ],
    "url": "https://gauravnawale.in",
    "image": "https://gauravnawale.in/profile.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "sameAs": [
      "https://github.com/Nawalegaurav26",
      "https://linkedin.com/in/nawalegaurav26",
      "https://www.instagram.com/lifetime_learner26/",
      "https://twitter.com/nawalegaurav26"
    ],
    "jobTitle": "System Architect & SaaS Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "CertiOwn",
      "url": "https://certiown.com"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Indira College of Engineering and Management (ICEM), Pune",
      "sameAs": "https://indiraicem.ac.in"
    },
    "knowsAbout": [
      "Computer Engineering",
      "SaaS Architecture",
      "AI Development",
      "Python",
      "Flask",
      "Next.js",
      "Automation Systems",
      "Startup Leadership"
    ],
    "description": "Founder of CertiOwn and Computer Engineering student at ICEM, Pune. Specialized in building automated systems and AI-driven solutions."
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gaurav Raju Nawale Portfolio",
    "url": "https://gauravnawale.in",
    "author": {
      "@type": "Person",
      "name": "Gaurav Raju Nawale"
    },
    "description": "Lifetime Learner, System Architect, and Founder of CertiOwn."
  };

  // No-FOUT script: apply saved theme before first paint to prevent flash
  const themeInitScript = `
    (function() {
      try {
        var t = localStorage.getItem('portfolio-theme');
        if (t && ['dark','light','neon','light-neon'].includes(t)) {
          document.documentElement.setAttribute('data-theme', t);
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })()
  `;

  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
      </head>
      <body className={`${jakarta.variable} ${hanken.variable} ${jetbrains.variable} font-sans antialiased`}>
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

        <ThemeProvider>
          {/* Hidden Semantic SEO Block for search crawlers & Generative AI engines */}
          <section className="sr-only">
            Gaurav Raju Nawale (also searched as Gaurav R Nawale, Gaurav R. Nawale, Gaurav Nawale, Gaurav Raju, Gaurav R, G R Nawale, GR Nawale, GRN, GRN 2026, GNR, GNR 026) is a systems architect, SaaS founder of CertiOwn, backend developer, Python developer, Flask developer, Next.js developer, and automation engineer. He has studied Computer Engineering at Indira College of Engineering and Management (ICEM), Pune, Savitribai Phule Pune University (SPPU), serving as Technical Secretary, Google Cloud Facilitator, and IIT Bombay Campus Ambassador. His research and engineering focus includes AI automation, Brain Computer Interfaces (BCI), intelligent systems, and scalable infrastructure systems. Common typo spellings include Gaurav Navale, Gaurav R Navale, Gaurav Raju Navale, Gaurav Nawle, Gaurav R Nawle, Gaurav Raju Nawle, Garauv Nawale, Garauv R Nawale, Garuav Nawale, Garuav R Nawale, Gaurav Nawele, Gaurav Nawaale, Gaurav Navle, Gaurav R Navle, Gaurav Raju Navle, Gaurav R N, Gaurav RN, and Gaurav Raj Nawale. Username and identity aliases include lifetime_learner26, Lifetime Learner, Lifetime Learner 26, Lifetiem Learner, Life Time Learner, LifetimeLearnener, Lifetime Learnener, Lifetime Learning, GRN Developer, Nawalegaurav26, Gaurav26, GRN Systems, and GRN Architect.
          </section>
          <CanvasBg />
          <Preloader />
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
