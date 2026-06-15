"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  ChevronRight,
  Target,
  Activity,
  Code,
  ExternalLink,
  Download,
  Rocket,
  Bot,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import Link from "next/link";

/* ─── Experience Data ───────────────────────────────────────────── */
const experience = [
  {
    index: "01",
    title: "Founder & System Developer",
    shortTitle: "Founder & System Dev",
    company: "CertiOwn",
    period: "Nov 2024 – Present",
    status: "active",
    bullets: [
      "Built and deployed SaaS-based certificate automation and verification platform.",
      "Developed backend workflows for bulk processing, email automation, and admin operations.",
      "Implemented Celery-based async task execution, REST APIs, and deployment workflows.",
    ],
    tech: ["PYTHON", "FLASK", "DOCKER", "CELERY", "LINUX", "GIT"],
    icon: <Briefcase size={14} />,
    accentFrom: "var(--primary)",
    accentTo: "var(--accent)",
    links: [],
  },
  {
    index: "02",
    title: "Full Stack Developer, SEO & Deployment",
    shortTitle: "FS Dev – SDETM 2026",
    company: "SDETM 2026 Int. Conference",
    period: "Feb 2026 – Present",
    status: "active",
    bullets: [
      "Developed and deployed official website for SDETM 2026 International Conference.",
      "Handled full-stack development, hosting, deployment automation, SEO optimization, and testing.",
      "Built responsive conference management interfaces and optimized deployment workflows.",
    ],
    tech: ["REACT", "SEO", "DEPLOYMENT", "AUTOMATION", "TESTING"],
    icon: <Code size={14} />,
    accentFrom: "var(--accent)",
    accentTo: "var(--primary)",
    links: [
      { label: "sdetm.indiraicem.ac.in", href: "https://sdetm.indiraicem.ac.in", type: "web" },
      { label: "sdetm.icem", href: "https://github.com/Nawalegaurav26/sdetm.icem", type: "github" },
    ],
  },
  {
    index: "03",
    title: "Full Stack Developer, SEO & Testing",
    shortTitle: "FS Dev – UBA ICEM",
    company: "Unnat Bharat Abhiyan (ICEM)",
    period: "Jan 2026 – Present",
    status: "active",
    bullets: [
      "Worked on institutional portal development, hosting, deployment, testing, and SEO optimization.",
      "Improved frontend/backend integration, workflow optimization, and deployment structure.",
      "Contributed to digital infrastructure initiative associated with IIT Bombay and Government of India.",
    ],
    tech: ["NEXT.JS", "SEO", "GITHUB", "VERCEL", "TESTING"],
    icon: <Code size={14} />,
    accentFrom: "var(--secondary)",
    accentTo: "var(--accent)",
    links: [
      { label: "uba-icem.vercel.app", href: "https://uba-icem.vercel.app", type: "web" },
      { label: "uba.icem", href: "https://github.com/Nawalegaurav26/uba.icem", type: "github" },
    ],
  },
  {
    index: "04",
    title: "Google Student Ambassador",
    shortTitle: "Google Ambassador",
    company: "Google Program 2026–27",
    period: "May 2026 – Present",
    status: "active",
    bullets: [
      "Selected after clearing screening and video interview rounds for the program.",
      "Promoting adoption of Gemini and Google AI tools through student engagement and campus initiatives.",
      "Organizing AI-focused community interactions, awareness activities, and technical outreach.",
    ],
    tech: ["GOOGLE AI", "GEMINI", "COMMUNITY", "OUTREACH", "AI"],
    icon: <GraduationCap size={14} />,
    accentFrom: "var(--primary)",
    accentTo: "var(--accent)",
    links: [],
  },
  {
    index: "05",
    title: "College Ambassador",
    shortTitle: "College Ambassador",
    company: "Techfest IIT Bombay",
    period: "May 2026 – Present",
    status: "active",
    bullets: [
      "Appointed as College Ambassador for Asia's Largest Science and Technology Festival.",
      "Achieved a ranking of 35th All India in the Campus Ambassador leadership program.",
      "Leading technical engagement, workshops, and promoting entrepreneurship and innovation.",
    ],
    tech: ["LEADERSHIP", "NETWORKING", "IIT BOMBAY", "COMMUNITY"],
    icon: <Star size={14} />,
    accentFrom: "var(--accent)",
    accentTo: "var(--secondary)",
    links: [],
  },
  {
    index: "06",
    title: "Technical Secretary",
    shortTitle: "Technical Secretary",
    company: "Student Council – ICEM Pune",
    period: "Jul 2025 – Present",
    status: "active",
    bullets: [
      "Serving as Technical Secretary AY 2025–26 & Student Coordinator for the Student Development Cell.",
      "Assisted Internal Audit activities under SPPU SDC and managed Technofest 2026 execution.",
      "Actively involved in UBA, Student Activity Center, and SDC activities.",
    ],
    tech: ["LEADERSHIP", "MANAGEMENT", "COORDINATION", "TECHNOFEST"],
    icon: <Target size={14} />,
    accentFrom: "var(--secondary)",
    accentTo: "var(--primary)",
    links: [],
  },
  {
    index: "07",
    title: "Campus Ambassador",
    shortTitle: "Campus Ambassador",
    company: "Techfest IIT Bombay (Previous)",
    period: "Jul 2025 – Dec 2025",
    status: "ended",
    bullets: [
      "Selected as Campus Ambassador for Asia's Largest Science and Technology Festival.",
      "Led student outreach and promoted technical and innovation activities.",
      "Served as the connecting person between ICEM Pune and IIT Bombay.",
    ],
    tech: ["OUTREACH", "COORDINATION", "IIT BOMBAY"],
    icon: <Star size={14} />,
    accentFrom: "var(--accent)",
    accentTo: "var(--secondary)",
    links: [],
  },
];

