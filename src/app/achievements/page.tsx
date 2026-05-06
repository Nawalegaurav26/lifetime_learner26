import type { Metadata } from "next";
import RecognitionArchive from "@/components/RecognitionArchive";

export const metadata: Metadata = {
  title: "Recognition Archive | Gaurav Raju Nawale",
  description:
    "Verified institutional recognitions, technical appreciations, and documented milestones from SPPU and ICEM representing real-world engineering contributions by Gaurav Raju Nawale, Founder of CertiOwn.",
  keywords: [
    "Gaurav Nawale Recognition",
    "CertiOwn Appreciation Letter",
    "SPPU Letter of Appreciation",
    "ICEM Certificate",
    "Engineering Recognition",
    "Best Library User Award",
    "Systems Engineer Awards",
  ],
  openGraph: {
    title: "Recognition Archive | Gaurav Raju Nawale",
    description:
      "Institutional recognitions and engineering milestones from SPPU and ICEM — verified archive.",
    url: "https://gauravnawale.com/achievements",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Nawale Recognition Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recognition Archive | Gaurav Raju Nawale",
    description:
      "Institutional recognitions and engineering milestones from SPPU and ICEM — verified archive.",
    images: ["/portfolio_v3.png"],
  },
  alternates: {
    canonical: "https://gauravnawale.com/achievements",
  },
};

export default function AchievementsPage() {
  return <RecognitionArchive />;
}
