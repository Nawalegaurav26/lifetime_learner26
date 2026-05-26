"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 md:p-16 rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--glass-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-1 h-20 rounded-tl-2xl"
              style={{ background: `linear-gradient(to bottom, var(--primary), transparent)` }}
            />
            <div
              className="absolute top-0 left-0 w-20 h-1 rounded-tl-2xl"
              style={{ background: `linear-gradient(to right, var(--primary), transparent)` }}
            />
            <div
              className="absolute bottom-0 right-0 w-1 h-20 rounded-br-2xl"
              style={{ background: `linear-gradient(to top, var(--secondary), transparent)` }}
            />
            <div
              className="absolute bottom-0 right-0 w-20 h-1 rounded-br-2xl"
              style={{ background: `linear-gradient(to left, var(--secondary), transparent)` }}
            />

            <div className="section-label mb-6">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--primary)" }}
              />
              System Overview
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight font-mono uppercase mb-8"
              style={{ color: "var(--foreground)" }}
            >
              Who I{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                  filter: "drop-shadow(0 0 10px var(--primary-glow))",
                }}
              >
                Am.
              </span>
            </h2>

            <div className="space-y-5 font-mono text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                I&apos;m a{" "}
                <span className="font-bold" style={{ color: "var(--foreground)" }}>
                  Computer Engineering student
                </span>{" "}
                and systems-focused developer building scalable digital platforms, automation workflows, and institutional infrastructure.
              </p>
              <p className="hidden md:block">
                I prioritize{" "}
                <span
                  className="font-bold underline underline-offset-4"
                  style={{ color: "var(--primary-light)", textDecorationColor: "var(--primary-glow)" }}
                >
                  practical systems engineering
                </span>
                , focusing on backend architecture, automation, and reliable deployment of institutional platforms through Linux-based environments and secure workflows.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Access Full Dossier <ArrowRight size={16} />
              </Link>
            </div>

            <div className="absolute bottom-4 right-6 hidden md:block">
              <div className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--primary-glow)" }}
                />
                Dossier Status: Active
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}