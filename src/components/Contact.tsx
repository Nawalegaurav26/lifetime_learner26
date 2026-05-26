"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsAppIcon as WhatsApp, InstagramIcon } from "./Icons";
import Link from "next/link";
import { trackEvent } from "./Analytics";
import { useState } from "react";

const contacts = [
  { icon: <Mail size={18} />, label: "Email", value: "nawalegaurav26@gmail.com", href: "mailto:nawalegaurav26@gmail.com", iconBg: "bg-primary/15", iconColor: "text-primary", hoverColor: "hover:text-primary", external: false },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 98605 43634", href: "tel:+919860543634", iconBg: "bg-accent/15", iconColor: "text-accent", hoverColor: "hover:text-accent", external: false },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "nawalegaurav26", href: "https://linkedin.com/in/nawalegaurav26", iconBg: "bg-[#0a66c2]/15", iconColor: "text-[#60a5fa]", hoverColor: "hover:text-[#60a5fa]", external: true },
  { icon: <Github size={18} />, label: "GitHub", value: "Nawalegaurav26", href: "https://github.com/Nawalegaurav26", iconBg: "bg-surface-alt/20", iconColor: "text-muted", hoverColor: "hover:text-foreground", external: true },
  { icon: <WhatsApp size={18} />, label: "WhatsApp", value: "+91 98605 43634", href: "https://wa.me/919860543634?text=Hello%20Gaurav!", iconBg: "bg-[#25d366]/15", iconColor: "text-[#4ade80]", hoverColor: "hover:text-[#4ade80]", external: true },
  { icon: <InstagramIcon size={18} />, label: "Instagram", value: "@lifetime_learner26", href: "https://www.instagram.com/lifetime_learner26/", iconBg: "bg-[#e1306c]/[0.12]", iconColor: "text-[#f472b6]", hoverColor: "hover:text-[#f472b6]", external: true },
];

export default function Contact() {
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_form_submit", "true");
    if (designation) trackEvent("visitor_designation", designation);
    alert("Transmission received. Checking uplink...");
  };

  return (
    <section id="contact" className="section-gap relative overflow-hidden bg-background/60 border-t border-theme">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-label text-primary mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Establish the Uplink
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight font-mono uppercase mb-6">
                {"Let's"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect.</span>
              </h2>
              <p className="text-muted text-sm md:text-base font-mono leading-relaxed max-w-md mb-12 tracking-wide">
                {"I'm"} always open to discussing technical architecture, infrastructure systems, or potential collaborations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-theme bg-surface-alt/40 hover:border-primary/25 hover:bg-surface-alt/70 transition-all group"
                  >
                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg ${c.iconBg} ${c.iconColor} group-hover:scale-110 transition-transform`}>
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-muted-2 uppercase tracking-widest font-mono">{c.label}</p>
                      <p className={`text-sm font-bold text-muted font-mono truncate transition-colors ${c.hoverColor}`}>{c.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-10 rounded-2xl border border-theme bg-surface/60 backdrop-blur-xl shadow-premium"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl" />
              <form onSubmit={handleSubmit} className="space-y-7 mt-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] font-mono">Your Designation</label>
                  <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="w-full px-5 py-3.5 bg-background/50 border border-theme rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-foreground placeholder:text-muted-2" placeholder="Enter designation" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] font-mono">Comlink Address</label>
                  <input type="email" className="w-full px-5 py-3.5 bg-background/50 border border-theme rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-foreground placeholder:text-muted-2" placeholder="Enter email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] font-mono">Transmission Payload</label>
                  <textarea rows={4} className="w-full px-5 py-3.5 bg-background/50 border border-theme rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-foreground resize-none placeholder:text-muted-2" placeholder="Awaiting input..." />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-300 shadow-[0_0_20px_var(--primary-glow)] hover:shadow-[0_0_28px_var(--primary-glow)] font-mono tracking-widest uppercase text-sm hover:scale-[1.02] active:scale-[0.98]">
                  Transmit <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}