import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";
import { ToastProvider } from "./components/Toast/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "رسا کراد",
  description: "Made by ferait team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ToastProvider>
          <div className="bg-white">
            <Navbar />

            <div className=" px-4 md:w-3/5 mx-auto pt-28">
              {children}
            </div>

            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
