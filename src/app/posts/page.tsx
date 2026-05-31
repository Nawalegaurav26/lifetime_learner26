import Posts from "@/components/Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intel & Archive | Gaurav Raju Nawale",
  description: "Dive into technical articles on SaaS architecture, AI research, and system automation.",
  openGraph: {
    title: "Intel & Archive | Gaurav Raju Nawale",
    description: "Insights and intelligence on high-performance system building and startup engineering.",
    url: "https://gauravnawale.in/posts",
    type: "website",
    images: [
      {
        url: "/gauravnawale.png",
        width: 1200,
        height: 630,
        alt: "Insights by Gaurav Raju Nawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intel & Archive | Gaurav Raju Nawale",
    description: "Access technical archives and research notes on digital system innovation.",
    images: ["/gauravnawale.png"],
  },
};

export default function PostsPage() {
  return (
    <main className="bg-background pt-32 min-h-screen">
      <Posts />
    </main>
  );
}
