import { getScopedI18n } from "@/locales/server";
import About from "./_components/about/About";
import Contact from "./_components/contact/contact";
import Experience from "./_components/experience/experience";
import Projects from "./_components/projects/projects";

export default async function Home() {

    const footer = await getScopedI18n("labels.footer");

    return (
        // <div className="">
        <main className="flex flex-col flex-1 py-24 pt-24 lg:w-[52%] lg:py-24 gap-4 max-w-screen-md">
            <About />
            <Experience />
            <Projects />
            <Contact />
            <div className="border-t pt-4 mt-4 px-4 block lg:hidden">
                <span className="text-xs">
                    {footer("description")}
                    {/* Developed with NextJS and Tailwind CSS */}
                </span>
            </div>
        </main >
    );
}