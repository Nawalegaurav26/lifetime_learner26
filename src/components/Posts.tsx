"use client";

import { motion } from "framer-motion";
import { ArrowRight, Share2, BookOpen } from "lucide-react";
import Link from "next/link";

const CATEGORY_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  ENGINEERING: { border: "border-l-primary", badge: "bg-primary/10 border-primary/25 text-primary", text: "group-hover:text-primary" },
  DEPLOYMENT: { border: "border-l-accent", badge: "bg-accent/10 border-accent/25 text-accent", text: "group-hover:text-accent" },
  SYSTEMS: { border: "border-l-secondary", badge: "bg-secondary/10 border-secondary/25 text-secondary", text: "group-hover:text-secondary" },
};

import { posts } from "@/data/posts";

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
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-full py-16 px-6 flex flex-col items-center justify-center border border-theme bg-surface/30 backdrop-blur-md rounded-xl text-center relative overflow-hidden group min-h-[300px]"
            >
              {/* Animated scanline and grid background */}
              <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-secondary/20 z-10 shadow-[0_0_10px_var(--primary-glow)] pointer-events-none"
              />
              
              <BookOpen className="text-muted-2/40 mb-6 animate-pulse" size={48} />
              <h3 className="text-lg md:text-xl font-bold font-mono uppercase tracking-[0.2em] text-foreground mb-3">
                Intel Uplink Pending
              </h3>
              <p className="text-xs md:text-sm text-muted font-mono max-w-md leading-relaxed uppercase tracking-wider">
                Articles and engineering archives are being compiled. Stay tuned for insights on SaaS architecture and automation workflows.
              </p>

              {/* HUD corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-theme-strong opacity-40" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-theme-strong opacity-40" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-theme-strong opacity-40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-theme-strong opacity-40" />
            </motion.div>
          ) : (
            posts.map((post, index) => {
              const colors = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.ENGINEERING;
              const postUrl = `/posts/${post.slug}`;
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
                    <Link href={postUrl} className="block">
                      <h3 className={`text-lg md:text-xl font-bold text-foreground leading-snug font-mono mb-3 transition-colors ${colors.text}`}>
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted font-mono leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-theme flex items-center justify-between">
                    <Link href={postUrl} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest font-mono transition-colors text-muted hover:text-secondary">
                      Read Intel <ArrowRight size={13} />
                    </Link>
                    <button
                      onClick={() => {
                        const absoluteUrl = `https://www.gauravnawale.in${postUrl}`;
                        if (navigator.share) {
                          navigator.share({ title: post.title, text: post.excerpt, url: absoluteUrl });
                        } else {
                          navigator.clipboard.writeText(absoluteUrl);
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
            })
          )}
        </div>
      </div>
    </section>
  );
}