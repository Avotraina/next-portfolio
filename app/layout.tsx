import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/pannel/Header";

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
  description: "Avotraina Rabe Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased leading-relaxed selection:bg-accent-200 mx-auto max-w-screen-2xl`}
      >

        <div className="relative">
          <div className="fixed inset-0 z-30 lg:absolute max-lg:overflow-auto">
          {/* <div className="fixed inset-0 z-30 lg:absolute"> */}
            <div className="mx-auto min-h-screen max-w-screen-xl">
              <div className="lg:flex lg:justify-between min-h-screen lg:gap-4">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
