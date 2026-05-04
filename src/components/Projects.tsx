"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import Link from "next/link";

const projects = [
  {
    name: "CertiOwn (SaaS)",
    description: "A secure, professional platform for certificate issuance and verification. Built to scale for institutions and enterprises.",
    tech: ["Next.js", "Supabase", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    name: "AI Automation Engine",
    description: "An intelligent backend system designed to automate complex enterprise workflows using LLMs and vector databases.",
    tech: ["Python", "Flask", "OpenAI", "Redis"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    name: "Portfolio V3",
    description: "A minimalist, premium portfolio template focused on clarity and aesthetic technical storytelling.",
    tech: ["React", "Next.js", "Tailwind"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-gap relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Creations</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-slate-400 font-mono leading-relaxed">
              A gallery of systems and products built with precision and a focus on scalability.
            </p>
          </div>
          <Link href="https://github.com/Nawalegaurav26" className="group flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-primary transition-all duration-300 font-mono tracking-widest">
            EXPLORE GITHUB <div className="w-8 h-[1px] bg-slate-700 group-hover:w-12 group-hover:bg-primary transition-all shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative glass p-10 rounded-md border border-primary/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-1 border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.05] group-hover:to-secondary/[0.05] rounded-md transition-all duration-500" />
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-primary text-slate-900 p-2 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse">
                  <Sparkles size={16} />
                </div>
              )}

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-6">
                   {project.tech.slice(0, 2).map((t) => (
                     <span key={t} className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-sm border border-primary/20">{t}</span>
                   ))}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-primary-light transition-colors font-mono">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed font-mono">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-6 z-10 relative">
                  <Link href={project.live} className="flex items-center gap-2 text-xs font-bold text-primary-light hover:text-primary transition-colors font-mono tracking-widest uppercase">
                    Live <ExternalLink size={14} />
                  </Link>
                  <Link href={project.github} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors font-mono tracking-widest uppercase">
                    GitHub <Github />
                  </Link>
                </div>
                {project.featured && <span className="text-[10px] font-black text-primary/50 uppercase tracking-[0.2em] font-mono">Featured</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
