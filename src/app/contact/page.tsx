import Link from "next/link";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import { LineArtHand } from "@/components/primitives/LineArt";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Talk to the Reconnect team. Reach out via WhatsApp, email or our contact form. We typically reply within 24 hours.",
};

const ways = [
  {
    label: "WhatsApp",
    value: "+91 — your number here",
    href: "https://wa.me/",
    blurb: "Quickest. Send us a message and we'll reply within working hours.",
  },
  {
    label: "Email",
    value: "hello@reconnect.health",
    href: "mailto:hello@reconnect.health",
    blurb: "For longer notes, imaging, or anything you'd rather write out.",
  },
  {
    label: "Book a call",
    value: "/assessment",
    href: "/assessment",
    blurb: "Start with our 2-minute assessment; we'll book the right consultation type for you.",
  },
];

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-bone overflow-hidden">
        <LineArtHand
          aria-hidden
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[460px] text-sage opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-12">
          <Reveal>
            <Eyebrow number="00">Contact</Eyebrow>
          </Reveal>
          <h1 className="t-h1 mt-8 max-w-[22ch] text-ink">
            <span className="block">
              <SplitReveal delay={0.1}>Talk to our team.</SplitReveal>
            </span>
            <span className="block">
              <em className="italic-serif text-clay">
                <SplitReveal delay={0.28}>We reply within a day.</SplitReveal>
              </em>
            </span>
          </h1>
        </div>
      </section>

      <Section tone="bone" density="lg" className="border-t border-line">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — copy + ways to reach */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="t-lead">
                Reconnect is non-surgical, doctor-led, and built to work
                alongside your existing treatment — never instead of it.
                Whatever brought you here, we'd like to hear from you.
              </p>
            </Reveal>
            <ul className="mt-12 flex flex-col gap-8">
              {ways.map((w, i) => (
                <Reveal key={w.label} delay={i * 0.05}>
                  <li className="hairline-t pt-6">
                    <p className="section-num text-xs">0{i + 1}</p>
                    <p className="t-eyebrow mt-3 text-clay">{w.label}</p>
                    <Link
                      href={w.href}
                      className="t-h3 mt-2 block text-ink hover:text-clay transition-colors"
                    >
                      {w.value}
                    </Link>
                    <p className="t-body mt-2 max-w-[40ch]">{w.blurb}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-10 hairline-t pt-6">
                <p className="t-eyebrow text-ink-soft mb-4">Find us also on</p>
                <ul className="flex gap-5">
                  {social.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="text-ink hover:text-clay transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
