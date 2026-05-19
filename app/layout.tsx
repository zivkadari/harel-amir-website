import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Assistant, Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap"
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "הראל אמיר | הפקה וניהול אירועים",
  description:
    "הראל אמיר יוצר ומנהל אירועים פרטיים, חתונות והפקות בינלאומיות עם דגש על אווירה, אסתטיקה ותשומת לב לפרטים הקטנים.",
  metadataBase: new URL("https://harelamir.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "הראל אמיר | הפקה וניהול אירועים",
    description:
      "הראל אמיר יוצר ומנהל אירועים פרטיים, חתונות והפקות בינלאומיות עם דגש על אווירה, אסתטיקה ותשומת לב לפרטים הקטנים.",
    url: "https://harelamir.com",
    siteName: "Harel Amir",
    images: [
      {
        url: "/images/euforia-hero-stage.jpg",
        width: 2400,
        height: 1603,
        alt: "הפקת אירועים של הראל אמיר"
      }
    ],
    locale: "he_IL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "הראל אמיר | הפקה וניהול אירועים",
    description:
      "הראל אמיר יוצר ומנהל אירועים פרטיים, חתונות והפקות בינלאומיות עם דגש על אווירה, אסתטיקה ותשומת לב לפרטים הקטנים.",
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
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${assistant.variable}`}>{children}</body>
    </html>
  );
}
