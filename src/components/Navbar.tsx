"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu, X, Palette, Moon, Sun, Zap, Check } from "lucide-react";
import { useTheme, type Theme } from "@/contexts/ThemeContext";
import { BrandLogo } from "./Icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Posts", href: "/posts" },
  { name: "Contact", href: "/contact" },
];

const themes: { id: Theme; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    id: "dark",
    label: "Dark Mode",
    icon: <Moon size={14} />,
    desc: "Deep navy & indigo",
  },
  {
    id: "light",
    label: "Light Mode",
    icon: <Sun size={14} />,
    desc: "Clean & minimal",
  },
  {
    id: "neon",
    label: "Neon Cyberpunk",
    icon: <Zap size={14} />,
    desc: "Electric green & pink",
  },
  {
    id: "light-neon",
    label: "Light Cyberpunk",
    icon: <Palette size={14} />,
    desc: "Vibrant pink & purple",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(e.target as Node)
      ) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navBgClass = isScrolled
    ? "glass rounded-full px-6 py-2.5 shadow-sm border"
    : "px-4";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: `linear-gradient(90deg, var(--gradient-text-from), var(--gradient-text-to))`,
        }}
      />

      <div className="container mx-auto px-6 max-w-[1120px]">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${navBgClass}`}
          style={{
            backgroundColor: isScrolled ? "var(--glass-bg)" : "transparent",
            borderColor: isScrolled ? "var(--glass-border)" : "transparent",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-widest font-mono transition-all duration-300 group"
            style={{ color: "var(--foreground)" }}
          >
            <BrandLogo size={28} className="group-hover:rotate-[60deg] transition-transform duration-700" />
            <span>
              SYS.<span style={{ color: "var(--primary)" }}>NAV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest font-mono transition-colors duration-200 hover:opacity-100"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--muted)";
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Selector */}
            <div ref={themeDropdownRef} className="relative">
              <button
                id="theme-selector-btn"
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                aria-label="Select theme"
                aria-haspopup="true"
                aria-expanded={isThemeOpen}
                data-magnetic="true"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  background: "var(--glass-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--primary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <Palette size={14} />
                <span className="hidden lg:inline">Theme</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-56 rounded-xl overflow-hidden z-50"
                    role="menu"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="p-1.5">
                      <p
                        className="px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] font-bold"
                        style={{ color: "var(--muted-2)" }}
                      >
                        Select Theme
                      </p>
                      {themes.map((t) => (
                        <button
                          key={t.id}
                          id={`theme-option-${t.id}`}
                          role="menuitem"
                          onClick={() => {
                            setTheme(t.id);
                            setIsThemeOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 group"
                          style={{
                            background: theme === t.id ? "var(--primary-light)" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (theme !== t.id) {
                              (e.currentTarget as HTMLElement).style.background =
                                "var(--surface-alt)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (theme !== t.id) {
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                            }
                          }}
                        >
                          <span
                            className="flex-shrink-0"
                            style={{
                              color: theme === t.id ? "var(--primary)" : "var(--muted)",
                            }}
                          >
                            {t.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-xs font-mono font-semibold uppercase tracking-wider"
                              style={{
                                color: theme === t.id ? "var(--primary)" : "var(--foreground)",
                              }}
                            >
                              {t.label}
                            </p>
                            <p
                              className="text-[10px] font-mono mt-0.5"
                              style={{ color: "var(--muted-2)" }}
                            >
                              {t.desc}
                            </p>
                          </div>
                          {theme === t.id && (
                            <Check size={12} style={{ color: "var(--primary)", flexShrink: 0 }} />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Connect CTA */}
            <Link
              href="/contact"
              id="navbar-connect-btn"
              data-magnetic="true"
              className="px-5 py-2.5 text-white text-xs tracking-widest font-mono uppercase font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "var(--primary)",
                boxShadow: "0 0 16px var(--primary-glow)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--primary-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px var(--primary-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--primary)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px var(--primary-glow)";
              }}
            >
              Connect
            </Link>
          </div>

          {/* Mobile: Theme + Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-theme-btn"
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              aria-label="Select theme"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all"
              style={{
                color: "var(--primary)",
                border: "1px solid var(--border)",
                background: "var(--glass-bg)",
              }}
            >
              <Palette size={16} />
            </button>
            <button
              id="mobile-menu-btn"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                background: "var(--glass-bg)",
              }}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Theme Dropdown */}
      <AnimatePresence>
        {isThemeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 mt-2 rounded-xl overflow-hidden z-50 md:hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <div className="p-2">
              <p
                className="px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] font-bold"
                style={{ color: "var(--muted-2)" }}
              >
                Select Theme
              </p>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsThemeOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left"
                  style={{
                    background: theme === t.id ? "var(--primary-light)" : "transparent",
                  }}
                >
                  <span style={{ color: theme === t.id ? "var(--primary)" : "var(--muted)" }}>
                    {t.icon}
                  </span>
                  <div className="flex-1">
                    <p
                      className="text-xs font-mono font-semibold uppercase tracking-wider"
                      style={{ color: theme === t.id ? "var(--primary)" : "var(--foreground)" }}
                    >
                      {t.label}
                    </p>
                    <p className="text-[10px] font-mono" style={{ color: "var(--muted-2)" }}>
                      {t.desc}
                    </p>
                  </div>
                  {theme === t.id && (
                    <Check size={12} style={{ color: "var(--primary)" }} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full border-b shadow-xl md:hidden"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-widest uppercase font-mono font-bold transition-colors"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--muted)";
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full py-4 text-white text-center rounded-full text-sm uppercase tracking-widest font-mono font-bold transition-all"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 0 16px var(--primary-glow)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
