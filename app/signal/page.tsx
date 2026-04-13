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
  title: "Signal — Festival Safety Intelligence",
  description:
    "Aggregated harm reduction data, live batch alerts, and field-sourced intelligence — structured for the people who need it most.",
};

const features = [
  {
    title: "Live batch alerts",
    body: "Real-time contamination reports aggregated from field testing services and harm reduction networks nationwide.",
  },
  {
    title: "Substance matrix",
    body: "Current risk profiles across substance classes — what's circulating, what's been flagged, what to watch for.",
  },
  {
    title: "Field briefs",
    body: "Pre-event intelligence packets for organisers and crew. What the data says before the gates open.",
  },
  {
    title: "Venue feeds",
    body: "Location-scoped data streams. Signals relevant to your event, venue, or city — no noise from elsewhere.",
  },
  {
    title: "Escalation patterns",
    body: "Aggregate data on when and why escalations happen. Patterns that help you prepare, not just respond.",
  },
  {
    title: "Research archive",
    body: "Curated harm reduction literature, substance profiles, and incident data going back multiple seasons.",
  },
];

const steps = [
  {
    label: "01",
    title: "Data sources verified",
    body: "Field testing services, harm reduction orgs, and incident reports feed the Signal layer.",
  },
  {
    label: "02",
    title: "Intelligence structured",
    body: "Raw data is processed, categorised, and rated for reliability before it surfaces anywhere.",
  },
  {
    label: "03",
    title: "Distributed to products",
    body: "Clean signals reach Cooked Pilot and VibeGuard in real time — no lag, no noise.",
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
              <Badge variant="teal">Intelligence</Badge>
            </div>
            <h1 className="text-display-lg text-balance mb-6">Signal</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              The intelligence layer of the ViceLab ecosystem. Aggregated harm reduction data,
              live batch alerts, and field-sourced intelligence — structured for the people
              who need it most.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonGhost href="/cooked-pilot">
                See Cooked Pilot
              </ButtonGhost>
              <ButtonGhost href="/vibeguard">
                See VibeGuard
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
                Intelligence that reaches the field.
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                Signal connects harm reduction organisations, field testing services, and
                ViceLab&apos;s own research layer into a single, coherent stream.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Data surfaces in Cooked Pilot for attendees and in VibeGuard for organisers —
                all from the same verified source.
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
              Want Signal for your event?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-9">
              If you&apos;re running an event and want access to the Signal feed,
              get in touch. We work with organisers directly.
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
