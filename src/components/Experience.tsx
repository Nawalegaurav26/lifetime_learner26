"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const experience = [
  {
    title: "Founder",
    company: "CertiOwn SaaS",
    period: "2024 - Present",
    desc: "Architecting a secure certificate issuance platform, leading full-stack development and strategic growth.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Computer Engineering",
    company: "Engineering University",
    period: "2022 - 2026",
    desc: "Deep-diving into systems programming, AI research, and scalable backend architectures.",
    icon: <GraduationCap size={20} />,
  },
];

const achievements = [
  {
    title: "CertiOwn Launch",
    desc: "Successfully launched the SaaS MVP and secured first 100+ users.",
  },
  {
    title: "Hackathon Finalist",
    desc: "Ranked Top 5 in a National AI Hackathon for a predictive maintenance engine.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-gap relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-16 font-mono uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Journey</span>
            </h2>
            
            <div className="relative border-l-[1px] border-slate-700 ml-4 space-y-16">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-slate-900 border-2 border-primary rounded-full group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-sm">
                        {item.period}
                      </span>
                      <h3 className="mt-4 text-xl font-bold text-slate-100 group-hover:text-primary-light transition-colors font-mono">
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-slate-400 font-mono tracking-widest uppercase mt-1">{item.company}</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-sm text-slate-400 max-w-2xl leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-16 font-mono uppercase">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Milestones</span>
            </h2>
            
            <div className="space-y-8">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-md border border-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.05)] flex gap-6 group hover:border-primary/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all"
                >
                  <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-sm flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 font-mono">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 font-mono leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
