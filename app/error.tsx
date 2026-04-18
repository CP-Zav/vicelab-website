"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to error reporting when integrated
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center">
      <section className="relative w-full overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 bg-hero-radial-blue pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 0%, transparent 80%)" }}
        />
        <Container>
          <div className="max-w-lg">
            <p className="text-[13px] font-mono text-vl-blue/70 tracking-widest uppercase mb-6">
              Error
            </p>
            <h1 className="text-display-md text-balance mb-5">
              Something went wrong.
            </h1>
            <p className="text-[17px] text-white/45 leading-relaxed mb-9">
              An unexpected error occurred. Refreshing usually fixes it.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-vl-blue hover:text-white transition-colors"
            >
              ↺ Try again
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}
