"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Lock, 
  Globe, 
  Layout,
  Layers,
  AlertCircle
} from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProjectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  primary?: boolean;
  special?: boolean;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  status: "Public" | "Private";
  accessNote?: string;
  image: string;
  href?: string;
  liveUrl?: string;
  githubUrl?: string;
  links: ProjectLink[];
}

// Placeholder component for "Coming Soon" media
const ComingSoonMedia = ({ title }: { title: string }) => (
  <div className="relative aspect-video w-full h-full flex flex-col items-center justify-center bg-surface-alt/40 backdrop-blur-sm border border-theme overflow-hidden group">
    {/* Animated scanning line */}
    <motion.div 
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[1px] bg-primary/30 z-10 shadow-[0_0_10px_var(--primary-glow)]"
    />
    
    {/* Grid Background */}
    <div className="absolute inset-0 subtle-grid opacity-30" />
    
    <AlertCircle className="text-muted-2 mb-4 group-hover:text-primary/60 transition-colors" size={48} />
    <div className="text-center px-6">
      <h4 className="text-sm font-black text-muted-2 uppercase tracking-[0.3em] font-mono mb-2">
        Visual Asset Pending
      </h4>
      <p className="text-[10px] text-muted-2 font-mono uppercase tracking-widest">
        {title}
      </p>
    </div>

    {/* HUD corners */}
    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-theme-strong opacity-40" />
    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-theme-strong opacity-40" />
    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-theme-strong opacity-40" />
    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-theme-strong opacity-40" />
  </div>
);

const projects: Project[] = [
  {
    id: "certiown",
    title: "CertiOwn",
    subtitle: "Institutional Certificate Automation",
    description: "Certificate automation and verification platform developed for institutional workflows, workshops, conferences, and academic activities.",
    tech: ["Flask", "Automation", "SaaS", "SMTP"],
    highlights: [
      "Bulk certificate generation & verification",
      "Automated distribution with real-time tracking",
      "Customizable institutional templates",
      "Secure administrative control panel"
    ],
    status: "Private",
    accessNote: "Private project — demo and preview available on request.",
    image: "/certiown.png",
    href: "/projects#certiown",
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
    href: "/projects#mailing",
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
    image: "/sdetm.png",
    href: "https://sdetm-icem.vercel.app/",
    links: [
      { label: "Visit Website", href: "https://sdetm-icem.vercel.app/", icon: <Globe size={14} />, primary: true },
      { label: "Walkthrough", href: "#", icon: <Play size={14} /> }
    ]
  },
  {
    id: "uba",
    title: "UBA ICEM Portal",
    subtitle: "Institutional Program Platform",
    description: "A centralized platform built for Unnat Bharat Abhiyan (UBA) to manage institutional initiatives and streamline program-related workflows.",
    tech: ["Hosting", "Deployment", "SEO", "Testing"],
    highlights: [
      "End-to-end hosting and deployment orchestration",
      "Institutional-grade documentation and testing",
      "IIT Bombay initiative support",
      "Performance optimization and SEO implementation"
    ],
    status: "Public",
    liveUrl: "https://uba-icem.vercel.app/",
    image: "/uba.png",
    href: "/projects/uba",
    links: [
      { label: "Visit Website", href: "https://uba-icem.vercel.app/", icon: <Globe size={14} />, primary: true },
      { label: "View Case Study", href: "/projects/uba", icon: <Layout size={14} />, special: true }
    ]
  },
  {
    id: "portfolio",
    title: "Next-Gen Portfolio",
    subtitle: "Systems-Inspired Portfolio",
    description: "Systems-inspired portfolio interface focused on technical storytelling and developer identity, built for high performance and clarity.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: [
      "Technical storytelling-driven architecture",
      "Mission Control systems aesthetic",
      "Optimized performance and SEO metadata",
      "TypeScript powered type-safety"
    ],
    status: "Public",
    liveUrl: "https://gauravnawale.in/",
    githubUrl: "https://github.com/Nawalegaurav26/lifetime_learner26",
    image: "/gauravnawale.png",
    href: "/",
    links: [
      { label: "View Website", href: "https://gauravnawale.in/", icon: <Globe size={14} />, primary: true },
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
    <section id="projects" className="py-24 relative overflow-hidden bg-background/50 border-t border-theme">
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
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tight font-mono uppercase mb-8"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary filter drop-shadow-[0_0_15px_var(--primary-glow)]">Creations.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-base md:text-lg font-mono leading-relaxed max-w-2xl"
          >
            A collection of real-world systems and products designed to solve practical problems, with a focus on <span className="text-primary font-bold">scalability</span>, <span className="text-accent font-bold">automation</span>, and <span className="text-foreground">user experience</span>.
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
                <Link href={project.href || "#"} className="block group/img-link">
                  <div className="relative aspect-video rounded-xl overflow-hidden glass border border-theme shadow-2xl group-hover/img-link:shadow-[0_0_32px_var(--primary-glow)] transition-all duration-700">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover/img-link:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover/img-link:grayscale-0"
                      />
                    ) : (
                      <ComingSoonMedia title={project.title} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img-link:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-surface/80 px-4 py-2 rounded-full border border-primary/30 text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-2xl">
                        View Project Experience
                      </div>
                    </div>

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
                </Link>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-black text-muted-2 uppercase tracking-widest font-mono border-b border-theme pb-1">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-mono group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-primary/70 uppercase tracking-[0.2em] mb-6">
                  {project.subtitle}
                </p>

                <p className="text-muted text-sm md:text-base font-mono leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-10">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                      <span className="text-xs font-mono text-muted group-hover/item:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                {project.accessNote && (
                  <p className="text-[10px] italic text-muted-2 mb-8 border-l-2 border-amber-500/20 pl-4 py-1">
                    {project.accessNote}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      target={link.href.startsWith("/") ? "_self" : "_blank"}
                      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all duration-500 font-mono overflow-hidden group/btn ${
                        link.special
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105"
                        : link.primary 
                        ? "bg-primary text-white hover:opacity-95 hover:shadow-[0_0_20px_var(--primary-glow)]" 
                        : "bg-surface-alt/40 text-muted hover:bg-surface-alt hover:text-foreground border border-theme"
                      }`}
                    >
                      {link.special && (
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                        />
                      )}
                      {link.icon}
                      {link.label}
                      {link.special && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                      )}
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-4">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary filter drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]">Demonstrations.</span>
            </h2>
            <p className="text-muted-2 text-xs font-mono tracking-[0.3em] uppercase">
              Visual walkthroughs of core system architectures
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
