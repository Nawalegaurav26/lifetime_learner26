"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-gap relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            {/* Left side: Photo with technical frame */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 glass border border-primary/20 rounded-md -z-10 group-hover:border-primary/40 transition-colors" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40 -translate-y-2 translate-x-2" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/40 translate-y-2 -translate-x-2" />
              
              <div className="relative aspect-square overflow-hidden rounded-sm border border-slate-800">
                <img 
                  src="/profile.jpg" 
                  alt="Gaurav Raju Nawale" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* HUD Overlay on image */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <div className="w-8 h-[1px] bg-primary/60" />
                  <div className="w-4 h-[1px] bg-primary/40" />
                </div>
                <div className="absolute bottom-4 right-4 text-[8px] font-mono text-primary/60 tracking-tighter">
                  ID: GNR_026 <br />
                  SCAN: COMPLETE
                </div>
              </div>
              
              {/* Floating Stat */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 glass p-6 border border-primary/30 rounded-md shadow-[0_0_20px_rgba(59,130,246,0.2)] hidden md:block"
              >
                <p className="text-2xl font-black text-primary-light font-mono">BCI</p>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Research Focus</p>
              </motion.div>
            </motion.div>

            {/* Right side: Detailed Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase">
                  Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Identity</span>
                </h2>
                <div className="w-20 h-1 bg-primary mt-4" />
              </div>

              <div className="space-y-6 text-sm md:text-base text-slate-400 leading-relaxed font-mono">
                <p className="first-letter:text-4xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  I’m a <span className="text-slate-100 font-bold">Computer Science Engineering student</span> and builder focused on creating real-world digital solutions. I enjoy turning ideas into scalable products, especially in web development and automation systems.
                </p>
                
                <p>
                  I have developed systems like a <span className="text-primary-light font-bold underline decoration-primary/30 underline-offset-4">certificate management platform</span> that automates issuance and verification, and I’m currently working on scaling it into a SaaS product. My work goes beyond coding — I focus on building complete, usable systems that solve real problems.
                </p>

                <p>
                  I’m also exploring emerging technologies like <span className="text-secondary-light font-bold">Brain-Computer Interfaces (BCI)</span>, with a growing interest in understanding how human cognition can interact directly with computing systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="glass p-5 border-l-2 border-primary/40 bg-primary/5">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Core Philosophy</p>
                    <p className="text-sm text-slate-300">Execution over theory. Focusing on system design, problem-solving, and continuous improvement.</p>
                  </div>
                  <div className="glass p-5 border-l-2 border-secondary/40 bg-secondary/5">
                    <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2">Leadership</p>
                    <p className="text-sm text-slate-300">Managing academic and technical initiatives, gaining experience in coordination and execution.</p>
                  </div>
                </div>

                <p className="pt-4 border-t border-slate-800">
                  Currently exploring <span className="text-accent-light font-bold">Full-stack, Data Science, ML, and BCI</span>, with the goal of building scalable, impactful, and research-driven technology products.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {["Python", "Flask", "React", "Next.js", "Automation", "BCI", "ML"].map((tech) => (
                  <span key={tech} className="px-4 py-2 glass border border-slate-700 text-[10px] font-bold text-slate-300 uppercase tracking-widest rounded-sm hover:border-primary/40 transition-colors cursor-default font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
