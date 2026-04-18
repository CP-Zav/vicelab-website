"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-canvas font-sans text-white antialiased min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-lg">
          <p className="text-[13px] font-mono text-vl-blue/70 tracking-widest uppercase mb-6">
            Error
          </p>
          <h1 className="text-4xl font-bold text-balance mb-5">
            Something went wrong.
          </h1>
          <p className="text-white/45 text-[17px] leading-relaxed mb-9">
            An unexpected error occurred. Refreshing usually fixes it.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-sm font-semibold text-vl-blue border border-vl-blue/30 hover:text-white hover:border-vl-blue/60 transition-colors"
          >
            ↺ Try again
          </button>
        </div>
      </body>
    </html>
  );
}
