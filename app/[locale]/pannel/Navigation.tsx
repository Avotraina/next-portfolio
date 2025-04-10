"use client"


import { useScopedI18n } from "@/locales/client";
import { useEffect, useRef, useState } from "react";

type MenuItem = "About" | "Experience" | "Projects" | "Contact";
type LowerMenuItem = "about" | "experience" | "projects" | "contact";

export default function Navigation() {

    const navigation = useScopedI18n("labels.header.navigation");

    const menu: MenuItem[] = ["About", "Experience", "Projects", "Contact"];
    const lowerMenuItem: LowerMenuItem[] = ["about", "experience", "projects", "contact"];

    const [activeId, setActiveId] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {

        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                // entry.target.classList.toggle('active', entry.isIntersecting);


                // const nav = document.getElementById(`link-${entry.target.id}`);
                // nav?.classList.toggle('active', entry.isIntersecting);
                // console.log("ENTRY IS INTERSECTING", entry.target);

                let activeSection = null;

                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }

                if (activeSection !== null) {
                    setActiveId("link" + "-" + activeSection);
                }

                // if (entry.isIntersecting) {
                //     setActiveId(entry.target.id);
                //     console.log("ENTRY IS INTERSECTING", entry.target);
                //     // entry.target.classList.add('active');
                //     const nav = document.getElementById(`link-${entry.target.id}`);
                //     nav?.classList.add('active');
                // } else {
                //     // entry.target.classList.remove('active');
                //     const nav = document.getElementById(`link-${entry.target.id}`);
                //     nav?.classList.remove('active');
                // }

            });
        }

        observer.current = new IntersectionObserver((handleObserver), {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        const elements = menu.map((id) => document.getElementById(id.toLowerCase()));
        elements.forEach(element => element && observer.current?.observe(element));

        return () => observer.current?.disconnect();
    }, []);


    // Detect when the user is at the bottom of the page
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //             setActiveId("link-" + menu[menu.length - 1].toLowerCase()); // Keep last section active
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="py-6">
            <nav className="nav hidden lg:block">
                <ul className="flex flex-col gap-4">
                    {
                        menu.map((item, index) => (
                            <li key={index} id={`link-${item.toLocaleLowerCase()}`} className={`group hover:bg-primary-100 ${activeId === `link-${item.toLowerCase()}` ? 'bg-primary-100' : ''}`}>
                                <a href={`#${item.toLowerCase()}`} className="group  py-4 px-4 inline-block min-w-full">
                                    <span className="group-hover:font-bold w-full">{navigation(item.toLowerCase() as LowerMenuItem)}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    );
}