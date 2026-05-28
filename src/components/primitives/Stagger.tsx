"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) => (
  <motion.div
    className={cn("h-full", className)}
    variants={{
      hidden: { opacity: 0, y, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);
