import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | Gaurav Raju Nawale",
  description: "Establish a communication uplink with Gaurav Raju Nawale. Available for system architecture consulting and startup collaborations.",
  openGraph: {
    title: "Connect | Gaurav Raju Nawale",
    description: "Open communication channels for technical inquiries and professional partnerships.",
    url: "https://gauravnawale.com/contact",
    type: "website",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "Contact Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | Gaurav Raju Nawale",
    description: "Uplink active. Reach out for collaborations and system architecture projects.",
    images: ["/portfolio_v3.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <Contact />
    </main>
  );
}
