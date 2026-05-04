import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import CanvasBg from "@/components/CanvasBg";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Raju Nawale | Building Systems. Exploring Intelligence.",
  description: "Personal portfolio of Gaurav Raju Nawale, a Computer Engineering student and founder of CertiOwn SaaS.",
  keywords: ["Gaurav Raju Nawale", "Computer Engineering", "CertiOwn", "SaaS Founder", "AI Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <CanvasBg />
        <Preloader />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
