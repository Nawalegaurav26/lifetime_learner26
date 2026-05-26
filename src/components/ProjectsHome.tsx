"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Lock, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  { id: "certiown", title: "CertiOwn", subtitle: "Institutional Certificate Automation", tech: ["Flask", "SaaS", "Automation"], status: "Private" as const, href: "/projects#certiown", gradientFrom: "#6366f1", gradientTo: "#8b5cf6", initials: "CO" },
  { id: "mailing", title: "Mailing Automation System", subtitle: "Enterprise Bulk Communication", tech: ["Python", "Automation"], status: "Private" as const, href: "/projects#mailing", gradientFrom: "#8b5cf6", gradientTo: "#ec4899", initials: "MA" },
  { id: "sdetm", title: "SDETM ICEM", subtitle: "International Conference Portal", tech: ["Next.js", "SEO"], status: "Public" as const, href: "/projects#sdetm", gradientFrom: "#06b6d4", gradientTo: "#6366f1", initials: "SI" },
  { id: "uba", title: "UBA ICEM Portal", subtitle: "Institutional Program Platform", tech: ["Hosting", "Deployment", "SEO"], status: "Public" as const, href: "/projects/uba", gradientFrom: "#10b981", gradientTo: "#06b6d4", initials: "UB" },
  { id: "portfolio", title: "Next-Gen Portfolio", subtitle: "Systems-inspired developer identity", tech: ["Next.js", "Tailwind", "Framer"], status: "Public" as const, href: "/projects#portfolio", gradientFrom: "#f59e0b", gradientTo: "#ef4444", initials: "NP" },
];

const ProjectThumbnail = ({ gradientFrom, gradientTo, initials }: { gradientFrom: string; gradientTo: string; initials: string }) => (
  <div
    className="relative aspect-video w-full rounded-xl overflow-hidden transition-colors"
    style={{
      background: "var(--surface-alt)",
      border: "1px solid var(--card-border)",
    }}
  >
    <div
      className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500"
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-4xl font-black font-mono text-transparent bg-clip-text opacity-30 group-hover:opacity-70 transition-opacity duration-500"
        style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        {initials}
      </span>
    </div>
    <motion.div
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[1px] opacity-20"
      style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
    />
  </div>
);

export default function ProjectsHome() {
  return (
    <section id="projects" className="section-gap relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5"
            >
              <Layers size={14} />
              Product Ecosystem
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight font-mono uppercase"
              style={{ color: "var(--foreground)" }}
            >
              Selected{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                }}
              >
                Creations.
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-xs font-black transition-all font-mono tracking-widest uppercase"
            style={{ color: "var(--muted-2)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted-2)"; }}
          >
            View Full Dossier <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
                  <ProjectThumbnail
                    gradientFrom={project.gradientFrom}
                    gradientTo={project.gradientTo}
                    initials={project.initials}
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  {project.status === "Private" ? (
                    <span className="badge-private"><Lock size={9} />Private</span>
                  ) : (
                    <span className="badge-public"><Globe size={9} />Public</span>
                  )}
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>
                <h3
                  className="text-lg font-bold transition-colors font-mono mb-1 leading-snug"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--primary)"; }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "var(--muted-2)" }}
                >
                  {project.subtitle}
                </p>
                <div
                  className="mt-5 flex items-center gap-2 text-xs font-black transition-all duration-300 font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100"
                  style={{ color: "var(--primary)" }}
                >
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