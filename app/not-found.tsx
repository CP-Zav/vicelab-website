import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-md">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-6">
            404
          </p>
          <h1 className="text-display-lg text-balance mb-5">
            Nothing here.
          </h1>
          <p className="text-white/40 text-base leading-relaxed mb-10">
            This page doesn&apos;t exist — but you can still find what you need.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold bg-vl-blue/20 text-vl-blue border border-vl-blue/25 hover:bg-vl-blue/30 hover:-translate-y-px transition-all duration-200"
            >
              Go home
            </Link>
            <Link
              href="/cooked-pilot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold text-white/60 border border-white/[0.12] hover:text-white hover:border-white/25 hover:-translate-y-px transition-all duration-200"
            >
              Cooked Pilot
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
