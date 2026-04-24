import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OKX | Buy Bitcoin, Ethereum, and Crypto Instantly",
  description:
    "OKX is a leading cryptocurrency exchange offering 350+ tokens, with deep liquidity on spot and derivatives. Trade crypto, earn yield, and build with Web3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-okx-black text-white">
        {children}
      </body>
    </html>
  );
}
