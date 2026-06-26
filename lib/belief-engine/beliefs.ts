import type { Belief } from "./types";

// Placeholder for the verified "Bet you didn't know..." fact layer (Section 7).
// Wired to SIV evidence in a later changeset — content intentionally not polished here.
const FACT_PLACEHOLDER =
  "Placeholder — a verified fact will surface here once the SIV evidence layer is wired in.";

// Exemplar migration: the first five beliefs only (CP10-B). Copy is intentionally
// unpolished placeholder-grade; the framework is the deliverable, not the dataset.
export const BELIEFS: Belief[] = [
  {
    id: "drink-heaps-of-water",
    heardAs: "Drink heaps of water.",
    verdict: "context-matters",
    whatWeKnow:
      "Water matters, but more is not better. On MDMA your body holds onto water, so skolling litres can cause dangerous over-hydration (hyponatremia) — which has killed people at festivals. Sip steadily, don't flood.",
    mateNotes: [
      "Aim for roughly 250–500ml per hour while you're dancing — sips, not a bottle at once.",
      "On MDMA your body retains water; over-drinking can be as dangerous as not enough.",
      "Match water to sweat: more if you're going hard, less if you're sitting down.",
      "Headache, confusion or nausea after lots of water = stop drinking and get help.",
    ],
    whyBelieved:
      "\"Stay hydrated\" is solid general advice, and early pill deaths from overheating made water the headline safety message. The nuance — that you can also drink too much — got lost.",
    whatsHappening:
      "MDMA triggers a hormone that makes you retain water, while dancing makes you sweat out salt. Drinking too much plain water on top of that dilutes the sodium in your blood, cells swell — including in the brain.",
    didYouKnow: FACT_PLACEHOLDER,
    meta: {
      substances: ["MDMA"],
      category: "Hydration",
      lastReviewed: "2026-06",
      confidence: "high",
    },
  },
  {
    id: "double-drop-if-it-hasnt-hit",
    heardAs: "If it hasn't hit yet, double drop.",
    verdict: "dangerously-false",
    whatWeKnow:
      "Re-dosing before a pill has peaked is one of the most common ways people overdose. Onset can take 30–90+ minutes, so doubling up usually means both doses land hard at the same time.",
    mateNotes: [
      "Wait at least 2 hours before even considering more — onset is slow and unpredictable.",
      "Two doses hitting at once stacks the risk: overheating, serotonin overload, seizures.",
      "Strong pills plus slow onset is exactly when people redose and get caught out.",
      "If a mate is topping up because \"nothing's happening\", talk them down and wait it out.",
    ],
    whyBelieved:
      "A slow, variable comeup genuinely feels like a dud, so people assume the dose was weak and take more to compensate.",
    whatsHappening:
      "How fast it absorbs depends on dose, stomach contents and the substance itself. \"Nothing yet\" almost always means it's still absorbing, not that it failed — so a second drop just front-loads a double dose.",
    didYouKnow: FACT_PLACEHOLDER,
    meta: {
      substances: ["MDMA"],
      category: "Dosing",
      lastReviewed: "2026-06",
      confidence: "high",
    },
  },
  {
    id: "chewing-gum-mdma-jaw",
    heardAs: "Chewing gum fixes MDMA jaw.",
    verdict: "partly-true",
    whatWeKnow:
      "Gum can ease the urge to clench and helps protect your teeth, but it doesn't switch off the underlying jaw tension — and constant chewing can leave the muscles aching more.",
    mateNotes: [
      "Gum helps redirect the grinding and saves your teeth — it's a real tool.",
      "It won't stop the clenching itself; that's the drug, not willpower.",
      "Sugar-free gum plus water also helps with the dry mouth.",
      "A sore jaw the next day is normal; ease off the gum if the muscles are wrecked.",
    ],
    whyBelieved:
      "It gives the clenching something to do, so it genuinely feels like a fix in the moment.",
    whatsHappening:
      "MDMA raises overall muscle tension and activates the jaw muscles, causing involuntary clenching and grinding. Gum redirects the movement but doesn't turn off the signal driving it.",
    didYouKnow: FACT_PLACEHOLDER,
    meta: {
      substances: ["MDMA"],
      category: "Body effects",
      lastReviewed: "2026-06",
      confidence: "moderate",
    },
  },
  {
    id: "ket-just-horse-tranq",
    heardAs: "Ket's just horse tranq.",
    verdict: "mostly-false",
    whatWeKnow:
      "Ketamine is a genuine human anaesthetic used in hospitals worldwide — including in paediatrics and emergency medicine. \"Horse tranq\" is a half-truth that hides real risks like K-holes, bladder damage and accidents.",
    mateNotes: [
      "Calling it \"just horse tranq\" makes people underestimate a serious dissociative.",
      "Dose creep is the danger: a small bump in size can be a big jump in effect (K-hole).",
      "Don't mix with alcohol or other depressants — breathing and gag reflex drop.",
      "Regular heavy use damages the bladder, and that damage can be permanent.",
    ],
    whyBelieved:
      "It is used in veterinary medicine, and \"horse tranquiliser\" is a catchy line that sounds informed.",
    whatsHappening:
      "Ketamine blocks NMDA receptors, producing dissociation and anaesthesia in humans and animals alike. The vet use is real; the implication that it isn't a potent human drug is the wrong part.",
    didYouKnow: FACT_PLACEHOLDER,
    meta: {
      substances: ["Ketamine"],
      category: "Identity",
      lastReviewed: "2026-06",
      confidence: "high",
    },
  },
  {
    id: "acid-never-come-back",
    heardAs: "Acid can make you never come back.",
    verdict: "mostly-false",
    whatWeKnow:
      "The \"fried forever\" story is mostly myth — LSD leaves the body in hours and doesn't cause permanent insanity. It can trigger lasting distress in vulnerable people, and HPPD (lingering visuals) is real but uncommon.",
    mateNotes: [
      "Almost everyone \"comes back\" — the trip ends as the drug clears (roughly 8–12 hrs).",
      "Real risks are bad trips, accidents, and triggering issues where there's a family history of psychosis.",
      "Set and setting shape a hard time far more than the dose does.",
      "A friend who's panicking needs calm, space and reassurance — not A&E by default.",
    ],
    whyBelieved:
      "Bad trips feel endless, scare stories spread fast, and rare cases of HPPD or triggered illness get retold as \"he never came back\".",
    whatsHappening:
      "LSD overstimulates serotonin (5-HT2A) receptors, scrambling perception for hours. As it clears, normal processing returns. Lasting effects are the exception, usually where a vulnerability already existed.",
    didYouKnow: FACT_PLACEHOLDER,
    meta: {
      substances: ["LSD"],
      category: "Long-term",
      lastReviewed: "2026-06",
      confidence: "moderate",
    },
  },
];

export function getBeliefById(id: string): Belief | undefined {
  return BELIEFS.find((b) => b.id === id);
}
