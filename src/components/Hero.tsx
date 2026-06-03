"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIcon as Mail, WhatsAppIcon as WhatsApp, InstagramIcon } from "./Icons";
import Link from "next/link";
import { trackEvent } from "./Analytics";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden subtle-grid"
      id="home"
    >
      <div className="scanline" />

      {/* Decorative Blobs */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow bg-[var(--primary-glow)]"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] bg-[rgba(139,92,246,0.08)]"
      />

      <div className="container mx-auto px-6 text-center z-10 max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Status badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full border border-[var(--primary-glow)] shadow-[0_0_15px_var(--primary-glow)]"
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[var(--primary)]"
                />
                <span
                  className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]"
                />
              </span>
              <span
                className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--primary-light)]"
              >
                System Online
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
            >
              Gaurav Raju <br className="hidden md:block" />
              <span
                className="text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--gradient-text-from),var(--gradient-text-to))] drop-shadow-[0_0_10px_var(--primary-glow)]"
              >
                Nawale
              </span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl font-bold mb-3 max-w-2xl font-mono tracking-tight text-foreground"
          >
            &quot;Building Systems. Exploring Intelligence.&quot;
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm md:text-base max-w-xl mx-auto font-mono tracking-widest uppercase text-muted"
          >
            Founder @ CertiOwn • Systems &amp; Backend Developer
          </motion.p>

          {/* About Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-sm md:text-base max-w-2xl mx-auto mt-4 mb-12 leading-relaxed text-muted-2"
          >
            I am a passionate System Architect and SaaS Founder with a strong drive for building scalable, autonomous solutions. I love transforming complex ideas into intuitive, high-performance systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full max-w-2xl mx-auto"
          >
            <Link
              href="/projects"
              id="hero-access-modules"
              className="w-[calc(50%-8px)] sm:w-auto px-4 sm:px-8 py-4 text-white font-mono uppercase tracking-widest text-xs sm:text-sm font-bold flex justify-center items-center gap-2 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] bg-[var(--primary)] shadow-[0_0_24px_var(--primary-glow)] hover:bg-[var(--primary-hover)] hover:shadow-[0_0_32px_var(--primary-glow)]"
            >
              Access Modules <ArrowRight size={16} />
            </Link>
            <Link
              href="/Mr_Gaurav_Raju_Nawale.pdf"
              target="_blank"
              id="hero-system-bio"
              onClick={() => trackEvent("resume_download", "true")}
              className="w-[calc(50%-8px)] sm:w-auto px-4 sm:px-8 py-4 glass font-mono uppercase tracking-widest text-xs sm:text-sm font-bold flex justify-center items-center rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] text-foreground border border-border-strong hover:border-[var(--primary)]"
            >
              System Bio (PDF)
            </Link>
            <Link
              href="/achievements"
              id="hero-achievements"
              className="w-[calc(50%-8px)] sm:w-auto px-4 sm:px-8 py-4 glass font-mono uppercase tracking-widest text-xs sm:text-sm font-bold flex justify-center items-center rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] text-foreground border border-border-strong hover:border-[var(--primary)]"
            >
              Achievements
            </Link>
            <Link
              href="/about"
              id="hero-about"
              className="w-[calc(50%-8px)] sm:w-auto px-4 sm:px-8 py-4 glass font-mono uppercase tracking-widest text-xs sm:text-sm font-bold flex justify-center items-center rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] text-foreground border border-border-strong hover:border-[var(--primary)]"
            >
              About
            </Link>
          </motion.div>

          {/* Social icons */}
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
                className="w-12 h-12 flex items-center justify-center rounded-full glass transition-all duration-300 hover:-translate-y-1 text-muted hover:text-[var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_0_15px_var(--primary-glow)]"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span
          className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--primary)]"
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12 bg-[linear-gradient(to_bottom,var(--primary),transparent)]"
        />
      </motion.div>
    </section>
  );
}
