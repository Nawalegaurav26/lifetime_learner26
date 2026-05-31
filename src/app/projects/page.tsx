import ProjectsFull from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Dossier | Gaurav Raju Nawale",
  description: "Explore the technical architecture of CertiOwn, automated mailing systems, and institutional portals.",
  openGraph: {
    title: "Projects Dossier | Gaurav Raju Nawale",
    description: "A showcase of high-performance systems and SaaS solutions built with precision.",
    url: "https://gauravnawale.in/projects",
    type: "website",
    images: [
      {
        url: "/gauravnawale.png",
        width: 1200,
        height: 630,
        alt: "Projects by Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Dossier | Gaurav Raju Nawale",
    description: "Building the digital ecosystem. Check out my latest system architectures.",
    images: ["/gauravnawale.png"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-background pt-32 min-h-screen">
      <ProjectsFull />
    </main>
  );
}
