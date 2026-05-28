import Link from "next/link";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import CTASection from "@/components/primitives/CTASection";
import { cgmAddOn } from "@/lib/content/pricing";

export const metadata = {
  title: "Continuous Glucose Monitoring",
  description:
    "A 6-month CGM program for borderline diabetes — sensor on your arm, ~15 days of continuous glucose data, remote interpretation, and personalised nutrition + exercise adjustments. ₹15,000 for 6 months.",
};

const steps = [
  {
    t: "01",
    h: "Sensor on the arm",
    c: "A small, well-tolerated CGM sensor placed on your upper arm. You barely notice it.",
  },
  {
    t: "02",
    h: "~15 days of data",
    c: "Glucose readings are logged continuously. We get the full picture — not just one snapshot from a lab.",
  },
  {
    t: "03",
    h: "Remote monitoring",
    c: "Readings stream to our remote monitoring centre. Our medical team interprets the patterns.",
  },
  {
    t: "04",
    h: "See your spikes",
    c: "You see exactly which foods, meals, and activities spike your sugar. No more guessing.",
  },
  {
    t: "05",
    h: "Adjust nutrition + exercise",
    c: "We adjust your plate and your movement around the data. Real changes, in your real life.",
  },
];

const whoFor = [
  "Borderline diabetic or pre-diabetic",
  "Recently started or considering metformin",
  "Family history of type 2 diabetes",
  "Want to delay or avoid medication if possible",
  "Metabolically curious — want data, not guesses",
];

const whatYouGet = [
  "6 months of medical guidance",
  "The CGM sensor + monitoring period",
  "Personalised nutrition + exercise adjustments based on your data",
  "Doctor oversight throughout",
  "Final readout and a plan for the next 6 months",
];

export default function Page() {
  return (
    <>
      {/* HERO — distinct cooler navy accent vs bones/joints */}
      <section className="relative bg-navy-tint overflow-hidden">
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow number="00" tone="navy">
              CGM · Metabolic add-on
            </Eyebrow>
          </Reveal>
          <h1 className="t-h1 mt-8 max-w-[22ch] text-ink">
            <span className="block">
              <SplitReveal delay={0.1}>Continuous Glucose Monitoring —</SplitReveal>
            </span>
            <span className="block">
              <SplitReveal delay={0.28}>see exactly what</SplitReveal>{" "}
              <em className="italic-serif text-clay">
                <SplitReveal delay={0.5}>spikes your sugar.</SplitReveal>
              </em>
            </span>
          </h1>
          <Reveal delay={0.7}>
            <p className="t-lead mt-8 max-w-[640px]">
              A separate, secondary program for borderline-diabetic or
              medication-avoidant people who want data-driven control of their
              metabolism — not another generic diet template.
            </p>
          </Reveal>
          <Reveal delay={0.85}>
            <div className="mt-10 flex flex-wrap gap-3 items-baseline">
              <MagneticButton href="/contact" variant="ink">
                Enquire / Book
              </MagneticButton>
              <span className="t-eyebrow text-navy">
                ₹{cgmAddOn.price.toLocaleString("en-IN")} · {cgmAddOn.period}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS — 5 steps */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="01"
            eyebrow="How it works"
            title="Five steps. Two weeks of data. Six months of change."
          />
          <ol className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <Reveal key={s.t} delay={parseInt(s.t) * 0.05}>
                <li className="flex flex-col gap-4 hairline-t pt-6">
                  <span className="section-num text-sm">{s.t}</span>
                  <h3 className="t-h3 text-ink">{s.h}</h3>
                  <p className="t-body">{s.c}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHeader
              number="02"
              eyebrow="Who it's for"
              title="If any of these are true — CGM probably helps."
            />
          </div>
          <Stagger className="md:col-span-7 flex flex-col gap-4">
            {whoFor.map((w, i) => (
              <StaggerItem key={w}>
                <div className="hairline-t pt-4 flex items-start gap-4">
                  <span className="section-num text-xs mt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-[1.0625rem] text-ink">{w}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* WHAT YOU GET */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="03"
            eyebrow="What you get"
            title="The whole 6-month package."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatYouGet.map((x, i) => (
              <StaggerItem key={x}>
                <article className="card p-7 h-full">
                  <span className="section-num text-xs">0{i + 1}</span>
                  <p className="t-h3 mt-3 text-ink">{x}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="t-caption mt-10 text-ink-soft max-w-[60ch]">
              CGM supports — not replaces — diabetes care. If you're on
              medication or under treatment, we coordinate with your treating
              doctor.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* CROSS-LINK TO BONES & JOINTS */}
      <Section tone="bone-deep" density="sm">
        <div className="container-x">
          <Reveal>
            <div className="border border-line bg-calcium rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <span className="t-eyebrow text-sage">Coming for joints?</span>
                <p className="t-h3 mt-3 text-ink max-w-[40ch]">
                  CGM is our metabolic track — but our core work is bones &
                  joints.
                </p>
              </div>
              <Link
                href="/programs"
                className="t-eyebrow text-clay shrink-0 hover:opacity-80 transition-opacity"
              >
                See joint & bone programs →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Get started"
        headline={
          <>
            Book a CGM{" "}
            <em className="italic-serif text-clay">enquiry call.</em>
          </>
        }
        sub="We'll confirm fit, walk you through the program, and help you start."
        tone="bone"
        primary={{ label: "Enquire / Book", href: "/contact" }}
        secondary={{ label: "Back to joint programs", href: "/programs" }}
      />
    </>
  );
}
