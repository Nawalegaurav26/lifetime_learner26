"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Brain, Globe } from "lucide-react";

const stats = [
  {
    label: "SaaS Users",
    value: "100+",
    icon: <Users size={18} />,
    iconBg: "bg-[#6366f1]/15",
    iconColor: "text-[#a5b4fc]",
    accent: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    label: "Systems Built",
    value: "12+",
    icon: <Rocket size={18} />,
    iconBg: "bg-[#8b5cf6]/15",
    iconColor: "text-[#c4b5fd]",
    accent: "from-[#8b5cf6] to-[#ec4899]",
  },
  {
    label: "Research Focus",
    value: "BCI/AI",
    icon: <Brain size={18} />,
    iconBg: "bg-[#06b6d4]/15",
    iconColor: "text-[#67e8f9]",
    accent: "from-[#06b6d4] to-[#6366f1]",
  },
  {
    label: "Global Reach",
    value: "Remote",
    icon: <Globe size={18} />,
    iconBg: "bg-[#10b981]/15",
    iconColor: "text-[#6ee7b7]",
    accent: "from-[#10b981] to-[#06b6d4]",
  },
];

const affiliations = [
  { name: "CertiOwn", role: "Founder & Architect", status: "Scaling" },
  { name: "ICEM, Pune", role: "Computer Engineering", status: "Active" },
  { name: "SDETM 2026", role: "Technical Secretary", status: "Upcoming" },
];

export default function SocialProof() {
  return (
    <section className="section-gap relative overflow-hidden bg-slate-900/40">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label text-[#6366f1] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
              Impact & Metrics
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card group"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${stat.iconBg} ${stat.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-black font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r ${stat.accent}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-6">
                Network{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">
                  &amp; Influence.
                </span>
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8">
                Building technology is about impact. I leverage my technical
                architecture background to create systems that serve users
                globally and push the boundaries of intelligent automation.
              </p>

              <div className="space-y-3">
                {affiliations.map((aff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-slate-900/50 backdrop-blur hover:border-[#6366f1]/20 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono group-hover:text-[#a5b4fc] transition-colors">
                        {aff.name}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5 uppercase tracking-wide">
                        {aff.role}
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-[#6366f1] px-3 py-1 border border-[#6366f1]/25 rounded-full font-mono uppercase tracking-widest">
                      {aff.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
