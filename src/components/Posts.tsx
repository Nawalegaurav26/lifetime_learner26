"use client";

import { motion } from "framer-motion";
import { ArrowRight, Share2, BookOpen, Search } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Scaling CertiOwn: The Journey of 100 Users",
    excerpt: "Insights into building a secure certificate issuance platform and overcoming initial scaling hurdles.",
    date: "MAY 2024",
    readTime: "5 MIN READ",
    category: "STARTUP",
    slug: "scaling-certiown",
  },
  {
    title: "The Future of AI in Automation",
    excerpt: "Exploring how LLMs and agentic workflows are redefining industrial automation and efficiency.",
    date: "APRIL 2024",
    readTime: "8 MIN READ",
    category: "AI RESEARCH",
    slug: "ai-automation-future",
  },
  {
    title: "Building a High-Performance Portfolio",
    excerpt: "A deep dive into the tech stack and design principles behind the Aura Portfolio system.",
    date: "MARCH 2024",
    readTime: "4 MIN READ",
    category: "DEVELOPMENT",
    slug: "building-aura-portfolio",
  },
];

export default function Posts() {
  return (
    <section id="posts" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4 font-mono"
            >
              <BookOpen size={14} />
              Intelligence & Insights
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight font-mono uppercase">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent filter drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]">Intel.</span>
            </h2>
          </div>
          
          <Link href="/posts" className="group flex items-center gap-3 text-[10px] font-black text-slate-500 hover:text-secondary transition-all font-mono tracking-[0.2em] uppercase">
            ACCESS ARCHIVES <div className="w-10 h-[1px] bg-slate-800 group-hover:w-16 group-hover:bg-secondary transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col glass border border-white/5 p-8 rounded-xl hover:border-secondary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]"
            >
              {/* Post Metadata Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 group-hover:border-secondary/10 transition-colors">
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest font-mono">
                  {post.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-bold text-slate-600 font-mono">{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                  <span className="text-[8px] font-bold text-slate-600 font-mono">{post.readTime}</span>
                </div>
              </div>

              <div className="flex-grow">
                <Link href={`/posts/${post.slug}`} className="block">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight font-mono group-hover:text-secondary transition-colors mb-4">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-400 font-mono leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Interaction Footer */}
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <Link
                  href={`/posts/${post.slug}`}
                  className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest font-mono"
                >
                  READ INTEL <ArrowRight size={14} />
                </Link>
                <div className="flex gap-4">
                   <button className="text-slate-600 hover:text-secondary transition-colors" aria-label="Share post">
                     <Share2 size={14} />
                   </button>
                   <button className="text-slate-600 hover:text-secondary transition-colors" aria-label="Search posts">
                     <Search size={14} />
                   </button>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 right-0 h-full w-[2px] bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-700" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
