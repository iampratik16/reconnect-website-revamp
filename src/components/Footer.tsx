"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import MagneticButton from "@/components/primitives/MagneticButton";

const columns = [
  {
    title: "Programs",
    links: [
      { href: "/programs/prevent", label: "Prevent" },
      { href: "/programs/manage", label: "Manage" },
      { href: "/programs/recover", label: "Recover" },
      { href: "/cgm", label: "CGM Program" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/about", label: "About Dr. Shruthi" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/assessment", label: "Free Assessment" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
];

export default function Footer() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative bg-paper text-ink overflow-hidden border-t border-line">
      {/* Editorial CTA band — responsive, selectable, with hover-grow underline */}
      <div className="relative container-x pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 t-h1 text-ink max-w-[22ch] select-text"
          >
            Your joints deserve better than painkillers and{" "}
            <span className="italic-serif text-navy link-grow">rest.</span>
          </motion.h2>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <MagneticButton href="/assessment" variant="ink">
              Take the free assessment
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="dotted-divider container-x" aria-hidden />

      <div className="relative container-x py-16 grid md:grid-cols-12 gap-10 md:gap-8">
        {/* Brand + newsletter */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex flex-col items-center gap-1 leading-none">
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-12 w-auto"
            />
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] font-bold leading-none">
              reconnect
            </span>
          </Link>
          <p className="t-body mt-5 max-w-sm">
            Rheumatologist-led, personalised strength and nutrition for bones &
            joints. Designed to work alongside your medication, not instead of
            it.
          </p>

          <div className="mt-8">
            <p className="t-eyebrow text-ink-soft">Newsletter</p>
            <p className="t-body mt-2 text-ink">
              Insights that move you forward — no noise.
            </p>
            {submitted ? (
              <p className="mt-4 text-navy font-medium">Thank you — see you in your inbox.</p>
            ) : (
              <form
                className="mt-4 flex gap-2 max-w-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                  // TODO: wire to real newsletter endpoint
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-paper-soft border border-line rounded-full px-4 py-2.5 text-ink placeholder:text-ink-mute focus:border-ink outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="btn-base btn-ink"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Link columns */}
        <nav
          className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          aria-label="Footer"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p className="t-eyebrow text-ink-soft mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-ink hover:text-navy transition-colors text-[0.9375rem] link-grow"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="dotted-divider container-x" aria-hidden />

      <div className="relative container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[0.8125rem] text-ink-soft">
        <p>Designed by Dr. Shruthi Desai, Rheumatologist.</p>
        <div className="flex items-center gap-5">
          <Link href="https://instagram.com" className="hover:text-ink link-grow" aria-label="Instagram">
            Instagram
          </Link>
          <Link href="https://linkedin.com" className="hover:text-ink link-grow" aria-label="LinkedIn">
            LinkedIn
          </Link>
          <span>© {new Date().getFullYear()} Reconnect Wellness</span>
        </div>
      </div>
    </footer>
  );
}
