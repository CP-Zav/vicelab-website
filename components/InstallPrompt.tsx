"use client";

import { useEffect, useState } from "react";

const DISMISSED_KEY = "cp-install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (localStorage.getItem(DISMISSED_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!visible || !deferredPrompt) return null;

  const handleInstall = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "1");
    setVisible(false);
  };

  return (
    <div
      role="banner"
      aria-label="Install Cooked Pilot app"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-50 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d12]/95 px-4 py-3 shadow-glow-cp backdrop-blur-md"
    >
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-mono text-cp-pink tracking-wider uppercase leading-none mb-0.5">
          Cooked Pilot
        </p>
        <p className="text-[12px] text-white/50 leading-snug">
          Add to home screen for offline access
        </p>
      </div>
      <button
        onClick={handleInstall}
        className="shrink-0 rounded-lg border border-cp-pink/30 bg-cp-pink/10 px-3 py-1.5 text-[12px] font-semibold text-cp-pink transition-colors hover:bg-cp-pink hover:text-black"
      >
        Install
      </button>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss install prompt"
        className="shrink-0 text-lg leading-none text-white/30 transition-colors hover:text-white/70"
      >
        ×
      </button>
    </div>
  );
}
