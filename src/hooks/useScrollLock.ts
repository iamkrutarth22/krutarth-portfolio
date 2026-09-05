"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/effects/SmoothScrollProvider";

export function useScrollLock(active: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!active) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [active, lenis]);
}
