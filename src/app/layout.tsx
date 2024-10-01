import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Providers from "@/lib/Providers";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import Categories from "@/components/home/Categories";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "electronic gadgets website",
  description: "Explore our gadget wonderland today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  max-w-[1550px] mx-auto bg-gradient-to-r from-indigo-200  via-sky-200 to-indigo-200`}
        >
          <Navbar />
          <Categories />
          <Toaster />
          {children}
          <hr className="mt-3" />
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
