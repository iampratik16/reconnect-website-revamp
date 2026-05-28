import PillarPage, { type PillarData } from "@/components/PillarPage";

export const metadata = {
  title: "Exercise",
  description:
    "Not random workouts — a strength program designed for your specific body condition by a doctor. Split by body region, starting where your problem is.",
};

const data: PillarData = {
  key: "exercise",
  eyebrow: "Exercise",
  num: "02",
  titleLead: "Not random workouts.",
  titleAccent: "A doctor-designed program.",
  lead:
    "Targeted strength training, split across upper body, lower body, back and the specific joint — we start where your problem is. Progression is earned, not scheduled.",
  image: { src: "/trainer-guided-exercise.jpg", alt: "Trainer guiding a member through a resistance band exercise" },
  features: [
    {
      title: "Body-region split",
      copy: "Upper body, lower body, back and the specific joint — we map your week to your weakest link.",
    },
    {
      title: "Age-appropriate progression",
      copy: "A 30-year-old gets dumbbells; a busy 40-year-old mother gets a 30-minute plan. Same method, different prescription.",
    },
    {
      title: "Pain-first sequencing",
      copy: "If you're in pain, we calm it first with the right medical measure. Then we build strength on top.",
    },
    {
      title: "12-week roadmap",
      copy: "Weeks 1–3 are foundation. Weeks 4–6 are activation. Month 2 is build. Month 3 is sustain.",
    },
    {
      title: "Coach-led",
      copy: "A real human reviews your sessions and adjusts your loads weekly. No autopilot.",
    },
    {
      title: "Begins where you are",
      copy: '"Never lifted a dumbbell?" is a welcomed answer. We won\'t throw numbers at you on day one.',
    },
  ],
  steps: [
    {
      num: "01",
      title: "Weeks 1–3 · Foundation",
      copy: "Mobility, posture and breath. Light resistance, no numbers thrown at you. We meet your body where it is.",
    },
    {
      num: "02",
      title: "Weeks 4–6 · Activate",
      copy: "Stabilising muscles wake up. Movements get more deliberate. You start to feel taller, lighter, steadier.",
    },
    {
      num: "03",
      title: "Month 2 · Build",
      copy: "Progressive loading — controlled and tracked. Muscles activate, real resistance enters the picture.",
    },
    {
      num: "04",
      title: "Month 3+ · Sustain",
      copy: "A repeatable, life-long pattern. Strength as a habit, not a project.",
    },
  ],
  quote: {
    body: "YouTube has endless exercises — but no motivation, and no direction for where your body is at. We give the roadmap.",
    cite: "Dr. Shruthi Desai",
  },
};

export default function Page() {
  return <PillarPage data={data} />;
}
