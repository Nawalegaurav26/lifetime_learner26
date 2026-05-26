"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Brain, Globe } from "lucide-react";

const stats = [
  { label: "SaaS Users", value: "100+", icon: <Users size={18} /> },
  { label: "Systems Built", value: "12+", icon: <Rocket size={18} /> },
  { label: "Research Focus", value: "BCI/AI", icon: <Brain size={18} /> },
  { label: "Global Reach", value: "Remote", icon: <Globe size={18} /> },
];

const affiliations = [
  { name: "CertiOwn", role: "Founder & Architect", status: "Scaling" },
  { name: "ICEM, Pune", role: "Computer Engineering", status: "Active" },
  { name: "SDETM 2026", role: "Technical Secretary", status: "Upcoming" },
];

export default function SocialProof() {
  return (
    <section
      className="section-gap relative overflow-hidden"
      style={{ background: "var(--surface-alt)" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label mb-8"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--primary)" }}
              />
              Impact &amp; Metrics
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card group"
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "var(--primary-light)",
                      color: "var(--primary)",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className="text-4xl font-black font-mono mb-1 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest font-mono"
                    style={{ color: "var(--muted-2)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight font-mono uppercase mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Network{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))`,
                  }}
                >
                  &amp; Influence.
                </span>
              </h2>
              <p
                className="font-mono text-sm leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                Building technology is about impact. I leverage my technical architecture background to create systems that serve users globally and push the boundaries of intelligent automation.
              </p>
              <div className="space-y-3">
                {affiliations.map((aff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl backdrop-blur transition-all group cursor-default"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--card-bg)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <div>
                      <div
                        className="text-sm font-bold uppercase tracking-wider font-mono transition-colors"
                        style={{ color: "var(--foreground)" }}
                      >
                        {aff.name}
                      </div>
                      <div
                        className="text-xs font-mono mt-0.5 uppercase tracking-wide"
                        style={{ color: "var(--muted-2)" }}
                      >
                        {aff.role}
                      </div>
                    </div>
                    <div
                      className="text-[10px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-widest"
                      style={{
                        color: "var(--primary)",
                        border: "1px solid var(--primary-glow)",
                      }}
                    >
                      {aff.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}