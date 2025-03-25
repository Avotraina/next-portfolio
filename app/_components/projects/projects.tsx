import SectionTitle from "../shared/section-title";
import ProjectCard from "./project-card";

export type Project = Readonly<{
    title: string;
    date: string | null;
    url?: string;
    picture: string;
    description: string;
    techs: string[];
}>

export default function Projects() {

    const projects: Project[] = [
        {
            title: "NgxRabeStar",
            date: null,
            url: 'https://www.npmjs.com/package/ngx-rabe-star',
            picture: "/images/NgxRabeStar.png",
            description: "An Angular library that provides a customizable star rating component for Angular applications. It allows users to rate items using a visual star-based interface, making it easy to implement and integrate rating functionality into angular projects.",
            techs: ["Angular"]
        },
        {
            title: "Avotraina Rabe",
            date: '',
            url: '',
            picture: "/images/Avotraina.png",
            description: "My portfolio.",
            techs: ["NextJS", "Tailwind CSS"],
        },
        
    ]

    return (
        <section id="projects" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="Projects" />
            <ol className="group/list flex flex-col gap-6">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} date={project.date} picture={project.picture} description={project.description} techs={project.techs} url={project?.url} />
                    ))
                }
            </ol>

        </section>
    );
}