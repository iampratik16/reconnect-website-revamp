"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Allow other components (e.g. mobile menu) to stop / resume scroll.
    const onToggle = (e: Event) => {
      const detail = (e as CustomEvent<{ stop?: boolean }>).detail;
      if (detail?.stop) lenis.stop();
      else lenis.start();
    };
    window.addEventListener("lenis-toggle", onToggle as EventListener);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("lenis-toggle", onToggle as EventListener);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
