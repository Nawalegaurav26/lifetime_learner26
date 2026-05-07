"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Globe, Code2, Zap, Shield, GitBranch, TestTube, Search, Layers } from "lucide-react";

const timelineItems = [
  { id: "01", src: "/projects/uba/01home.png", title: "Landing Experience", desc: "Designed a modern institutional landing page with structured navigation, optimized accessibility, and a compelling first impression aligned with government initiative branding." },
  { id: "02", src: "/projects/uba/02home.png", title: "Information Architecture", desc: "Structured the complete information hierarchy of the portal, ensuring every workflow and data point is logically positioned for maximum usability." },
  { id: "03", src: "/projects/uba/03about icem.png", title: "ICEM Institutional Profile", desc: "Built a comprehensive about section showcasing ICEM's history, vision, and role within the Unnat Bharat Abhiyan initiative with rich media integration." },
  { id: "04", src: "/projects/uba/04about uba.png", title: "UBA Programme Overview", desc: "Developed the UBA programme overview section, communicating the government initiative's objectives, scope, and impact backed by IIT Bombay." },
  { id: "05", src: "/projects/uba/05villages.png", title: "Village Programme Dashboard", desc: "Created a structured dashboard for displaying adopted villages, their status, and ongoing development programs with clean data visualization." },
  { id: "06", src: "/projects/uba/06village info.png", title: "Village Detail System", desc: "Engineered individual village detail pages with dynamic routing, presenting granular program data and community impact information." },
  { id: "07", src: "/projects/uba/07interactive map.png", title: "Interactive Village Mapping", desc: "Implemented an interactive geographic visualization for village-level information, enabling spatial exploration of program accessibility and reach." },
  { id: "08", src: "/projects/uba/08villages.png", title: "Village Network View", desc: "Designed an alternative network view for the villages database, providing a different lens to explore and filter geographic program data." },
  { id: "09", src: "/projects/uba/09team.png", title: "Team & Contributors", desc: "Built the institutional team directory showcasing core contributors, faculty coordinators, and student members driving the UBA mission." },
  { id: "10", src: "/projects/uba/10join us.png", title: "Community Onboarding", desc: "Designed the volunteer recruitment and onboarding experience, streamlining how students and faculty connect with the UBA initiative at ICEM." },
];

const contributions = [
  { icon: <Code2 size={24} />, title: "Full Stack Development", desc: "End-to-end architecture from UI to deployment" },
  { icon: <Globe size={24} />, title: "Deployment & Hosting", desc: "Vercel infrastructure and CI/CD pipeline management" },
  { icon: <Search size={24} />, title: "SEO Optimization", desc: "Metadata, structured data and search indexing" },
  { icon: <Layers size={24} />, title: "Workflow Design", desc: "Institutional information architecture and UX flows" },
  { icon: <TestTube size={24} />, title: "Performance Testing", desc: "Lighthouse audits and optimization cycles" },
  { icon: <GitBranch size={24} />, title: "GitHub Collaboration", desc: "Version control, branch strategy, and documentation" },
];

const techStack = ["TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "Vercel", "SEO"];

const stats = [
  { value: "10+", label: "Interface Pages" },
  { value: "Full Stack", label: "Architecture" },
  { value: "SEO", label: "Optimized" },
  { value: "Live", label: "Deployed" },
];

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-10"
      style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function GlowOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
  );
}

