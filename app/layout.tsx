import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPX Partners | Logistics & Supply Chain Investments and Consulting",
  description:
    "LPX Partners invests in and advises companies driving the future of logistics and supply chain — combining growth capital with deep operating experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-lpx-bg text-lpx-ink">
        {children}
      </body>
    </html>
  );
}
