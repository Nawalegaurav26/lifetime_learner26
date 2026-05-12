import type { Metadata } from "next";
import RecognitionArchive from "@/components/RecognitionArchive";

export const metadata: Metadata = {
  title: "Recognitions | Gaurav Raju Nawale",
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
    "Dr. Nilesh Uke Appreciation",
    "lifetime-learner26 recognitions",
    "Gaurav Raju Nawale Awards",
    "ICEM Technical Secretary Recognition",
    "Academic Milestones Gaurav Nawale"
  ],
  openGraph: {
    title: "Recognitions | Gaurav Raju Nawale",
    description:
      "Institutional recognitions and engineering milestones from SPPU and ICEM — verified archive.",
    url: "https://lifetime-learner26.netlify.app/achievements",
    images: [
      {
        url: "/portfolio_v3.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Nawale Recognitions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recognitions | Gaurav Raju Nawale",
    description:
      "Institutional recognitions and engineering milestones from SPPU and ICEM — verified archive.",
    images: ["/portfolio_v3.png"],
  },
  alternates: {
    canonical: "https://lifetime-learner26.netlify.app/achievements",
  },
};

export default function AchievementsPage() {
  return <RecognitionArchive />;
}
