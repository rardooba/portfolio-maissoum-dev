import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maissoum.dev"),
  title: {
    default: "Maissoum Aboudrare | Digital Craftsman |Portfolio",
    template: '%s | Maissoum Aboudrare | Digital Craftsman | Portfolio',
  },
  description:
    "AMAZIGH Javascript Developer | FRENCH Freelancer | Next.js Gamer | Vercel lover | Eternal Junior, Lvl 99",
  openGraph: {
    title: "Maissoum Aboudrare | Digital Craftsman Portfolio",
    description:
    "AMAZIGH Javascript Developer | FRENCH Freelancer | Next.js Gamer | Vercel lover | Eternal Junior, Lvl 99",
    type: "website",
    locale: "en_US",
    url: "https://maissoum.dev",
    siteName: "maissoum"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
