import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harel Amir | Event Production & Event Management",
  description:
    "Tel Aviv based event producer and event manager for private events, weddings, after parties and international music productions.",
  metadataBase: new URL("https://harelamir.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Harel Amir | Event Production & Event Management",
    description:
      "Tel Aviv based event producer and event manager for private events, weddings, after parties and international music productions.",
    url: "https://harelamir.com",
    siteName: "Harel Amir",
    images: [
      {
        url: "/images/euforia-hero-stage.jpg",
        width: 2400,
        height: 1603,
        alt: "Harel Amir event production"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harel Amir | Event Production & Event Management",
    description:
      "Tel Aviv based event producer and event manager for private events, weddings, after parties and international music productions.",
    images: ["/images/euforia-hero-stage.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
