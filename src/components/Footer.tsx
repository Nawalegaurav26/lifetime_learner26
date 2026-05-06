"use client";

import Link from "next/link";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIcon as Mail, InstagramIcon } from "./Icons";

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
    { icon: <Github size={16} />, href: "https://github.com/Nawalegaurav26", label: "GitHub" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/nawalegaurav26/", label: "LinkedIn" },
    { icon: <InstagramIcon size={16} />, href: "https://www.instagram.com/lifetime_learner26/", label: "Instagram" },
    { icon: <Mail size={16} />, href: "mailto:nawalegaurav26@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-20 relative z-10 border-t border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          {/* Brand/Identity */}
          <div className="space-y-6">
            <Link href="/" className="text-xl font-bold tracking-widest text-slate-100 font-mono">
              SYS.<span className="text-primary">GNR</span>
            </Link>
            <p className="text-xs text-slate-500 font-mono leading-relaxed max-w-xs uppercase tracking-widest">
              System Architect & SaaS Founder. Building scalable platforms and automation infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono mb-6">Directory</h4>
              <ul className="space-y-3">
                {internalLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono mb-6 invisible">More</h4>
              <ul className="space-y-3">
                {internalLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6 md:text-right">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-mono mb-6">Uplink Channels</h4>
            <div className="flex items-center gap-6 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-slate-500 hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.4em] font-mono">
            &copy; {currentYear} GAURAV RAJU NAWALE // ALL SYSTEMS OPERATIONAL
          </p>
          <div className="flex gap-8">
             <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">Version 3.4.0</span>
             <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">Latency: 24ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
