import { cn } from "@/lib/cn";

type Props = React.SVGProps<SVGSVGElement>;

const baseStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LineArtKnee({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 200 280" className={cn("text-sage", className)} {...rest}>
      <g {...baseStroke}>
        {/* Thigh */}
        <path d="M86 10 C 84 50, 80 90, 78 120" />
        <path d="M122 10 C 124 50, 128 90, 130 120" />
        {/* Knee cap */}
        <ellipse cx="104" cy="140" rx="32" ry="22" />
        <ellipse cx="104" cy="140" rx="18" ry="12" />
        <path d="M86 132 C 94 128, 114 128, 122 132" />
        {/* Shin */}
        <path d="M84 162 C 80 200, 78 240, 76 274" />
        <path d="M124 162 C 128 200, 130 240, 132 274" />
        {/* Tibia accent */}
        <path d="M104 168 L 104 252" strokeDasharray="2 5" />
      </g>
    </svg>
  );
}

export function LineArtSpine({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 200 480" className={cn("text-sage", className)} {...rest}>
      <g {...baseStroke}>
        <path d="M100 10 C 80 60, 130 120, 90 170 C 60 220, 130 260, 95 320 C 70 370, 130 410, 100 470" />
        {Array.from({ length: 22 }).map((_, i) => {
          const y = 18 + i * 20;
          const w = 22 + Math.sin(i * 0.6) * 6;
          return <ellipse key={i} cx={100} cy={y} rx={w} ry={5} />;
        })}
      </g>
    </svg>
  );
}

export function LineArtHand({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 220 260" className={cn("text-sage", className)} {...rest}>
      <g {...baseStroke}>
        <path d="M60 240 C 50 200, 50 160, 60 130 L 60 70 C 60 56, 80 56, 80 70 L 80 130" />
        <path d="M90 130 L 90 40 C 90 26, 110 26, 110 40 L 110 130" />
        <path d="M120 130 L 120 30 C 120 16, 140 16, 140 30 L 140 130" />
        <path d="M150 130 L 150 50 C 150 36, 170 36, 170 50 L 170 130" />
        <path d="M60 130 C 80 240, 140 240, 170 130" />
      </g>
    </svg>
  );
}

export function LineArtHip({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 320 200" className={cn("text-sage", className)} {...rest}>
      <g {...baseStroke}>
        <path d="M30 70 C 80 30, 240 30, 290 70 C 270 110, 220 130, 160 130 C 100 130, 50 110, 30 70 Z" />
        <circle cx="80" cy="90" r="20" />
        <circle cx="240" cy="90" r="20" />
        <path d="M160 70 L 160 190" />
        <path d="M80 110 C 70 150, 60 180, 50 195" />
        <path d="M240 110 C 250 150, 260 180, 270 195" />
      </g>
    </svg>
  );
}

export function LineArtSkeleton({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 240 480" className={cn("text-sage", className)} {...rest}>
      <g {...baseStroke}>
        <circle cx="120" cy="50" r="32" />
        <path d="M120 82 L 120 120" />
        <path d="M60 130 C 100 110, 140 110, 180 130" />
        <path d="M64 145 L 56 220" />
        <path d="M176 145 L 184 220" />
        <ellipse cx="120" cy="170" rx="40" ry="48" />
        <path d="M85 220 C 90 280, 80 340, 78 460" />
        <path d="M155 220 C 150 280, 160 340, 162 460" />
        <path d="M100 230 C 100 320, 96 400, 95 460" />
        <path d="M140 230 C 140 320, 144 400, 145 460" />
      </g>
    </svg>
  );
}
