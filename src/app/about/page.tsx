import Image from "next/image";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import MagneticButton from "@/components/primitives/MagneticButton";
import CTASection from "@/components/primitives/CTASection";
import { LineArtSpine } from "@/components/primitives/LineArt";
import SplitReveal from "@/components/primitives/SplitReveal";

export const metadata = {
  title: "About Dr. Shruthi Desai",
  description:
    "Dr. Shruthi Desai — rheumatologist, founder of Reconnect Wellness. MBBS, MD (Internal Medicine), DM (Rheumatology). 12+ years in chronic conditions and chronic pain.",
};

const doctorWhat = [
  {
    title: "Medical assessment first",
    copy: "Every member starts with a structured intake — history, medications, imaging, lifestyle, mobility. The plan is built from this, not before it.",
  },
  {
    title: "Tuned to your diagnosis",
    copy: "Two members with knee pain can get very different programs. The diagnosis decides — not your demographic.",
  },
  {
    title: "Alongside your medication",
    copy: "Reconnect is non-surgical, complementary to your existing care. We coordinate with your treating doctor whenever it helps.",
  },
  {
    title: "Pain is respected",
    copy: "We don't push through pain. We work around it, calm it down, and only then build strength on top.",
  },
];

const philosophy = [
  "Started broad across lifestyle conditions, watching what really helped.",
  "Six months of patient response made one thing clear: the biggest impact was on bones, joints and chronic pain — through personalised strength.",
  "Patients harmed by generic exercise advice were the wake-up call. They needed someone who understood the diagnosis first, and the dumbbell second.",
  "Reconnect exists to be that someone — at scale.",
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-bone overflow-hidden">
        <LineArtSpine
          aria-hidden
          className="absolute -right-32 top-0 w-[680px] text-sage opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow number="00">Your medical lead</Eyebrow>
            </Reveal>
            <h1 className="t-h1 mt-8 max-w-[20ch] text-ink">
              <span className="block">
                <SplitReveal delay={0.1}>Dr. Shruthi Desai —</SplitReveal>
              </span>
              <span className="block">
                <em className="italic-serif text-clay">
                  <SplitReveal delay={0.25}>rheumatologist</SplitReveal>
                </em>{" "}
                <SplitReveal delay={0.4}>by training,</SplitReveal>
              </span>
              <span className="block">
                <SplitReveal delay={0.55}>strength-coach by</SplitReveal>{" "}
                <em className="italic-serif text-clay">
                  <SplitReveal delay={0.7}>conviction.</SplitReveal>
                </em>
              </span>
            </h1>
            <Reveal delay={0.95}>
              <p className="t-eyebrow mt-8 text-ink-soft">
                MBBS · MD (Internal Medicine) · DM (Rheumatology)
              </p>
            </Reveal>
            <Reveal delay={1.05}>
              <p className="t-lead mt-5 max-w-[60ch]">
                12+ years in rheumatology — chronic conditions, chronic pain,
                non-surgical. Founder of Reconnect.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-line">
              <Image
                src="/dr-shruthi.avif"
                alt="Portrait of Dr. Shruthi Desai"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 to-transparent mix-blend-multiply" />
            </div>
            <div className="hidden md:flex absolute right-8 -bottom-4 bg-calcium border border-line rounded-full px-5 py-2 shadow-sm">
              <span className="t-eyebrow text-clay">12+ yrs rheumatology</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeader
              number="01"
              eyebrow="Origin story"
              title="Why Reconnect exists."
            />
          </div>
          <div className="md:col-span-8">
            <ol className="flex flex-col gap-8">
              {philosophy.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="hairline-t pt-6 flex gap-6">
                    <span className="section-num text-xs mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="t-lead text-ink max-w-[60ch]">{p}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* PULL QUOTE — Philosophy */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <Reveal>
            <p className="t-eyebrow text-clay">Philosophy</p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="t-hero mt-8 max-w-[22ch] text-ink">
              <em className="italic-serif">“</em>
              We work around the pain, respect it, and reduce it — then build
              strength on top.
              <em className="italic-serif">”</em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="t-caption mt-8 text-ink-soft">
              — Dr. Shruthi Desai
            </p>
          </Reveal>
        </div>
      </Section>

      {/* WHAT DOCTOR-LED MEANS */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <SectionHeader
            number="02"
            eyebrow="In practice"
            title='What "doctor-led" actually means.'
            lead="It's not a marketing phrase. It's a workflow."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {doctorWhat.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <article className="card p-7 h-full">
                  <p className="section-num text-xs">0{i + 1}</p>
                  <h3 className="t-h3 mt-3 text-ink">{d.title}</h3>
                  <p className="t-body mt-3">{d.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY BONES & JOINTS */}
      <Section tone="bone" density="lg">
        <div className="container-x grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeader
              number="03"
              eyebrow="Why bones & joints"
              title="The deliberate niche — and why it matters for you."
            />
          </div>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="t-lead">
              The most useful thing we can be is exceptionally good at one
              thing. Bones, joints and chronic pain — across early prevention,
              active management and post-surgical recovery — is where we are
              best.
            </p>
            <p className="t-body mt-6 text-ink-soft">
              That focus is also why our programs split by body region (upper,
              lower, back, the specific joint), why nutrition is built around a
              real medical pre-questionnaire, and why we coordinate with your
              treating doctor instead of replacing them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/programs" variant="ink">
                See the three tracks
              </MagneticButton>
              <MagneticButton href="/how-it-works" variant="sage">
                See how it works
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Work with Dr. Shruthi"
        headline={
          <>
            Take the{" "}
            <em className="italic-serif text-clay">free assessment.</em>
          </>
        }
        sub="Or reach out directly — we'll pair you with the right starting point."
        tone="bone-deep"
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
