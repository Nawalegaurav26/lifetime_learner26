"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostDetail() {
  const params = useParams();
  const slug = params.slug as string;

  // This would normally come from a CMS or local markdown files
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full">
                <Tag size={12} /> Technology
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Calendar size={12} /> May 2024
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Clock size={12} /> 10 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {title}
            </h1>

            <div className="mt-16 prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                This is a detailed insight into {title.toLowerCase()}. As a Computer Engineering student and founder, 
                bridging the gap between scalable systems and intelligent automation is at the core of my research.
              </p>
              
              <div className="my-12 h-[400px] bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-center text-slate-300 font-bold italic">
                [ Dynamic Content Visualization / Technical Diagram ]
              </div>

              <h2 className="text-2xl font-black text-slate-900 mt-16 mb-6 uppercase tracking-tight">Architectural Vision</h2>
              <p className="text-slate-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <blockquote className="my-12 pl-8 border-l-4 border-primary text-2xl font-bold text-slate-800 italic">
                "Intelligence is not just about complexity, but about the seamless integration of systems that solve real-world problems."
              </blockquote>

              <p className="text-slate-500 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
