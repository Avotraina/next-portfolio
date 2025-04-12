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

// lib/config.ts
const supportedLocales = ['en', 'fr']
// const defaultLocale = 'en'
const baseUrl = 'ttps://avotraina-rabe.vercel.app'

export const metadata: Metadata = {
  title: {
    default: "Avotraina Rabe",
    template: "%s | Avotraina Rabe",
  },
  description: "Avotraina Rabe is a web developer with a passion for creating beautiful and functional websites.",
  keywords: ["Avotraina Rabe", "web developer", "portfolio", "Avotraina Rabemananjara", "Malagasy", "Madagascar", "Malagasy developer"],
  authors: [{ name: 'Avotraina Rabe' }, { name: 'Avotraina Rabemananjara' }],
  creator: "Avotraina Rabe (Avotraina Rabemananjara)",
  openGraph: {
    title: "Avotraina Rabe",
    description: "Avotraina Rabe is a web developer who is dedicated to building modern, user-friendly, and high-performance web applications.",
    url: "https://avotraina-rabe.vercel.app",
    siteName: "Avotraina Rabe",
    type: "website"
    // images: [
    //   {
    //     url: "/images/avotraina-rabe.png",
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avotraina Rabe - Portfolio",
    description: "Avotraina Rabe is a web developer who is dedicated to building modern, user-friendly, and high-performance web applications.",
  },
  // alternates: {
  //   canonical: "https://avotraina-rabe.vercel.app",
  //   languages: {
  //     "en": "/en",
  //     "fr": "/fr",
  //   },
  // }
  alternates: {
    canonical: `${baseUrl}/en`, // or dynamically set the default
    languages: supportedLocales.reduce((acc, locale) => {
      acc[locale] = `${baseUrl}/${locale}`
      return acc
    }, {} as Record<string, string>),
  },
  verification: {
    // google: "google-site-verification=rVSa1a4lqN4uC1fVpDxV-k17j7iPzKEfmNO9CssCy88"
    // google: "google8f1eaf1df4bb63f5.html",
    // google: "33zk1zwv41rYG0GznaAo7j_fdPljz7WsdI4VRkEw-Qo"
    // google: "rVSa1a4lqN4uC1fVpDxV-k17j7iPzKEfmNO9Cs"
    // google: "rVSa1a4lqN4uC1fVpDxV-k17j7iPzKEfmNO9CssCy88"
    google: "google8f1eaf1df4bb63f5"
  }
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
  // <meta name="google-site-verification" content="33zk1zwv41rYG0GznaAo7j_fdPljz7WsdI4VRkEw-Qo" />

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
