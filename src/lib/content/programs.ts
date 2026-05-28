export type Program = {
  slug: "prevent" | "manage" | "recover";
  name: string;
  oneLiner: string;
  forWhom: string;
  goal: string;
  tags: string[];
  hero: string;
  heroAlt: string;
  signals: string[];
  roadmap: { phase: string; weeks: string; focus: string; copy: string }[];
  pillars: { title: string; copy: string }[];
  outcomes: { metric: string; copy: string }[];
  testimonialSlug: "rajesh" | "meera" | "amit";
  faqs: { q: string; a: string }[];
};

export const programs: Program[] = [
  {
    slug: "prevent",
    name: "Prevent",
    oneLiner: "Get ahead of joint pain and bone loss — before they slow you down.",
    forWhom:
      "Early signs, family history of arthritis or osteoporosis, post-menopausal bone health, or simply 40+ and protective of your joints.",
    goal:
      "Build strength and bone density now, so problems never start. Being protective today prevents future damage.",
    tags: ["Early arthritis", "Bone health", "40+", "Post-menopause"],
    hero: "/yoga-stretching.jpg",
    heroAlt:
      "A woman in her forties practising a slow controlled stretch in warm morning light",
    signals: [
      "Family history of arthritis or osteoporosis",
      "Occasional joint stiffness — mostly mornings",
      "Recent DEXA flagged osteopenia",
      "You sit at a desk most of the day",
      "Post-menopausal and want to protect your bones",
    ],
    roadmap: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        focus: "Foundation",
        copy:
          "Posture, mobility and the basics. Light resistance, no numbers thrown at you. We meet your body where it is.",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–6",
        focus: "Activate",
        copy:
          "Stabilising muscles wake up. Movements get more deliberate. You start to feel taller, lighter, steadier.",
      },
      {
        phase: "Phase 3",
        weeks: "Month 2",
        focus: "Build",
        copy:
          "Progressive loading — controlled and tracked. Muscles activate, bone density begins to respond.",
      },
      {
        phase: "Phase 4",
        weeks: "Month 3+",
        focus: "Sustain",
        copy:
          "A repeatable, life-long pattern. Strength as a habit, not a project.",
      },
    ],
    pillars: [
      {
        title: "Medical screen first",
        copy: "Baseline bloods, DEXA review (if available), risk profile.",
      },
      {
        title: "Preventive load",
        copy: "Light-to-moderate resistance that stimulates bone without joint stress.",
      },
      {
        title: "Anti-inflammatory nutrition",
        copy: "Plate-level guidance, tuned to your veg/non-veg preference.",
      },
      {
        title: "Mindset check-in",
        copy: "Only if a barrier shows up — we refer to a psychologist when it matters.",
      },
    ],
    outcomes: [
      { metric: "Better posture", copy: "Most members notice within 4 weeks." },
      { metric: "Stronger bones", copy: "Resistance training supports bone formation over time." },
      { metric: "Steady weight", copy: "Lean muscle quietly does the work." },
      { metric: "Confidence", copy: "You stop fearing the staircase." },
    ],
    testimonialSlug: "amit",
    faqs: [
      {
        q: "I'm not in pain — is this still worth it?",
        a: "Yes. Prevention is when the work is easiest and the upside is largest. Resistance training in your 30s, 40s and 50s pays compounding interest into your 60s and 70s.",
      },
      {
        q: "I've never exercised. Will I be thrown into the gym?",
        a: "Never. Week 1 is mobility and posture. We don't put a number on a bar until your body is ready to ask for it.",
      },
      {
        q: "What if my DEXA shows osteopenia?",
        a: "We'll factor it in. The plan accounts for fragility risk and progresses on bone-friendly principles.",
      },
    ],
  },
  {
    slug: "manage",
    name: "Manage",
    oneLiner: "Live well with arthritis, joint pain or back issues — without surgery, without giving up.",
    forWhom:
      "Active arthritis, chronic joint pain, back & neck pain, disc bulge / sciatica. You want a plan that respects the pain instead of forcing through it.",
    goal:
      "Calm the pain first, then build a full-body program around it. Reduce flare-ups. Get strong on your terms.",
    tags: ["Active arthritis", "Joint pain", "Back pain", "Disc bulge"],
    hero: "/trainer-guided-exercise.jpg",
    heroAlt:
      "A trainer carefully guiding a member through a resistance band exercise",
    signals: [
      "Pain 3–7 on most days",
      "Mornings are the worst — it loosens through the day",
      "You stopped activities you used to love",
      "Painkillers help, but you don't want to keep relying on them",
      "Imaging shows OA, disc bulge or RA — but no surgical indication",
    ],
    roadmap: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        focus: "Calm the pain",
        copy:
          "People in pain won't exercise. So we work with your medical team to settle inflammation first — then begin.",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–6",
        focus: "Activate",
        copy:
          "Stabilisers wake up around the painful joint. We work around the pain — not through it.",
      },
      {
        phase: "Phase 3",
        weeks: "Month 2",
        focus: "Build",
        copy:
          "Muscles begin loading. We start standing work, light dumbbells, real resistance — only because your body asked for it.",
      },
      {
        phase: "Phase 4",
        weeks: "Month 3+",
        focus: "Resilience",
        copy:
          "Flare-ups become rare and shorter. The program adapts week by week to where you are.",
      },
    ],
    pillars: [
      {
        title: "Medical-first",
        copy: "We coordinate with your treating doctor. Medications stay in the picture.",
      },
      {
        title: "Body-region split",
        copy: "Upper body, lower body, back, target joint — we start where your problem is.",
      },
      {
        title: "Anti-inflammatory nutrition",
        copy: "Plate-level food guidance tuned to your preferences.",
      },
      {
        title: "Psychology, if needed",
        copy: "If the fear of movement is the real block, we treat that too.",
      },
    ],
    outcomes: [
      { metric: "Less pain", copy: "Most members report a meaningful drop in pain scores by month 2." },
      { metric: "More movement", copy: "Daily tasks stop being negotiations." },
      { metric: "Fewer flare-ups", copy: "Strength buffers the joint against stress." },
      { metric: "Fewer painkillers", copy: "Reported, not promised — and always with your doctor's input." },
    ],
    testimonialSlug: "meera",
    faqs: [
      {
        q: "I tried physio and it didn't stick.",
        a: "Physio is rehab. We're a long-term progressive plan — designed to keep going after the acute episode is over.",
      },
      {
        q: "Will exercise make my arthritis worse?",
        a: "Wrong exercise will. The right one — measured, region-specific, doctor-designed — reduces joint load and inflammation over time.",
      },
      {
        q: "I'm on arthritis medication. Can I still join?",
        a: "Yes. The assessment accounts for your treatment. We work alongside your medication, never instead of it.",
      },
      {
        q: "How is this different from HealthifyMe or a YouTube plan?",
        a: "Those plans take your height and weight and hand you a template. We start with a medical assessment and design around your exact condition.",
      },
    ],
  },
  {
    slug: "recover",
    name: "Recover",
    oneLiner: "Rebuild strength after surgery, severe OA, or long deconditioning — safely, slowly, surely.",
    forWhom:
      "Post-surgery, severe osteoarthritis, advanced deconditioning. You need the most careful possible progression, with close medical oversight.",
    goal:
      "Rebuild strength under close guidance, in lock-step with your treating doctor. The most cautious version of the method.",
    tags: ["Post-surgery", "Severe OA", "Rehab", "Sarcopenia"],
    hero: "/knee-examination.jpg",
    heroAlt:
      "A close-up of a careful clinical knee examination during rehabilitation",
    signals: [
      "Post knee, hip or back surgery",
      "Severe OA where surgery was deferred or declined",
      "Long bed rest or prolonged immobility",
      "Significant muscle loss with age",
      "You need to coordinate closely with your treating doctor",
    ],
    roadmap: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        focus: "Settle & stabilise",
        copy:
          "Ground-level activation, breathwork, gentle range of motion. We don't push. We don't rush.",
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–6",
        focus: "Wake the muscle",
        copy:
          "Bodyweight, bands, isometrics. We reawaken muscles you've forgotten.",
      },
      {
        phase: "Phase 3",
        weeks: "Month 2",
        focus: "Standing & loading",
        copy:
          "Standing work, light loaded movement, gait quality. Only when your body — and your doctor — agrees.",
      },
      {
        phase: "Phase 4",
        weeks: "Month 3+",
        focus: "Back to life",
        copy:
          "Daily tasks first, then the things you missed. Stairs. Travel. Picking up grandchildren.",
      },
    ],
    pillars: [
      {
        title: "Tight medical coordination",
        copy: "We work with your treating surgeon / specialist throughout.",
      },
      {
        title: "Most conservative progression",
        copy: "Smaller jumps. Longer rest. No bravado.",
      },
      {
        title: "Targeted nutrition",
        copy: "Protein-led plate, calibrated to age, weight and recovery stage.",
      },
      {
        title: "Mindset support",
        copy: "Fear of re-injury is real. We address it when it shows up.",
      },
    ],
    outcomes: [
      { metric: "Strength back", copy: "Muscle returns faster than most people expect — when the plan is right." },
      { metric: "Better balance", copy: "Less fear of falling. Steadier gait." },
      { metric: "Independent again", copy: "From assisted to autonomous over months." },
      { metric: "Confidence", copy: "You stop bracing for the next setback." },
    ],
    testimonialSlug: "rajesh",
    faqs: [
      {
        q: "My surgeon said 'just walk'. Why isn't walking enough?",
        a: "Walking helps. But walking doesn't rebuild quadriceps after a knee replacement. Targeted resistance does — under medical guidance.",
      },
      {
        q: "I was told I need a knee replacement. Can I avoid it?",
        a: "Sometimes — strength around the joint can defer or reduce the need. Sometimes not. We are honest about what's realistic for your specific case.",
      },
      {
        q: "Is this safe for severe OA?",
        a: "It can be. With assessment first, the right loading and the right pace, members with severe OA often find they can do far more than they were told.",
      },
    ],
  },
];

export const getProgram = (slug: Program["slug"]) =>
  programs.find((p) => p.slug === slug);
