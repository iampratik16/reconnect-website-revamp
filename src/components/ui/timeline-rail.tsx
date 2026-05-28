"use client";

import * as React from "react";
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
  /** Main small label shown near the dot */
  label?: string;
  /** Secondary label shown under the rail */
  caption?: string;
  /** Is this item emphasized (darker dot/rail before it) */
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
};

/** SRP: purely visual timeline rail. */
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
}: TimelineRailProps) {
  const lastActive = React.useMemo(() => {
    let idx = -1;
    items.forEach((it, i) => {
      if (it.active) idx = i;
    });
    return idx;
  }, [items]);

  const dotSize = size === "sm" ? 14 : size === "lg" ? 22 : 18;
  const topOffset = size === "sm" ? -22 : -26;
  const captionOffset = size === "sm" ? 18 : 22;
  const defaultGap = size === "lg" ? "gap-x-16 md:gap-x-24" : "gap-x-12 md:gap-x-20";

  return (
    <section aria-label="timeline" className={cn("relative w-full", className)}>
      {/* Rail */}
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

        {emphasizeActiveTrail && lastActive >= 0 && (
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-navy"
            style={{
              width: `${
                items.length > 1
                  ? (lastActive / (items.length - 1)) * 100
                  : 0
              }%`,
            }}
          />
        )}
      </div>

      {/* Dots row */}
      <ol
        className={cn(
          "relative flex items-center justify-between",
          gapClassName ?? defaultGap,
        )}
        style={{ marginTop: captionOffset }}
        role="list"
      >
        {items.map((item, i) => {
          const isActive = !!item.active;
          return (
            <li
              key={i}
              className={cn(
                "relative flex flex-col items-center",
                itemClassName,
              )}
            >
              {item.label && (
                <span
                  className={cn(
                    "absolute -top-3 -translate-y-full select-none whitespace-nowrap text-[12px] font-medium text-ink",
                    labelClassName,
                  )}
                  style={{
                    transform: `translateY(${topOffset}px) rotate(${-Math.abs(labelAngle)}deg)`,
                    transformOrigin: "bottom center",
                  }}
                  aria-hidden
                >
                  {renderLabel ? renderLabel(item, i) : item.label}
                </span>
              )}

              {item.href ? (
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-full ring-2 ring-paper transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
                    isActive ? dotActiveClass : dotClass,
                  )}
                  style={{ width: dotSize, height: dotSize }}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={item.label ?? item.caption ?? `Step ${i + 1}`}
                  title={item.label ?? item.caption}
                />
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={cn(
                    "relative rounded-full ring-2 ring-paper transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
                    isActive ? dotActiveClass : dotClass,
                  )}
                  style={{ width: dotSize, height: dotSize }}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={item.label ?? item.caption ?? `Step ${i + 1}`}
                  title={item.label ?? item.caption}
                />
              )}

              {item.caption && (
                <span
                  className={cn(
                    "absolute select-none whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-ink-soft",
                    captionClassName,
                  )}
                  style={{ transform: `translateY(${captionOffset}px)` }}
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
