import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sankalp.dev"),
  title: {
    default: "Sankalp Kashyap | Software Engineer & AI Researcher",
    template: "%s | Sankalp Kashyap",
  },
  description:
    "Software Engineer and AI Researcher specializing in LLMs, Multi-modal AI, and Full-stack Development. MS in Computer Science at UC Davis. Previously at AWS DynamoDB and Danske Bank.",
  keywords: [
    "Software Engineer",
    "AI Researcher",
    "Machine Learning",
    "LLM",
    "Full-stack Developer",
    "UC Davis",
    "AWS",
    "Computer Vision",
    "NLP",
  ],
  authors: [{ name: "Sankalp Kashyap" }],
  creator: "Sankalp Kashyap",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sankalp.dev",
    title: "Sankalp Kashyap | Software Engineer & AI Researcher",
    description:
      "Software Engineer and AI Researcher specializing in LLMs, Multi-modal AI, and Full-stack Development.",
    siteName: "Sankalp Kashyap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Kashyap | Software Engineer & AI Researcher",
    description:
      "Software Engineer and AI Researcher specializing in LLMs, Multi-modal AI, and Full-stack Development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
