import Social from "@/app/_items/Social";
import Footer from "./Footer";
import Navigation from "./Navigation";
// import { useEffect, useRef, useState } from "react";

export default function Header() {

    return (
        <header className="lg:sticky lg:top-0 lg:py-24 lg:flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between border-r border-primary-100">
        {/* <header className="lg:sticky lg:top-0 lg:py-24 lg:flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between overflow-hidden border-r border-primary-100"> */}
            <div className="hero flex flex-col gap-4 py-4 px-4">
                <div id="name">
                    <h1 className="font-bold">
                        <a href="/">
                            Avotraina Rabe
                        </a>
                    </h1>
                </div>
                <div id="title">
                    <h2 className="font-medium text-primary">Web developer</h2>
                </div>
                <div id="about-header" className="max-w-xs">
                    <p>
                        I am a web developer with a passion for creating beautiful and functional websites.
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