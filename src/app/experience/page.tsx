import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Skills | Gaurav Raju Nawale",
  description: "Professional experience and technical skill set of Gaurav Raju Nawale, including software development and system architecture.",
};

export default function ExperiencePage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <Experience />
      <Skills />
    </main>
  );
}
