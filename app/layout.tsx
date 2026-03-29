import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ViceLab — Safety Tech for the Night",
  description:
    "ViceLab builds safety technology for nightlife and festival culture. Non-judgmental, privacy-conscious, evidence-informed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas font-sans text-white antialiased selection:bg-vg-violet/30">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
