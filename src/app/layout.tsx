import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav, MobileNavProvider } from "@/components/MobileNav";
import { GAME } from "@/lib/game";
import { SITE, canonical } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${GAME.fullName} Wiki — Codes, Dex & Team Builder`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "evomon",
    "evomon roblox",
    "evomon codes",
    "evomon wiki",
    "evomon dex",
    "roblox evomon",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${GAME.fullName} Wiki — Codes, Dex & Tools`,
    description: SITE.description,
    images: [
      {
        url: "/images/game-icon.png",
        width: 512,
        height: 512,
        alt: `${GAME.name} Roblox game icon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${GAME.fullName} Wiki`,
    description: SITE.description,
    images: ["/images/game-icon.png"],
  },
  alternates: {
    canonical: canonical("/"),
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MobileNavProvider>
          <Header />
          <div className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">{children}</div>
          <Footer />
          <MobileBottomNav />
        </MobileNavProvider>
      </body>
    </html>
  );
}
