import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

export default function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: {
  number?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-[820px]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow number={number} tone={isDark ? "bone" : "clay"}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "t-h2 mt-4 md:mt-5",
            isDark ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "t-lead mt-5 max-w-[640px]",
              align === "center" && "mx-auto",
              isDark && "text-bone/70",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
