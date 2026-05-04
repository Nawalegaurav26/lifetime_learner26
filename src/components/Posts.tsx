"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Scaling CertiOwn: The Journey of 100 Users",
    excerpt: "Insights into building a secure certificate issuance platform and overcoming initial scaling hurdles.",
    date: "May 2024",
    readTime: "5 min read",
    category: "Startup",
    slug: "scaling-certiown",
  },
  {
    title: "The Future of AI in Automation",
    excerpt: "Exploring how LLMs and agentic workflows are redefining industrial automation and efficiency.",
    date: "April 2024",
    readTime: "8 min read",
    category: "AI Research",
    slug: "ai-automation-future",
  },
  {
    title: "Building a High-Performance Portfolio",
    excerpt: "A deep dive into the tech stack and design principles behind the Aura Portfolio system.",
    date: "March 2024",
    readTime: "4 min read",
    category: "Development",
    slug: "building-aura-portfolio",
  },
];

export default function Posts() {
  return (
    <section className="section-gap relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight font-mono uppercase">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Insights</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-slate-400 font-mono tracking-widest uppercase">
              Thoughts on technology, startups, and intelligence.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative glass border border-primary/20 p-8 md:p-12 rounded-md shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-primary/50"
              >
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-2 rounded-sm font-mono">
                    <Tag size={12} />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                <Link href={`/posts/${post.slug}`} className="block group-hover:text-primary-light transition-colors">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-100 leading-tight font-mono">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-2xl font-mono">
                  {post.excerpt}
                </p>

                <div className="mt-10">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest group/link font-mono"
                  >
                    Read Article 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
