import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "eSpace Tourism - Journey to the Stars",
    template: "%s | eSpace Tourism"
  },
  description: "Experience the adventure of a lifetime with eSpace Tourism. Book your space tour, explore our fleet of advanced spacecraft, and join the exclusive club of space tourists. Make your dreams of space travel a reality.",
  keywords: [
    "space tourism",
    "space travel",
    "eSpace",
    "space tours",
    "commercial spaceflight",
    "space experience",
    "astronaut training",
    "space missions",
    "space exploration",
    "zero gravity",
    "orbit tourism",
    "space vacation"
  ],
  authors: [{ name: "eSpace Tourism" }],
  creator: "eSpace Tourism",
  publisher: "eSpace Tourism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spaceed.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spaceed.vercel.app/",
    title: "eSpace Tourism - Journey to the Stars",
    description: "Experience the adventure of a lifetime with eSpace Tourism. Book your space tour and explore the cosmos.",
    siteName: "eSpace Tourism",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eSpace Tourism - Journey to the Stars",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eSpace Tourism - Journey to the Stars",
    description: "Experience the adventure of a lifetime with eSpace Tourism. Book your space tour and explore the cosmos.",
    images: ["/og-image.jpg"],
    creator: "@eSpace",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
