export type Testimonial = {
  slug: "rajesh" | "meera" | "amit";
  name: string;
  age: number;
  condition: string;
  metric: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    slug: "rajesh",
    name: "Rajesh",
    age: 58,
    condition: "Knee Osteoarthritis",
    metric: "Pain reduced 60%",
    quote:
      "I was told I needed a knee replacement. After 12 weeks my pain dropped from 8 to 3. I'm walking 5 km daily now.",
    image: "/testimonial-rajesh.jpg",
  },
  {
    slug: "meera",
    name: "Meera",
    age: 42,
    condition: "Chronic Back Pain & Disc Bulge",
    metric: "Zero flare-ups in 4 months",
    quote:
      "I spent years avoiding movement because of my back. The team helped me build strength around the problem. I haven't had a flare-up in 4 months.",
    image: "/testimonial-meera.jpg",
  },
  {
    slug: "amit",
    name: "Amit",
    age: 65,
    condition: "Osteoporosis (T-score -3.2)",
    metric: "DEXA score improved",
    quote:
      "My DEXA scan improved for the first time in years. Strength training and nutrition together — that's what worked.",
    image: "/testimonial-amit.jpg",
  },
];

export const getTestimonial = (slug: Testimonial["slug"]) =>
  testimonials.find((t) => t.slug === slug)!;
