import Social from "@/app/_items/Social";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Link from "next/link";
import { getI18n, getScopedI18n } from "@/locales/server";
// import { useEffect, useRef, useState } from "react";

export default async function Header() {

    const t = await getI18n();
    const labels = await getScopedI18n("labels");

    return (
        <header className="lg:sticky lg:top-0 lg:py-24 lg:flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between border-r border-primary-100">
        {/* <header className="lg:sticky lg:top-0 lg:py-24 lg:flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between overflow-hidden border-r border-primary-100"> */}
            <div className="hero flex flex-col gap-4 py-4 px-4">
                <div id="name">
                    <h1 className="font-bold">
                        <Link href="/">
                            Avotraina Rabe
                        </Link>
                    </h1>
                </div>
                <div id="title">
                    <h2 className="font-medium text-primary">{labels("header.hero.title")}</h2>
                </div>
                <div id="about-header" className="max-w-xs">
                    <p>
                        {labels("header.hero.introduction")}
                        {/* I am a Web Developer dedicated to building modern, user-friendly, and high-performance web applications. */}
                    </p>
                </div>
                <div id="social" className="">
                    <Social />
                </div>
            </div>
            <div id="navigation" className="grow content-center">
                <div id="menu">
                    <Navigation />
                </div>
            </div>
            <section id="footer" className="grow content-end">
                <div id="copyright">
                    <Footer />
                </div>
            </section>
        </header>
    );
}