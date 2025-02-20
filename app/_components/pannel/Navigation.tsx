// import { useState } from "react";

export default function Navigation() {

    const menu = ["About", "Experience", "Projects"];
    // const menu = useState([
    //     {
    //         label: "About",
    //         link: "#about",
    //     }
    // ])

    return (
        <div className="py-6">
            <nav className="nav hidden lg:block">
                <ul className="flex flex-col gap-4">
                    {
                        menu.map((item, index) => (
                            <li key={index} className="hover:bg-red-500 py-4 px-4">
                                <a href={`#${item.toLowerCase()}`} className="group active:bg-green-500">
                                    <span className="group-focus-visible:text-blue-500 ">{item}</span>
                                </a>
                            </li>
                        ))
                    }
                    {/* <li className="hover:bg-red-500 py-4 px-4">
                        <a href="#about" className="group active:bg-green-500">
                            <span className="group-focus-visible:text-blue-500 ">About</span>
                        </a>
                    </li>
                    <li className="hover:bg-red-500 py-4 px-4">
                        <a href="#experience">Experience</a>
                    </li>
                    <li className="hover:bg-primary-100 py-4 px-4">
                        <a href="#projects">Projects</a>
                    </li> */}
                </ul>
            </nav>

        </div>
    );
}