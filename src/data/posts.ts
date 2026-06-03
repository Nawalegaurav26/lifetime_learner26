import { ReactNode } from "react";

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
  content?: ReactNode;
}

export const posts: Post[] = [
  {
    title: "Helping Engineering Students Prepare for GATE More Effectively",
    excerpt: "Preparing for GATE is not just about studying hard—it's about studying smart, staying consistent, and following the right roadmap.",
    date: "JUN 03, 2026",
    readTime: "3 MIN READ",
    category: "ENGINEERING",
    slug: "gate-preparation-effectively",
    image: "/post/gfgtask_gate_01.png",
  }
];
