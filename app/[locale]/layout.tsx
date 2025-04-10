import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "@/app/globals.css";
import Header from "./pannel/Header";
import { Providers } from "./providers";
import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LocaleSelect } from "../hooks/locale-select";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avotraina Rabe",
  description: "Avotraina Rabe is a web developer with a passion for creating beautiful and functional websites.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  }
}>) {

  const { locale } = await params;

  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased leading-relaxed selection:bg-accent-200 mx-auto max-w-screen-2xl`}
      >
        <Providers locale={locale}>
          <LocaleSelect />

          <div className="relative">
            <div className="fixed inset-0 z-30 lg:absolute max-lg:overflow-auto justify-center">
              {/* <div className="fixed inset-0 z-30 lg:absolute"> */}
              <div className="mx-auto min-h-screen max-w-screen-xl">
                <div className="lg:flex lg:justify-between min-h-screen lg:gap-4">
                  <Header />
                  {children}
                </div>
              </div>
            </div>
          </div>

        </Providers>

      </body>
    </html>
  );
}
