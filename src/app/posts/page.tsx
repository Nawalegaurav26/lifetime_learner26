import Posts from "@/components/Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intel & Archive | Gaurav Raju Nawale",
  description: "Technical articles, system insights, and research papers authored by Gaurav Raju Nawale.",
};

export default function PostsPage() {
  return (
    <main className="bg-slate-950 pt-32 min-h-screen">
      <Posts />
    </main>
  );
}
