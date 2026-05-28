import { cn } from "@/lib/cn";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:gap-5",
        "grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCell({
  children,
  className,
  span = "col-span-1 md:col-span-3",
  tone = "calcium",
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
  tone?: "calcium" | "bone-deep" | "sage-deep" | "sage-tint";
}) {
  const tones = {
    calcium: "bg-calcium text-ink",
    "bone-deep": "bg-bone-deep text-ink",
    "sage-deep": "bg-sage-deep text-bone",
    "sage-tint": "bg-sage-tint text-ink",
  } as const;
  return (
    <div
      className={cn(
        "relative card p-7 md:p-8 flex flex-col gap-4 justify-between",
        tones[tone],
        span,
        className,
      )}
    >
      {children}
    </div>
  );
}
