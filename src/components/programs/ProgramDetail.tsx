import Image from "next/image";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Eyebrow from "@/components/primitives/Eyebrow";
import Reveal from "@/components/primitives/Reveal";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import Pill from "@/components/primitives/Pill";
import MagneticButton from "@/components/primitives/MagneticButton";
import Accordion from "@/components/primitives/Accordion";
import CTASection from "@/components/primitives/CTASection";
import { LineArtKnee, LineArtSpine, LineArtHip } from "@/components/primitives/LineArt";
import { getTestimonial } from "@/lib/content/testimonials";
import { pullQuotes } from "@/lib/content/differentiators";
import type { Program } from "@/lib/content/programs";

const SLUG_HERO = {
  prevent: { tone: "Prevent · early protection", quote: pullQuotes.ageSpecific },
  manage: { tone: "Manage · live well, less pain", quote: pullQuotes.kneePain },
  recover: { tone: "Recover · careful return to strength", quote: pullQuotes.beginners },
} as const;

const SLUG_LINEART = {
  prevent: LineArtSpine,
  manage: LineArtKnee,
  recover: LineArtHip,
} as const;

export default function ProgramDetail({ program }: { program: Program }) {
  const testimonial = getTestimonial(program.testimonialSlug);
  const heroBits = SLUG_HERO[program.slug];
  const Anatomy = SLUG_LINEART[program.slug];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-bone overflow-hidden">
        <Anatomy
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] text-sage opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow number="00">{heroBits.tone}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="t-h1 mt-6 text-ink max-w-[24ch]">
                {program.oneLiner}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="t-lead mt-6 max-w-[60ch]">{program.forWhom}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.tags.map((t) => (
                  <Pill key={t} tone="sage">
                    {t}
                  </Pill>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9">
                <MagneticButton href="/assessment" variant="ink">
                  Take Free Assessment
                </MagneticButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-line">
              <Image
                src={program.hero}
                alt={program.heroAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 to-transparent mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* "IS THIS YOU?" */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <SectionHeader
            number="01"
            eyebrow="Is this you?"
            title="A few signals that this track might be your starting point."
            lead="Recognise yourself in any of these? The assessment will tell us more — but you're in the right place."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-6">
            {program.signals.map((s, i) => (
              <StaggerItem key={s}>
                <div className="flex items-start gap-4 hairline-t pt-5">
                  <span className="section-num text-xs mt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-[1.0625rem] text-ink">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* 12-WEEK ROADMAP — vertical sticky-style sequence */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="02"
            eyebrow="The 12-week roadmap"
            title={
              <>
                Weeks 1–3 are this. Weeks 4–6 are this.{" "}
                <em className="italic-serif text-clay">Then we progress.</em>
              </>
            }
            lead={
              program.slug === "manage"
                ? "People in pain won't exercise. We calm the pain first, then build a full-body program around it."
                : program.slug === "recover"
                  ? "The most cautious version of the method. Smaller jumps, longer rest, no bravado."
                  : "Prevention is when the work is easiest and the upside is largest."
            }
          />

          <ol className="mt-14 grid md:grid-cols-12 gap-y-12">
            {program.roadmap.map((r, i) => (
              <li
                key={r.phase}
                className="md:col-span-12 grid md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                <Reveal className="md:col-span-3" delay={i * 0.05}>
                  <p className="section-num text-sm">0{i + 1}</p>
                  <p className="t-eyebrow mt-3 text-ink-soft">{r.weeks}</p>
                  <p className="t-h3 mt-2 text-ink">{r.focus}</p>
                </Reveal>
                <Reveal className="md:col-span-9" delay={i * 0.05 + 0.1}>
                  <div className="hairline-t pt-6">
                    <p className="t-eyebrow text-clay">{r.phase}</p>
                    <p className="t-lead mt-4 max-w-[60ch]">{r.copy}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Body-region split tag */}
          <Reveal delay={0.2}>
            <p className="mt-14 t-caption text-ink-soft max-w-[60ch]">
              The plan is always split across upper body, lower body, back and
              the specific joint — and starts where your problem is.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* FOUR PILLARS for this track */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <SectionHeader
            number="03"
            eyebrow="The four pillars, tuned to this track"
            title="One method. Adjusted for severity."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {program.pillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <article className="card p-7 h-full">
                  <span className="section-num text-xs">0{i + 1}</span>
                  <h3 className="t-h3 mt-3 text-ink">{p.title}</h3>
                  <p className="t-body mt-3">{p.copy}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="04"
            eyebrow="What members report"
            title="Cautious, real outcomes — measured over months."
            lead="No cure claims. Reconnect supports your medical care; it doesn't replace it."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {program.outcomes.map((o) => (
              <StaggerItem key={o.metric}>
                <article className="card p-7 h-full flex flex-col gap-3">
                  <p className="t-h3 text-clay">{o.metric}</p>
                  <p className="t-body">{o.copy}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section tone="sage-deep" density="lg">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-bone/10">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} — ${testimonial.condition}`}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="t-eyebrow text-clay-soft">A real member</span>
              <p className="t-eyebrow mt-4 text-bone/70">
                {testimonial.metric}
              </p>
              <blockquote className="t-h2 mt-5 text-bone max-w-[24ch]">
                <em className="italic-serif text-clay-soft">“</em>
                {testimonial.quote}
                <em className="italic-serif text-clay-soft">”</em>
              </blockquote>
              <figcaption className="t-body mt-7 text-bone/80">
                {testimonial.name}, {testimonial.age} ·{" "}
                <span className="text-bone/60">{testimonial.condition}</span>
              </figcaption>
            </div>
          </div>
        </div>
      </Section>

      {/* TRACK FAQ */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="05"
            eyebrow="FAQ"
            title={`Questions members ask about ${program.name}.`}
          />
          <div className="mt-12 max-w-[820px]">
            <Accordion items={program.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        headline={
          <>
            Start with the{" "}
            <em className="italic-serif text-clay">free assessment.</em>
          </>
        }
        sub={`If ${program.name} is the right track, we'll confirm it — and tell you where to start within it.`}
        tone="bone-deep"
      />
    </>
  );
}
