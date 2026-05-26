"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code2 size={24} />,
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
  },
  {
    category: "Backend & Ops",
    icon: <Terminal size={24} />,
    items: ["Flask", "Node.js", "Next.js", "Docker", "Postgres", "Redis"],
  },
  {
    category: "Systems & Infrastructure",
    icon: <Cpu size={24} />,
    items: ["Git", "AWS", "Linux", "Nginx", "Docker", "GitLab CI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-gap" style={{ background: "var(--background)" }}>
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Technical{" "}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p
            className="mt-6 text-lg font-medium max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            A curated list of technologies I use to architect and build production-ready systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl transition-all duration-500 group"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              <div
                className="mb-8 p-4 rounded-2xl w-fit transition-all group-hover:scale-105"
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary)",
                }}
              >
                {skill.icon}
              </div>
              <h3
                className="text-xl font-bold mb-8"
                style={{ color: "var(--foreground)" }}
              >
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300"
                    style={{
                      background: "var(--surface-alt)",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                      (e.currentTarget as HTMLElement).style.color = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
