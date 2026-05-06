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
  title: {
    template: "%s | Gaurav Raju Nawale",
    default: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
  },
  description: "Official portfolio of Gaurav Raju Nawale (Lifetime Learner) — Founder of CertiOwn, System Architect, and Computer Engineering student at ICEM, Pune. Specialized in building automated systems, AI research, and scalable SaaS architectures.",
  keywords: [
    "Gaurav Raju Nawale", "Nawale Gaurav Raju", "Mr Gaurav Raju Nawale", "Gaurav Nawale", "Gaurav Navale", "Gaurav Navle", "Garuav Nawale", "Garuav Navale", "Garuav Navle", "Gaurav R Nawale", "Nawale Gaurav", "Gaurav Raju", "Gaurav Nawle", "Gaurav Nawal", "Mr Gaurav Nawale", "Engineer Gaurav Nawale", "Developer Gaurav Nawale",
    "nawalegaurav26", "nawalegaurav2006", "gaurav.nawale", "gauravnawale", "gaurav_nawale", "nawale_gaurav", "gauravrajunawale", "gauravraju26", "lifetimelearner26", "lifetime_learner26", "lifetime-learner26", "lifetime learner 26", "Lifetime Learner", "Lifetime Learner 26",
    "CertiOwn", "CertiOwn Founder", "Founder of CertiOwn", "CertiOwn Developer", "Certificate Management System", "Certificate Portal Developer", "Certificate Automation System", "Academic Certificate Platform", "Digital Certificate Verification", "Certificate Verification Portal",
    "ICEM", "ICEM Pune", "Indira College of Engineering and Management", "Indira College Pune", "Indira College of Engineering and Management Pune", "ICEM Student", "ICEM Developer", "ICEM Technical Secretary", "Technical Secretary ICEM", "Computer Engineering ICEM", "ICEM Innovation", "ICEM Projects",
    "UBA ICEM", "Unnat Bharat Abhiyan", "Unnat Bharat Abhiyan ICEM", "UBA ICEM Pune", "UBA Pune", "ICEM UBA Team", "Unnat Bharat Abhiyan Pune",
    "SDETM", "SDETM ICEM", "SDETM 2026", "Sustainable Developments in Engineering Technology and Management", "Sustainable Developments in Engineering, Technology & Management", "International Conference SDETM", "ICEM Conference", "ICEM Pune Conference", "Engineering Conference Pune", "Research Conference ICEM", "SDETM Pune", "SDETM Website", "SDETM ICEM Official", "Research Paper Conference ICEM",
    "Student Developer India", "Student Entrepreneur", "Startup Founder", "Startup Builder", "Research Student", "AI Developer", "Python Developer", "Flask Developer", "Web Developer India", "Full Stack Developer", "Modern Web Developer", "Software Developer India", "Developer Portfolio", "Portfolio Website", "Engineering Student Maharashtra", "Computer Engineering Student", "Researcher India", "Tech Entrepreneur India", "Innovation Student", "Open Source Developer", "Future Researcher",
    "Pune Developer", "Maharashtra Developer", "Nashik Developer", "India Developer", "SPPU Student", "Savitribai Phule Pune University", "SPPU Developer", "College Startup Founder", "Student Founder Maharashtra",
    "Admin Portal Developer", "Event Management System", "Conference Website Developer", "Research Portal Developer", "Academic Portal Developer", "Certificate System Developer",
    "Lifetime Learner Developer", "Lifetime Learner Portfolio", "Lifetime Learner India", "Lifetime Learner Student", "Tech Community Leader", "Young Researcher India", "Engineering Innovator", "Student Innovator", "Digital Innovation Developer"
  ],
  authors: [{ name: "Gaurav Raju Nawale" }],
  creator: "Gaurav Raju Nawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravnawale.com",
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn. Lifetime Learner.",
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
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & CertiOwn Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn. Lifetime Learner.",
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
    "alternateName": [
      "Gaurav Nawale",
      "Nawale Gaurav Raju",
      "Lifetime Learner",
      "lifetime_learner26",
      "nawalegaurav26"
    ],
    "url": "https://gauravnawale.com",
    "image": "https://gauravnawale.com/profile.jpg",
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
    "url": "https://gauravnawale.com",
    "author": {
      "@type": "Person",
      "name": "Gaurav Raju Nawale"
    },
    "description": "Lifetime Learner, System Architect, and Founder of CertiOwn."
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