export default function UBAICEMCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-[#0a0f1e] min-h-screen text-white overflow-x-hidden">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-white/5">
        <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: progressWidth }} />
      </div>

      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/projects" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40">
          <ArrowLeft size={14} />
          Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <GridOverlay />
        <ParticleField />
        <GlowOrb className="w-[600px] h-[600px] bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="w-[300px] h-[300px] bg-cyan-500/10 top-20 right-20" />

        <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8">
            <Zap size={10} /> Case Study · Institutional Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight"
            style={{ background: "linear-gradient(135deg, #fff 30%, #60a5fa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            UBA ICEM<br />Portal
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Institutional Digital Infrastructure Platform — Built for the Unnat Bharat Abhiyan initiative at ICEM, backed by IIT Bombay.
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">{s.value}</span>
                <span className="text-slate-500 text-xs">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://uba-icem.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <ExternalLink size={14} /> Visit Live Website
            </a>
            <a href="https://github.com/Nawalegaurav26/uba.icem" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all backdrop-blur-md bg-white/5">
              <Github size={14} /> GitHub Repository
            </a>
          </motion.div>

          {/* Hero screenshot */}
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c) => (
                  <span key={c} className={`w-3 h-3 rounded-full ${c} opacity-70`} />
                ))}
                <span className="ml-3 text-slate-500 text-xs font-mono">uba-icem.vercel.app</span>
              </div>
              <Image src="/projects/uba/01home.png" alt="UBA ICEM Portal" width={1200} height={700} className="w-full object-cover" priority />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section className="relative px-6 py-24 max-w-6xl mx-auto">
        <GlowOrb className="w-[400px] h-[400px] bg-blue-600/8 -left-20 top-0" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">Project Overview</p>
            <h2 className="text-4xl font-bold mb-6 text-white">A platform built for institutional scale</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              A centralized institutional platform developed for the Unnat Bharat Abhiyan initiative at ICEM to manage program-related workflows, improve accessibility of information, and strengthen digital infrastructure at a government-affiliated academic level.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ label: "Role", value: "Full Stack Developer" }, { label: "Timeline", value: "Jan 2026 — Present" }, { label: "Client", value: "UBA ICEM, IIT Bombay" }, { label: "Status", value: "Live & Active" }].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/3 border border-white/8">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            {[
              { icon: <Code2 size={16} />, title: "Full-stack development & architecture" },
              { icon: <Globe size={16} />, title: "Hosting, deployment & CI/CD management" },
              { icon: <Search size={16} />, title: "SEO implementation & metadata optimization" },
              { icon: <TestTube size={16} />, title: "Testing, audits & performance optimization" },
              { icon: <GitBranch size={16} />, title: "GitHub collaboration & documentation" },
              { icon: <Shield size={16} />, title: "Institutional workflow design & UX flows" },
            ].map((r) => (
              <div key={r.title} className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/30 transition-colors">
                <span className="text-blue-400 shrink-0">{r.icon}</span>
                <span className="text-slate-300 text-sm">{r.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative px-6 py-24 overflow-hidden">
        <GlowOrb className="w-[500px] h-[500px] bg-cyan-600/8 right-0 top-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Development Journey</p>
            <h2 className="text-4xl font-bold text-white">Building the Portal</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">A guided walkthrough of each interface — from the landing experience to the community onboarding flow.</p>
          </motion.div>

          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent hidden md:block" />

            <div className="space-y-16">
              {timelineItems.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${!isLeft ? "md:flex-row-reverse" : ""}`}>

                    {/* Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0f1e] border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)] hidden md:flex">
                      <span className="text-blue-400 text-xs font-bold">{item.id}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:max-w-[45%]">
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-sm">
                        <span className="text-blue-500 text-xs font-bold tracking-widest">{item.id}</span>
                        <h3 className="text-white font-bold text-xl mt-1 mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="flex-1 md:max-w-[45%] w-full">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl bg-slate-900 group cursor-pointer"
                        onClick={() => window.open(item.src, "_blank")}>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        <Image src={item.src} alt={item.title} width={700} height={420} className="w-full object-cover" loading="lazy" />
                        <div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-white bg-blue-600/80 px-2 py-1 rounded-full backdrop-blur-sm">Click to expand</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRIBUTIONS ── */}
      <section className="relative px-6 py-24">
        <GlowOrb className="w-[400px] h-[400px] bg-blue-600/8 left-1/2 -translate-x-1/2 top-0" />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Contribution Areas</p>
            <h2 className="text-4xl font-bold text-white">Technical Leadership</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contributions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Technical Architecture</p>
            <h2 className="text-4xl font-bold text-white">System Design</h2>
          </motion.div>
          <div className="relative">
            {[
              { label: "Frontend Layer", items: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion"], color: "blue" },
              { label: "Deployment Pipeline", items: ["Vercel CI/CD", "GitHub Actions", "Branch Strategy", "Preview Deploys"], color: "cyan" },
              { label: "SEO & Performance", items: ["Metadata API", "Sitemap", "Open Graph", "Lighthouse Audits"], color: "violet" },
              { label: "Content & Data", items: ["Static Generation", "Dynamic Routes", "Image Optimization", "Font Loading"], color: "emerald" },
            ].map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/25 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-40 shrink-0">
                    <span className={`text-xs font-bold tracking-widest uppercase text-${layer.color}-400`}>{layer.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative px-6 py-32 overflow-hidden">
        <GridOverlay />
        <ParticleField />
        <GlowOrb className="w-[600px] h-[600px] bg-blue-600/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">Institutional Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Building systems that combine{" "}
              <span style={{ background: "linear-gradient(135deg,#60a5fa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                technology, accessibility,
              </span>{" "}
              and institutional impact.
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Developed under Unnat Bharat Abhiyan — Government of India initiative, associated with IIT Bombay.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://uba-icem.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <Globe size={16} /> Visit Live Website
              </a>
              <a href="https://github.com/Nawalegaurav26/uba.icem" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold transition-all bg-white/5">
                <Github size={16} /> View GitHub
              </a>
              <Link href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 text-slate-400 hover:text-white font-semibold transition-all">
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
