import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDETM ICEM Case Study | Gaurav Raju Nawale",
  description: "Technical case study of the SDETM ICEM International Conference Portal.",
  openGraph: {
    title: "SDETM ICEM Case Study | Gaurav Raju Nawale",
    description: "Detailed walkthrough of the digital infrastructure, SEO optimization, and responsive design for the SDETM ICEM portal.",
    url: "https://www.gauravnawale.in/projects/sdetm",
    type: "website",
    images: [
      {
        url: "/projects/sdetm/HOME PAGE.png",
        width: 1200,
        height: 630,
        alt: "SDETM ICEM Portal Home Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDETM ICEM Case Study | Gaurav Raju Nawale",
    description: "Technical case study of the SDETM ICEM International Conference Portal.",
    images: ["/projects/sdetm/HOME PAGE.png"],
  },
};

export default function SDETMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