/* ─── Milestones Data ───────────────────────────────────────────── */
const milestones = [
  {
    title: "SaaS Platform Development",
    subtitle: "CertiOwn",
    desc: "Built and deployed a SaaS-based certificate automation and verification platform with backend workflow management, bulk processing systems, deployment workflows, and institutional usage.",
    metric: "Live Platform",
    metricClass: "text-primary border-primary/50 bg-primary-light/10 shadow-[0_0_14px_var(--primary-glow)]",
    icon: <Rocket size={18} />,
    iconClass: "bg-primary/10 border-primary/30 text-primary",
    wide: true,
  },
  {
    title: "Google Student Ambassador Program",
    subtitle: "Google 2026–27",
    desc: "Selected for the Google Student Ambassador Program after screening and interview rounds. Contributing toward AI awareness, Gemini adoption, and technical outreach initiatives.",
    metric: "Program 2026",
    metricClass: "text-secondary border-secondary/50 bg-secondary/10 shadow-[0_0_14px_var(--primary-glow)]",
    icon: <Bot size={18} />,
    iconClass: "bg-secondary/10 border-secondary/30 text-secondary",
    wide: false,
  },
  {
    title: "Institutional Technology Systems",
    subtitle: "ICEM & Conference Platforms",
    desc: "Worked on development, deployment, testing, SEO optimization, and workflow management for institutional and conference platforms including SDETM 2026 and UBA initiatives.",
    metric: "2 Platforms",
    metricClass: "text-accent border-accent/50 bg-accent/10 shadow-[0_0_14px_var(--primary-glow)]",
    icon: <Globe size={18} />,
    iconClass: "bg-accent/10 border-accent/30 text-accent",
    wide: false,
  },
  {
    title: "Technical Leadership",
    subtitle: "Technical Secretary – ICEM Pune",
    desc: "Managing technical operations, coordination, troubleshooting, documentation, and infrastructure support for institutional events, Technofest 2026, and student development initiatives.",
    metric: "Student Council",
    metricClass: "text-primary border-primary/50 bg-primary-light/10 shadow-[0_0_14px_var(--primary-glow)]",
    icon: <Zap size={18} />,
    iconClass: "bg-primary/10 border-primary/30 text-primary",
    wide: true,
  },
  {
    title: "AI & Automation Workflows",
    subtitle: "Workflow Automation Systems",
    desc: "Developed automation-oriented systems and AI-assisted workflows using Python, APIs, prompt engineering, backend automation, and deployment-focused architectures.",
    metric: "Systems Built",
    metricClass: "text-secondary border-secondary/50 bg-secondary/10 shadow-[0_0_14px_var(--primary-glow)]",
    icon: <Trophy size={18} />,
    iconClass: "bg-secondary/10 border-secondary/30 text-secondary",
    wide: false,
  },
];

