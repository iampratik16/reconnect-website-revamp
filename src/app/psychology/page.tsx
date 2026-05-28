import PillarPage, { type PillarData } from "@/components/PillarPage";

export const metadata = {
  title: "Psychology",
  description:
    "Mindset matters as much as the muscle. If we detect a mental block to movement, we refer you to a psychologist — only when it helps.",
};

const data: PillarData = {
  key: "psychology",
  eyebrow: "Psychology",
  num: "04",
  titleLead: "Mindset matters",
  titleAccent: "as much as the muscle.",
  lead:
    "Fear of pain. Fear of re-injury. The inertia of long deconditioning. These are real — and they keep people stuck. When we detect a mental block to movement, we refer you to a psychologist.",
  features: [
    {
      title: "Only if needed",
      copy: "Psychology isn't on every program. We refer only when a mental block is genuinely standing between you and progress.",
    },
    {
      title: "Pain anxiety",
      copy: "Some members brace for the next flare-up. We help replace that bracing with confidence.",
    },
    {
      title: "Fear of re-injury",
      copy: "After surgery or a long episode, getting back to load is as much mental as physical. We work on both.",
    },
    {
      title: "Behavioural support",
      copy: "Habit-forming, motivation, identity around movement — small mindset shifts compound across months.",
    },
    {
      title: "Confidential referral",
      copy: "A licensed psychologist, on our medical team — private, structured, optional sessions.",
    },
    {
      title: "Integrated with the plan",
      copy: "Psychology isn't a side car. What you do with the psychologist informs how the exercise plan adapts.",
    },
  ],
  quote: {
    body: "People in pain won't exercise. But people who fear pain won't exercise either. We treat both.",
    cite: "Dr. Shruthi Desai",
  },
};

export default function Page() {
  return <PillarPage data={data} />;
}
