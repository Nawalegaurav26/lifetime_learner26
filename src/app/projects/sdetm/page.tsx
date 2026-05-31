"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ExternalLink, 
  Play, 
  Search, 
  Cpu, 
  Layout, 
  ArrowRight,
  Globe,
  Calendar,
  User,
  Terminal,
  Zap,
  Globe2,
  Server,
  Cloud
} from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const FadeIn = ({ children, delay = 0, y = 20, x = 0, className = "" }: { children: React.ReactNode; delay?: number; y?: number; x?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProjectHero = () => {
  const scrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden subtle-grid"
    >
      <div className="scanline" />

      {/* Decorative Blobs */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow pointer-events-none"
        style={{ background: "var(--primary-glow)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `rgba(139, 92, 246, 0.08)` }}
      />

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full"
            style={{
              border: "1px solid var(--primary-glow)",
              boxShadow: "0 0 15px var(--primary-glow)",
            }}
          >
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--primary)" }}
              />
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ background: "var(--primary)" }}
              />
            </span>
            <span
              className="text-xs font-mono font-semibold tracking-widest uppercase"
              style={{ color: "var(--primary-light)" }}
            >
              Academic Web Infrastructure
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ color: "var(--foreground)" }}
        >
          SDETM ICEM <span 
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
              filter: "drop-shadow(0 0 10px var(--primary-glow))",
            }}
          >Portal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-bold mb-12 max-w-3xl mx-auto font-mono tracking-tight leading-relaxed"
          style={{ color: "var(--foreground)" }}
        >
          &quot;Developing a high-performance conference portal for the International Conference on Sustainable Developments in Engineering, Technology and Management.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto"
        >
          <Link 
            href="https://sdetm-icem.vercel.app/" 
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 text-white font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center gap-2 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 24px var(--primary-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--primary-hover)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px var(--primary-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--primary)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px var(--primary-glow)";
            }}
          >
            Live Website <ExternalLink size={16} />
          </Link>
          <button 
            onClick={scrollToJourney}
            className="w-full sm:w-auto px-8 py-4 glass font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center gap-2 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              color: "var(--foreground)",
              border: "1px solid var(--border-strong)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
            }}
          >
            Watch Journey <Play size={16} />
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-theme"
        >
          {[
            { label: "Interface Pages", value: "10+", icon: Layout },
            { label: "Domain-Specific", value: "Academic", icon: Cpu },
            { label: "SEO Rating", value: "Optimized", icon: Search },
            { label: "Scale", value: "International", icon: Globe }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-3">
                <stat.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
              <div className="text-xs text-muted uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span
          className="text-[10px] font-mono uppercase tracking-[0.3em]"
          style={{ color: "var(--primary)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12"
          style={{
            background: `linear-gradient(to bottom, var(--primary), transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
};

const ProjectOverview = () => {
  return (
    <Section className="bg-background">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn x={-50}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-8">
            Academic <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>Portal</span>
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed font-mono">
            A comprehensive conference management system designed for the Indira College of Engineering and Management (ICEM), Pune. Built to streamline paper submissions, technical track allocations, registration procedures, and information access for global delegates.
          </p>
          
          <div className="space-y-6 mb-10 font-mono">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg glass border border-primary/20 text-primary-light">
                <User size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-bold uppercase text-sm tracking-wider">Role</h4>
                <p className="text-muted text-sm">Full Stack Developer, UI/UX Designer &amp; SEO Optimizer</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg glass border border-primary/20 text-primary-light">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-bold uppercase text-sm tracking-wider">Timeline</h4>
                <p className="text-muted text-sm">Feb 2026 – Present</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Next.js", "Tailwind CSS", "Academic UI", "SEO Optimization", "Responsive Design", "Paper Submission Flow"].map((tag, i) => (
              <span key={i} className="px-4 py-2 glass border border-theme text-muted text-xs font-mono font-semibold uppercase tracking-wider rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn x={50} delay={0.2} className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-theme shadow-2xl group">
            <Image 
              src="/projects/sdetm/HOME PAGE.png" 
              alt="SDETM ICEM Portal Home" 
              width={800} 
              height={500} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            
            {/* Animated Status Indicator */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 rounded-xl glass border border-primary/20 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="text-[10px] font-bold text-primary font-mono uppercase tracking-wider">Conference Live</div>
              </div>
              <div className="text-sm font-bold text-foreground font-mono">Submissions Open</div>
            </motion.div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full"></div>
        </FadeIn>
      </div>
    </Section>
  );
};

const timelineData = [
  {
    image: "/projects/sdetm/HOME PAGE.png",
    title: "Home Page Landing Experience",
    description: "Welcome interface tailored for international academic delegations, featuring clean typography, quick navigation, and instant access to submission links."
  },
  {
    image: "/projects/sdetm/ABOUT CONFERENCE.png",
    title: "About the Conference",
    description: "Details the objectives, themes, and scope of SDETM, outlining the vision for sustainable engineering solutions and academic research."
  },
  {
    image: "/projects/sdetm/ABOUT ICEM.png",
    title: "About Host Institution (ICEM)",
    description: "Features the Indira College of Engineering and Management (ICEM), Pune, providing prospective attendees with credentials and regional significance."
  },
  {
    image: "/projects/sdetm/CALL FOR PAPERS AND SUBMISSION.png",
    title: "Call for Papers & Submissions",
    description: "A structured overview guiding authors through submission protocols, peer review phases, and publication opportunities in index journals."
  },
  {
    image: "/projects/sdetm/TECHNICAL TRACKS.png",
    title: "Technical Sessions & Tracks",
    description: "Clearly organizes the conference scope into domain tracks (Computer Science, Mechanical, Civil, E&TC) to streamline researcher registrations."
  },
  {
    image: "/projects/sdetm/IMPORTANT DATES.png",
    title: "Important Milestone Tracker",
    description: "Presents critical event deadlines (abstract submission, notification, final registrations) in an easily readable format."
  },
  {
    image: "/projects/sdetm/REGISTRATION.png",
    title: "Registration Information",
    description: "Details fee matrices for Indian and foreign delegates across academic, student, and industry categories, ensuring transactional clarity."
  },
  {
    image: "/projects/sdetm/COLLEGE ADVISORY COMMITTE.png",
    title: "College Advisory Committees",
    description: "Highlights the patron boards, national/international advisory committees, and organizing chairs driving the conference peer reviews."
  },
  {
    image: "/projects/sdetm/CONFERENCE VENUE.png",
    title: "Conference Venue & Logistics",
    description: "Provides location coordinates, maps, and travel recommendations for international delegates visiting Pune, India."
  },
  {
    image: "/projects/sdetm/CONTACT.png",
    title: "Contact & Query Desks",
    description: "Includes official helpdesk channels, emails, and address points to assist attendees with registration or accommodation concerns."
  }
];

const DevelopmentJourney = () => {
  return (
    <Section id="journey" className="bg-background">
      <div className="text-center mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-6"
        >
          Development <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>Journey</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-sm font-mono uppercase tracking-wider"
        >
          Walkthrough of the components and user experience crafted for the SDETM ICEM International Conference portal.
        </motion.p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Connecting Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-primary/10 to-transparent hidden lg:block"></div>

        <div className="space-y-32">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

interface TimelineData {
  image: string;
  title: string;
  description: string;
}

const TimelineItem = ({ item, index }: { item: TimelineData; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Image Side */}
      <div className={`relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-theme shadow-2xl group-hover:border-primary/30 transition-all duration-500">
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Glow behind image */}
        <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Text Side */}
      <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1 lg:text-right"}`}>
        {/* Connector Dot */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[var(--background)] z-10 hidden lg:block ${
          isEven ? "-left-[66px]" : "-right-[66px]"
        }`}></div>

        <div className="inline-block px-4 py-2 glass rounded-md border border-primary/20 text-primary-light text-xs font-mono font-bold uppercase tracking-widest mb-6">
          Phase 0{index + 1}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground font-mono uppercase mb-6 leading-tight">
          {item.title}
        </h3>
        <p className="text-base text-muted leading-relaxed font-sans mb-8 max-w-xl ml-auto mr-auto lg:ml-0 lg:mr-0">
          {item.description}
        </p>
        
        <div className={`flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-widest group cursor-pointer ${!isEven ? "lg:justify-end" : ""}`}>
          <span>Explore Component</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const ImpactSection = () => {
  const metrics = [
    { title: "Academic Branding", desc: "Designed structured, authoritative layouts that convey trust and academic standards.", icon: Layout },
    { title: "Fast Edge Delivery", desc: "Hosted on Vercel Edge networks to ensure low-latency loading for international users.", icon: Cloud },
    { title: "SEO Optimization", desc: "Enhanced web crawling configuration so researchers can find tracks on Google.", icon: Search },
    { title: "Technical Track Layout", desc: "Mapped multiple engineering departments into intuitive, segregated information blocks.", icon: Cpu },
    { title: "Responsive UX Adaptation", desc: "Ensured seamless paper submissions and schedule reading across mobiles and tablets.", icon: Zap },
    { title: "Collaborative Git Control", desc: "Maintained complete codebase tracking and clean branching strategies.", icon: Github }
  ];

  return (
    <Section className="bg-background">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-6">Contribution & <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>Impact</span></h2>
        <p className="text-muted max-w-2xl mx-auto font-mono text-sm uppercase tracking-wider">Key contributions made to support the digital execution of the international conference.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group p-8 rounded-lg glass border border-theme hover:border-primary/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all"></div>
            <metric.icon size={32} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wide mb-3 relative z-10">{metric.title}</h3>
            <p className="text-muted text-sm leading-relaxed relative z-10">{metric.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const ArchitectureSection = () => {
  return (
    <Section className="bg-background">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn x={-50}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-8">
            Technical <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>Architecture</span>
          </h2>
          <div className="space-y-8">
            <ArchStep 
              icon={Terminal} 
              title="Modern Framework" 
              desc="Built with Next.js and optimized using clean React components for smooth user interaction." 
            />
            <ArchStep 
              icon={Server} 
              title="State Isolation" 
              desc="Ensured static informational screens load instantly, utilizing client-side hydration only for interactive elements." 
            />
            <ArchStep 
              icon={Cloud} 
              title="Vercel Edge Cloud" 
              desc="Deployed worldwide with high availability to accommodate researchers accessing guidelines globally." 
            />
            <ArchStep 
              icon={Search} 
              title="Semantic SEO Structure" 
              desc="Configured clean semantic HTML tags (H1-H6) and meta schemas to rank high on search results." 
            />
          </div>
        </FadeIn>

        <div className="relative aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Architecture SVG Diagram */}
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
              <defs>
                <filter id="glow-sdetm" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Outer Circles */}
              <motion.circle 
                cx="200" cy="200" r="180" 
                fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="200" cy="200" r="140" 
                fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="10 5"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Central Node */}
              <motion.circle 
                cx="200" cy="200" r="40" 
                fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" 
                filter="url(#glow-sdetm)"
              />
              <text x="200" y="205" textAnchor="middle" fill="white" className="text-xs font-bold font-sans">SDETM</text>
              
              {/* Peripheral Nodes */}
              {[
                { angle: 0, label: "UI" },
                { angle: 72, label: "INFO" },
                { angle: 144, label: "DOCS" },
                { angle: 216, label: "TRACK" },
                { angle: 288, label: "SEO" }
              ].map((node, i) => {
                const x = 200 + 120 * Math.cos((node.angle * Math.PI) / 180);
                const y = 200 + 120 * Math.sin((node.angle * Math.PI) / 180);
                return (
                  <g key={i}>
                    <motion.line 
                      x1="200" y1="200" x2={x} y2={y} 
                      stroke="#3b82f6" strokeWidth="1" opacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                    <motion.circle 
                      cx={x} cy={y} r="25" 
                      fill="#0f172a" stroke="#3b82f6" strokeWidth="1" 
                      whileHover={{ scale: 1.2, fill: "rgba(59, 130, 246, 0.2)" }}
                    />
                    <text x={x} y={y + 4} textAnchor="middle" fill="white" className="text-[10px] font-medium font-sans">{node.label}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

const ArchStep = ({ icon: Icon, title, desc }: { icon: React.ComponentType<{ size?: number }>; title: string; desc: string }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface border border-transparent hover:border-theme transition-all"
  >
    <div className="p-3 rounded-lg glass border border-primary/20 text-primary-light">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-foreground font-mono font-bold mb-1 uppercase text-sm tracking-wider">{title}</h4>
      <p className="text-muted text-sm leading-relaxed font-sans">{desc}</p>
    </div>
  </motion.div>
);

const LiveExperience = () => {
  return (
    <Section className="bg-background">
      <div className="relative rounded-[40px] overflow-hidden glass border border-theme p-12 md:p-24 text-center">
        <FadeIn y={30}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight font-mono uppercase mb-8">Explore the Conference <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>Portal</span></h2>
          <p className="text-base text-muted mb-12 max-w-2xl mx-auto font-mono uppercase tracking-wider">
            Visit the active SDETM ICEM portal to check timelines, review tracks, and explore institutional configurations.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <Link 
              href="https://sdetm-icem.vercel.app/" 
              target="_blank"
              className="px-8 py-4 text-white font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center gap-2 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--primary)",
                boxShadow: "0 0 24px var(--primary-glow)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--primary-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px var(--primary-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--primary)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px var(--primary-glow)";
              }}
            >
              <Globe2 size={16} />
              Visit Live Website
            </Link>
          </div>
        </FadeIn>

        {/* Floating Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 -mb-48 md:-mb-80 max-w-5xl mx-auto"
        >
          <div className="relative rounded-t-3xl overflow-hidden border-x border-t border-theme bg-surface shadow-2xl">
             <div className="h-8 bg-surface flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <Image 
                src="/projects/sdetm/HOME PAGE.png" 
                alt="SDETM Portal Home Frame" 
                width={1200} 
                height={800} 
                className="w-full h-auto"
             />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const FinalOutro = () => {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 glass rounded-full"
          style={{
            border: "1px solid var(--primary-glow)",
            boxShadow: "0 0 15px var(--primary-glow)",
          }}
        >
          <span
            className="text-xs font-mono font-semibold tracking-widest uppercase"
            style={{ color: "var(--primary-light)" }}
          >
            Project Conclusion
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-mono text-foreground leading-relaxed mb-12 italic"
        >
          &quot;Streamlining academic communication and research visibility through structured, performant <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))", filter: "drop-shadow(0 0 10px var(--primary-glow))" }}>web solutions</span>.&quot;
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
        ></motion.div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function SDETMCaseStudy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-background selection:bg-primary/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <ProjectHero />
      <ProjectOverview />
      <DevelopmentJourney />
      <ImpactSection />
      <ArchitectureSection />
      <LiveExperience />
      <FinalOutro />
    </main>
  );
}
