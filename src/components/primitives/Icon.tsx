import { cn } from "@/lib/cn";

type Props = {
  /** Material Symbols token name, e.g. "favorite", "medical_services", "fitness_center". */
  name: string;
  className?: string;
  size?: number;
  filled?: boolean;
  weight?: 200 | 300 | 400 | 500 | 600 | 700;
};

export default function Icon({
  name,
  className,
  size = 24,
  filled = false,
  weight = 400,
}: Props) {
  return (
    <span
      aria-hidden
      className={cn("msi select-none", className)}
      style={{
        fontSize: `${size}px`,
        lineHeight: 1,
        fontVariationSettings: `"FILL" ${filled ? 1 : 0}, "wght" ${weight}, "GRAD" 0, "opsz" ${size}`,
      }}
    >
      {name}
    </span>
  );
}
