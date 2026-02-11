import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mario RL v2.0 — AI Learns Super Mario Bros",
  description:
    "A reinforcement learning agent trained with PPO and IMPALA CNN to play Super Mario Bros. Built with Stable-Baselines3, PyTorch, and 48 parallel environments on an RTX 5090.",
  openGraph: {
    title: "Mario RL v2.0 — AI Learns Super Mario Bros",
    description:
      "PPO agent with IMPALA CNN architecture trained to complete Super Mario Bros levels.",
    images: ["/demos/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
