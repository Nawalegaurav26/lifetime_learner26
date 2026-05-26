"use client";

import { motion } from "framer-motion";
import { ArrowRight, Share2, BookOpen } from "lucide-react";
import Link from "next/link";

const CATEGORY_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  ENGINEERING: { border: "border-l-primary", badge: "bg-primary/10 border-primary/25 text-primary", text: "group-hover:text-primary" },
  DEPLOYMENT: { border: "border-l-accent", badge: "bg-accent/10 border-accent/25 text-accent", text: "group-hover:text-accent" },
  SYSTEMS: { border: "border-l-secondary", badge: "bg-secondary/10 border-secondary/25 text-secondary", text: "group-hover:text-secondary" },
};

const posts = [
  { title: "Building CertiOwn Automation Workflows", excerpt: "Developing scalable certificate issuance systems for institutional workshops and conferences using Flask and Python.", date: "MAY 2024", readTime: "5 MIN READ", category: "ENGINEERING", slug: "certiown-automation-workflows" },
  { title: "Deployment Learnings from UBA ICEM", excerpt: "Insights into hosting, SEO, and institutional infrastructure deployment for a large-scale university portal.", date: "APRIL 2024", readTime: "6 MIN READ", category: "DEPLOYMENT", slug: "uba-icem-deployment" },
  { title: "Linux Setup for Backend Developers", excerpt: "Optimizing the development environment: Tools, configurations, and workflows for systems engineering.", date: "MARCH 2024", readTime: "4 MIN READ", category: "SYSTEMS", slug: "linux-setup-backend" },
];

export default function Posts() {
  return (
    <section id="posts" className="section-gap relative overflow-hidden bg-background/40 border-t border-theme">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label text-secondary mb-5"
            >
              <BookOpen size={14} />
              Intelligence &amp; Insights
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight font-mono uppercase">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Intel.</span>
            </h2>
          </div>
          <Link href="/posts" className="group flex items-center gap-3 text-xs font-black text-muted hover:text-secondary transition-all font-mono tracking-widest uppercase">
            Access Archives <div className="w-10 h-[1px] bg-theme-strong group-hover:w-16 group-hover:bg-secondary transition-all" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const colors = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.ENGINEERING;
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-xl border-l-2 ${colors.border} border border-theme bg-surface/60 backdrop-blur-xl p-7 hover:border-theme-strong transition-all duration-500 hover:shadow-premium hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest font-mono ${colors.badge}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-muted-2 font-mono">{post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-theme-strong" />
                    <span className="text-[10px] font-bold text-muted-2 font-mono">{post.readTime}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <Link href={`/posts/${post.slug}`} className="block">
                    <h3 className={`text-lg md:text-xl font-bold text-foreground leading-snug font-mono mb-3 transition-colors ${colors.text}`}>
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted font-mono leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="mt-8 pt-5 border-t border-theme flex items-center justify-between">
                  <Link href={`/posts/${post.slug}`} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest font-mono transition-colors text-muted hover:text-secondary">
                    Read Intel <ArrowRight size={13} />
                  </Link>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: post.title, text: post.excerpt, url: `https://lifetime-learner26.netlify.app/posts/${post.slug}` });
                      } else {
                        navigator.clipboard.writeText(`https://lifetime-learner26.netlify.app/posts/${post.slug}`);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="text-muted-2 hover:text-secondary transition-colors"
                    aria-label="Share post"
                  >
                    <Share2 size={14} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}