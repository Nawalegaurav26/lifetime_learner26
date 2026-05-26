"use client";

import Link from "next/link";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
  MailIcon as Mail,
  InstagramIcon,
} from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const internalLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Articles", href: "/posts" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/Nawalegaurav26", label: "GitHub", hoverColor: "hover:text-white" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/nawalegaurav26/", label: "LinkedIn", hoverColor: "hover:text-[#60a5fa]" },
    { icon: <InstagramIcon size={18} />, href: "https://www.instagram.com/lifetime_learner26/", label: "Instagram", hoverColor: "hover:text-[#f472b6]" },
    { icon: <Mail size={18} />, href: "mailto:nawalegaurav26@gmail.com", label: "Email", hoverColor: "hover:text-[#a5b4fc]" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.05] bg-slate-950 backdrop-blur-xl">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">

          <div className="space-y-5">
            <Link href="/" className="inline-block text-xl font-bold tracking-widest text-slate-100 font-mono hover:text-[#a5b4fc] transition-colors">
              SYS.<span className="text-[#6366f1]">GNR</span>
            </Link>
            <p className="text-xs text-slate-500 font-mono leading-relaxed max-w-xs uppercase tracking-widest">
              System Architect &amp; SaaS Founder. Building scalable platforms and automation infrastructure.
            </p>
            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={`text-slate-600 ${social.hoverColor} transition-all duration-300 hover:-translate-y-0.5`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.3em] font-mono mb-5">Directory</h4>
              <ul className="space-y-3">
                {internalLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs font-semibold text-slate-500 hover:text-slate-200 transition-colors tracking-widest uppercase font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="invisible text-[10px] font-black uppercase tracking-[0.3em] font-mono mb-5">More</h4>
              <ul className="space-y-3">
                {internalLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs font-semibold text-slate-500 hover:text-slate-200 transition-colors tracking-widest uppercase font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:text-right space-y-5">
            <h4 className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.3em] font-mono">System Status</h4>
            <div className="space-y-3">
              {[
                { label: "Uptime", value: "99.9%" },
                { label: "Version", value: "3.4.0" },
                { label: "Latency", value: "24ms" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between md:justify-end gap-4">
                  <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{item.label}</span>
                  <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.3em] font-mono">
            &copy; {currentYear} Gaurav Raju Nawale // All Systems Operational
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
