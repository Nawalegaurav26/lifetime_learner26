import type { Metadata } from "next";
import UBAICEMCaseStudy from "@/components/UBAICEMCaseStudy";

export const metadata: Metadata = {
  title: "UBA ICEM Portal | Case Study — Gaurav Raju Nawale",
  description:
    "An immersive case study of the UBA ICEM Portal — a full-stack institutional digital infrastructure platform built for the Unnat Bharat Abhiyan initiative at ICEM, Pune.",
  openGraph: {
    title: "UBA ICEM Portal | Case Study",
    description:
      "Full-stack institutional platform for Unnat Bharat Abhiyan. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.",
    url: "https://gauravnawale.com/projects/uba-icem",
    type: "website",
    images: [{ url: "/projects/uba/01home.png", width: 1200, height: 630, alt: "UBA ICEM Portal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UBA ICEM Portal | Case Study — Gaurav Raju Nawale",
    description: "Full-stack institutional platform. Next.js · TypeScript · Framer Motion.",
    images: ["/projects/uba/01home.png"],
  },
  alternates: { canonical: "https://gauravnawale.com/projects/uba-icem" },
};

export default function UBAICEMPage() {
  return <UBAICEMCaseStudy />;
}
