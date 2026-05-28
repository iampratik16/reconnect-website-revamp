"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import MagneticButton from "@/components/primitives/MagneticButton";
import { LineArtSpine } from "@/components/primitives/LineArt";

type FormState = {
  concern: string;
  duration: string;
  pain: number;
  activity: string;
  age: string;
  treatment: string;
  diet: string;
  allergies: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
};

const initial: FormState = {
  concern: "",
  duration: "",
  pain: 5,
  activity: "",
  age: "",
  treatment: "",
  diet: "",
  allergies: "",
  name: "",
  email: "",
  phone: "",
  consent: false,
};

const CONCERNS = [
  { v: "knee", label: "Knee pain", track: "manage" },
  { v: "back", label: "Back & neck pain", track: "manage" },
  { v: "arthritis", label: "Arthritis", track: "manage" },
  { v: "disc", label: "Disc issues / sciatica", track: "manage" },
  { v: "bone", label: "Bone health (osteoporosis)", track: "prevent" },
  { v: "prevent", label: "Prevention / family history", track: "prevent" },
  { v: "post-surgery", label: "Post-surgery recovery", track: "recover" },
  { v: "sugar", label: "Managing blood sugar", track: "cgm" },
];

const DURATIONS = ["< 1 month", "1–6 months", "6–12 months", "1+ year", "Chronic"];
const ACTIVITY = [
  "Never exercised — I'm starting from zero",
  "Light walks or yoga occasionally",
  "Active 2–3× a week",
  "Active most days",
];
const AGES = ["Under 30", "30–40", "40–50", "50–60", "60+"];
const DIETS = ["Vegetarian", "Non-vegetarian", "Eggetarian", "Vegan"];

function recommend(state: FormState) {
  const c = CONCERNS.find((x) => x.v === state.concern);
  if (state.concern === "sugar") return { track: "cgm", label: "CGM Program", href: "/cgm" };
  if (state.concern === "post-surgery")
    return { track: "recover", label: "Recover", href: "/programs/recover" };
  if (state.concern === "prevent" || state.concern === "bone")
    return { track: "prevent", label: "Prevent", href: "/programs/prevent" };
  if (state.pain >= 6)
    return { track: "manage", label: "Manage", href: "/programs/manage" };
  const track = c?.track ?? "manage";
  return {
    track,
    label: track === "prevent" ? "Prevent" : track === "recover" ? "Recover" : "Manage",
    href: track === "cgm" ? "/cgm" : `/programs/${track}`,
  };
}

