import PillarPage, { type PillarData } from "@/components/PillarPage";

export const metadata = {
  title: "Nutrition",
  description:
    "Anti-inflammatory and bone-supportive nutrition tuned to your preferences — built from a real pre-questionnaire, not a template.",
};

const data: PillarData = {
  key: "nutrition",
  eyebrow: "Nutrition",
  num: "03",
  titleLead: "Your plate is",
  titleAccent: "half the program.",
  lead:
    "A nutrition plan built from a real pre-questionnaire — veg / non-veg, allergies, food history. Anti-inflammatory, bone-supportive, and tuned to how you actually eat.",
  image: { src: "/mat-stretching.jpg", alt: "A calm member on a mat after training" },
  features: [
    {
      title: "Pre-questionnaire-led",
      copy: "We capture what you eat now, what you love, what you can't have. The plan starts from that — not from a template.",
    },
    {
      title: "Anti-inflammatory focus",
      copy: "Foods that lower joint inflammation, support cartilage, and keep recovery on track.",
    },
    {
      title: "Bone-supportive",
      copy: "Adequate protein, calcium, vitamin D, magnesium — the inputs your bones need to keep adapting.",
    },
    {
      title: "Veg, non-veg, eggetarian, vegan",
      copy: "We meet you where you eat. No one-size-fits-all plate.",
    },
    {
      title: "Realistic, not perfect",
      copy: "We don't ban food groups. We build plates you'll actually eat — week after week.",
    },
    {
      title: "Tied to your exercise",
      copy: "Protein and timing get tuned to your training week. Nutrition and movement aren't separate columns.",
    },
  ],
  quote: {
    body: "Pain reduces. Bones get denser. Muscles activate. But none of it sticks if the plate doesn't change with the program.",
    cite: "Dr. Shruthi Desai",
  },
};

export default function Page() {
  return <PillarPage data={data} />;
}
