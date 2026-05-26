"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Lock,
  Globe,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "certiown",
    title: "CertiOwn",
    subtitle: "Institutional Certificate Automation",
    tech: ["Flask", "SaaS", "Automation"],
    status: "Private" as const,
    href: "/projects#certiown",
    accent: "from-[#6366f1] to-[#8b5cf6]",
    initials: "CO",
  },
  {
    id: "mailing",
    title: "Mailing Automation System",
    subtitle: "Enterprise Bulk Communication",
    tech: ["Python", "Automation"],
    status: "Private" as const,
    href: "/projects#mailing",
    accent: "from-[#8b5cf6] to-[#ec4899]",
    initials: "MA",
  },
  {
    id: "sdetm",
    title: "SDETM ICEM",
    subtitle: "International Conference Portal",
    tech: ["Next.js", "SEO"],
    status: "Public" as const,
    href: "/projects#sdetm",
    accent: "from-[#06b6d4] to-[#6366f1]",
    initials: "SI",
  },
  {
    id: "uba",
    title: "UBA ICEM Portal",
    subtitle: "Institutional Program Platform",
    tech: ["Hosting", "Deployment", "SEO"],
    status: "Public" as const,
    href: "/projects/uba",
    accent: "from-[#10b981] to-[#06b6d4]",
    initials: "UB",
  },
  {
    id: "portfolio",
    title: "Next-Gen Portfolio",
    subtitle: "Systems-inspired developer identity",
    tech: ["Next.js", "Tailwind", "Framer"],
    status: "Public" as const,
    href: "/projects#portfolio",
    accent: "from-[#f59e0b] to-[#ef4444]",
    initials: "NP",
  },
];

const ProjectThumbnail = ({
  accent,
  initials,
}: {
  accent: string;
  initials: string;
}) => (
  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900/60 border border-white/[0.05] group-hover:border-[#6366f1]/20 transition-colors">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px]" />
    <div
      className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className={`text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br ${accent} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
      >
        {initials}
      </span>
    </div>
    <motion.div
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r ${accent} opacity-20`}
    />
  </div>
);

export default function ProjectsHome() {
  return (
    <section id="projects" className="section-gap relative overflow-hidden bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label text-[#6366f1] mb-5"
            >
              <Layers size={14} />
              Product Ecosystem
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight font-mono uppercase">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">
                Creations.
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-3 text-xs font-black text-slate-500 hover:text-[#6366f1] transition-all font-mono tracking-widest uppercase"
          >
            View Full Dossier{" "}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group project-card"
            >
              <Link href={project.href} className="block p-5">
                <div className="mb-5">
                  <ProjectThumbnail accent={project.accent} initials={project.initials} />
                </div>

                <div className="flex items-center justify-between mb-3">
                  {project.status === "Private" ? (
                    <span className="badge-private">
                      <Lock size={9} />
                      Private
                    </span>
                  ) : (
                    <span className="badge-public">
                      <Globe size={9} />
                      Public
                    </span>
                  )}
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-[#a5b4fc] transition-colors font-mono mb-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                  {project.subtitle}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-black text-[#6366f1]/0 group-hover:text-[#6366f1] transition-all duration-300 font-mono tracking-widest uppercase">
                  Explore Details <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
