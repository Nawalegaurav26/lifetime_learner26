"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  ChevronRight,
  Target,
  Zap,
  Activity,
  Code
} from "lucide-react";
import Link from "next/link";

const experience = [
  {
    title: "Founder & System Developer",
    company: "CertiOwn",
    period: "Nov 2024 - Present",
    desc: "Built and deployed scalable SaaS-based certificate automation and verification platform. Developed backend systems for bulk processing, email automation, workflow management. Integrated asynchronous task execution and automation pipelines using Celery.",
    tech: ["Python", "Flask", "Docker", "Celery"],
    icon: <Briefcase size={18} />,
  },
  {
    title: "Full Stack Developer, SEO & Testing",
    company: "Unnat Bharat Abhiyan (ICEM)",
    period: "Jan 2026 - Present",
    desc: "Working on development, hosting, testing, deployment, and SEO optimization for institutional portal under UBA initiative associated with IIT Bombay and Government of India. Improved deployment workflows and website structure.",
    tech: ["Next.js", "SEO", "GitHub"],
    icon: <Code size={18} />,
  },
  {
    title: "Full Stack Developer, SEO & Testing",
    company: "SDETM 2026 Int. Conference",
    period: "Feb 2026 - Present",
    desc: "Working on full-stack development, testing, deployment, and workflow automation. Developed conference workflows, responsive interfaces, and support-oriented systems. Contributed to deployment management and documentation.",
    tech: ["React", "Automation", "Deployment"],
    icon: <Code size={18} />,
  },
  {
    title: "Technical Secretary",
    company: "ICEM Pune",
    period: "Jul 2025 - Present",
    desc: "Managed technical operations, digital infrastructure, and coordination for institutional technical events. Handled multi-team execution, technical troubleshooting, and system management activities.",
    tech: ["Leadership", "Management"],
    icon: <Target size={18} />,
  },
  {
    title: "Campus Ambassador",
    company: "Techfest IIT Bombay",
    period: "Jul 2025 - Dec 2025",
    desc: "Selected as College Ambassador for Asia’s Largest Science and Technology Festival. Led student outreach initiatives, promoted participation, and worked as the connecting person for ICEM, Pune and IIT Bombay.",
    tech: ["Outreach", "Coordination"],
    icon: <GraduationCap size={18} />,
  }
];

const achievements = [
  {
    title: "CertiOwn Launch",
    desc: "Successfully launched the SaaS MVP and secured first 100+ active institutional users.",
    metric: "100+ Users",
    icon: <Target size={18} />
  },
  {
    title: "National AI Hackathon",
    desc: "Ranked Top 5 for building an LLM-powered predictive maintenance engine for industrial systems.",
    metric: "Finalist",
    icon: <Zap size={18} />
  },
  {
    title: "Full-Stack Specialist",
    desc: "Certified proficiency in modern web ecosystems and automated workflow design.",
    metric: "Certified",
    icon: <Code size={18} />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-mono"
            >
              <Activity size={14} />
              Professional Log
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-16 font-mono uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Journey.</span>
            </h2>
            
            <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-[18px] before:w-[1px] before:bg-slate-800">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Icon Node */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary transition-all duration-300 z-10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {item.icon}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-primary/60 font-mono tracking-widest uppercase">
                        {item.period}
                      </span>
                      <div className="h-[1px] flex-grow bg-slate-800 group-hover:bg-primary/20 transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors font-mono">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-black text-slate-500 font-mono tracking-widest uppercase">
                      {item.company}
                    </p>
                    
                    <p className="mt-4 text-sm text-slate-400 leading-relaxed font-mono max-w-xl">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="text-[8px] font-black text-slate-600 border border-slate-800 px-2 py-1 rounded-sm uppercase tracking-widest font-mono group-hover:border-primary/20 group-hover:text-primary/60 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Milestones */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 font-mono"
            >
              <Trophy size={14} />
              Strategic Wins
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-16 font-mono uppercase">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Milestones.</span>
            </h2>
            
            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 glass border border-white/5 group hover:border-accent/40 transition-all duration-500 rounded-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all text-accent">
                    {item.icon}
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-slate-900 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] font-mono">
                        {item.metric}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 font-mono group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-400 font-mono leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA for full CV/Resume */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 border border-dashed border-slate-800 rounded-lg text-center group hover:border-primary/40 transition-colors"
            >
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-4">
                In-depth technical background available
              </p>
              <Link 
                href="/Mr_Gaurav_Raju_Nawale.pdf"
                target="_blank"
                className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono flex items-center gap-2 mx-auto hover:text-primary-light transition-colors"
              >
                DOWNLOAD FULL DOSSIER <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
