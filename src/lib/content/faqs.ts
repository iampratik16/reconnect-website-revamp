export type FaqGroup = "About the program" | "Medical & safety" | "Logistics & pricing";

export type Faq = { q: string; a: string; group: FaqGroup };

export const faqs: Faq[] = [
  {
    group: "About the program",
    q: "Will this replace my doctor or medication?",
    a: "No. Reconnect works alongside your existing treatment. Programs are designed by a rheumatologist to complement your care, not replace it — we coordinate with your treating doctor when needed.",
  },
  {
    group: "About the program",
    q: "How is this different from physiotherapy?",
    a: "Physio focuses on rehab after injury or surgery. Reconnect builds long-term progressive strength designed for joint and bone conditions — not just short-term relief.",
  },
  {
    group: "About the program",
    q: "How is this different from HealthifyMe, Fitternity, or a YouTube plan?",
    a: "Those give you one generic set of workouts from your height and weight. We start with a medical assessment and design a program around your exact condition, splitting it by body region and starting where your problem is.",
  },
  {
    group: "About the program",
    q: "What's the CGM package?",
    a: "A separate 6-month program for borderline diabetes — a sensor on your arm logs glucose for ~15 days, our team interprets the data, and we adjust your nutrition and exercise. ₹15,000 for 6 months. See the CGM page.",
  },
  {
    group: "Medical & safety",
    q: "Do you do surgery?",
    a: "No. Dr. Shruthi is a rheumatologist; surgical cases are referred to orthopedics. We focus on non-surgical strength and pain management.",
  },
  {
    group: "Medical & safety",
    q: "I've never exercised. I'm in pain right now.",
    a: "We calm the pain first with the right medical measures, then start gently and progress gradually. We never throw heavy numbers at a beginner.",
  },
  {
    group: "Medical & safety",
    q: "Can I join if I'm already on arthritis medication?",
    a: "Yes — the assessment accounts for your treatment, condition, and limitations. We work alongside your medication, never instead of it.",
  },
  {
    group: "Medical & safety",
    q: "Will strength training make my arthritis worse?",
    a: "The wrong exercise can. The right one — measured, region-specific, doctor-designed — reduces joint load and inflammation over time.",
  },
  {
    group: "Logistics & pricing",
    q: "How long is a typical program?",
    a: "Members start to see meaningful change by month 2 and most stay on the program for 6+ months. The roadmap covers weeks 1–3, weeks 4–6, month 2, then sustain.",
  },
  {
    group: "Logistics & pricing",
    q: "Can I pause or cancel?",
    a: "Yes. Plans are flexible — no lock-ins. Pause when life happens, resume when you're ready.",
  },
  {
    group: "Logistics & pricing",
    q: "Do I need a doctor's referral?",
    a: "No referral required. If you're under treatment, we'll loop your doctor in where it helps.",
  },
  {
    group: "Logistics & pricing",
    q: "Where does this happen — online or in-person?",
    a: "Most of the program runs online with a coach. Medical assessment is structured remotely, with imaging review and intake. In-person follow-ups available on request.",
  },
];
