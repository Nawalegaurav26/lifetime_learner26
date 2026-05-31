import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UBA ICEM Case Study | Gaurav Raju Nawale",
  description: "Technical case study of the Unnat Bharat Abhiyan (UBA) ICEM Portal.",
  openGraph: {
    title: "UBA ICEM Case Study | Gaurav Raju Nawale",
    description: "Detailed walkthrough of the institutional digital infrastructure, village management, and interactive maps for the UBA ICEM portal.",
    url: "https://gauravnawale.in/projects/uba",
    type: "website",
    images: [
      {
        url: "/projects/uba/01home.png",
        width: 1200,
        height: 630,
        alt: "UBA ICEM Portal Home Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UBA ICEM Case Study | Gaurav Raju Nawale",
    description: "Technical case study of the Unnat Bharat Abhiyan (UBA) ICEM Portal.",
    images: ["/projects/uba/01home.png"],
  },
};

export default function UBALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
