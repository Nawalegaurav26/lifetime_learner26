import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaurav Raju Nawale",
  description: "Dossier on Gaurav Raju Nawale (Lifetime Learner): System Architect, SaaS Founder, and explorer of intelligent automation at ICEM, Pune.",
  openGraph: {
    title: "About | Gaurav Raju Nawale",
    description: "Deep dive into the background, philosophy, and technical focus of Gaurav Raju Nawale — Lifetime Learner & CertiOwn Founder.",
    url: "https://gauravnawale.in/about",
    type: "website",
    images: [
      {
        url: "/gauravnawale.png",
        width: 1200,
        height: 630,
        alt: "About Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Gaurav Raju Nawale",
    description: "System Architect & SaaS Founder. Building the future of automated intelligence. Lifetime Learner.",
    images: ["/gauravnawale.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background pt-32 min-h-screen">
      <About />
    </main>
  );
}
