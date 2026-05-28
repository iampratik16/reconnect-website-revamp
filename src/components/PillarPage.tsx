import Image from "next/image";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Eyebrow from "@/components/primitives/Eyebrow";
import Reveal from "@/components/primitives/Reveal";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import SplitReveal from "@/components/primitives/SplitReveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import CTASection from "@/components/primitives/CTASection";
import GradientBorder from "@/components/primitives/GradientBorder";
import { LineArtKnee, LineArtSpine, LineArtHand, LineArtHip } from "@/components/primitives/LineArt";

const ART = {
  medical: LineArtSpine,
  exercise: LineArtKnee,
  nutrition: LineArtHand,
  psychology: LineArtHip,
  services: LineArtSpine,
} as const;

export type PillarKey = keyof typeof ART;

export type PillarData = {
  key: PillarKey;
  eyebrow: string;
  num: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  /** Optional hero image override. Falls back to nothing. */
  image?: { src: string; alt: string };
  /** Numbered "what this includes" list. */
  features: { title: string; copy: string }[];
  /** "How it works" linear steps. */
  steps?: { num: string; title: string; copy: string }[];
  /** Pull quote (founder voice). */
  quote: { body: string; cite?: string };
};

export default function PillarPage({ data }: { data: PillarData }) {
  const Anatomy = ART[data.key];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-paper overflow-hidden">
        <Anatomy
          aria-hidden
          className="absolute -right-32 top-24 w-[620px] text-navy opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className={data.image ? "md:col-span-7" : "md:col-span-12 max-w-[1000px]"}>
            <Reveal>
              <Eyebrow number={data.num} tone="navy">
                {data.eyebrow}
              </Eyebrow>
            </Reveal>
            <h1 className="t-h1 mt-8 max-w-[22ch] text-ink">
              <span className="block">
                <SplitReveal delay={0.1}>{data.titleLead}</SplitReveal>
              </span>
              <span className="block">
                <em className="italic-serif text-navy">
                  <SplitReveal delay={0.3}>{data.titleAccent}</SplitReveal>
                </em>
              </span>
            </h1>
            <Reveal delay={0.7}>
              <p className="t-lead mt-8 max-w-[640px]">{data.lead}</p>
            </Reveal>
            <Reveal delay={0.85}>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href="/assessment" variant="ink">
                  Take Free Assessment
                </MagneticButton>
                <MagneticButton href="/contact" variant="paper">
                  Talk to us
                </MagneticButton>
              </div>
            </Reveal>
          </div>
          {data.image && (
            <Reveal delay={0.35} className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-line">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  priority
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FEATURES — gradient-border cards */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <SectionHeader
            number="01"
            eyebrow="What's included"
            title={<>The {data.eyebrow.toLowerCase()} pillar — <span className="italic-serif text-navy">in detail.</span></>}
          />
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f, i) => (
              <StaggerItem key={f.title}>
                <GradientBorder
                  animated={i === 0}
                  innerClassName="p-7 md:p-8 h-full flex flex-col gap-4"
                >
                  <span className="section-num text-sm">0{i + 1}</span>
                  <h3 className="t-h3 text-ink">{f.title}</h3>
                  <p className="t-body">{f.copy}</p>
                </GradientBorder>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* STEPS */}
      {data.steps && (
        <Section tone="bone" density="lg">
          <div className="container-x">
            <SectionHeader
              number="02"
              eyebrow="How it works"
              title="The flow — start to finish."
            />
            <ol className="mt-14 grid gap-y-10">
              {data.steps.map((s, i) => (
                <li
                  key={s.num}
                  className="grid md:grid-cols-12 gap-6 md:gap-10 items-start hairline-t pt-8"
                >
                  <Reveal className="md:col-span-3" delay={i * 0.05}>
                    <p className="section-num text-sm">{s.num}</p>
                    <p className="t-h3 mt-3 text-ink">{s.title}</p>
                  </Reveal>
                  <Reveal className="md:col-span-9" delay={i * 0.05 + 0.1}>
                    <p className="t-lead max-w-[60ch]">{s.copy}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {/* PULL QUOTE */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <Reveal>
            <p className="t-eyebrow text-navy">Founder voice</p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="t-hero mt-8 max-w-[22ch] text-ink">
              <em className="italic-serif">“</em>
              {data.quote.body}
              <em className="italic-serif">”</em>
            </blockquote>
          </Reveal>
          {data.quote.cite && (
            <Reveal delay={0.15}>
              <p className="t-caption mt-8 text-ink-soft">— {data.quote.cite}</p>
            </Reveal>
          )}
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        headline={
          <>
            Take the <em className="italic-serif text-navy">free assessment.</em>
          </>
        }
        sub="Once we know your starting point, the rest of the program builds itself."
        tone="bone"
      />
    </>
  );
}
