"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import MagneticButton from "@/components/primitives/MagneticButton";

type FormState = {
  name: string;
  email: string;
  phone: string;
  concern: string;
  track: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  concern: "",
  track: "",
  message: "",
};

const CONCERNS = [
  "Knee pain",
  "Back & neck pain",
  "Arthritis",
  "Disc / sciatica",
  "Bone health (osteoporosis)",
  "Post-surgery recovery",
  "CGM program",
  "Something else",
];

const TRACKS = [
  "Not sure yet",
  "Prevent",
  "Manage",
  "Recover",
  "CGM",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to real backend (form submission endpoint).
    // Medical / contact data must be stored securely with explicit consent.
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="thanks"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:p-10"
        >
          <p className="t-eyebrow text-clay">Message received</p>
          <h3 className="t-h2 mt-5 text-ink max-w-[20ch]">
            Thank you. We'll be in touch within 24 hours.
          </h3>
          <p className="t-body mt-6 max-w-[50ch]">
            Want to start now? Take the 2-minute medical assessment — it gives
            our team a head start on your recommended track.
          </p>
          <div className="mt-8">
            <MagneticButton href="/assessment" variant="ink">
              Take the assessment
            </MagneticButton>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={submit}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:p-10 flex flex-col gap-5"
        >
          <p className="t-eyebrow text-clay">Send a message</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" required>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="input"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="input"
              />
            </Field>
          </div>

          <Field label="Phone (WhatsApp preferred)" required>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="input"
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Primary concern" required>
              <select
                required
                value={form.concern}
                onChange={(e) => set("concern", e.target.value)}
                className="input"
              >
                <option value="">Choose…</option>
                {CONCERNS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred track">
              <select
                value={form.track}
                onChange={(e) => set("track", e.target.value)}
                className="input"
              >
                <option value="">Choose…</option>
                {TRACKS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Message">
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Tell us a little about what's going on — or what you'd like to know."
              className="input resize-none"
            />
          </Field>

          <p className="t-caption text-ink-soft">
            By submitting, you consent to be contacted by the Reconnect medical team. We never share your data.
          </p>

          <div className="pt-2">
            <MagneticButton type="submit" variant="ink">
              Send message
            </MagneticButton>
          </div>

          <style jsx>{`
            .input {
              width: 100%;
              background: var(--color-calcium);
              border: 1px solid var(--color-line);
              border-radius: 14px;
              padding: 12px 16px;
              color: var(--color-ink);
              font-size: 0.9375rem;
              font-family: inherit;
              transition: border-color 200ms;
            }
            .input:focus {
              outline: none;
              border-color: var(--color-clay);
            }
          `}</style>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="t-eyebrow text-ink-soft block mb-2">
        {label}{" "}
        {required && <span className="text-clay">*</span>}
      </span>
      {children}
    </label>
  );
}
