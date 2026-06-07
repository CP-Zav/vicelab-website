import Link from "next/link";
import { Container, Section, Eyebrow, ArrowRight, Badge } from "@/components/ui";

const products = [
  ["Cooked Pilot", "/cooked-pilot", "Live", "live", "Nightlife navigation", "Real-time field intelligence for nightlife and festival culture.", "Anonymous-by-default harm reduction tools built for environments where information can change the outcome.", "COOKED PILOT", "MAINTAIN ALTITUDE", "border-cp-pink/40 bg-cp-pink/[0.06] hover:border-cp-pink/80 hover:shadow-glow-cp", "bg-cp-pink/25", "bg-gradient-cp", "text-cp-pink"],
  ["VibeGuard", "/vibeguard", "Coming Soon", "teal", "Crowd protection systems", "Operational safety infrastructure for live events.", "Compliance oversight, incident visibility, escalation pathways, welfare workflows, and post-event reporting.", "VIBEGUARD", "CROWD SAFETY OPS", "border-vg-teal/40 bg-vg-teal/[0.05] hover:border-vg-teal/80 hover:shadow-glow-vg", "bg-vg-teal/25", "bg-gradient-vg", "text-vg-teal"],
  ["MATRIX", "/matrix", "In Development", "mx", "Interaction engine", "Two inputs. One reaction. One outcome.", "A context-aware interaction layer for medications, substances, conditions, timing, and environment.", "MATRIX", "INTERACTION · REACTION · OUTCOME", "border-mx-green/35 bg-mx-green/[0.045] hover:border-mx-purple/70 hover:shadow-glow-mx", "bg-mx-purple/20", "bg-gradient-mx", "text-mx-purple"],
  ["SIV", "/siv", "Coming Soon", "siv", "Substance intelligence vault", "A vault layer for substance intelligence and radical transparency.", "Names, forms, effects, context, evidence, and risk signals structured for harm-reduction workflows.", "SIV", "SUBSTANCE INTELLIGENCE VAULT", "border-[#E6C27A]/35 bg-[#E6C27A]/[0.045] hover:border-[#16F0C6]/60 hover:shadow-glow-siv", "bg-[#E6C27A]/20", "bg-gradient-siv", "text-[#E6C27A]"],
  ["Altered State Archives", "/altered-state-archives", "Brand Pack Merged", "asa", "Knowledge archive", "A cyber-archive layer for altered-state research, memory, and pattern capture.", "Violet, electric pink, and cyan archive aesthetics for altered-state research and pattern memory.", "ASA", "ALTERED STATE ARCHIVES", "border-asa-violet/40 bg-asa-violet/[0.06] hover:border-asa-pink/70 hover:shadow-glow-asa", "bg-asa-pink/20", "bg-gradient-asa", "text-asa-pink"],
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-canvas">
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div className="absolute left-1/2 top-12 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-vl-blue/10 blur-[120px] pointer-events-none" />
        <div className="absolute right-[12%] top-44 h-56 w-56 rounded-full bg-cp-pink/10 blur-[100px] pointer-events-none" />
        <div className="absolute left-[8%] bottom-10 h-60 w-60 rounded-full bg-vg-teal/10 blur-[110px] pointer-events-none" />
        <Container>
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-vl-blue/30 bg-vl-blue/[0.10] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-vl-blue shadow-glow-sig">
              <span className="h-1.5 w-1.5 rounded-full bg-vl-blue" />
              VICELAB // CANONICAL FIELD INTELLIGENCE ECOSYSTEM
            </div>
            <h1 className="text-display-xl text-balance mb-8 leading-none">
              Safety infrastructure for nightlife,<span className="text-gradient-sig"> festivals, and altered-state environments.</span>
            </h1>
            <p className="max-w-3xl text-[18px] sm:text-[20px] leading-relaxed text-white/62 mb-10">
              VICELAB connects Cooked Pilot, VibeGuard, MATRIX, SIV, and Altered State Archives into one dark-system safety layer.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="#ecosystem" className="inline-flex items-center gap-2 rounded-[14px] bg-gradient-sig px-7 py-3.5 text-sm font-bold text-white shadow-glow-sig transition-all duration-200 hover:-translate-y-px hover:opacity-95">Explore the ecosystem <ArrowRight /></Link>
              <Link href="/help" className="inline-flex items-center gap-2 rounded-[14px] border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/72 transition-all duration-200 hover:border-white/22 hover:bg-white/[0.06] hover:text-white">Where to get help</Link>
            </div>
          </div>
        </Container>
      </section>
      <Section border className="!py-12 sm:!py-18">
        <Container>
          <div id="ecosystem" className="scroll-mt-24">
            <div className="mb-8 max-w-2xl">
              <Eyebrow color="muted">The Ecosystem</Eyebrow>
              <h2 className="text-display-md text-white mb-4">Five product systems. One coherent safety layer.</h2>
              <p className="text-white/52 leading-relaxed">Cooked Pilot, VibeGuard, MATRIX, SIV, and ASA now surface as separate ecosystem entries instead of being collapsed into the wrong page.</p>
            </div>
            <div className="mb-6 overflow-hidden rounded-[28px] border border-vl-blue/20 bg-vl-blue/[0.05] p-8 shadow-panel">
              <p className="text-[12px] uppercase tracking-[0.22em] text-vl-blue mb-4">Parent Ecosystem</p>
              <h3 className="text-4xl font-black tracking-tight text-white mb-4">VICELAB</h3>
              <p className="max-w-2xl text-white/58 leading-relaxed">The parent research, ethics, and field-intelligence layer connecting nightlife guidance, crowd protection, interaction logic, substance intelligence, and altered-state archival memory.</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {products.map(([name, href, status, badgeVariant, role, tagline, description, brandLabel, brandSub, panel, glow, line, brandText]) => (
                <Link key={name} href={href} className={`group relative min-h-[305px] overflow-hidden rounded-[24px] border p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 ${panel}`}>
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] ${glow}`} />
                  <div className={`absolute inset-x-5 top-0 h-px ${line} opacity-80`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-4 flex h-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-5 py-5 shadow-panel text-center">
                          <div className={`text-xl font-black tracking-[0.14em] ${brandText}`}>{brandLabel}</div>
                          <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/32">{brandSub}</div>
                        </div>
                        <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] text-white/42">{role}</p>
                      </div>
                      <Badge variant={badgeVariant}>{status}</Badge>
                    </div>
                    <p className="mb-3 text-[16px] font-bold leading-snug text-white/84">{tagline}</p>
                    <p className="text-sm leading-[1.68] text-white/54">{description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-cp-pink/25 bg-cp-pink/[0.045] p-6 shadow-panel">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-cp-pink mb-3">Chaos Kit / Crew Code</p>
              <h3 className="text-2xl font-black text-white mb-3">Find your crew code, then unlock the field kit.</h3>
              <p className="text-white/54 leading-relaxed mb-5">The quiz and Shopify store stay as a separate community/commercial layer, linked from ViceLab without confusing the core safety ecosystem.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://vicelab-brand-system.vercel.app/quiz" className="inline-flex rounded-[14px] bg-gradient-cp px-5 py-3 text-sm font-bold text-white">Take the Quiz</a>
                <a href="https://vicelab-collective.shop" className="inline-flex rounded-[14px] border border-white/12 px-5 py-3 text-sm font-semibold text-white/70">Visit Shop</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
