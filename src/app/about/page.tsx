import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaurav Raju Nawale",
  description: "Dossier on Gaurav Raju Nawale: System Architect, SaaS Founder, and explorer of intelligent automation.",
  openGraph: {
    title: "About | Gaurav Raju Nawale",
    description: "Deep dive into the background, philosophy, and technical focus of Gaurav Raju Nawale.",
    url: "https://gauravnawale.com/about",
    type: "website",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "About Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Gaurav Raju Nawale",
    description: "System Architect & SaaS Founder. Building the future of automated intelligence.",
    images: ["/portfolio_v3.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <About />
    </main>
  );
}
