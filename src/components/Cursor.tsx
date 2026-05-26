"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

type HoverType = "default" | "pointer" | "text" | "magnetic";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

// Sleek, high-precision custom cursor arrow SVG with customizable color and dropshadow glow.
// Hotspot is at the top-left tip (2.5, 2).
const CursorArrow = ({ color, glowColor }: { color: string; glowColor: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: glowColor ? `drop-shadow(0 0 5px ${glowColor})` : "none",
    }}
  >
    <path
      d="M2.5 2v12.5l3.8-3.8h5.2L2.5 2z"
      fill={color}
      stroke={color}
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Cursor() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(true);
  const [hoverType, setHoverType] = useState<HoverType>("default");
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleCount = useRef(0);

  // Direct motion values for 1:1 instantaneous tracking (zero lag)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const checkMobile = () => {
      const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
      setIsMobile(isTouch);
    };
    checkMobile();

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normal 1:1 instantaneous tracking
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const magnetic = target.closest('[data-magnetic="true"]') as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], select');
      const input = target.closest('input, textarea');
      const terminal = target.closest('.terminal-zone, [data-terminal="true"]');

      if (magnetic) {
        setHoverType("magnetic");
      } else if (input) {
        setHoverType("text");
      } else if (clickable) {
        setHoverType("pointer");
      } else if (terminal && theme === "dark") {
        setHoverType("text");
      } else {
        setHoverType("default");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (theme === "neon" || theme === "light-neon") {
        const id = rippleCount.current++;
        setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setRipples((prev) => prev.filter(r => r.id !== id));
        }, 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorX, cursorY, isMobile, theme]);

  if (isMobile) return null;

  // ----------------------------------------------------
  // THEME RENDERERS
  // ----------------------------------------------------

  const renderTerminalNavy = () => {
    const isHover = hoverType === "pointer" || hoverType === "magnetic";
    const isText = hoverType === "text";
    
    return (
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            x: isHover ? -6 : (isText ? -1.5 : -2),
            y: isHover ? -6 : (isText ? -12 : -2),
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {isText ? (
            // Blinking caret vertical line
            <motion.div
              animate={{
                width: 3,
                height: 24,
                backgroundColor: "#00f5d4",
                boxShadow: "0 0 8px #00f5d4",
                borderRadius: "0px",
              }}
              className="animate-[terminal-blink_1s_infinite]"
            />
          ) : isHover ? (
            // Solid neon green dot on hover
            <motion.div
              animate={{
                width: 12,
                height: 12,
                backgroundColor: "#00ff88",
                boxShadow: "0 0 12px #00ff88",
                borderRadius: "50%",
              }}
            />
          ) : (
            // Default state: glowing electric cyan arrow
            <CursorArrow color="#00f5d4" glowColor="rgba(0, 245, 212, 0.6)" />
          )}
        </motion.div>
      </motion.div>
    );
  };

  const renderCleanAesthetic = () => {
    const isHover = hoverType === "pointer";
    const isMagnetic = hoverType === "magnetic";
    const isText = hoverType === "text";
    
    return (
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            x: isText ? -0.75 : (isHover || isMagnetic ? (isMagnetic ? -24 : -16) : -2),
            y: isText ? -10 : (isHover || isMagnetic ? (isMagnetic ? -24 : -16) : -2),
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {isText ? (
            // Simple clean text caret
            <motion.div
              animate={{
                width: 1.5,
                height: 20,
                backgroundColor: "#111827",
              }}
              className="animate-[terminal-blink_1s_infinite]"
            />
          ) : isHover || isMagnetic ? (
            // Expanding clean circle ring
            <motion.div
              animate={{
                width: isMagnetic ? 48 : 32,
                height: isMagnetic ? 48 : 32,
                backgroundColor: "rgba(17, 24, 39, 0.08)",
                border: "1px solid rgba(17, 24, 39, 0.4)",
                borderRadius: "50%",
              }}
              className="flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
            </motion.div>
          ) : (
            // Default state: clean sharp black arrow
            <CursorArrow color="#1b1b24" glowColor="" />
          )}
        </motion.div>
      </motion.div>
    );
  };

  const renderNeonCyberpunk = () => {
    const isHover = hoverType === "pointer" || hoverType === "magnetic";
    const isText = hoverType === "text";
    
    return (
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            x: isText ? -1 : (isHover ? -20 : -2),
            y: isText ? -11 : (isHover ? -20 : -2),
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {isText ? (
            // Glowing green caret line
            <motion.div
              animate={{
                width: 2,
                height: 22,
                backgroundColor: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
              }}
              className="animate-[terminal-blink_1s_infinite]"
            />
          ) : isHover ? (
            // Expanding glowing double-color ring on hover
            <motion.div
              animate={{
                width: 40,
                height: 40,
                borderColor: "#00ff88",
                boxShadow: "0 0 15px #00ff88, inset 0 0 10px #ff00ff",
                borderWidth: "2px",
                borderRadius: "50%",
              }}
              className="flex items-center justify-center"
            >
              <div className="w-1 h-1 rounded-full bg-[#ff00ff] shadow-[0_0_5px_#ff00ff]" />
            </motion.div>
          ) : (
            // Default state: neon green arrow with magenta glow
            <CursorArrow color="#00ff88" glowColor="rgba(255, 0, 255, 0.65)" />
          )}
        </motion.div>
      </motion.div>
    );
  };

  const renderNeonAestheticLight = () => {
    const isHover = hoverType === "pointer" || hoverType === "magnetic";
    const isText = hoverType === "text";
    
    return (
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            x: isText ? -1 : (isHover ? -18 : -2),
            y: isText ? -11 : (isHover ? -18 : -2),
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {isText ? (
            // Glowing cyan caret line
            <motion.div
              animate={{
                width: 2,
                height: 22,
                backgroundColor: "#00c3ff",
                boxShadow: "0 0 8px #00c3ff",
              }}
              className="animate-[terminal-blink_1s_infinite]"
            />
          ) : isHover ? (
            // Expanding neon cyan outline with soft violet dot
            <motion.div
              animate={{
                width: 36,
                height: 36,
                borderColor: "#00c3ff",
                backgroundColor: "rgba(0, 195, 255, 0.05)",
                boxShadow: "0 0 15px rgba(0, 195, 255, 0.4), 0 0 10px rgba(179, 80, 255, 0.2)",
                borderWidth: "1.5px",
                borderRadius: "50%",
              }}
              className="flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#b350ff]" />
            </motion.div>
          ) : (
            // Default state: icy cyan arrow with purple glow
            <CursorArrow color="#00c3ff" glowColor="rgba(179, 80, 255, 0.5)" />
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div id="custom-cursor">
      {theme === "dark" && renderTerminalNavy()}
      {theme === "light" && renderCleanAesthetic()}
      {theme === "neon" && renderNeonCyberpunk()}
      {theme === "light-neon" && renderNeonAestheticLight()}

      {/* Ripple Effects for Neon Themes */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: theme === "neon" ? 3 : 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed rounded-full pointer-events-none z-[9998] border-2 ${
              theme === "neon" ? "border-[#00ff88] shadow-[0_0_15px_#ff00ff]" : "border-[#00c3ff] shadow-[0_0_10px_#b350ff]"
            }`}
            style={{
              left: ripple.x - 16,
              top: ripple.y - 16,
              width: 32,
              height: 32,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
