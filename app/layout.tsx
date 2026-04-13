import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ViceLab — Safety Tech for the Night",
    template: "%s | ViceLab",
  },
  description:
    "ViceLab builds safety technology for nightlife and festival culture. Non-judgmental, privacy-conscious, evidence-informed.",
  metadataBase: new URL("https://thevicelab.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://thevicelab.com",
    siteName: "ViceLab",
    title: "ViceLab — Safety Tech for the Night",
    description:
      "Festival safety intelligence. Harm reduction tools for the people who show up. Non-preachy. Privacy-conscious. Built for real environments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ViceLab — Safety Tech for the Night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ViceLab — Safety Tech for the Night",
    description:
      "Festival safety intelligence. Harm reduction tools for the people who show up.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas font-sans text-white antialiased selection:bg-vl-blue/25">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
