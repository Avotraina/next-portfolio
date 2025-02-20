import Social from "@/app/_items/Social";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:py-24 flex lg:max-h-screen lg:w-[30%] lg:flex-col lg:justify-between overflow-hidden">
            <div className="hero flex flex-col gap-4 py-4 px-4 border border-rose-700">
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
            </div>
            <div id="navigation" className="border border-rose-700 grow content-center">
                <div id="menu">
                    <Navigation />
                </div>
            </div>
            <section id="footer" className="border border-rose-700 grow content-end">
                <div id="copyright">
                    <Footer />
                </div>
            </section>
        </header>
    );
}