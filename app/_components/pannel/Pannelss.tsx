import Social from "@/app/_items/Social";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Pannelss() {
    return (
        // <header className="lg:fixed  lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <header className="sticky lg:top-0 flex py-[3.75rem] lg:w-[40%] lg:max-h-screen lg:justify-between flex-col border-r border-rose-700 overflow-hidden">
                <section id="hero" className="hero flex flex-col gap-4 py-4 border border-rose-700">
                    <div id="name">
                        <h1 className="text-4xl font-semibold tracking-tight">Avotraina Rabe</h1>
                    </div>
                    <div id="title">
                        <h2 className="text-lg font-medium tracking-tight">Web developer</h2>
                    </div>
                    <div id="about">
                        <p className="text-base font-normal tracking-tight">
                            I am a web developer with a passion for creating beautiful and functional websites.
                        </p>
                    </div>
                    <div id="social" className="">
                        <Social />
                    </div>

                </section>
                <section id="navigation" className="border border-rose-700 grow content-center">
                    <div id="menu">
                        <Navigation />
                    </div>
                </section>
                <section id="footer" className="border border-rose-700 grow content-end">
                    <div id="copyright">
                        <Footer />
                    </div>
                </section>
        </header>
    );
}