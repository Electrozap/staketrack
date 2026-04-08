import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "MoneyBall - Private Sports Wager Tracking",
  description:
    "The private ledger for sports wagers between friends. Track bets, resolve winners, and always know exactly who owes whom.",
  openGraph: {
    title: "MoneyBall - Private Sports Wager Tracking",
    description:
      "The private ledger for sports wagers between friends. Track bets, resolve winners, and always know exactly who owes whom.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyBall - Private Sports Wager Tracking",
    description:
      "The private ledger for sports wagers between friends. Track bets, resolve winners, and always know exactly who owes whom.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
