import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Offline",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center">
      <section className="relative w-full overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 bg-hero-radial-pink pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-lg">
            <p className="text-[13px] font-mono text-cp-pink/70 tracking-widest uppercase mb-6">
              Offline
            </p>
            <h1 className="text-display-md text-balance mb-5">
              You&apos;re offline.
            </h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-4">
              No network connection detected. Saved and core app resources may
              still be available from cache.
            </p>
            <p className="text-[15px] text-white/30 leading-relaxed mb-9">
              Live crew coordination, MAYDAY alerts, and network-dependent
              features require an active connection to function.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-cp-pink hover:text-white transition-colors"
            >
              ← Back to Cooked Pilot
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
