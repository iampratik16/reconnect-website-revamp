import { cn } from "@/lib/cn";

export default function Pill({
  children,
  tone = "sage",
  className,
}: {
  children: React.ReactNode;
  tone?: "sage" | "clay" | "ink" | "bone";
  className?: string;
}) {
  const tones = {
    sage: "bg-sage-tint text-sage-deep",
    clay: "bg-clay-soft text-clay",
    ink: "border border-line text-ink-soft",
    bone: "bg-bone/10 text-bone border border-bone/20",
  } as const;
  return (
    <span className={cn("pill", tones[tone], className)}>{children}</span>
  );
}
