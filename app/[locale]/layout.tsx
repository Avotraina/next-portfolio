import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./pannel/Header";
import { Providers } from "./providers";
import React, { Suspense } from "react";
import { LocaleSelect } from "../hooks/locale-select";
import Loading from "./loading";

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
  keywords: ["Avotraina Rabe", "web developer", "portfolio", "Avotraina Rabemananjara", "Malagasy", "Madagascar", "Malagasy developer"],
  authors: [{ name: 'Avotraina Rabe' }, { name: 'Avotraina Rabemananjara'}],
  creator: "Avotraina Rabe (Avotraina Rabemananjara)",

};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  // params: {
  //   locale: string;
  // }
}>) {

  const { locale } = await params;

  return (
    <html lang={locale} className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased leading-relaxed selection:bg-accent-200 mx-auto max-w-screen-2xl`}
      >
        <Providers locale={locale}>
          <Suspense>
            <LocaleSelect />
          </Suspense>
          <Suspense fallback={<Loading />}>
          <div className="relative">
            <div className="fixed inset-0 z-30 lg:absolute max-lg:overflow-auto justify-center">
              <div className="mx-auto min-h-screen max-w-screen-xl">
                <div className="lg:flex lg:justify-between min-h-screen lg:gap-4">
                  <Header />
                  {children}
                </div>
              </div>
            </div>
          </div>
          </Suspense>

        </Providers>

      </body>
    </html>
  );
}
