"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export default function ScrollMarquee({
  children,
  reverse = false,
  duration = 40,
  className,
  pauseOnHover = true,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn("flex flex-wrap gap-4 justify-center", className)}>{children}</div>
    );
  }

  return (
    <div
      className={cn(
        "marquee relative overflow-hidden",
        pauseOnHover && "marquee",
        className,
      )}
      style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={cn("flex w-max gap-6", reverse ? "marquee-track-rev" : "marquee-track")}
        style={{ ["--marquee-duration" as never]: `${duration}s` }}
      >
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
