"use client"


// import { useState } from "react";

import { useEffect, useRef, useState } from "react";

export default function Navigation() {

    const menu = ["About", "Experience", "Projects"];
    // const menu = useState([
    //     {
    //         label: "About",
    //         link: "#about",
    //     }
    // ])


    const [activeId, setActiveId] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {

        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                    // entry.target.classList.add('active');
                }
                // else {
                //     entry.target.classList.remove('active');
                // }
            });
        }

        observer.current = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0.1
        });

        const elements = menu.map((id) => document.getElementById(id));
        elements.forEach(element => element && observer.current?.observe(element));

        return () => observer.current?.disconnect();
    }, []);

    return (
        <div className="py-6">
            <nav className="nav hidden lg:block">
                <ul className="flex flex-col gap-4">
                    {
                        menu.map((item, index) => (
                            <li key={index} className="group hover:bg-primary-100">
                                <a href={`#${item.toLowerCase()}`} className="group  py-4 px-4 inline-block min-w-full">
                                    <span className="group-hover:font-bold w-full">{item}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    );
}