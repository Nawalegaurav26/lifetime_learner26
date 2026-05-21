"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────── */

const experience = [
  {
    index: "01",
    title: "Founder & System Developer",
    company: "CertiOwn",
    period: "Nov 2024 – Present",
    bullets: [
      "Built and deployed SaaS-based certificate automation and verification platform.",
      "Developed backend workflows for bulk processing, email automation, and admin operations.",
      "Implemented Celery-based async task execution, REST APIs, and deployment workflows.",
    ],
    tech: ["PYTHON", "FLASK", "DOCKER", "CELERY", "LINUX", "GIT"],
    icon: <Briefcase size={16} />,
    accentColor: "from-primary to-secondary",
    links: [],
  },
  {
    index: "02",
    title: "Full Stack Developer, SEO & Deployment",
    company: "SDETM 2026 Int. Conference",
    period: "Feb 2026 – Present",
    bullets: [
      "Developed and deployed official website for SDETM 2026 International Conference.",
      "Handled full-stack development, hosting, deployment automation, SEO optimization, and testing.",
      "Built responsive conference management interfaces and optimized deployment workflows.",
    ],
    tech: ["REACT", "SEO", "DEPLOYMENT", "AUTOMATION", "TESTING"],
    icon: <Code size={16} />,
    accentColor: "from-accent to-primary",
    links: [
      { label: "sdetm.indiraicem.ac.in", href: "https://sdetm.indiraicem.ac.in" },
      { label: "github.com/Nawalegaurav26/sdetm.icem", href: "https://github.com/Nawalegaurav26/sdetm.icem" },
    ],
  },
  {
    index: "03",
    title: "Full Stack Developer, SEO & Testing",
    company: "Unnat Bharat Abhiyan (ICEM)",
    period: "Jan 2026 – Present",
    bullets: [
      "Worked on institutional portal development, hosting, deployment, testing, and SEO optimization.",
      "Improved frontend/backend integration, workflow optimization, and deployment structure.",
      "Contributed to digital infrastructure initiative associated with IIT Bombay and Government of India.",
    ],
    tech: ["NEXT.JS", "SEO", "GITHUB", "VERCEL", "TESTING"],
    icon: <Code size={16} />,
    accentColor: "from-secondary to-accent",
    links: [
      { label: "uba-icem.vercel.app", href: "https://uba-icem.vercel.app" },
      { label: "github.com/Nawalegaurav26/uba.icem", href: "https://github.com/Nawalegaurav26/uba.icem" },
    ],
  },
  {
    index: "04",
    title: "Google Student Ambassador",
    company: "Google Student Ambassador Program 2026–27",
    period: "May 2026 – Present",
    bullets: [
      "Selected after clearing screening and video interview rounds for the program.",
      "Promoting adoption of Gemini and Google AI tools through student engagement and campus initiatives.",
      "Organizing AI-focused community interactions, awareness activities, and technical outreach.",
    ],
    tech: ["GOOGLE AI", "GEMINI", "COMMUNITY", "OUTREACH", "AI"],
    icon: <GraduationCap size={16} />,
    accentColor: "from-primary to-accent",
    links: [],
  },
  {
    index: "05",
    title: "Technical Secretary",
    company: "Student Council – ICEM Pune",
    period: "Jul 2025 – Present",
    bullets: [
      "Serving as Technical Secretary AY 2025–26 & Student Coordinator for the Student Development Cell.",
      "Assisted Internal Audit activities under SPPU SDC and managed Technofest 2026 execution.",
      "Actively involved in UBA, Student Activity Center, and SDC initiatives.",
    ],
    tech: ["LEADERSHIP", "MANAGEMENT", "COORDINATION", "TECHNOFEST"],
    icon: <Target size={16} />,
    accentColor: "from-secondary to-primary",
    links: [],
  },
  {
    index: "06",
    title: "Campus Ambassador",
    company: "Techfest IIT Bombay",
    period: "Jul 2025 – Dec 2025",
    bullets: [
      "Selected as Campus Ambassador for Asia's Largest Science and Technology Festival.",
      "Led student outreach and promoted technical and innovation activities.",
      "Served as the connecting person between ICEM Pune and IIT Bombay.",
    ],
    tech: ["OUTREACH", "COORDINATION", "IIT BOMBAY"],
    icon: <Star size={16} />,
    accentColor: "from-accent to-secondary",
    links: [],
  },
];

