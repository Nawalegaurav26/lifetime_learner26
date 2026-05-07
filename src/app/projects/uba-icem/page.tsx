"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Zap, 
  Search, 
  ShieldCheck, 
  Globe, 
  Cpu,
  BarChart3,
  Users,
  Code2,
  ArrowRight
} from "lucide-react";

// --- Components ---

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-slate-400 text-lg max-w-2xl mx-auto"
    >
      {subtitle}
    </motion.p>
  </div>
);

const TechTag = ({ text }: { text: string }) => (
  <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors">
    {text}
  </span>
);

const MetricCard = ({ icon: Icon, title, value, delay }: { icon: any; title: string; value: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 rounded-2xl flex flex-col items-center text-center group card-hover"
  >
    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-3xl font-bold mb-2 text-white">{value}</h3>
    <p className="text-slate-400 text-sm">{title}</p>
  </motion.div>
);

// --- Data ---

const timelineData = [
  {
    image: "/projects/uba/01home.png",
    title: "Landing Experience",
    description: "Designed a modern institutional landing page with structured navigation and optimized accessibility."
  },
  {
    image: "/projects/uba/02home.png",
    title: "Brand Identity",
    description: "Visualizing the Unnat Bharat Abhiyan initiative through cohesive branding and typography."
  },
  {
    image: "/projects/uba/03about icem.png",
    title: "Institutional Context",
    description: "Detailed information about ICEM's role in the national initiative."
  },
  {
    image: "/projects/uba/04about uba.png",
    title: "Program Vision",
    description: "Defining the core values and objectives of the UBA mission."
  },
  {
    image: "/projects/uba/05villages.png",
    title: "Village Ecosystem",
    description: "Displaying the adopted villages under the ICEM UBA cell."
  },
  {
    image: "/projects/uba/06village info.png",
    title: "Granular Village Data",
    description: "Comprehensive information architecture for individual village metrics."
  },
  {
    image: "/projects/uba/07interactive map.png",
    title: "Interactive Village Mapping",
    description: "Implemented interactive visualization for village-level information and program accessibility."
  },
  {
    image: "/projects/uba/08villages.png",
    title: "Community Outreach",
    description: "Managing demographic distributions and community engagement initiatives."
  },
  {
    image: "/projects/uba/09team.png",
    title: "Team Collaboration",
    description: "Showcasing the dedicated members behind the institutional efforts."
  },
  {
    image: "/projects/uba/10join us.png",
    title: "Actionable Engagement",
    description: "A streamlined portal for volunteers and contributors to join the mission."
  }
];

export default function UBACaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white"
    >
      {/* Mouse Follow Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05), transparent 80%)`
        }}
      />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 subtle-grid opacity-20" />
          <div className="scanline" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-6 inline-block"
            >
              Institutional Case Study
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter"
            >
              UBA ICEM <span className="gradient-text">Portal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12"
            >
              Architecting Digital Infrastructure for Unnat Bharat Abhiyan at ICEM.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Link 
                href="https://uba-icem.vercel.app/" 
                target="_blank"
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                <ExternalLink size={20} />
                Live Website
              </Link>
              <Link 
                href="https://github.com/Nawalegaurav26/uba.icem" 
                target="_blank"
                className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-700 transition-all transform hover:scale-105 border border-slate-700"
              >
                <Github size={20} />
                GitHub Repo
              </Link>
              <button 
                onClick={() => {
                  const el = document.getElementById('development-journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-700 transition-all transform hover:scale-105 border border-slate-700 cursor-pointer"
              >
                <Play size={20} />
                Watch Journey
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { label: "Interface Pages", value: "10+" },
                { label: "Architecture", value: "Full Stack" },
                { label: "Search Ranking", value: "Optimized" },
                { label: "Deployment", value: "Vercel" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating UI Preview - Simplified Mockup */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 opacity-40 blur-[2px]"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
             <Image 
                src="/projects/uba/01home.png" 
                alt="Project Preview" 
                fill 
                className="object-cover"
                priority
             />
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="section-gap relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">The <span className="text-primary">Vision</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                The UBA ICEM Portal was conceived as a centralized institutional platform for the Unnat Bharat Abhiyan initiative at Indira College of Engineering and Management (ICEM). 
                The goal was to transform program-related workflows from manual processes into a structured, high-performance digital ecosystem associated with IIT Bombay and the Government of India.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Zap className="text-primary w-5 h-5" />
                    Key Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Full-stack development",
                      "Hosting & deployment",
                      "SEO implementation",
                      "Testing & optimization",
                      "Frontend/backend integration",
                      "Documentation workflows"
                    ].map(item => (
                      <li key={item} className="text-slate-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "SEO", "Vercel", "Testing"].map(tag => (
                    <TechTag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass p-4 border border-white/10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image 
                    src="/projects/uba/02home.png" 
                    alt="Dashboard Mockup" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 p-4 glass rounded-2xl border border-primary/30"
                >
                  <ShieldCheck className="text-primary w-8 h-8" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl border border-secondary/30"
                >
                  <Globe className="text-secondary w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT JOURNEY TIMELINE */}
      <section id="development-journey" className="bg-slate-900/50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <SectionTitle 
            title="Development Journey" 
            subtitle="A guided walkthrough through the evolution of the UBA ICEM Portal."
          />
        </div>

        <div className="space-y-40 lg:space-y-64 pb-32">
          {timelineData.map((item, index) => (
            <TimelineSection key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* 4. CONTRIBUTION & IMPACT */}
      <section className="section-gap relative">
         <div className="container mx-auto px-6">
            <SectionTitle 
              title="Impact & Contribution" 
              subtitle="The tangible results and technical benchmarks achieved through the project."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MetricCard icon={Code2} title="Full Stack Architecture" value="Modular" delay={0.1} />
              <MetricCard icon={Zap} title="Deployment Performance" value="99.9%" delay={0.2} />
              <MetricCard icon={Search} title="SEO Visibility" value="Enhanced" delay={0.3} />
              <MetricCard icon={Layers} title="Institutional Workflow" value="Optimized" delay={0.4} />
              <MetricCard icon={ShieldCheck} title="Testing & Stability" value="Robust" delay={0.5} />
              <MetricCard icon={Github} title="GitHub Collaboration" value="Maintained" delay={0.6} />
            </div>
         </div>
      </section>

      {/* 5. TECHNICAL ARCHITECTURE */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Technical <span className="text-primary">Architecture</span></h2>
                <div className="space-y-8">
                  {[
                    { title: "Frontend Framework", desc: "Next.js with App Router for server-side rendering and performance optimization.", icon: Cpu },
                    { title: "Styling & UI", desc: "TailwindCSS for rapid utility-first styling with custom Glassmorphism tokens.", icon: Layers },
                    { title: "Animation Engine", desc: "Framer Motion for complex scroll-driven storytelling and smooth transitions.", icon: Zap },
                    { title: "SEO Strategy", desc: "JSON-LD schema, metadata optimization, and performance-focused crawling structures.", icon: Search }
                  ].map((tech, i) => (
                    <motion.div 
                      key={tech.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1">
                        <tech.icon className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{tech.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl bg-slate-950 border border-slate-800 p-8 flex items-center justify-center">
                {/* Simplified Architecture Visual */}
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                  
                  <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
                    <div className="col-span-3 glass rounded-xl border border-primary/30 flex items-center justify-center text-xs font-mono text-primary">CLIENT / BROWSER</div>
                    <div className="row-span-2 glass rounded-xl border border-white/10 flex items-center justify-center p-4 text-center">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Frontend</div>
                      <div className="text-xs">Next.js<br/>Framer<br/>Tailwind</div>
                    </div>
                    <div className="glass rounded-xl border border-white/10 flex items-center justify-center text-[10px] font-mono">API ROUTE</div>
                    <div className="row-span-2 glass rounded-xl border border-white/10 flex items-center justify-center p-4 text-center">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Hosting</div>
                      <div className="text-xs">Vercel<br/>Edge</div>
                    </div>
                    <div className="glass rounded-xl border border-white/10 flex items-center justify-center text-[10px] font-mono">ASSETS</div>
                  </div>

                  {/* Flow lines - CSS approximations */}
                  <div className="absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE EXPERIENCE */}
      <section className="section-gap relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to <span className="gradient-text">Explore?</span></h2>
            <p className="text-slate-400 text-xl mb-12">
              Experience the UBA ICEM Portal live and see how we've transformed institutional workflows.
            </p>

            <div className="relative group mb-16">
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-3xl overflow-hidden glass p-2 border border-white/10 shadow-2xl">
                 <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <Image 
                      src="/projects/uba/01home.png" 
                      alt="Full Project View" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Link 
                         href="https://uba-icem.vercel.app/" 
                         target="_blank"
                         className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold flex items-center gap-2 hover:scale-110 transition-transform shadow-xl"
                       >
                         <ExternalLink size={20} />
                         Launch Live Preview
                       </Link>
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="https://github.com/Nawalegaurav26/uba.icem" 
                target="_blank"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <Github size={24} />
                <span className="font-semibold underline-offset-8 group-hover:underline">View Source Code</span>
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <Users size={24} />
                <span className="font-semibold underline-offset-8 group-hover:underline">Collaborate with Me</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL OUTRO */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
          <div className="subtle-grid opacity-10 inset-0 absolute" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2 }}
           >
             <h3 className="text-3xl md:text-5xl font-light text-slate-300 mb-8 max-w-4xl mx-auto leading-tight italic">
               "Building systems that combine <span className="text-primary font-medium">technology</span>, 
               accessibility, and <span className="text-secondary font-medium">institutional impact</span>."
             </h3>
             <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
             <Link 
               href="/projects"
               className="text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2"
             >
               <ChevronRight className="rotate-180" />
               Back to Projects
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Floating Background Particles Simulation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "vw", 
              y: Math.random() * 100 + "vh",
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: ["-10vh", "110vh"],
              x: [null, (Math.random() - 0.5) * 200 + "px"]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
    </main>
  );
}

// --- Sub-component for Timeline ---

function TimelineSection({ item, index }: { item: any; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const xTranslate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? -50 : 50]);

  return (
    <div ref={sectionRef} className="container mx-auto px-6">
      <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
        {/* Image Container */}
        <motion.div 
          style={{ opacity, scale, x: xTranslate }}
          className="w-full lg:w-3/5"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative aspect-video rounded-3xl overflow-hidden glass p-2 border border-white/5 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="w-full lg:w-2/5 space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl font-black text-slate-800 tabular-nums">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="h-px flex-grow bg-slate-800" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            {item.description}
          </p>

          <div className="pt-4">
             <div className="inline-flex items-center gap-2 text-primary font-semibold group cursor-pointer">
                <span>View Technical Details</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
