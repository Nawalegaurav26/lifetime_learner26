"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Layers,
  Lock,
  Globe,
  Play
} from "lucide-react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

const projects = [
  {
    id: "certiown",
    title: "CertiOwn",
    subtitle: "Institutional Certificate Automation",
    tech: ["Flask", "SaaS", "Automation"],
    status: "Private",
    href: "/projects#certiown"
  },
  {
    id: "mailing",
    title: "Mailing Automation System",
    subtitle: "Enterprise Bulk Communication",
    tech: ["Python", "Automation"],
    status: "Private",
    href: "/projects#mailing"
  },
  {
    id: "sdetm",
    title: "SDETM ICEM",
    subtitle: "International Conference Portal",
    tech: ["Next.js", "SEO"],
    status: "Public",
    href: "/projects#sdetm"
  },
  {
    id: "uba",
    title: "UBA ICEM Portal",
    subtitle: "Institutional Program Platform",
    tech: ["React", "Hosting", "Deployment"],
    status: "Public",
    href: "/projects#uba"
  },
  {
    id: "portfolio",
    title: "Technical Portfolio",
    subtitle: "Systems-inspired developer identity",
    tech: ["Next.js", "Framer Motion"],
    status: "Public",
    href: "/projects#portfolio"
  }
];

const MiniComingSoon = ({ title }: { title: string }) => (
  <div className="relative aspect-video w-full bg-slate-900/40 border border-white/5 rounded-lg overflow-hidden flex items-center justify-center group-hover:border-primary/30 transition-colors">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:15px_15px]" />
    <AlertCircle className="text-slate-800 group-hover:text-primary/20 transition-colors" size={24} />
    <motion.div 
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[1px] bg-primary/20"
    />
  </div>
);

export default function ProjectsHome() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-mono"
            >
              <Layers size={14} />
              Product Ecosystem
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creations.</span>
            </h2>
          </div>
          
          <Link href="/projects" className="group flex items-center gap-3 text-xs font-black text-slate-500 hover:text-primary transition-all font-mono tracking-widest">
            VIEW FULL DOSSIER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={project.href} className="block">
                <div className="mb-6">
                  <MiniComingSoon title={project.title} />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {project.status === "Private" ? <Lock size={10} className="text-amber-500" /> : <Globe size={10} className="text-emerald-500" />}
                    <span className={`text-[9px] font-black uppercase tracking-widest ${project.status === "Private" ? "text-amber-500/70" : "text-emerald-500/70"}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors font-mono mb-1">
                  {project.title}
                </h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                  {project.subtitle}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-primary/0 group-hover:text-primary transition-all duration-300 font-mono tracking-tighter">
                  EXPLORE DETAILS <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
