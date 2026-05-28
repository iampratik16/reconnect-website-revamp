export type Plan = {
  slug: "standard" | "basic" | "premium";
  name: string;
  price: number;
  period: string;
  blurb: string;
  features: { label: string; included: boolean }[];
  popular?: boolean;
};

const ALL_FEATURES = [
  "Medical Consultation",
  "Personalised Health Plan",
  "Fitness & Nutrition Guidance",
  "Progress Tracking Tools",
  "Mental Health Support",
  "Deep Psychological Input",
  "Exclusive 1-on-1 Sessions",
] as const;

const make = (
  slug: Plan["slug"],
  name: string,
  price: number,
  blurb: string,
  includedCount: number,
  popular = false,
): Plan => ({
  slug,
  name,
  price,
  period: "for 6 months",
  blurb,
  popular,
  features: ALL_FEATURES.map((label, i) => ({
    label,
    included: i < includedCount,
  })),
});

export const plans: Plan[] = [
  make(
    "standard",
    "Standard",
    20000,
    "The medical-grade starting point — assessment, plan, tracking.",
    4,
  ),
  make(
    "basic",
    "Basic",
    30000,
    "The full method — most members choose this.",
    5,
    true,
  ),
  make(
    "premium",
    "Premium",
    40000,
    "For complex cases and the highest-touch care.",
    7,
  ),
];

export const cgmAddOn = {
  name: "Continuous Glucose Monitoring",
  price: 15000,
  period: "for 6 months",
  blurb:
    "Borderline blood sugar? See exactly what spikes your glucose, and adjust your nutrition and exercise around it.",
  href: "/cgm",
};

export const ALL_PLAN_FEATURES = ALL_FEATURES;
