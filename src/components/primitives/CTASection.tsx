import Section from "./Section";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { LineArtSpine } from "./LineArt";

type Props = {
  eyebrow?: string;
  headline: React.ReactNode;
  sub?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "bone" | "sage-deep" | "bone-deep";
};

export default function CTASection({
  eyebrow,
  headline,
  sub,
  primary = { label: "Take Free Assessment", href: "/assessment" },
  secondary = { label: "Book Consultation", href: "/contact" },
  tone = "bone-deep",
}: Props) {
  const isDark = tone === "sage-deep";
  return (
    <Section tone={tone} className="relative">
      <LineArtSpine
        className="absolute -right-20 -bottom-32 w-[640px] opacity-[0.07]"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="max-w-[920px]">
          {eyebrow && (
            <Reveal>
              <span className={`t-eyebrow ${isDark ? "text-bone/60" : "text-clay"}`}>
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2
              className={`t-h1 mt-5 max-w-[20ch] ${isDark ? "text-bone" : "text-ink"}`}
            >
              {headline}
            </h2>
          </Reveal>
          {sub && (
            <Reveal delay={0.12}>
              <p
                className={`t-lead mt-6 max-w-[560px] ${isDark ? "text-bone/70" : ""}`}
              >
                {sub}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href={primary.href} variant="ink">
                {primary.label}
              </MagneticButton>
              <MagneticButton
                href={secondary.href}
                variant={isDark ? "bone-outline" : "sage"}
              >
                {secondary.label}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
