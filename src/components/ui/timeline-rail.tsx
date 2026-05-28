"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type AnchorOrButton =
  | ({
      href: string;
      onClick?: never;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      href?: undefined;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export type TimelineItem = {
  label?: string;
  caption?: string;
  active?: boolean;
} & AnchorOrButton;

export type TimelineRailProps = {
  items: TimelineItem[];
  size?: "sm" | "md" | "lg";
  emphasizeActiveTrail?: boolean;
  labelAngle?: number;
  gapClassName?: string;
  lineColorClass?: string;
  lineThickness?: number;
  dotClass?: string;
  dotActiveClass?: string;
  className?: string;
  railClassName?: string;
  itemClassName?: string;
  labelClassName?: string;
  captionClassName?: string;
  renderLabel?: (item: TimelineItem, index: number) => React.ReactNode;
  renderCaption?: (item: TimelineItem, index: number) => React.ReactNode;
  scrollProgress?: boolean;
  scrollOffsetStart?: string;
  scrollOffsetEnd?: string;
};

/** Detect a stable matchMedia breakpoint. */
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function TimelineRail({
  items,
  size = "md",
  emphasizeActiveTrail = true,
  labelAngle = 45,
  gapClassName,
  lineColorClass = "bg-line",
  lineThickness = 6,
  dotClass = "bg-line-strong",
  dotActiveClass = "bg-navy",
  className,
  railClassName,
  itemClassName,
  labelClassName,
  captionClassName,
  renderLabel,
  renderCaption,
  scrollProgress = false,
  scrollOffsetStart = "start 80%",
  scrollOffsetEnd = "end 30%",
}: TimelineRailProps) {
  const ref = React.useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: [scrollOffsetStart, scrollOffsetEnd] as any,
  });

  const trailWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const trailHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const lastActive = React.useMemo(() => {
    let idx = -1;
    items.forEach((it, i) => {
      if (it.active) idx = i;
    });
    return idx;
  }, [items]);

  const staticPct =
    items.length > 1 && lastActive >= 0
      ? `${(lastActive / (items.length - 1)) * 100}%`
      : "0%";

  const [activePassed, setActivePassed] = React.useState(0);
  React.useEffect(() => {
    if (!scrollProgress) return;
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.round(v * (items.length - 1));
      setActivePassed(idx);
    });
    return () => unsub();
  }, [scrollProgress, scrollYProgress, items.length]);

  const dotSize = size === "sm" ? 14 : size === "lg" ? 28 : 18;
  const topOffset = size === "sm" ? -22 : size === "lg" ? -42 : -26;
  const captionOffset = size === "sm" ? 18 : size === "lg" ? 32 : 22;
  const labelFontSize = size === "lg" ? 15 : 12;
  const captionFontSize = size === "lg" ? 13 : 11;
  const defaultGap = size === "lg" ? "gap-x-16 md:gap-x-28" : "gap-x-12 md:gap-x-20";

  // === MOBILE: vertical timeline (rail on the left, content on the right) ===
  if (isMobile) {
    return (
      <section
        ref={ref}
        aria-label="timeline"
        className={cn("relative w-full", className)}
      >
        <ol className="relative pl-7 flex flex-col gap-9" role="list">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="absolute left-[10px] top-2 bottom-2 w-[3px] bg-line rounded-full"
          />
          {emphasizeActiveTrail &&
            (scrollProgress && !reduce ? (
              <motion.div
                aria-hidden
                className="absolute left-[10px] top-2 w-[3px] bg-navy rounded-full origin-top"
                style={{ height: trailHeight }}
              />
            ) : (
              <div
                aria-hidden
                className="absolute left-[10px] top-2 w-[3px] bg-navy rounded-full"
                style={{ height: scrollProgress && reduce ? "100%" : staticPct }}
              />
            ))}

          {items.map((item, i) => {
            const isActive = scrollProgress
              ? reduce
                ? true
                : i <= activePassed
              : !!item.active;
            const dotCls = cn(
              "absolute -left-[20px] top-1 w-5 h-5 rounded-full ring-4 ring-paper transition-colors duration-500",
              isActive ? "bg-navy" : "bg-line-strong",
            );
            return (
              <li key={i} className={cn("relative", itemClassName)}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <span aria-hidden className={dotCls} />
                    {item.caption && (
                      <span
                        className={cn(
                          "block t-eyebrow text-[10px]",
                          isActive ? "text-navy" : "text-ink-soft",
                        )}
                      >
                        {item.caption}
                      </span>
                    )}
                    {item.label && (
                      <span className="block mt-1.5 text-[1.0625rem] font-semibold text-ink tracking-[-0.012em]">
                        {item.label}
                      </span>
                    )}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="block text-left w-full"
                  >
                    <span aria-hidden className={dotCls} />
                    {item.caption && (
                      <span
                        className={cn(
                          "block t-eyebrow text-[10px]",
                          isActive ? "text-navy" : "text-ink-soft",
                        )}
                      >
                        {item.caption}
                      </span>
                    )}
                    {item.label && (
                      <span className="block mt-1.5 text-[1.0625rem] font-semibold text-ink tracking-[-0.012em]">
                        {item.label}
                      </span>
                    )}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    );
  }

  // === TABLET/DESKTOP: horizontal rail ===
  return (
    <section
      ref={ref}
      aria-label="timeline"
      className={cn("relative w-full", className)}
    >
      <div
        aria-hidden
        className={cn("absolute left-0 right-0", railClassName)}
        style={{
          top: 0,
          height: lineThickness,
          transform: `translateY(${captionOffset * -1}px)`,
        }}
      >
        <div className={cn("h-full rounded-full", lineColorClass)} />

        {emphasizeActiveTrail &&
          (scrollProgress && !reduce ? (
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-navy"
              style={{ width: trailWidth }}
            />
          ) : (
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-navy"
              style={{
                width: scrollProgress && reduce ? "100%" : staticPct,
              }}
            />
          ))}
      </div>

      <ol
        className={cn(
          "relative flex items-center justify-between",
          gapClassName ?? defaultGap,
        )}
        style={{ marginTop: captionOffset }}
        role="list"
      >
        {items.map((item, i) => {
          const isActive = scrollProgress
            ? reduce
              ? true
              : i <= activePassed
            : !!item.active;
          const commonDot = {
            className: cn(
              "relative rounded-full ring-2 ring-paper transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
              isActive ? dotActiveClass : dotClass,
            ),
            style: { width: dotSize, height: dotSize },
            "aria-current": isActive ? ("step" as const) : undefined,
            "aria-label": item.label ?? item.caption ?? `Step ${i + 1}`,
            title: item.label ?? item.caption,
          };

          return (
            <li
              key={i}
              className={cn("relative flex flex-col items-center", itemClassName)}
            >
              {item.label && (
                <span
                  className={cn(
                    "absolute -top-3 -translate-y-full select-none whitespace-nowrap font-semibold text-ink tracking-[-0.01em]",
                    labelClassName,
                  )}
                  style={{
                    fontSize: labelFontSize,
                    transform: `translateY(${topOffset}px) rotate(${-Math.abs(labelAngle)}deg)`,
                    transformOrigin: "bottom center",
                  }}
                  aria-hidden
                >
                  {renderLabel ? renderLabel(item, i) : item.label}
                </span>
              )}

              {item.href ? (
                <a href={item.href} {...commonDot} />
              ) : (
                <button type="button" onClick={item.onClick} {...commonDot} />
              )}

              {item.caption && (
                <span
                  className={cn(
                    "absolute select-none whitespace-nowrap uppercase tracking-[0.16em] font-medium",
                    isActive ? "text-ink" : "text-ink-soft",
                    captionClassName,
                  )}
                  style={{
                    fontSize: captionFontSize,
                    transform: `translateY(${captionOffset}px)`,
                  }}
                  aria-hidden
                >
                  {renderCaption ? renderCaption(item, i) : item.caption}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
