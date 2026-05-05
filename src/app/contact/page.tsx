import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gaurav Raju Nawale",
  description: "Get in touch with Gaurav Raju Nawale for collaborations, system architecture discussions, or professional inquiries.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <Contact />
    </main>
  );
}
