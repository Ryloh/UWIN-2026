import type { Metadata } from "next";
import { Orbitron, Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UWIN ESPORT",
  description: "UWIN ESPORT - Brand New Experience 2026",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${orbitron.variable} ${inter.variable} ${exo2.variable}`}>
      <body
        suppressHydrationWarning
        className="antialiased bg-black text-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
