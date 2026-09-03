"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface SparkBorderProps {
  children: ReactNode;
  className?: string;
  /** Duration of one full loop in seconds */
  duration?: number;
  /** Main spark color */
  color?: string;
  /** Highlight / core color */
  highlight?: string;
  /** How strong the glow is */
  glowStrength?: number;
}

export function SparkBorder({
  children,
  className = "",
  duration = 3.2,
  color = "#f97316",      // orange-500
  highlight = "#fbbf24",  // amber-400
  glowStrength = 10,
}: SparkBorderProps) {
  const sparkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sparkRef.current) return;

    const tween = gsap.to(sparkRef.current, {
      "--spark-angle": "360deg",
      duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [duration]);

  return (
    <div className={`relative ${className}`}>
      {/* Soft glowing trail */}
      <div
        ref={sparkRef}
        className="absolute -inset-0.5 rounded-[inherit] pointer-events-none"
        style={{
          background: `conic-gradient(
            from var(--spark-angle, 0deg),
            transparent 0%,
            transparent 58%,
            ${color} 68%,
            ${highlight} 76%,
            ${color} 84%,
            transparent 92%,
            transparent 100%
          )`,
          filter: `blur(${glowStrength}px)`,
          opacity: 0.9,
        }}
      />

      {/* Sharp spark line */}
      <div
        className="absolute -inset-px rounded-[inherit] pointer-events-none"
        style={{
          background: `conic-gradient(
            from var(--spark-angle, 0deg),
            transparent 0%,
            transparent 60%,
            ${color} 70%,
            ${highlight} 77%,
            ${color} 84%,
            transparent 92%,
            transparent 100%
          )`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />

      {/* Actual content */}
      <div className="relative rounded-[inherit]">{children}</div>
    </div>
  );
}