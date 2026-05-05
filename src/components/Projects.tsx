"use client";

import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Play, 
  Lock, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  Layers,
  Search,
  AlertCircle
} from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import Link from "next/link";
import Image from "next/image";

// Placeholder component for "Coming Soon" media
const ComingSoonMedia = ({ title }: { title: string }) => (
  <div className="relative aspect-video w-full h-full flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm border border-white/5 overflow-hidden group">
    {/* Animated scanning line */}
    <motion.div 
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[1px] bg-primary/30 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
    />
    
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
    
    <AlertCircle className="text-slate-700 mb-4 group-hover:text-primary/40 transition-colors" size={48} />
    <div className="text-center px-6">
      <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] font-mono mb-2">
        Visual Asset Pending
      </h4>
      <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
        {title} // Data Link coming soon
      </p>
    </div>

    {/* HUD corners */}
    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10" />
    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10" />
    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10" />
    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10" />
  </div>
);

const projects = [
  {
    id: "certiown",
    title: "CertiOwn",
    subtitle: "Certificate Automation Platform",
    description: "An automated system for certificate generation, verification, and distribution, designed to eliminate manual processes and enable scalable operations.",
    tech: ["Flask", "Automation", "SaaS", "SMTP"],
    highlights: [
      "Bulk certificate generation",
      "Email automation with tracking",
      "Admin dashboard (Flask-based)",
      "SaaS-ready architecture"
    ],
    status: "Private",
    accessNote: "Private project — demo and preview available on request.",
    image: "/certiown.png",
    links: [
      { label: "View Preview", href: "#", icon: <Layout size={14} /> },
      { label: "Watch Demo", href: "#", icon: <Play size={14} /> },
      { label: "Request Access", href: "#", icon: <Lock size={14} />, primary: true }
    ]
  },
  {
    id: "mailing",
    title: "Mailing Automation System",
    subtitle: "Enterprise Bulk Communication",
    description: "A smart bulk mailing system with personalized communication and real-time delivery tracking.",
    tech: ["Python", "Automation", "Excel Integration", "Tracking"],
    highlights: [
      "Excel-based bulk mailing",
      "Dynamic placeholders",
      "Real-time status tracking",
      "Gmail-like admin interface"
    ],
    status: "Private",
    accessNote: "Private project — demo available.",
    image: "/mailing.png",
    links: [
      { label: "Watch Demo", href: "#", icon: <Play size={14} /> },
      { label: "View Preview", href: "#", icon: <Layout size={14} />, primary: true }
    ]
  },
  {
    id: "sdetm",
    title: "SDETM ICEM",
    subtitle: "International Conference Portal",
    description: "A fully functional academic conference website designed to manage event information and improve digital presence.",
    tech: ["Next.js", "SEO", "Responsive Design", "Academic UI"],
    highlights: [
      "Multi-page structured system",
      "SEO-optimized content",
      "Clean academic UI",
      "Fully deployed"
    ],
    status: "Public",
    liveUrl: "https://sdetm-icem.vercel.app/",
    image: "/conference.png",
    links: [
      { label: "Visit Website", href: "https://sdetm-icem.vercel.app/", icon: <Globe size={14} />, primary: true },
      { label: "Walkthrough", href: "#", icon: <Play size={14} /> }
    ]
  },
  {
    id: "uba",
    title: "UBA ICEM Portal",
    subtitle: "Institutional Program Platform",
    description: "A platform built to support institutional initiatives and streamline program-related workflows.",
    tech: ["Data Management", "Workflow Automation", "React"],
    highlights: [
      "Structured data management",
      "User-friendly interface",
      "Institutional-level usage"
    ],
    status: "Public",
    liveUrl: "https://uba-icem.vercel.app/",
    image: "/uba.png",
    links: [
      { label: "Visit Website", href: "https://uba-icem.vercel.app/", icon: <Globe size={14} />, primary: true },
      { label: "Walkthrough", href: "#", icon: <Play size={14} /> }
    ]
  },
  {
    id: "portfolio",
    title: "Next-Gen Portfolio",
    subtitle: "SaaS-Style Personal Branding",
    description: "A modern SaaS-style personal portfolio showcasing systems, projects, and product thinking.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: [
      "Modern UI/UX (Glassmorphism)",
      "Mission Control Dashboard Aesthetic",
      "Responsive & Animated Components"
    ],
    status: "Public",
    liveUrl: "https://lifetime-learner26.netlify.app/",
    githubUrl: "https://github.com/Nawalegaurav26/lifetime_learner26",
    image: "/portfolio_v3.png",
    links: [
      { label: "View Website", href: "https://lifetime-learner26.netlify.app/", icon: <Globe size={14} />, primary: true },
      { label: "View Code", href: "https://github.com/Nawalegaurav26/lifetime_learner26", icon: <Github size={14} /> }
    ]
  }
];

const demonstrations = [
  { title: "CertiOwn Demo", id: "demo-1" },
  { title: "Mailing System Demo", id: "demo-2" },
  { title: "Conference Website Walkthrough", id: "demo-3" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-mono"
          >
            <Layers size={14} />
            Product Ecosystem
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-8"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Creations.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg font-mono leading-relaxed max-w-2xl"
          >
            A collection of real-world systems and products designed to solve practical problems, with a focus on <span className="text-primary-light font-bold">scalability</span>, <span className="text-accent-light font-bold">automation</span>, and <span className="text-slate-100">user experience</span>.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Media Column */}
              <div className={`lg:col-span-7 relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden glass border border-white/5 shadow-2xl group-hover:shadow-primary/20 transition-all duration-700">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                    />
                  ) : (
                    <ComingSoonMedia title={project.title} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md z-20 ${
                    project.status === "Private" 
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500" 
                    : "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                  }`}>
                    {project.status === "Private" ? <Lock size={10} /> : <Globe size={10} />}
                    {project.status} Access
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-black text-slate-500 uppercase tracking-widest font-mono border-b border-slate-800 pb-1">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2 font-mono group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-primary/70 uppercase tracking-[0.2em] mb-6">
                  {project.subtitle}
                </p>

                <p className="text-slate-400 text-sm md:text-base font-mono leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-10">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                      <span className="text-xs font-mono text-slate-300 group-hover/item:text-slate-100 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                {project.accessNote && (
                  <p className="text-[10px] italic text-slate-500 mb-8 border-l-2 border-amber-500/20 pl-4 py-1">
                    {project.accessNote}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      target="_blank"
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all duration-300 font-mono ${
                        link.primary 
                        ? "bg-primary text-slate-900 hover:bg-primary-light hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-4">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary filter drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]">Demonstrations.</span>
            </h2>
            <p className="text-slate-500 text-xs font-mono tracking-[0.3em] uppercase">
              Visual walkthoughs of core system architectures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demonstrations.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer h-48"
              >
                <ComingSoonMedia title={demo.title} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent">
                      <Play fill="currentColor" size={18} className="ml-1" />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
