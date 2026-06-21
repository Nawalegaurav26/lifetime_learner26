import Hero from "@/components/Hero";
import About from "@/components/AboutHome";
import Projects from "@/components/ProjectsHome";
import SocialProof from "@/components/SocialProof";
import Posts from "@/components/Posts";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & SaaS Founder",
  description: "Official portfolio of Gaurav Raju Nawale (Lifetime Learner). Explorer of Intelligence. Builder of Systems. Founder of CertiOwn.",
  openGraph: {
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & SaaS Founder",
    description: "Explorer of Intelligence. Builder of Systems. Founder of CertiOwn. Lifetime Learner.",
    url: "https://www.gauravnawale.in",
    type: "website",
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
    title: "Gaurav Raju Nawale | Lifetime Learner, System Architect & SaaS Founder",
    description: "System Architect & SaaS Founder. Building autonomous solutions. Lifetime Learner.",
    images: ["/gauravnawale.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <SocialProof />
      <Posts />
      <Newsletter />
      <Contact />
    </main>
  );
}
