import About from "./_components/about/About";
import Contact from "./_components/contact/contact";
import Experience from "./_components/experience/experience";
import Footer from "./_components/pannel/Footer";
import Projects from "./_components/projects/projects";

export default function Home() {
    return (
        // <div className="">
        <main className="flex flex-col flex-1 py-24 pt-24 lg:w-[52%] lg:py-24 gap-4 max-w-screen-md">
            <About />
            <article>
                <Experience />
            </article>
            <Projects />
            <article>
                <Contact/>
            </article>
            <div className="border-t pt-4 mt-4 px-4 block lg:hidden">
                <span className="text-xs">
                    Developed with NextJS and Tailwind CSS
                </span>
            </div>
        </main >
    );
}