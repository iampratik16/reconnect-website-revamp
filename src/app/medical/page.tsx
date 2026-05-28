import PillarPage, { type PillarData } from "@/components/PillarPage";

export const metadata = {
  title: "Medical",
  description:
    "The medical foundation of Reconnect — assessment-first, doctor-led, coordinated with your existing care. Designed by a rheumatologist.",
};

const data: PillarData = {
  key: "medical",
  eyebrow: "Medical",
  num: "01",
  titleLead: "Medical first.",
  titleAccent: "Workouts second.",
  lead:
    "Every member starts with a structured medical assessment by a rheumatologist. Imaging, medications, history, mobility — all reviewed before a single rep is prescribed.",
  image: { src: "/doctor-consultation.jpg", alt: "A clinical consultation" },
  features: [
    {
      title: "Detailed intake",
      copy: "A long-form review of your history, lifestyle, medications and imaging — DEXA, X-ray, MRI when available.",
    },
    {
      title: "Diagnosis-led plan",
      copy: "What we prescribe depends on what we find. Two members with knee pain can get very different programs.",
    },
    {
      title: "Alongside your doctor",
      copy: "Non-surgical, complementary to your existing care. We coordinate with your treating doctor where it helps.",
    },
    {
      title: "Re-assessment cadence",
      copy: "Monthly check-ins, quarterly deeper reviews. The plan stays a living document, not a one-off prescription.",
    },
    {
      title: "Pain mapping",
      copy: "We track your pain across time — the program adapts as your body responds, not on a fixed calendar.",
    },
    {
      title: "Imaging review",
      copy: "If you have recent DEXA, X-ray or MRI, our team reads it and incorporates it into your plan.",
    },
  ],
  steps: [
    {
      num: "01",
      title: "Intake form",
      copy: "Quick online form — your concern, history, medications, imaging. 5–10 minutes.",
    },
    {
      num: "02",
      title: "Doctor review",
      copy: "Our rheumatologist-led team reads everything personally — not an algorithm.",
    },
    {
      num: "03",
      title: "Recommended track",
      copy: "Within 24 hours, you receive your recommended starting track and a consultation slot.",
    },
    {
      num: "04",
      title: "Live consultation",
      copy: "We walk through the plan together. You ask anything. Then we begin.",
    },
  ],
  quote: {
    body: "We work around the pain, respect it, and reduce it — then build strength on top.",
    cite: "Dr. Shruthi Desai",
  },
};

export default function Page() {
  return <PillarPage data={data} />;
}
