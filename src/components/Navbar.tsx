"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Posts", href: "/posts" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "glass rounded-full px-8 py-3 shadow-[0_0_20px_rgba(59,130,246,0.15)] border border-primary/20" : "px-4"
          }`}
        >
          <Link href="/" className="text-xl font-bold tracking-widest text-slate-100 font-mono">
            SYS.<span className="text-primary">NAV</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-mono"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:block px-6 py-2.5 bg-primary text-white text-xs tracking-widest font-mono uppercase font-bold rounded-sm hover:bg-primary-dark transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Connect
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-primary/20 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-widest uppercase font-mono font-bold text-slate-300 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full py-4 bg-primary text-white text-center rounded-sm text-sm uppercase tracking-widest font-mono font-bold"
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
