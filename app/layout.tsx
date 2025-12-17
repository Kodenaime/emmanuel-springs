import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils"; 

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuelsprings.org"), 
  title: {
    default: "Emmanuel Springs | Community Transformations",
    template: "%s | Emmanuel Springs", 
  },
  description:
    "A faith-driven NGO restoring dignity through feeding, sustainable farming, and community empowerment initiatives.",
  keywords: [
    "NGO",
    "Charity",
    "Sustainable Farming",
    "Community Development",
    "Christian Missions",
    "Emmanuel Springs",
  ],
  authors: [{ name: "Emmanuel Foundation" }],
  openGraph: {
    title: "Emmanuel Springs Community Transformations",
    description: "Restoring dignity and empowering communities through faith and action.",
    url: "https://emmanuelsprings.org",
    siteName: "Emmanuel Springs",
    locale: "en_US",
    type: "website",
    images: [ 
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a", 
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-cream font-sans antialiased",
          sansFont.variable,
          serifFont.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}