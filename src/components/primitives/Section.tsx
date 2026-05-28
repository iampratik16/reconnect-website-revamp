import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Tone =
  | "bone"
  | "bone-deep"
  | "calcium"
  | "sage-deep"
  | "sage-tint"
  | "navy-deep"
  | "navy-tint";

const TONES: Record<Tone, string> = {
  bone: "bg-bone text-ink",
  "bone-deep": "bg-bone-deep text-ink",
  calcium: "bg-calcium text-ink",
  "sage-deep": "bg-sage-deep text-bone",
  "sage-tint": "bg-sage-tint text-ink",
  "navy-deep": "bg-navy-deep text-bone",
  "navy-tint": "bg-navy-tint text-ink",
};

type Props = React.HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  density?: "default" | "sm" | "lg";
};

const Section = forwardRef<HTMLElement, Props>(function Section(
  { tone = "bone", density = "default", className, children, ...rest },
  ref,
) {
  const pad =
    density === "sm" ? "section-y-sm" : density === "lg" ? "section-y" : "section-y";
  return (
    <section
      ref={ref}
      className={cn("relative overflow-hidden", TONES[tone], pad, className)}
      {...rest}
    >
      {children}
    </section>
  );
});

export default Section;
