export type Condition = {
  name: string;
  blurb: string;
  track: "prevent" | "manage" | "recover";
  group: "joints" | "spine" | "bone" | "rehab";
};

export const conditions: Condition[] = [
  // Joints & arthritis
  { name: "Knee Osteoarthritis", blurb: "Calm the pain, load the joint smart.", track: "manage", group: "joints" },
  { name: "Rheumatoid Arthritis", blurb: "Strength alongside medication.", track: "manage", group: "joints" },
  { name: "Joint Stiffness", blurb: "Mobility-led, low intensity.", track: "manage", group: "joints" },
  { name: "Frozen Shoulder", blurb: "Range first, strength next.", track: "manage", group: "joints" },
  { name: "Hip Pain", blurb: "Glute work that respects the joint.", track: "manage", group: "joints" },

  // Spine & back
  { name: "Chronic Back Pain", blurb: "Core, hips and breathing.", track: "manage", group: "spine" },
  { name: "Disc Bulge / Herniation", blurb: "Spine-friendly loading.", track: "manage", group: "spine" },
  { name: "Sciatica", blurb: "Decompress, then strengthen.", track: "manage", group: "spine" },
  { name: "Cervical (Neck) Pain", blurb: "Posture, deep neck flexors.", track: "manage", group: "spine" },
  { name: "Posture-related Pain", blurb: "Daily desk to upright body.", track: "prevent", group: "spine" },

  // Bone health
  { name: "Osteoporosis", blurb: "Bone-friendly load that builds density.", track: "prevent", group: "bone" },
  { name: "Osteopenia", blurb: "Catch it early — strength is the answer.", track: "prevent", group: "bone" },
  { name: "Post-menopausal Bone Loss", blurb: "Resistance training that protects you.", track: "prevent", group: "bone" },
  { name: "Fracture-risk Building", blurb: "Reduce falls, build resilience.", track: "prevent", group: "bone" },

  // Rehab
  { name: "Post-surgical Rebuild", blurb: "Cautious, doctor-coordinated.", track: "recover", group: "rehab" },
  { name: "Severe Osteoarthritis", blurb: "Maximum care, real progress.", track: "recover", group: "rehab" },
  { name: "Sarcopenia", blurb: "Reverse age-related muscle loss.", track: "recover", group: "rehab" },
];

export const conditionGroups = {
  joints: { title: "Joints & Arthritis", group: "joints" as const },
  spine: { title: "Spine & Back", group: "spine" as const },
  bone: { title: "Bone Health", group: "bone" as const },
  rehab: { title: "Recovery & Rehab", group: "rehab" as const },
};
