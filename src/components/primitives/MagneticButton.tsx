"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "clay" | "ink" | "navy" | "paper" | "sage" | "ghost" | "bone-outline";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
};

const VARIANT_CLASS: Record<Variant, string> = {
  clay: "btn-clay",
  ink: "btn-ink",
  navy: "btn-navy",
  paper: "btn-paper",
  sage: "btn-sage",
  ghost: "btn-ghost",
  "bone-outline": "btn-bone-outline",
};

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.55M10.5 3.5V9.45"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "clay",
  className,
  arrow = true,
  ariaLabel,
  type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
    x.set(dx);
    y.set(dy);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <>
      <span className="leading-none">{children}</span>
      {arrow && (
        <span className="btn-arrow" aria-hidden>
          <ArrowIcon />
        </span>
      )}
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-block" }}
    >
      {href ? (
        <Link
          href={href}
          aria-label={ariaLabel}
          className={cn("btn-base", VARIANT_CLASS[variant], className)}
        >
          {inner}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn("btn-base", VARIANT_CLASS[variant], className)}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
