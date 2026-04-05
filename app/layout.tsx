import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ASHOK_SAHANI | Full-Stack Architect",
  description: "Transforming complex logic into high-end digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-surface text-on-surface selection:bg-primary selection:text-on-primary-fixed cursor-none`}
      >
        <div className="bg-mesh" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
