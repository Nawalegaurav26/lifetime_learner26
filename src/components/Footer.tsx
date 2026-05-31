"use client";

import Link from "next/link";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIcon as Mail, InstagramIcon, BrandLogo } from "./Icons";

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
    <footer
      className="relative z-10"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, var(--primary-glow), transparent)`,
        }}
      />
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-widest font-mono transition-all group"
              style={{ color: "var(--foreground)" }}
            >
              <BrandLogo size={24} className="group-hover:rotate-[60deg] transition-transform duration-700" />
              <span>
                SYS.<span style={{ color: "var(--primary)" }}>GNR</span>
              </span>
            </Link>
            <p className="text-xs font-mono leading-relaxed max-w-xs uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>
              System Architect &amp; SaaS Founder. Building scalable platforms and automation infrastructure.
            </p>
            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  style={{ color: "var(--muted-2)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted-2)"; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] font-mono mb-5" style={{ color: "var(--primary)" }}>Directory</h4>
              <ul className="space-y-3">
                {internalLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className="text-xs font-semibold transition-colors tracking-widest uppercase font-mono"
                      style={{ color: "var(--muted-2)" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--foreground)"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted-2)"; }}
                    >{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="invisible text-[10px] font-black uppercase tracking-[0.3em] font-mono mb-5">More</h4>
              <ul className="space-y-3">
                {internalLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className="text-xs font-semibold transition-colors tracking-widest uppercase font-mono"
                      style={{ color: "var(--muted-2)" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--foreground)"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted-2)"; }}
                    >{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:text-right space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] font-mono" style={{ color: "var(--primary)" }}>System Status</h4>
            <div className="space-y-3">
              {[{ label: "Uptime", value: "99.9%" }, { label: "Version", value: "3.4.0" }, { label: "Latency", value: "24ms" }].map((item) => (
                <div key={item.label} className="flex items-center justify-between md:justify-end gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>{item.label}</span>
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest" style={{ color: "var(--muted)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono" style={{ color: "var(--muted-2)" }}>
            &copy; {currentYear} Gaurav Raju Nawale // All Systems Operational
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}