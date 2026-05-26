"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 md:p-16 rounded-2xl border border-white/[0.06] bg-slate-900/60 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-[#6366f1] to-transparent rounded-tl-2xl" />
            <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-[#6366f1] to-transparent rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-[#8b5cf6] to-transparent rounded-br-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-[#8b5cf6] to-transparent rounded-br-2xl" />
            <div className="section-label text-[#6366f1] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
              System Overview
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-8">
              Who I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4] filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                Am.
              </span>
            </h2>
            <div className="space-y-5 text-slate-400 font-mono text-sm md:text-base leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-slate-100 font-bold">Computer Engineering student</span>{" "}
                and systems-focused developer building scalable digital platforms, automation workflows, and institutional infrastructure.
              </p>
              <p className="hidden md:block">
                I prioritize{" "}
                <span className="text-[#a5b4fc] font-bold underline decoration-[#6366f1]/30 underline-offset-4">practical systems engineering</span>
                , focusing on backend architecture, automation, and reliable deployment of institutional platforms through Linux-based environments and secure workflows.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Access Full Dossier <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute bottom-4 right-6 hidden md:block">
              <div className="flex items-center gap-2 text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                <span className="w-2 h-2 bg-[#6366f1]/40 animate-pulse rounded-full" />
                Dossier Status: Active
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}