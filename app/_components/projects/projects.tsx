import SectionTitle from "../shared/section-title";
import ProjectCard from "./project-card";

export type Project = Readonly<{
    title: string;
    date: string | null;
    picture: string;
    description: string;
    techs: string[];
}>

export default function Projects() {

    const projects: Project[] = [
        {
            title: "EGP-ARMP",
            date: null,
            picture: "Picture 1",
            description: "Description 1",
            techs: ["Tech 1", "Tech 2", "Tech 3"]
        },
        {
            title: "AMIT-SI", 
            date: null,
            picture: "Picture 2",
            description: "Description 2",
            techs: ["Tech 1", "Tech 2", "Tech 3"]
        },
        {
            title: "Proxizone",
            date: null,
            picture: "Picture 3",
            description: "Description 3",
            techs: ["Tech 1", "Tech 2", "Tech 3"]
        }
    ]

    return (
        <section id="projects" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="Projects" />
            <ol className="group/list flex flex-col gap-6">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} date={project.date} picture={project.picture} description={project.description} techs={project.techs} />
                    ))
                }
            </ol>

        </section>
    );
}