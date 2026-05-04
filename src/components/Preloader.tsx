"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bootLogs = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "LOADING NEURAL NETWORKS...",
  "ESTABLISHING SECURE CONNECTIONS...",
  "MOUNTING DATA VOLUMES...",
  "CALIBRATING AI MODELS...",
  "SYSTEM ONLINE. WELCOME GAURAV."
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 1.5; // Slightly faster to fit more logs
      });
    }, 30);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
        >
          {/* Subtle grid background for preloader */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          
          <div className="relative z-10 w-full max-w-lg px-8 flex flex-col items-start font-mono">
            <div className="mb-8 w-full">
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex items-center justify-between text-primary mb-2 text-xs md:text-sm tracking-widest font-bold"
               >
                 <span>SYS_BOOT_SEQ_V3.0</span>
                 <span>{Math.floor(progress)}%</span>
               </motion.div>
               <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    className="absolute top-0 left-0 h-full bg-primary"
                    style={{ boxShadow: "0 0 10px #4f46e5" }}
                  />
               </div>
            </div>

            <div className="flex flex-col gap-2 text-[10px] md:text-xs text-slate-400 tracking-widest uppercase min-h-[120px] w-full">
              {bootLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: index <= logIndex ? 1 : 0, x: index <= logIndex ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 items-center"
                >
                  <span className="text-primary opacity-70">{">"}</span>
                  <span className={index === bootLogs.length - 1 && logIndex === bootLogs.length - 1 ? "text-primary font-bold shadow-primary/50 drop-shadow-md" : ""}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               animate={{ opacity: [1, 0, 1] }}
               transition={{ duration: 1, repeat: Infinity }}
               className="mt-8 text-primary font-bold text-xl"
            >
               _
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
