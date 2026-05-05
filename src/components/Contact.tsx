"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsAppIcon as WhatsApp, InstagramIcon } from "./Icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-gap relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight font-mono uppercase">
                Establish <br />
                the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Uplink.</span>
              </h2>
              <p className="mt-8 text-sm md:text-base text-slate-400 font-mono leading-relaxed max-w-md tracking-widest uppercase">
                I&apos;m always open to discussing system architecture, AI research, or potential collaborations.
              </p>

              <div className="mt-16 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-primary/20 rounded-sm flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Email</p>
                    <Link href="mailto:nawalegaurav26@gmail.com" className="text-lg font-bold text-slate-100 hover:text-primary-light transition-colors font-mono">
                      nawalegaurav26@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-primary/20 rounded-sm flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Phone</p>
                    <Link href="tel:+919860543634" className="text-lg font-bold text-slate-100 hover:text-primary-light transition-colors font-mono">
                      +91 98605 43634
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-secondary/20 rounded-sm flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">LinkedIn</p>
                    <Link href="https://linkedin.com/in/nawalegaurav26" className="text-lg font-bold text-slate-100 hover:text-secondary-light transition-colors font-mono">
                      nawalegaurav26
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-accent/20 rounded-sm flex items-center justify-center text-accent shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">GitHub</p>
                    <Link href="https://github.com/Nawalegaurav26" className="text-lg font-bold text-slate-100 hover:text-accent-light transition-colors font-mono">
                      Nawalegaurav26
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-primary/20 rounded-sm flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <WhatsApp size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">WhatsApp</p>
                    <Link href="https://wa.me/919860543634?text=Hello%20Gaurav!" className="text-lg font-bold text-slate-100 hover:text-primary-light transition-colors font-mono">
                      +91 98605 43634
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass border border-secondary/20 rounded-sm flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Instagram</p>
                    <Link href="https://www.instagram.com/lifetime_learner26/" className="text-lg font-bold text-slate-100 hover:text-secondary transition-colors font-mono">
                      @lifetime_learner26
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 glass rounded-md border border-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <form className="space-y-8 mt-2">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1 font-mono">Your Designation</label>
                  <input
                    type="text"
                    className="w-full px-8 py-4 bg-slate-900/50 border border-slate-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-slate-200"
                    placeholder="ENTER DESIGNATION"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1 font-mono">Comlink Address</label>
                  <input
                    type="email"
                    className="w-full px-8 py-4 bg-slate-900/50 border border-slate-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-slate-200"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1 font-mono">Transmission payload</label>
                  <textarea
                    rows={4}
                    className="w-full px-8 py-4 bg-slate-900/50 border border-slate-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-mono text-sm text-slate-200 resize-none"
                    placeholder="AWAITING INPUT..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono tracking-widest uppercase text-sm hover:scale-[1.02] active:scale-[0.98]"
                >
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
