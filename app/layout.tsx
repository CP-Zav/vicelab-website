import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ViceLab — Safety Tech for the Night",
    template: "%s | ViceLab",
  },
  description:
    "ViceLab connects Cooked Pilot and VibeGuard into a privacy-conscious safety intelligence ecosystem for nightlife, festivals, and real-world field environments.",
  metadataBase: new URL("https://thevicelab.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://thevicelab.com",
    siteName: "ViceLab",
    title: "ViceLab — Safety Tech for the Night",
    description:
      "A dark-system safety intelligence ecosystem connecting Cooked Pilot nightlife guidance with VibeGuard event protection infrastructure.",
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
      "Safety intelligence for nightlife, festivals, and real-world field environments.",
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
      <body className={`${cinzel.variable} ${ibmPlexMono.variable} bg-canvas font-sans text-white antialiased selection:bg-vl-blue/25`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
