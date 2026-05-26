"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIcon as Mail, WhatsAppIcon as WhatsApp, InstagramIcon } from "./Icons";
import Link from "next/link";
import { trackEvent } from "./Analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden subtle-grid" id="home">
      <div className="scanline" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
               </span>
               <span className="text-xs font-mono font-semibold tracking-widest text-primary-light uppercase">System Online</span>
            </div>
          </motion.div>
          
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
            >
              Gaurav Raju <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Nawale</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 max-w-2xl font-mono tracking-tight"
          >
            &quot;Building Systems. Exploring Intelligence.&quot;
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-mono mb-12 tracking-widest uppercase"
          >
            Founder @ CertiOwn • Systems &amp; Backend Developer
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-[#6366f1] text-white font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center gap-2 rounded-md shadow-[0_0_24px_rgba(99,102,241,0.5)] transition-all hover:bg-[#4338ca] hover:shadow-[0_0_32px_rgba(99,102,241,0.7)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Access Modules <ArrowRight size={16} />
            </Link>
            <Link
              href="/Mr_Gaurav_Raju_Nawale.pdf"
              target="_blank"
              onClick={() => trackEvent("resume_download", "true")}
              className="w-full sm:w-auto px-8 py-4 glass text-foreground border border-slate-700 hover:border-primary/50 font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center rounded-md transition-all hover:bg-surface hover:scale-[1.02] active:scale-[0.98]"
            >
              System Bio (PDF)
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex gap-6"
          >
            {[
              { icon: <Github />, href: "https://github.com/Nawalegaurav26", label: "GitHub Profile" },
              { icon: <Linkedin />, href: "https://www.linkedin.com/in/nawalegaurav26/", label: "LinkedIn Profile" },
              { icon: <InstagramIcon />, href: "https://www.instagram.com/lifetime_learner26/", label: "Instagram Profile" },
              { icon: <WhatsApp />, href: "https://wa.me/919860543634?text=Hello%20Gaurav!", label: "WhatsApp Message" },
              { icon: <Mail />, href: "mailto:nawalegaurav26@gmail.com", label: "Send Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-full glass text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
