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
            className="glass p-10 md:p-16 border border-primary/20 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-20 bg-primary/40" />
            <div className="absolute top-0 left-0 w-20 h-1 bg-primary/40" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-8">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Overview.</span>
            </h2>

            <div className="space-y-6 text-slate-400 font-mono text-sm md:text-base leading-relaxed">
              <p>
                I am a <span className="text-slate-100 font-bold">Computer Science Engineering student</span> and system builder. My work focuses on developing scalable digital solutions, from secure SaaS platforms like <span className="text-primary-light font-bold">CertiOwn</span> to exploring the frontier of <span className="text-secondary-light font-bold">Brain-Computer Interfaces (BCI)</span>.
              </p>
              
              <p className="hidden md:block">
                I prioritize <span className="text-accent-light font-bold underline decoration-accent/30 underline-offset-4">execution over theory</span>, building usable systems that solve complex problems through intelligent automation and research-driven design.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="group flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-primary-light transition-all"
              >
                Access Full Dossier <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            {/* HUD element */}
            <div className="absolute bottom-4 right-6 hidden md:block">
              <div className="flex items-center gap-2 text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary/40 animate-pulse rounded-full" />
                Dossier Status: Active
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
