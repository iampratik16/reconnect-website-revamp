import type { JourneyStep } from "@/components/primitives/JourneyStepper";

export const journey: JourneyStep[] = [
  {
    num: "01",
    title: "Medical Assessment",
    blurb:
      "A detailed review of your condition, history, medications and imaging by our medical team. This decides everything that follows.",
  },
  {
    num: "02",
    title: "Personalised Exercise Program",
    blurb:
      "Not random workouts. Split across upper body, lower body, back and specific joints — we start where your problem is.",
  },
  {
    num: "03",
    title: "Nutrition Plan",
    blurb:
      "Built from a pre-questionnaire (veg/non-veg, food preferences, history). Anti-inflammatory and bone-supportive.",
  },
  {
    num: "04",
    title: "Psychology Support",
    blurb:
      "Only if we detect a mental block to movement. Mindset matters as much as the muscle.",
    optional: true,
  },
];
