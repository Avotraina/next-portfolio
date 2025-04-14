import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./pannel/Header";
import { Providers } from "./providers";
import React, { Suspense } from "react";
import { LocaleSelect } from "../hooks/locale-select";
import Loading from "./loading";
import { FAQPage, WithContext } from "schema-dts";
import Head from 'next/head'

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
  description: "Avotraina Rabe (Avotraina Rabemananjara) is a web developer with a passion for building modern, user-friendly, and high-performance web applications.",
  keywords: ["Avotraina Rabe", "web developer", "portfolio", "Avotraina Rabemananjara", "Malagasy", "Madagascar", "Malagasy developer", "Madagascar developer", "web development", "software engineer", "full-stack developer", "frontend developer", "backend developer", "Antananarivo", "Développeur web", "Développeur full-stack", "Développeur frontend", "Développeur backend", "Développeur logiciel", "Ingénieur logiciel", "Ingénieur en développement logiciel", "Ingénieur en développement web", "Ingénieur en développement d'applications", "Angular", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Tailwind CSS", "CSS", "HTML", "JavaScript", "TypeScript", "Développement Backend", "Développement Frontend", "Développement Fullstack", "Développement Web", "Développement d'applications", "Développement de logiciels", "Ingénierie logicielle", "Ingénierie en développement logiciel", "Ingénierie en développement web", "Ingénierie en développement d'applications", "Ingénierie en développement de logiciels"],
  authors: [{ name: 'Avotraina Rabe' }, { name: 'Avotraina Rabemananjara' }],
  creator: "Avotraina Rabe (Avotraina Rabemananjara)",
  openGraph: {
    title: "Avotraina Rabe | Avotraina Rabemananjara",
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
    google: "google8f1eaf1df4bb63f5",
  },
  robots: {
    index: true,
    follow: true,
  }
  // other: {

  // }
};

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Avotraina Rabe?",
      alternateName: "Who is Avotraina Rabemananjara",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avotraina Rabe is a web developer who is dedicated to building modern, user-friendly, and high-performance web applications.",
      },
    },
    {
      "@type": "Question",
      "name": "What does Avotraina Rabe do?",
      "alternateName": "What does Avotraina Rabemananjara do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avotraina Rabe specializes in building modern, user-friendly, and high-performance web applications.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is Avotraina Rabe from?",
      "alternateName": "Where is Avotraina Rabemananjara",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avotraina Rabe is from Madagascar.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Avotraina Rabe's mission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avotraina Rabe's mission is to create modern, user-friendly, and high-performance web applications.",
      },
    },
    {
      "@type": "Person",
      "name": "Avotraina Rabe",
      "alternateName": "Avotraina Rabemananjara",
      "url": "https://avotraina-rabe.vercel.app",
      // "image": "https://avotraina-rabe.vercel.app/images/avotraina-rabe.png",
      "sameAs": [
        "https://www.linkedin.com/in/avotraina-rabemananjara-44b6571b6/",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Madagascar",
        "availableLanguage": "English, French, Malagasy",
        "addressRegion": "Antananarivo",
      }
    },
    {
      "@type": "ListItem",
      "name": "Avotraina Rabe",
      "url": "https://avotraina-rabe.vercel.app/",
      "item": "https://avotraina-rabe.vercel.app/",
    },

  ],
  // name: "Avotraina Rabe",
  // url: "https://avotraina-rabe.vercel.app",
  // description: "Avotraina Rabe is a web developer who is dedicated to building modern, user-friendly, and high-performance web applications.",
}

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
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      {/* <Head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="alternate" href="https://avotraina-rabe.vercel.app/en" hrefLang="en" />
      <link rel="alternate" href="https://avotraina-rabe.vercel.app/fr" hrefLang="fr" />
      <link rel="alternate" href="https://avotraina-rabe.vercel.app" hrefLang="x-default" />
      {/* </Head> */}
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
