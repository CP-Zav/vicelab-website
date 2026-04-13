import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  SectionHeader,
  Card,
  Badge,
  FeatureCard,
  ButtonPrimary,
  ButtonGhost,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Signal — Real-time Harm Reduction Intelligence",
  description:
    "Verified harm reduction data — sourced from the field, structured by ViceLab, and distributed in real time to Cooked Pilot and VibeGuard.",
};

const features = [
  {
    title: "Live batch alerts",
    body: "Contamination warnings sourced from field testing services and harm reduction orgs — distributed the moment they're verified.",
  },
  {
    title: "Substance matrix",
    body: "Current risk profiles across substance classes. What's circulating, what's been flagged, what to watch.",
  },
  {
    title: "Field briefs",
    body: "Pre-event intelligence for organisers and crew. Data-first, no fluff — what matters before gates open.",
  },
  {
    title: "Venue feeds",
    body: "Location-scoped signal streams. Relevant to your event or city only. No noise from elsewhere.",
  },
  {
    title: "Escalation patterns",
    body: "Aggregate data on when and why situations escalate. Helps you prepare rather than just respond.",
  },
  {
    title: "Research archive",
    body: "Harm reduction literature, substance profiles, and seasonal incident data in one place.",
  },
];

const steps = [
  {
    label: "01",
    title: "Verified at source",
    body: "Data comes from field testing services, harm reduction organisations, and incident reports — not social rumour.",
  },
  {
    label: "02",
    title: "Structured and rated",
    body: "Every signal is processed, categorised, and assigned a reliability rating before it goes anywhere.",
  },
  {
    label: "03",
    title: "Delivered to products",
    body: "Clean data reaches Cooked Pilot and VibeGuard in real time — so what attendees and crews see is accurate.",
  },
];

export default function SignalPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-teal pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.4] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-2xl">
            <div className="mb-6">
              <Badge variant="teal">Intelligence layer</Badge>
            </div>
            <h1 className="text-display-lg text-balance mb-6">Signal</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-4">
              Harm reduction data — verified, structured, and distributed in real time.
            </p>
            <p className="text-base text-white/35 leading-relaxed mb-10">
              Signal is the data backbone of ViceLab. It connects field testing services and harm
              reduction organisations into a single verified stream, then feeds that stream to
              Cooked Pilot (for attendees) and VibeGuard (for organisers).
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonGhost href="/cooked-pilot">
                Cooked Pilot
              </ButtonGhost>
              <ButtonGhost href="/vibeguard">
                VibeGuard
              </ButtonGhost>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What Signal covers ───────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeader>What Signal covers</SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="teal" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How it flows ─────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow color="teal">How it works</Eyebrow>
              <h2 className="text-display-md text-balance mb-5">
                From the field to the feed.
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                Most safety data arrives late, diluted, or unverified. Signal is built to
                fix that — aggregating sources, applying reliability ratings, and distributing
                clean data before it&apos;s needed.
              </p>
              <p className="text-white/35 text-sm leading-relaxed">
                When something gets flagged in the field, the right people know — before the
                next wave of attendees arrives.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {steps.map((step) => (
                <Card key={step.label} accent="teal">
                  <div className="flex gap-4 items-start">
                    <span className="text-[11px] font-semibold text-vg-teal/60 font-mono mt-0.5 shrink-0">{step.label}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-vg-teal mb-1">{step.title}</h3>
                      <p className="text-white/45 text-sm leading-[1.7]">{step.body}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-display-md text-balance mb-5">
              Running events?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-9">
              We integrate Signal directly with event organisers and safety teams. If
              you want verified harm reduction data at your next event, reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-vg-teal">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/vicelab">
                About ViceLab
              </ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
