"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code2 size={24} className="text-primary" />,
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
  },
  {
    category: "Backend & Ops",
    icon: <Terminal size={24} className="text-secondary" />,
    items: ["Flask", "Node.js", "Next.js", "Docker", "Postgres", "Redis"],
  },
  {
    category: "Systems & Infrastructure",
    icon: <Cpu size={24} className="text-accent" />,
    items: ["Git", "AWS", "Linux", "Nginx", "Docker", "GitLab CI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-gap bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-xl mx-auto">
            A curated list of technologies I use to architect and build production-ready systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-background rounded-3xl border border-slate-50 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:shadow-md transition-all">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-8">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white text-slate-600 rounded-xl text-xs font-bold border border-slate-100 hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
