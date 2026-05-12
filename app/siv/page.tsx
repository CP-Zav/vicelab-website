import type { Metadata } from "next";
import { Container, Section, Eyebrow, Badge, FeatureCard, ButtonPrimary, ButtonGhost } from "@/components/ui";

export const metadata: Metadata = {
  title: "SIV — Safety Intelligence Vessel",
  description: "Unified safety data layer connecting field intelligence, pharmacological risk, and operational response protocols. Coming soon from ViceLab.",
};

const features = [
  { title: "Unified data layer",       body: "Connects intelligence from Cooked Pilot, Matrix, and VibeGuard into a single operational safety picture." },
  { title: "Real-time risk signals",   body: "Live synthesis of substance alerts, crowd data, and incident reports across connected events." },
  { title: "Protocol automation",      body: "Trigger pre-defined response protocols automatically when risk thresholds are crossed." },
  { title: "Cross-system integration", body: "Built to connect with existing venue management, medical response, and harm reduction systems." },
  { title: "Privacy by design",        body: "All data is anonymised and aggregated at source. Intelligence travels, not identity." },
  { title: "Command overview",         body: "Single-screen operational view for safety coordinators managing complex, multi-zone events." },
];

const telemetry = [
  ["Field", "harm reduction reports"],
  ["Matrix", "substance risk modelling"],
  ["Crowd", "density and movement signals"],
  ["Medical", "incident escalation paths"],
];

export default function SIVPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-18 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-hero-radial-siv pointer-events-none" />
        <div className="absolute inset-0 siv-vault-grid opacity-[0.42] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 siv-scanline pointer-events-none" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Eyebrow color="siv">Safety Intelligence Vessel</Eyebrow>
                <Badge variant="siv">Coming Soon</Badge>
              </div>
              <h1 className="font-plex text-[clamp(3.1rem,9vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-gradient-siv mb-5">
                SIV
              </h1>
              <p className="text-[18px] font-semibold text-siv-ice/86 leading-snug mb-4">
                One operational layer. Full safety picture.
              </p>
              <p className="text-[17px] text-white/46 leading-relaxed mb-9">
                Safety Intelligence Vessel connects field harm reduction data, substance risk intelligence,
                and crowd safety signals into a clean command layer — built for coordinators who need clarity
                while the environment keeps moving.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">
                  Register interest
                </ButtonPrimary>
                <ButtonGhost href="/matrix">Explore Matrix</ButtonGhost>
              </div>
            </div>
            <div className="relative rounded-[28px] border border-siv-ice/14 bg-white/[0.035] p-5 shadow-glow-siv">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-siv-ice/[0.08] to-transparent pointer-events-none" />
              <div className="relative space-y-3">
                {telemetry.map(([label, body]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-siv-ice/10 bg-black/30 px-4 py-3">
                    <div>
                      <p className="font-plex text-[11px] uppercase tracking-[0.22em] text-siv-slate/70">{label}</p>
                      <p className="mt-1 text-sm text-white/70">{body}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-siv-ice shadow-[0_0_18px_rgba(215,243,255,0.55)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Eyebrow color="siv">How it works</Eyebrow>
          <h2 className="font-plex text-display-sm mb-4 max-w-xl tracking-[-0.04em]">One layer. Full picture.</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-xl">
            SIV connects intelligence from Cooked Pilot, Matrix, and VibeGuard into
            a single operational view — so nothing falls through the gaps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} accent="siv" />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section border>
        <Container>
          <div className="max-w-xl">
            <h2 className="font-plex text-display-sm mb-5 tracking-[-0.04em] text-gradient-siv">Interested in SIV?</h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              SIV is in development. If you operate large-scale events or safety
              networks, get in touch early.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonPrimary href="mailto:hello@thevicelab.com" gradient="bg-gradient-siv text-black">
                Get in touch
              </ButtonPrimary>
              <ButtonGhost href="/vicelab">About ViceLab</ButtonGhost>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
