import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reconnect.health"),
  title: {
    default: "Reconnect — Doctor-led strength training for bones & joints",
    template: "%s · Reconnect",
  },
  description:
    "A rheumatologist-designed strength and nutrition program for arthritis, joint pain, back issues, and osteoporosis. Personalised to your body.",
  keywords: [
    "rheumatologist-led strength training",
    "arthritis exercise program India",
    "knee pain strength training",
    "osteoporosis exercise",
    "back pain exercise program",
    "joint pain without surgery",
    "best ortho alternative treatment",
    "bone health program",
    "doctor designed exercise",
  ],
  openGraph: {
    title:
      "Reconnect — Stronger joints. Denser bones. A life without the pain.",
    description:
      "A doctor-designed strength and nutrition program for arthritis, joint pain, and osteoporosis.",
    type: "website",
    locale: "en_IN",
    siteName: "Reconnect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconnect — Doctor-led joint & bone health",
    description:
      "Personalised strength training designed by a rheumatologist.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
