"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Play, 
  Monitor, 
  Shield, 
  Search, 
  Cpu, 
  Layout, 
  ArrowRight,
  Code,
  Globe,
  Database,
  Layers,
  CheckCircle2,
  Calendar,
  User,
  Activity,
  ChevronDown,
  Terminal,
  Zap,
  Globe2,
  Server,
  Cloud,
  FileCode2,
  TestTube2
} from "lucide-react";

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const FadeIn = ({ children, delay = 0, y = 20, x = 0 }: { children: React.ReactNode; delay?: number; y?: number; x?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ProjectHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Particles/Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div 
          style={{ y, opacity, scale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[80vw] h-[80vw] bg-blue-500/10 blur-[120px] rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm"
        >
          <Shield size={16} />
          <span>Institutional Digital Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          UBA ICEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Portal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Building systems that combine technology, accessibility, and institutional impact under the Unnat Bharat Abhiyan initiative.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link 
            href="https://uba-icem.vercel.app/" 
            target="_blank"
            className="group relative flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <ExternalLink size={20} className="relative z-10" />
            <span className="relative z-10">Live Website</span>
          </Link>
          <button 
            onClick={scrollToJourney}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm group"
          >
            <Play size={20} className="group-hover:text-blue-400 transition-colors" />
            <span>Watch Journey</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10"
        >
          {[
            { label: "Interface Pages", value: "10+", icon: Layout },
            { label: "Architecture", value: "Full Stack", icon: Cpu },
            { label: "Optimization", value: "SEO Ready", icon: Search },
            { label: "Deployment", value: "Institutional", icon: Globe }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-3">
                <stat.icon size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectOverview = () => {
  return (
    <Section className="bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn x={-50}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The Digital <span className="text-blue-500">Infrastructure</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            A centralized institutional platform developed for the Unnat Bharat Abhiyan initiative at ICEM to manage program-related workflows, improve accessibility of information, and strengthen digital infrastructure.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <User size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Role</h4>
                <p className="text-slate-400">Full Stack Developer, SEO & Testing</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Timeline</h4>
                <p className="text-slate-400">Jan 2026 – Present</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["TypeScript", "Next.js", "SEO", "Deployment", "Testing", "Institutional Platform", "Framer Motion"].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn x={50} delay={0.2} className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 group">
            <Image 
              src="/projects/uba/01home.png" 
              alt="UBA ICEM Portal Preview" 
              width={800} 
              height={500} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            
            {/* Animated Dashboard Overlay Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">System Live</div>
              </div>
              <div className="text-2xl font-bold text-white">99.9% Uptime</div>
            </motion.div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
        </FadeIn>
      </div>
    </Section>
  );
};

const timelineData = [
  {
    image: "/projects/uba/01home.png",
    title: "Landing Experience",
    description: "Designed a modern institutional landing page with structured navigation and optimized accessibility."
  },
  {
    image: "/projects/uba/02home.png",
    title: "Hero Architecture",
    description: "Implemented a dynamic hero section with real-time statistics and institutional branding."
  },
  {
    image: "/projects/uba/03about icem.png",
    title: "Institutional Context",
    description: "Detailing the vision of ICEM and its role in regional development and academic excellence."
  },
  {
    image: "/projects/uba/04about uba.png",
    title: "UBA Initiative",
    description: "Bridging the gap between higher education institutions and rural development through structured digital communication."
  },
  {
    image: "/projects/uba/05villages.png",
    title: "Village Management",
    description: "Developing a directory system for adopted villages, enabling better tracking of developmental projects."
  },
  {
    image: "/projects/uba/06village info.png",
    title: "Granular Data Tracking",
    description: "Created specialized views for tracking detailed village metrics and developmental progress."
  },
  {
    image: "/projects/uba/07interactive map.png",
    title: "Interactive Village Mapping",
    description: "Implemented interactive visualization for village-level information and program accessibility."
  },
  {
    image: "/projects/uba/08villages.png",
    title: "Regional Coverage",
    description: "A comprehensive view of all participating clusters and their impact on the local ecosystem."
  },
  {
    image: "/projects/uba/09team.png",
    title: "Collaborative Infrastructure",
    description: "Built a dedicated team section to acknowledge contributors and manage institutional leadership workflows."
  },
  {
    image: "/projects/uba/10join us.png",
    title: "Action-Driven Design",
    description: "Optimized conversion paths for volunteers and stakeholders to join the national initiative."
  }
];

const DevelopmentJourney = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="journey" className="bg-slate-950 pb-0">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Development <span className="text-blue-500">Journey</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A deep dive into the architectural evolution of the UBA ICEM Portal, from initial conceptualization to institutional deployment.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative flex flex-col lg:flex-row gap-12">
        {/* Left: Sticky Image Preview */}
        <div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[70vh] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image 
                src={timelineData[activeIndex].image} 
                alt={timelineData[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Scrolling Content */}
        <div className="lg:w-1/2 space-y-48 py-20">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              onInView={() => setActiveIndex(index)}
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

const TimelineItem = ({ item, index, onInView }: { item: TimelineData; index: number; onInView: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className={`p-10 rounded-3xl border transition-all duration-500 ${
        isInView 
          ? "bg-blue-600/10 border-blue-500/30 shadow-lg shadow-blue-500/5" 
          : "bg-white/5 border-white/10 opacity-40 grayscale"
      }`}
    >
      <div className="text-5xl font-bold text-blue-500/20 mb-4">0{index + 1}</div>
      <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
      <p className="text-lg text-slate-400 leading-relaxed mb-6">
        {item.description}
      </p>
      <div className="flex items-center gap-2 text-blue-400 font-medium group cursor-pointer">
        <span>View Details</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const ImpactSection = () => {
  const metrics = [
    { title: "Full Stack Development", desc: "End-to-end integration of institutional systems.", icon: Code, color: "blue" },
    { title: "Deployment & Hosting", desc: "Automated CI/CD pipelines for institutional uptime.", icon: Cloud, color: "cyan" },
    { title: "SEO Optimization", desc: "Enhanced discoverability for government initiatives.", icon: Search, color: "indigo" },
    { title: "Institutional Workflow", desc: "Optimizing communication between college and villages.", icon: Activity, color: "sky" },
    { title: "Performance Testing", desc: "Ensuring low latency and high accessibility.", icon: Zap, color: "yellow" },
    { title: "GitHub Collaboration", desc: "Clean codebase and collaborative development.", icon: Github, color: "slate" }
  ];

  return (
    <Section className="bg-slate-950">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contribution & <span className="text-blue-500">Impact</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Tangible results and engineering excellence delivered for the UBA ICEM platform.</p>
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
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 p-10 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all`}></div>
            <metric.icon size={32} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{metric.title}</h3>
            <p className="text-slate-400 leading-relaxed relative z-10">{metric.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const ArchitectureSection = () => {
  return (
    <Section className="bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn x={-50}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Technical <span className="text-blue-500">Architecture</span>
          </h2>
          <div className="space-y-8">
            <ArchStep 
              icon={Terminal} 
              title="Frontend Layer" 
              desc="Built with Next.js 15 and TypeScript for type-safe, performant institutional UIs." 
            />
            <ArchStep 
              icon={Server} 
              title="Backend Integration" 
              desc="Seamlessly connected with institutional data streams and workflow management." 
            />
            <ArchStep 
              icon={Cloud} 
              title="Deployment Pipeline" 
              desc="Automated edge deployment on Vercel with integrated performance monitoring." 
            />
            <ArchStep 
              icon={Search} 
              title="SEO & Accessibility" 
              desc="WCAG compliant design with metadata optimization for national reach." 
            />
          </div>
        </FadeIn>

        <div className="relative aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Architecture Diagram */}
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
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
                filter="url(#glow)"
              />
              <text x="200" y="205" textAnchor="middle" fill="white" className="text-xs font-bold font-sans">CORE</text>
              
              {/* Peripheral Nodes */}
              {[
                { angle: 0, label: "UI" },
                { angle: 72, label: "API" },
                { angle: 144, label: "DB" },
                { angle: 216, label: "CDN" },
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
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

const ArchStep = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
  >
    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const LiveExperience = () => {
  return (
    <Section className="bg-slate-950">
      <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-900/40 to-slate-900 border border-white/10 p-12 md:p-24 text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <FadeIn y={30}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to explore the <span className="text-blue-400">Platform?</span></h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            Experience the UBA ICEM portal live or dive into the codebase to see the technical implementation.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <Link 
              href="https://uba-icem.vercel.app/" 
              target="_blank"
              className="px-10 py-5 bg-white text-slate-950 hover:bg-blue-50 rounded-2xl font-bold transition-all shadow-xl shadow-white/10 flex items-center gap-2"
            >
              <Globe2 size={20} />
              Visit Live Website
            </Link>
            <Link 
              href="https://github.com/Nawalegaurav26/uba.icem" 
              target="_blank"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Github size={20} />
              View GitHub
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
          <div className="relative rounded-t-3xl overflow-hidden border-x border-t border-white/20 bg-slate-900 shadow-2xl">
             <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <Image 
                src="/projects/uba/07interactive map.png" 
                alt="Interactive Map" 
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
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
        >
          Project Conclusion
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-light text-white leading-tight mb-12 italic"
        >
          &quot;Building systems that combine <span className="text-blue-500 font-semibold">technology</span>, <span className="text-blue-500 font-semibold">accessibility</span>, and institutional <span className="text-blue-500 font-semibold">impact</span>.&quot;
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
        ></motion.div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function UBACaseStudy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-slate-950 selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
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
