import { cn } from "@/lib/cn";

type Props = {
  number?: string;
  children: React.ReactNode;
  tone?: "clay" | "sage" | "bone" | "navy";
  className?: string;
};

export default function Eyebrow({ number, children, tone = "clay", className }: Props) {
  const toneClass =
    tone === "clay"
      ? "text-clay"
      : tone === "sage"
        ? "text-sage"
        : tone === "navy"
          ? "text-navy"
          : "text-bone/70";
  return (
    <span className={cn("t-eyebrow inline-flex items-center gap-3", toneClass, className)}>
      {number && (
        <span aria-hidden className="section-num">
          ({number})
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
