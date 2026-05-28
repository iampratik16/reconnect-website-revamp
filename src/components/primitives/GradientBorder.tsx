import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  href?: string;
  /** Animated rotating gradient (slower performance; use for hero cards only). */
  animated?: boolean;
};

export default function GradientBorder({
  children,
  className,
  innerClassName,
  href,
  animated = false,
}: Props) {
  const outerClass = cn(
    animated ? "gradient-border" : "gradient-border-static",
    "block group h-full",
    className,
  );
  const inner = (
    <div className={cn("gradient-border-inner relative h-full", innerClassName)}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={outerClass}>
        {inner}
      </Link>
    );
  }
  return <div className={outerClass}>{inner}</div>;
}
