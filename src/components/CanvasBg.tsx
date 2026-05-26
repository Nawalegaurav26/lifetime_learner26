"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useSpring, useMotionValue } from "framer-motion";

function Starfield({ 
  color, 
  speedMultiplier = 1, 
  mouseRef 
}: { 
  color: string; 
  speedMultiplier?: number; 
  mouseRef: React.MutableRefObject<{ x: number; y: number }> 
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const originalPositions = useRef<Float32Array | null>(null);
  
  // Generate random points in a sphere
  const [sphere] = useState(() => {
    const positions = new Float32Array(3500 * 3);
    for (let i = 0; i < 3500; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useEffect(() => {
    originalPositions.current = sphere.slice();
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the group
      ref.current.rotation.z -= (delta / 15) * speedMultiplier;
      
      // Target coordinates for interactive parallax based on mouse
      const targetX = mouseRef.current.y * 0.2;
      const targetY = mouseRef.current.x * 0.2;
      
      // Smoothly interpolate group rotation towards target
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * delta * 2;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * delta * 2;

      // Particle magnetic repulsion logic
      const points = ref.current;
      const geo = points.geometry;
      const posAttr = geo.attributes.position;
      const arr = posAttr.array as Float32Array;
      const orig = originalPositions.current;

      if (orig) {
        // Project mouse coordinates into R3F WebGL coordinates based on viewport size
        const mx = (mouseRef.current.x * state.viewport.width) / 2;
        const my = (mouseRef.current.y * state.viewport.height) / 2;

        // Rotate mouse coordinates back by the group's rotation angle on Z axis
        // to compute mouse position in the group's local coordinates.
        const angle = -points.rotation.z;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const lmx = mx * cos - my * sin;
        const lmy = mx * sin + my * cos;

        for (let i = 0; i < 3500; i++) {
          const idx = i * 3;
          const ox = orig[idx];
          const oy = orig[idx + 1];
          const oz = orig[idx + 2];

          const dx = ox - lmx;
          const dy = oy - lmy;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          // Magnetic repel effect
          const repelRadius = 0.25; // radius in WebGL space
          if (dist < repelRadius && dist > 0.001) {
            const force = (repelRadius - dist) / repelRadius;
            const push = force * 0.07; // push strength

            arr[idx] = ox + (dx / dist) * push;
            arr[idx + 1] = oy + (dy / dist) * push;
            arr[idx + 2] = oz + (oz > 0 ? 0.03 : -0.03) * force;
          } else {
            // Lerp back to base coordinates
            arr[idx] += (ox - arr[idx]) * 0.06;
            arr[idx + 1] += (oy - arr[idx + 1]) * 0.06;
            arr[idx + 2] += (oz - arr[idx + 2]) * 0.06;
          }
        }
        posAttr.needsUpdate = true;
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.0055}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function InteractiveGlow() {
  const { theme } = useTheme();
  
  const glowX = useMotionValue(-500);
  const glowY = useMotionValue(-500);
  
  // Spring config for smooth glowing spotlight tracking
  const springConfig = { stiffness: 60, damping: 25, mass: 1.2 };
  const smoothX = useSpring(glowX, springConfig);
  const smoothY = useSpring(glowY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the 700px spotlight under the mouse
      glowX.set(e.clientX - 350);
      glowY.set(e.clientY - 350);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [glowX, glowY]);

  const glowGradients = {
    dark: "radial-gradient(circle, rgba(0, 245, 212, 0.09) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)",
    light: "radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(79, 70, 229, 0.02) 50%, transparent 70%)",
    neon: "radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, rgba(255, 0, 255, 0.05) 50%, transparent 70%)",
    "light-neon": "radial-gradient(circle, rgba(0, 242, 255, 0.09) 0%, rgba(179, 80, 255, 0.04) 50%, transparent 70%)",
  };

  const background = glowGradients[theme] || glowGradients.dark;

  return (
    <motion.div
      className="fixed pointer-events-none z-[-1] rounded-full blur-[80px] hidden md:block"
      style={{
        width: 700,
        height: 700,
        x: smoothX,
        y: smoothY,
        background,
      }}
    />
  );
}

export default function CanvasBg() {
  const { theme } = useTheme();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update normalized coordinates (-1 to 1) for WebGL
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Update absolute viewport coordinates in CSS variables for dot grid overlays
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <InteractiveGlow />
      {theme === "neon" ? (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500" style={{ opacity: 0.6 }}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Starfield color="#00ff88" speedMultiplier={1} mouseRef={mouseRef} />
              <Starfield color="#ff00ff" speedMultiplier={-0.8} mouseRef={mouseRef} />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        (() => {
          const themeConfig = {
            dark: { color: "#4f46e5", opacity: 0.4 },
            light: { color: "#4f46e5", opacity: 0.6 },
            "light-neon": { color: "#00f2ff", opacity: 0.6 },
          };
          const config = themeConfig[theme] || themeConfig.dark;

          return (
            <div
              className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
              style={{ opacity: config.opacity }}
            >
              <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                  <Starfield color={config.color} mouseRef={mouseRef} />
                </Suspense>
              </Canvas>
            </div>
          );
        })()
      )}
    </>
  );
}
