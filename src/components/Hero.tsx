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
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"
        style={{ background: "var(--primary-glow)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: `rgba(139, 92, 246, 0.08)` }}
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Gaurav Raju <br className="hidden md:block" />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                  filter: "drop-shadow(0 0 10px var(--primary-glow))",
                }}
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
            className="text-2xl md:text-3xl font-bold mb-3 max-w-2xl font-mono tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            &quot;Building Systems. Exploring Intelligence.&quot;
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm md:text-base max-w-xl mx-auto font-mono tracking-widest uppercase"
            style={{ color: "var(--muted)" }}
          >
            Founder @ CertiOwn • Systems &amp; Backend Developer
          </motion.p>

          {/* About Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-sm md:text-base max-w-2xl mx-auto mt-4 mb-12 leading-relaxed"
            style={{ color: "var(--muted-2)" }}
          >
            I am a passionate System Architect and SaaS Founder with a strong drive for building scalable, autonomous solutions. I love transforming complex ideas into intuitive, high-performance systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto"
          >
            <Link
              href="/projects"
              id="hero-access-modules"
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
              Access Modules <ArrowRight size={16} />
            </Link>
            <Link
              href="/Mr_Gaurav_Raju_Nawale.pdf"
              target="_blank"
              id="hero-system-bio"
              onClick={() => trackEvent("resume_download", "true")}
              className="w-full sm:w-auto px-8 py-4 glass font-mono uppercase tracking-widest text-sm font-bold flex justify-center items-center rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
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
              System Bio (PDF)
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
                className="w-12 h-12 flex items-center justify-center rounded-full glass transition-all duration-300 hover:-translate-y-1"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--primary)";
                  el.style.borderColor = "var(--primary)";
                  el.style.boxShadow = "0 0 15px var(--primary-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--muted)";
                  el.style.borderColor = "";
                  el.style.boxShadow = "";
                }}
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
}
