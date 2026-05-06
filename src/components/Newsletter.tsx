"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 border border-primary/20 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-mono"
              >
                <Terminal size={14} />
                Network Subscription
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight font-mono uppercase mb-6">
                Receive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Updates.</span>
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                Join 100+ innovators receiving monthly insights on System Architecture, AI Automation, and BCI Research. No spam, only intelligence.
              </p>
            </div>

            <div className="relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-primary/10 border border-primary/20 rounded-md"
                >
                  <p className="text-primary font-bold font-mono uppercase tracking-widest">Access Granted</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-2 uppercase tracking-tighter">Welcome to the network, operative.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER_EMAIL_ADDRESS"
                      className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-md text-slate-100 font-mono text-sm focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-700"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest font-mono">Join</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[8px] text-slate-600 font-mono uppercase tracking-widest text-center">
                    Encrypted transmission. Privacy assured.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
