import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const title =
  "Développeur web freelance — sites modernes, performants et évolutifs";
const description =
  "Freelance spécialisé en React, Symfony et WordPress. J’aide les entreprises à créer des sites rapides, fiables et orientés résultats.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Portfolio — Valentin LEROUGE",
  metadataBase: new URL("https://valentin-lerouge.fr"),
  keywords: [
    "développeur freelance",
    "React",
    "Symfony",
    "WordPress",
    "Next.js",
    "création site vitrine",
    "automatisation",
    "scraping",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
