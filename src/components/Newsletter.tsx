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
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--background)" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, var(--primary-glow), transparent 60%)" }}
      />
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1120px]">
        <div
          className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-xl"
          style={{ border: "1px solid var(--border-strong)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] mb-4 font-mono"
                style={{ color: "var(--primary)" }}
              >
                <Terminal size={14} />
                Network Subscription
              </motion.div>
              
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight font-mono uppercase mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Receive{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                    filter: "drop-shadow(0 0 10px var(--primary-glow))",
                  }}
                >
                  Updates.
                </span>
              </h2>
              <p
                className="font-mono text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Join 100+ innovators receiving monthly insights on System Architecture, AI Automation, and BCI Research. No spam, only intelligence.
              </p>
            </div>

            <div className="relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 rounded-md"
                  style={{
                    background: "var(--primary-light)",
                    border: "1px solid var(--primary-glow)",
                  }}
                >
                  <p className="font-bold font-mono uppercase tracking-widest" style={{ color: "var(--primary)" }}>
                    Access Granted
                  </p>
                  <p className="text-[10px] font-mono mt-2 uppercase tracking-tighter" style={{ color: "var(--muted)" }}>
                    Welcome to the network, operative.
                  </p>
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
                      className="w-full p-5 rounded-md font-mono text-sm focus:outline-none transition-all"
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--primary)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border)"; }}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="absolute right-2 top-2 bottom-2 px-6 text-white rounded-sm transition-all flex items-center justify-center gap-2"
                      style={{ background: "var(--primary)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-hover)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
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
                  <p
                    className="text-[8px] font-mono uppercase tracking-widest text-center"
                    style={{ color: "var(--muted-2)" }}
                  >
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
