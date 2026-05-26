import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Tech Stack | Gaurav Raju Nawale",
  description: "Professional timeline and technical capabilities of Gaurav Raju Nawale.",
  openGraph: {
    title: "Experience & Tech Stack | Gaurav Raju Nawale",
    description: "Overview of professional achievements and the core technologies used to build scalable systems.",
    url: "https://lifetime-learner26.netlify.app/experience",
    type: "website",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "Experience of Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Tech Stack | Gaurav Raju Nawale",
    description: "System Architect skill set and professional background.",
    images: ["/portfolio_v3.png"],
  },
};

export default function ExperiencePage() {
  return (
    <main className="bg-background pt-32 min-h-screen">
      <Experience />
      <Skills />
    </main>
  );
}
