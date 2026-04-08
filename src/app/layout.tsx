import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "StakeTrack - Private Sports Wager Tracking",
  description:
    "The private ledger for sports wagers between friends. Track bets, resolve winners, and always know exactly who owes whom.",
  openGraph: {
    title: "StakeTrack - Private Sports Wager Tracking",
    description:
      "The private ledger for sports wagers between friends. Track bets, resolve winners, and always know exactly who owes whom.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StakeTrack - Private Sports Wager Tracking",
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
    <html lang="en" data-theme="dark" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
