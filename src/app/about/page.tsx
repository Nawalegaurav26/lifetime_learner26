import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaurav Raju Nawale",
  description: "Learn more about Gaurav Raju Nawale, his background in Computer Engineering, and his work as the founder of CertiOwn.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <About />
    </main>
  );
}
