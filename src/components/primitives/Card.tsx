import { cn } from "@/lib/cn";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  tone?: "calcium" | "bone-deep" | "sage-deep" | "sage-tint";
  hoverLift?: boolean;
};

const tones = {
  calcium: "bg-calcium text-ink",
  "bone-deep": "bg-bone-deep text-ink",
  "sage-deep": "bg-sage-deep text-bone",
  "sage-tint": "bg-sage-tint text-ink",
} as const;

export default function Card({
  children,
  className,
  href,
  tone = "calcium",
  hoverLift = true,
}: Props) {
  const cls = cn(
    "card relative p-7 md:p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    tones[tone],
    hoverLift && "hover:-translate-y-1",
    className,
  );
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
}
