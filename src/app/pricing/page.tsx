import Link from "next/link";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import Accordion from "@/components/primitives/Accordion";
import CTASection from "@/components/primitives/CTASection";
import { LineArtHand } from "@/components/primitives/LineArt";
import { plans, ALL_PLAN_FEATURES, cgmAddOn } from "@/lib/content/pricing";

export const metadata = {
  title: "Pricing",
  description:
    "Three 6-month packages — Standard ₹20,000, Basic ₹30,000, Premium ₹40,000. All include medical assessment, personalised plan, and progress tracking.",
};

const pricingFaqs = [
  {
    q: "Is this billed monthly or as a one-time payment?",
    a: "Each package is a 6-month program priced as a single fee. Internally we structure it as a 6-month commitment because that's the time horizon where bones, joints and muscle actually change.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes. Plans are flexible — pause when life happens, resume when you're ready. No lock-ins. Cancellation policy details are shared during onboarding.",
  },
  {
    q: "What's included in the medical assessment?",
    a: "Detailed intake, history, medications, imaging review (if you have it), mobility screen, pain mapping — and a recommendation for which track and starting point fits you.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No referral needed. If you're under treatment, we'll loop your doctor in where it helps. Reconnect works alongside your medication and treating doctor — never instead of them.",
  },
  {
    q: "Why does this cost more than a generic fitness app?",
    a: "Because it isn't a generic fitness app. The plan is built by a rheumatologist, around your exact condition, with medical coordination and structured progression. You're paying for a designed program — not a template.",
  },
  {
    q: "What about the CGM add-on?",
    a: `It's separate: ₹${cgmAddOn.price.toLocaleString("en-IN")} for ${cgmAddOn.period}. A different program for borderline diabetes — read more on the CGM page.`,
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-bone overflow-hidden">
        <LineArtHand
          aria-hidden
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[460px] text-sage opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <Eyebrow number="00">Pricing</Eyebrow>
          </Reveal>
          <h1 className="t-h1 mt-8 max-w-[22ch] text-ink">
            <span className="block">
              <SplitReveal delay={0.1}>Health packages.</SplitReveal>
            </span>
            <span className="block">
              <em className="italic-serif text-clay">
                <SplitReveal delay={0.28}>Built for outcomes.</SplitReveal>
              </em>
            </span>
          </h1>
          <Reveal delay={0.6}>
            <p className="t-lead mt-7 max-w-[640px]">
              All three packages are 6-month programs. Every package starts
              with a medical assessment and a personalised plan. You step up
              tiers only as your needs do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THREE TIERS */}
      <Section tone="bone" density="lg" className="border-t border-line">
        <div className="container-x">
          <Stagger className="grid md:grid-cols-3 gap-5 md:gap-6">
            {plans.map((p, i) => (
              <StaggerItem key={p.slug}>
                <div
                  className={
                    "relative card flex flex-col h-full p-7 md:p-9 " +
                    (p.popular
                      ? "bg-navy-deep text-bone border-navy-deep"
                      : "")
                  }
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-8 t-eyebrow bg-clay text-bone px-3 py-1.5 rounded-full">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <h2
                      className={
                        p.popular ? "t-h2 text-bone" : "t-h2 text-ink"
                      }
                    >
                      {p.name}
                    </h2>
                    <span className="section-num text-xs">0{i + 1}</span>
                  </div>
                  <p
                    className={
                      p.popular ? "t-body text-bone/70 mt-3" : "t-body mt-3"
                    }
                  >
                    {p.blurb}
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span
                      className={
                        "t-number text-[3rem] md:text-[3.5rem] leading-none " +
                        (p.popular ? "text-bone" : "text-ink")
                      }
                    >
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <span
                      className={
                        p.popular ? "text-bone/60 text-sm" : "text-ink-soft text-sm"
                      }
                    >
                      {p.period}
                    </span>
                  </div>
                  <ul className="mt-8 flex flex-col gap-3">
                    {p.features.map((f) => (
                      <li
                        key={f.label}
                        className="flex items-start gap-3 text-[0.9375rem]"
                      >
                        <span
                          aria-hidden
                          className={
                            "mt-1 w-5 h-5 shrink-0 rounded-full grid place-items-center " +
                            (!f.included
                              ? p.popular
                                ? "bg-bone/10 text-bone/30"
                                : "bg-line text-ink-soft/40"
                              : p.popular
                                ? "bg-clay text-bone"
                                : "bg-sage-tint text-sage-deep")
                          }
                        >
                          {f.included ? (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path
                                d="M1.5 5L4 7.5L8.5 2.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path
                                d="M1 1L7 7M7 1L1 7"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                        </span>
                        <span
                          className={
                            !f.included
                              ? p.popular
                                ? "text-bone/40 line-through"
                                : "text-ink-soft/50 line-through"
                              : p.popular
                                ? "text-bone/90"
                                : "text-ink"
                          }
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <MagneticButton
                      href="/assessment"
                      variant={p.popular ? "clay" : "sage"}
                      className="w-full"
                    >
                      Start with assessment
                    </MagneticButton>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* CGM ADD-ON */}
      <Section tone="bone-deep" density="sm">
        <div className="container-x">
          <Reveal>
            <div className="border border-line bg-calcium rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <span className="t-eyebrow text-sage">Add-on program</span>
                <h3 className="t-h3 mt-3 text-ink">{cgmAddOn.name}</h3>
                <p className="t-body mt-3 max-w-[60ch]">{cgmAddOn.blurb}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="t-number text-3xl text-ink">
                  ₹{cgmAddOn.price.toLocaleString("en-IN")}
                </span>
                <span className="t-caption text-ink-soft">{cgmAddOn.period}</span>
                <Link
                  href={cgmAddOn.href}
                  className="mt-2 t-eyebrow text-clay hover:opacity-80 transition-opacity"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* VALUE-JUSTIFICATION */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="02"
            eyebrow="Why this costs more than a fitness app"
            title="You're not paying for content. You're paying for a designed program."
            lead="Pricing resistance is real — we've thought about this carefully. Here's where the money goes."
          />

          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                t: "A rheumatologist's design",
                c: "Every plan starts from a medical brain — not a fitness brain. That's the foundation everything else stands on.",
              },
              {
                t: "Personalised to your body",
                c: "Not a template adjusted by height/weight. A plan shaped by your condition, your imaging, your pain, your age.",
              },
              {
                t: "Pain-first sequencing",
                c: "We don't push through pain. We work around it, calm it, reduce it — then build. That sequencing is the skill.",
              },
              {
                t: "Structured 12-week roadmap",
                c: "Direction and motivation that no algorithm can provide. You always know what this week is for.",
              },
            ].map((v, i) => (
              <StaggerItem key={v.t}>
                <article className="card p-7 h-full">
                  <p className="section-num text-xs">0{i + 1}</p>
                  <h3 className="t-h3 mt-3 text-ink">{v.t}</h3>
                  <p className="t-body mt-3">{v.c}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* FEATURE COMPARISON TABLE */}
      <Section tone="bone-deep" density="lg">
        <div className="container-x">
          <SectionHeader
            number="03"
            eyebrow="Compare"
            title="Feature comparison."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="text-left t-eyebrow text-ink-soft border-b border-line">
                  <th className="py-4 pr-6 font-medium w-[40%]">Feature</th>
                  {plans.map((p) => (
                    <th
                      key={p.slug}
                      className={
                        "py-4 px-4 font-medium " +
                        (p.popular ? "text-clay" : "")
                      }
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_PLAN_FEATURES.map((f) => (
                  <tr key={f} className="border-b border-line">
                    <th className="py-4 pr-6 text-left font-medium text-ink text-[0.9375rem]">
                      {f}
                    </th>
                    {plans.map((p) => {
                      const included = p.features.find(
                        (x) => x.label === f,
                      )?.included;
                      return (
                        <td
                          key={p.slug}
                          className="py-4 px-4 text-ink-soft text-[0.9375rem]"
                        >
                          {included ? (
                            <span className="inline-flex items-center gap-2 text-sage-deep">
                              <span className="inline-block w-2 h-2 rounded-full bg-sage-deep" />
                              Included
                            </span>
                          ) : (
                            <span className="text-ink-soft/50">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <th className="py-4 pr-6 text-left font-medium text-ink text-[0.9375rem]">
                    Price
                  </th>
                  {plans.map((p) => (
                    <td
                      key={p.slug}
                      className={
                        "py-4 px-4 t-number text-[1.25rem] " +
                        (p.popular ? "text-clay" : "text-ink")
                      }
                    >
                      ₹{p.price.toLocaleString("en-IN")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="bone" density="lg">
        <div className="container-x">
          <SectionHeader
            number="04"
            eyebrow="FAQ"
            title="Pricing — answered honestly."
          />
          <div className="mt-12 max-w-[820px]">
            <Accordion items={pricingFaqs} />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Decide with data"
        headline={
          <>
            Take the assessment.{" "}
            <em className="italic-serif text-clay">Then choose.</em>
          </>
        }
        sub="Once we know your starting point, the right package becomes obvious."
        tone="bone-deep"
      />
    </>
  );
}