export default function AssessmentFunnel() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const isValid = !!form.name && !!form.email && !!form.phone;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // TODO: wire to real backend — medical data must be stored securely with explicit consent.
    setSubmitted(true);
  };

  const rec = submitted ? recommend(form) : null;

  return (
    <div className="min-h-[100svh] bg-bone flex flex-col">
      {/* Slim top bar */}
      <header className="border-b border-line bg-bone/85 backdrop-blur-md sticky top-0 z-10">
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-[family-name:var(--font-display)] text-2xl text-ink">
              reconnect
            </span>
            <span className="text-clay text-xl">.</span>
          </Link>
          <span className="t-caption text-ink-soft hidden sm:block">
            2-minute medical assessment
          </span>
        </div>
      </header>

      <div className="relative flex-1">
        <LineArtSpine
          aria-hidden
          className="absolute -right-40 top-20 w-[680px] text-sage opacity-[0.05] pointer-events-none"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

        <div className="container-x relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT — editorial intro */}
            <aside className="lg:col-span-5 lg:sticky lg:top-[112px] lg:self-start">
              <p className="t-eyebrow text-clay">Free assessment</p>
              <h1 className="t-h1 mt-5 text-ink max-w-[14ch]">
                Tell us where{" "}
                <em className="italic-serif text-clay">your body</em> is, today.
              </h1>
              <p className="t-lead mt-7 max-w-[44ch]">
                A short, honest intake. Our medical team reviews every answer
                and recommends your starting track within 24 hours.
              </p>

              <ul className="mt-10 flex flex-col gap-5">
                {[
                  { n: "01", h: "Doctor-reviewed", c: "Read personally by our medical team — not an algorithm." },
                  { n: "02", h: "Private", c: "Your data stays with the medical team. We never share it." },
                  { n: "03", h: "No commitment", c: "Reviewing the assessment is free. You decide what's next." },
                ].map((it) => (
                  <li key={it.n} className="hairline-t pt-5 flex gap-5">
                    <span className="section-num text-xs shrink-0 mt-1">{it.n}</span>
                    <div>
                      <p className="t-eyebrow text-ink-soft">{it.h}</p>
                      <p className="t-body mt-2">{it.c}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 t-caption text-ink-soft max-w-[40ch]">
                Reconnect works alongside your existing medical care, never instead of it.
              </p>
            </aside>

            {/* RIGHT — single-page form */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitted && rec ? (
                  <motion.div
                    key="thanks"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="card p-8 md:p-12"
                  >
                    <p className="t-eyebrow text-clay">
                      Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""} —
                    </p>
                    <h2 className="t-h1 mt-5 text-ink max-w-[18ch]">
                      Your starting track looks like{" "}
                      <em className="italic-serif text-clay">{rec.label}.</em>
                    </h2>
                    <p className="t-lead mt-6 max-w-[50ch]">
                      Our medical team will be in touch within 24 hours to
                      schedule your assessment call. In the meantime —
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                      <MagneticButton href={rec.href} variant="ink">
                        Read about {rec.label}
                      </MagneticButton>
                      <MagneticButton href="/contact" variant="sage">
                        Talk to us now
                      </MagneticButton>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="card p-8 md:p-10 flex flex-col gap-12"
                  >
                    {/* Section 1 — Your body */}
                    <FormSection num="01" label="About your body">
                      <Field label="What's your main concern?">
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {CONCERNS.map((c) => (
                            <Chip
                              key={c.v}
                              selected={form.concern === c.v}
                              onClick={() => set("concern", c.v)}
                            >
                              {c.label}
                            </Chip>
                          ))}
                        </div>
                      </Field>

                      <Field label="How long has it been going on?">
                        <div className="flex flex-wrap gap-2">
                          {DURATIONS.map((d) => (
                            <Chip
                              key={d}
                              selected={form.duration === d}
                              onClick={() => set("duration", d)}
                            >
                              {d}
                            </Chip>
                          ))}
                        </div>
                      </Field>

                      <Field label={`Current pain — ${form.pain} / 10`}>
                        <input
                          type="range"
                          min={0}
                          max={10}
                          value={form.pain}
                          onChange={(e) => set("pain", Number(e.target.value))}
                          className="w-full accent-clay"
                          aria-label="Current pain level"
                        />
                        <div className="flex justify-between t-caption text-ink-soft mt-2">
                          <span>None</span>
                          <span>Severe</span>
                        </div>
                      </Field>
                    </FormSection>

                    {/* Section 2 — Where you're starting */}
                    <FormSection num="02" label="Where you're starting">
                      <Field label="Your current activity level">
                        <div className="flex flex-col gap-2">
                          {ACTIVITY.map((a) => (
                            <Chip
                              key={a}
                              selected={form.activity === a}
                              onClick={() => set("activity", a)}
                              fullWidth
                            >
                              {a}
                            </Chip>
                          ))}
                        </div>
                      </Field>

                      <Field label="Age band">
                        <div className="flex flex-wrap gap-2">
                          {AGES.map((a) => (
                            <Chip
                              key={a}
                              selected={form.age === a}
                              onClick={() => set("age", a)}
                            >
                              {a}
                            </Chip>
                          ))}
                        </div>
                      </Field>

                      <Field
                        label="Treatment, medications or recent imaging"
                        hint="Optional — DEXA, X-ray, MRI, current medications, anything relevant."
                      >
                        <Textarea
                          value={form.treatment}
                          onChange={(e) => set("treatment", e.target.value)}
                          placeholder="Type anything you'd like our medical team to know…"
                        />
                      </Field>
                    </FormSection>

                    {/* Section 3 — Nutrition */}
                    <FormSection num="03" label="Nutrition">
                      <Field label="Diet">
                        <div className="flex flex-wrap gap-2">
                          {DIETS.map((d) => (
                            <Chip
                              key={d}
                              selected={form.diet === d}
                              onClick={() => set("diet", d)}
                            >
                              {d}
                            </Chip>
                          ))}
                        </div>
                      </Field>
                      <Field
                        label="Allergies or strong food preferences"
                        hint="Optional"
                      >
                        <Input
                          value={form.allergies}
                          onChange={(e) => set("allergies", e.target.value)}
                          placeholder="e.g. lactose-intolerant; no eggs; jain"
                        />
                      </Field>
                    </FormSection>

                    {/* Section 4 — Contact */}
                    <FormSection num="04" label="Where we reach you">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full name" required>
                          <Input
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            required
                          />
                        </Field>
                        <Field label="Phone (WhatsApp preferred)" required>
                          <Input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            required
                          />
                        </Field>
                      </div>
                      <Field label="Email" required>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          required
                        />
                      </Field>
                    </FormSection>

                    {/* Consent + submit */}
                    <div className="hairline-t pt-6 flex flex-col gap-6">
                      <label className="flex gap-3 items-start cursor-pointer text-[0.9375rem] text-ink-soft">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => set("consent", e.target.checked)}
                          className="mt-1 accent-clay w-4 h-4 shrink-0"
                        />
                        <span>
                          I consent to be contacted by the Reconnect medical team about my assessment. My data stays private and is never shared.
                        </span>
                      </label>
                      <div className="flex flex-wrap items-center gap-4 justify-between">
                        <p className="t-caption text-ink-soft">
                          {isValid ? "Ready when you are." : "Name, email and phone are required."}
                        </p>
                        <MagneticButton
                          type="submit"
                          variant="ink"
                          className={isValid ? "" : "opacity-50 pointer-events-none"}
                        >
                          Submit assessment
                        </MagneticButton>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.assess-input) {
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
        :global(.assess-input:focus) {
          outline: none;
          border-color: var(--color-clay);
        }
      `}</style>
    </div>
  );
}

function FormSection({
  num,
  label,
  children,
}: {
  num: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-7">
        <span className="section-num text-sm">{num}</span>
        <h2 className="t-eyebrow text-clay">{label}</h2>
      </div>
      <div className="flex flex-col gap-7">{children}</div>
    </section>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="t-eyebrow text-ink-soft block mb-3">
        {label} {required && <span className="text-clay">*</span>}
        {hint && (
          <span className="ml-2 normal-case tracking-normal text-ink-soft/70 font-normal">
            · {hint}
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function Chip({
  selected,
  onClick,
  fullWidth,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        "text-left px-4 py-3 rounded-full border text-[0.9375rem] transition-all " +
        (fullWidth ? "w-full " : "") +
        (selected
          ? "border-clay bg-clay text-bone shadow-sm"
          : "border-line bg-calcium text-ink hover:border-ink-soft")
      }
    >
      {children}
    </button>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="assess-input" />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={3} className="assess-input resize-none" />;
}
