import About from "./_components/about/About";
import Experience from "./_components/experience/experience";
import Projects from "./_components/projects/projects";

export default function Home() {
    return (
        // <div className="">
        <main className="w-full flex flex-col flex-1 py-24 pt-24 lg:w-[52%] lg:py-24 gap-4">
            <About />
            <Experience />
            <Projects />
        </main >
    );
}