/* ─── Mouse-glow card wrapper ───────────────────────────────────── */
function GlowCard({
  children,
  className = "",
  glowColor = "var(--primary-glow)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      glow.style.background = `radial-gradient(circle 200px at ${e.clientX - r.left}px ${e.clientY - r.top}px, ${glowColor}, transparent 80%)`;
      glow.style.opacity = "1";
    };
    const onLeave = () => { glow.style.opacity = "0"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [glowColor]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experience[activeIdx];

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-theme">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Section Label ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <Activity size={16} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.35em] font-mono">
            Professional Log
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground font-mono uppercase tracking-tight mb-14"
        >
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Journey.
          </span>
        </motion.h2>

        {/* ══════════════════════════════════════════════════
            TWO-PANEL: Sidebar nav + Detail view
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 items-start">

          {/* ── LEFT: Sidebar nav ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-alt/80 border border-theme rounded-t-lg border-b-0">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[10px] font-mono text-muted-2 tracking-widest">career.log</span>
            </div>

            <div className="border border-theme rounded-b-lg overflow-hidden bg-surface-alt/60 backdrop-blur-md divide-y divide-theme/60">
              {experience.map((item, idx) => (
                <button
                  key={item.index}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left px-4 py-4 flex items-center gap-3 transition-all duration-200 group relative
                    ${activeIdx === idx
                      ? "bg-primary/8 border-l-2 border-primary"
                      : "hover:bg-surface-alt/40 border-l-2 border-transparent hover:border-theme-strong"
                    }`}
                >
                  {/* Active glow on left */}
                  {activeIdx === idx && (
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent" />
                  )}

                  {/* Index */}
                  <span
                    className={`font-mono text-[11px] font-black shrink-0 tabular-nums w-6
                      ${activeIdx === idx ? "text-primary" : "text-muted-2 group-hover:text-muted"}`}
                  >
                    {item.index}
                  </span>

                  {/* Icon */}
                  <span className={`shrink-0 transition-colors ${activeIdx === idx ? "text-primary" : "text-muted-2 group-hover:text-muted"}`}>
                    {item.icon}
                  </span>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className={`font-mono text-[11px] font-bold truncate leading-tight transition-colors
                      ${activeIdx === idx ? "text-foreground" : "text-muted group-hover:text-foreground"}`}>
                      {item.shortTitle}
                    </p>
                    <p className={`font-mono text-[9px] uppercase tracking-widest truncate mt-0.5 transition-colors
                      ${activeIdx === idx ? "text-accent" : "text-muted-2 group-hover:text-muted"}`}>
                      {item.company}
                    </p>
                  </div>

                  {/* Active arrow */}
                  <ChevronRight
                    size={12}
                    className={`ml-auto shrink-0 transition-all duration-200
                      ${activeIdx === idx ? "text-primary opacity-100" : "text-muted-2 opacity-0 group-hover:opacity-100"}`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Detail Panel ── */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <GlowCard
                  className="rounded-lg border border-theme bg-surface/50 backdrop-blur-md
                    hover:border-primary/40 hover:shadow-[0_0_30px_var(--primary-glow)] transition-all duration-300"
                  glowColor="var(--primary-glow)"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg"
                    style={{ background: `linear-gradient(to bottom, ${active.accentFrom}, ${active.accentTo})` }}
                  />

                  <div className="p-8 pl-10">
                    {/* Index + Period */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-6xl font-black font-mono leading-none select-none opacity-50"
                        style={{
                          background: `linear-gradient(to right, ${active.accentFrom}, ${active.accentTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {active.index}
                      </span>
                      <div className="flex items-center gap-2">
                        {active.status === "active" && (
                          <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-500 uppercase tracking-widest font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-muted border border-theme bg-surface-alt/60 px-3 py-1 rounded-full tracking-widest">
                          {active.period}
                        </span>
                      </div>
                    </div>

                    {/* Role + Company */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground font-mono leading-tight mb-2">
                      {active.title}
                    </h3>
                    <p className="text-[11px] font-black text-accent uppercase tracking-[0.25em] font-mono mb-8">
                      {active.company}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-primary/30 via-theme-strong to-transparent mb-8" />

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-8">
                      {active.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex gap-3 text-sm text-muted font-mono leading-relaxed"
                        >
                          <span className="text-primary mt-0.5 shrink-0 font-bold">▸</span>
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Links */}
                    {active.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 mb-8">
                        {active.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-mono text-primary hover:text-accent border border-primary/20 hover:border-accent/40 bg-primary/5 hover:bg-accent/5 px-3 py-1.5 rounded transition-all"
                          >
                            <ExternalLink size={11} />
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2">
                      {active.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-black text-muted border border-theme bg-surface-alt/60 px-2.5 py-1 rounded font-mono tracking-widest hover:border-primary/30 hover:text-primary transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-5 justify-center">
              {experience.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`transition-all duration-300 rounded-full font-mono
                    ${activeIdx === i
                      ? "w-6 h-1.5 bg-primary"
                      : "w-1.5 h-1.5 bg-muted hover:bg-foreground"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            KEY CONTRIBUTIONS: Asymmetric Bento Grid
        ══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Trophy size={16} className="text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.35em] font-mono">
              Key Contributions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-mono uppercase tracking-tight mb-10">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Milestones.
            </span>
          </h2>

          {/* Row 1: wide + normal + normal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="md:col-span-2"
            >
              <GlowCard
                className="h-full rounded-lg border border-theme bg-surface/50 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_24px_var(--primary-glow)] transition-all duration-300 group"
                glowColor="var(--primary-glow)"
              >
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${milestones[0].iconClass}`}>
                    {milestones[0].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-foreground font-mono mb-0.5">{milestones[0].title}</h4>
                    <p className="text-[9px] font-mono text-muted-2 uppercase tracking-widest mb-3">{milestones[0].subtitle}</p>
                    <p className="text-xs text-muted font-mono leading-relaxed">{milestones[0].desc}</p>
                  </div>
                  <span className={`inline-block self-start px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${milestones[0].metricClass}`}>
                    {milestones[0].metric}
                  </span>
                </div>
              </GlowCard>
            </motion.div>

            {/* Normal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              <GlowCard
                className="h-full rounded-lg border border-theme bg-surface/50 backdrop-blur-md hover:border-secondary/40 hover:shadow-[0_0_24px_var(--primary-glow)] transition-all duration-300"
                glowColor="var(--primary-glow)"
              >
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${milestones[1].iconClass}`}>
                    {milestones[1].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-foreground font-mono mb-0.5">{milestones[1].title}</h4>
                    <p className="text-[9px] font-mono text-muted-2 uppercase tracking-widest mb-3">{milestones[1].subtitle}</p>
                    <p className="text-xs text-muted font-mono leading-relaxed">{milestones[1].desc}</p>
                  </div>
                  <span className={`inline-block self-start px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${milestones[1].metricClass}`}>
                    {milestones[1].metric}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* Row 2: normal + normal + wide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Normal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            >
              <GlowCard
                className="h-full rounded-lg border border-theme bg-surface/50 backdrop-blur-md hover:border-accent/40 hover:shadow-[0_0_24px_var(--primary-glow)] transition-all duration-300"
                glowColor="var(--primary-glow)"
              >
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${milestones[2].iconClass}`}>
                    {milestones[2].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-foreground font-mono mb-0.5">{milestones[2].title}</h4>
                    <p className="text-[9px] font-mono text-muted-2 uppercase tracking-widest mb-3">{milestones[2].subtitle}</p>
                    <p className="text-xs text-muted font-mono leading-relaxed">{milestones[2].desc}</p>
                  </div>
                  <span className={`inline-block self-start px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${milestones[2].metricClass}`}>
                    {milestones[2].metric}
                  </span>
                </div>
              </GlowCard>
            </motion.div>

            {/* Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <GlowCard
                className="h-full rounded-lg border border-theme bg-surface/50 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_24px_var(--primary-glow)] transition-all duration-300"
                glowColor="var(--primary-glow)"
              >
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${milestones[3].iconClass}`}>
                    {milestones[3].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-foreground font-mono mb-0.5">{milestones[3].title}</h4>
                    <p className="text-[9px] font-mono text-muted-2 uppercase tracking-widest mb-3">{milestones[3].subtitle}</p>
                    <p className="text-xs text-muted font-mono leading-relaxed">{milestones[3].desc}</p>
                  </div>
                  <span className={`inline-block self-start px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${milestones[3].metricClass}`}>
                    {milestones[3].metric}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* Row 3: last milestone full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="mt-4"
          >
            <GlowCard
              className="rounded-lg border border-theme bg-surface/50 backdrop-blur-md hover:border-secondary/40 hover:shadow-[0_0_24px_var(--primary-glow)] transition-all duration-300"
              glowColor="var(--primary-glow)"
            >
              <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${milestones[4].iconClass}`}>
                  {milestones[4].icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-foreground font-mono mb-0.5">{milestones[4].title}</h4>
                  <p className="text-[9px] font-mono text-muted-2 uppercase tracking-widest mb-2">{milestones[4].subtitle}</p>
                  <p className="text-xs text-muted font-mono leading-relaxed">{milestones[4].desc}</p>
                </div>
                <span className={`inline-block self-start md:self-center shrink-0 px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${milestones[4].metricClass}`}>
                  {milestones[4].metric}
                </span>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>

        {/* ── Download Resume CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/Mr_Gaurav_Raju_Nawale.pdf"
            target="_blank"
            className="group flex flex-col sm:flex-row items-center justify-center gap-4 p-8 rounded-lg
              border-2 border-dashed border-theme hover:border-primary/50 transition-all duration-300
              bg-surface-alt/20 hover:bg-surface-alt/40 backdrop-blur-sm"
          >
            <div className="w-11 h-11 rounded-full bg-surface-alt border border-theme flex items-center justify-center
              text-muted group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
              <Download size={18} />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[10px] text-muted-2 font-mono uppercase tracking-[0.2em] mb-1">
                In-depth technical background available
              </p>
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em] font-mono flex items-center gap-2 justify-center sm:justify-start group-hover:text-accent transition-colors">
                DOWNLOAD FULL DOSSIER <ChevronRight size={12} />
              </span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
