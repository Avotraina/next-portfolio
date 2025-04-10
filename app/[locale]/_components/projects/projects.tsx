"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";
// import { projectsData } from "../../data/projects";
import {projectsData} from "@/app/[locale]/data/projects/index";
import SectionTitle from "../shared/section-title";
import ProjectCard from "./project-card";
import { getScopedI18n } from "@/locales/server";
import { useEffect, useState } from "react";

export type Project = Readonly<{
    title: string;
    date: string | null;
    url?: string;
    picture: string;
    description: string;
    techs: string[];
}>

export default function Projects() {

    const locale = useCurrentLocale();
    const label = useI18n();

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const projects = projectsData[locale].projects;
        setProjects(projects);
        console.log("PROJECTS", projects);
    }, []);

    return (
        <section id="projects" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title={label("labels.projects.title")} />
            <ol className="group/list flex flex-col gap-6">
                {
                    projects.reverse().map((project, index) => (
                        <ProjectCard key={index} title={project.title} date={project.date} picture={project.picture} description={project.description} techs={project.techs} url={project?.url} />
                    ))
                }
            </ol>

        </section>
    );
}