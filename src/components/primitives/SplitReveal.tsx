"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  byWord?: boolean;
};

export default function SplitReveal({
  children,
  className,
  delay = 0,
  stagger = 0.06,
  byWord = false,
}: Props) {
  const reduce = useReducedMotion();
  const parts = byWord ? children.split(" ") : children.split("\n");

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={cn("inline-block", className)} aria-label={children}>
      {parts.map((part, i) => (
        <span key={i} className="mask-reveal block" aria-hidden>
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.95,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {part}
            {byWord && i < parts.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
