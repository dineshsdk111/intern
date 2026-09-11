import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Toollink Enterprises | Industrial Tools & Engineering Solutions",
    template: "%s | Toollink Enterprises",
  },
  description:
    "Toollink Enterprises provides industrial tools, pneumatic equipment, hydraulic systems, power tools and engineering solutions in Chennai, Tamil Nadu.",
  keywords: [
    "industrial tools",
    "pneumatic tools",
    "hydraulic equipment",
    "torque wrenches",
    "power tools",
    "industrial pumps",
    "engineering solutions",
    "Chennai industrial supplier",
    "industrial equipment India",
  ],
  openGraph: {
    title: "Toollink Enterprises | Industrial Tools & Engineering Solutions",
    description:
      "Toollink Enterprises provides industrial tools, pneumatic equipment, hydraulic systems, power tools and engineering solutions in Chennai, Tamil Nadu.",
    url: "https://apexindustrial.in",
    siteName: "Toollink Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
