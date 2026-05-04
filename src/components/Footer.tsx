"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-slate-800 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] font-mono">
          &copy; {new Date().getFullYear()} SYS.GNR. Built with precision.
        </p>
        <div className="mt-6 flex items-center justify-center gap-10">
          <Link href="#about" className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase font-mono">About</Link>
          <Link href="#projects" className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase font-mono">Work</Link>
          <Link href="#contact" className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase font-mono">Connect</Link>
        </div>
      </div>
    </footer>
  );
}
