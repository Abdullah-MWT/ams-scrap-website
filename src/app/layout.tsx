import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AMS Scrap | Premium Scrap & Metal Recycling in Dubai & Sharjah",
    template: "%s | AMS Scrap",
  },
  description:
    "Premium scrap and metal recycling partner for industrial businesses across Dubai & Sharjah. Transparent grading, rapid pickup, and reliable logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