const milestones = [
  {
    title: "SaaS Platform Development",
    subtitle: "CertiOwn",
    desc: "Built and deployed a SaaS-based certificate automation and verification platform with backend workflow management, bulk processing systems, and deployment workflows.",
    metric: "Live Platform",
    metricColor: "text-primary border-primary/50 bg-primary/10 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    icon: <Rocket size={18} />,
    iconBg: "bg-primary/10 border-primary/30 text-primary",
    wide: true,
  },
  {
    title: "Google Student Ambassador",
    subtitle: "Google 2026–27",
    desc: "Selected for the Google Student Ambassador Program promoting AI awareness, Gemini adoption, and technical outreach initiatives.",
    metric: "Program 2026",
    metricColor: "text-secondary border-secondary/50 bg-secondary/10 shadow-[0_0_12px_rgba(139,92,246,0.2)]",
    icon: <Bot size={18} />,
    iconBg: "bg-secondary/10 border-secondary/30 text-secondary",
    wide: false,
  },
  {
    title: "Institutional Tech Systems",
    subtitle: "ICEM & Conference Platforms",
    desc: "Development, deployment, testing, and SEO for SDETM 2026 and UBA institutional platforms.",
    metric: "2 Platforms",
    metricColor: "text-accent border-accent/50 bg-accent/10 shadow-[0_0_12px_rgba(6,182,212,0.2)]",
    icon: <Globe size={18} />,
    iconBg: "bg-accent/10 border-accent/30 text-accent",
    wide: false,
  },
  {
    title: "Technical Leadership",
    subtitle: "Technical Secretary – ICEM Pune",
    desc: "Managing technical operations, coordination, troubleshooting, documentation, and infrastructure support for Technofest 2026 and student development initiatives.",
    metric: "Student Council",
    metricColor: "text-primary border-primary/50 bg-primary/10 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    icon: <Zap size={18} />,
    iconBg: "bg-primary/10 border-primary/30 text-primary",
    wide: true,
  },
  {
    title: "AI & Automation Workflows",
    subtitle: "Automation Systems",
    desc: "Developed automation-oriented systems and AI-assisted workflows using Python, APIs, prompt engineering, and backend automation architectures.",
    metric: "Systems Built",
    metricColor: "text-secondary border-secondary/50 bg-secondary/10 shadow-[0_0_12px_rgba(139,92,246,0.2)]",
    icon: <Trophy size={18} />,
    iconBg: "bg-secondary/10 border-secondary/30 text-secondary",
    wide: true,
  },
];

/* ─── Glass Card with mouse-follow glow ─────────────────────────── */

function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(circle 220px at ${x}px ${y}px, rgba(59,130,246,0.12), transparent 80%)`;
      glow.style.opacity = "1";
    };
    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={`relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-md
        group transition-all duration-300
        hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(59,130,246,0.18)]
        ${className}`}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-10" />
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ─── Component ─────────────────────────────────────────────────── */

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(148,163,184,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148,163,184,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundColor: "rgba(15,23,42,0.6)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <Activity size={20} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono">
            Professional Log
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Experience Bento Grid ── */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-10 font-mono uppercase"
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Journey.
              </span>
            </motion.h2>

            <div className="flex flex-col gap-5">
              {experience.map((item, idx) => (
                <GlassCard key={item.index} delay={idx * 0.07}>
                  <div className="p-6 md:p-7">
                    {/* Top row: index + period badge */}
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-4xl font-black font-mono bg-gradient-to-r ${item.accentColor} bg-clip-text text-transparent opacity-60 leading-none select-none`}
                      >
                        {item.index}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900/60 px-3 py-1 rounded-full tracking-widest">
                        {item.period}
                      </span>
                    </div>

                    {/* Title + Company */}
                    <h3 className="text-lg font-bold text-slate-100 font-mono mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.22em] font-mono mb-4">
                      {item.company}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 mb-5">
                      {item.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-400 font-mono flex gap-2"
                        >
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    {item.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {item.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] font-mono text-primary hover:text-accent transition-colors"
                          >
                            <ExternalLink size={10} />
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[8px] font-black text-slate-500 border border-slate-800 bg-slate-950/60 px-2 py-1 rounded-sm font-mono tracking-widest
                            group-hover:border-primary/25 group-hover:text-primary/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Milestones Mosaic + CTA ── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 font-mono"
            >
              <Trophy size={14} />
              Key Contributions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-10 font-mono uppercase"
            >
              Recent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Milestones.
              </span>
            </motion.h2>

            {/* Mosaic grid */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m, idx) => (
                <GlassCard
                  key={m.title}
                  delay={idx * 0.08}
                  className={m.wide ? "col-span-2" : "col-span-1"}
                >
                  <div className="p-5 flex flex-col gap-3 h-full">
                    {/* Icon circle */}
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${m.iconBg}`}
                    >
                      {m.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-100 font-mono leading-snug mb-0.5">
                        {m.title}
                      </h4>
                      <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest mb-2">
                        {m.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 font-mono leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    {/* Metric badge */}
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full border text-[10px] font-black font-mono tracking-widest ${m.metricColor}`}
                      >
                        {m.metric}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* CTA – Download Resume */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/Mr_Gaurav_Raju_Nawale.pdf"
                target="_blank"
                className="group flex flex-col items-center justify-center gap-3 p-8 rounded-lg border-2 border-dashed border-slate-700
                  hover:border-primary/60 transition-all duration-300 bg-slate-900/20 hover:bg-slate-900/40"
              >
                <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                  <Download size={18} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-1">
                    In-depth technical background available
                  </p>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono flex items-center gap-2 justify-center group-hover:text-accent transition-colors">
                    DOWNLOAD FULL DOSSIER <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
