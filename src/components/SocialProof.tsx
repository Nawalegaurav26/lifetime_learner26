"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Rocket } from "lucide-react";

const stats = [
  { label: "SaaS Users", value: "100+", icon: <Users size={20} />, color: "text-primary" },
  { label: "Systems Built", value: "12+", icon: <Rocket size={20} />, color: "text-secondary" },
  { label: "Research Focus", value: "BCI/AI", icon: <Award size={20} />, color: "text-accent" },
  { label: "Global Reach", value: "Remote", icon: <Globe size={20} />, color: "text-primary-light" },
];

const affiliations = [
  { name: "CertiOwn", role: "Founder & Architect", status: "Scaling" },
  { name: "ICEM, Pune", role: "Computer Engineering", status: "Active" },
  { name: "SDETM 2026", role: "Technical Secretary", status: "Upcoming" },
];

export default function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Impact Stats */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-100 font-mono mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Narrative & Affiliations */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-6">
                Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">& Influence.</span>
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8">
                Building technology is about impact. I leverage my technical architecture background to create systems that serve users globally and push the boundaries of intelligent automation.
              </p>
              
              <div className="space-y-4">
                {affiliations.map((aff, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass border border-white/5 rounded-sm">
                    <div>
                      <div className="text-[11px] font-black text-slate-100 uppercase tracking-widest font-mono">{aff.name}</div>
                      <div className="text-[9px] text-slate-500 font-mono uppercase">{aff.role}</div>
                    </div>
                    <div className="text-[8px] font-bold text-primary px-2 py-1 border border-primary/20 rounded-full font-mono uppercase tracking-tighter">
                      {aff.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
