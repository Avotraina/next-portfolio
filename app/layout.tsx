import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Pannel from "./_components/pannel/Header";
import Header from "./_components/pannel/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-relaxed selection:bg-primary mx-auto max-w-screen-xl`}
      >

        <div className="group/spotlight relative">
          <div className="fixed inset-0 z-30 lg:absolute">
            <div className="mx-auto min-h-screen max-w-screen-xl ">
              <div className="lg:flex lg:justify-between lg:min-h-screen lg:gap-4">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </div>
        


        {/* <div className="group/spotlight relative">
          <div className="fixed inset-0 z-30 lg:absolute">
            <div className="mx-auto min-h-screen max-w-screen-xl ">
              <div className="lg:flex lg:justify-between lg:gap-4">
                <Pannel />
                {children}
              </div>
            </div>
          </div>
        </div> */}



      </body>
    </html>
  );
}
