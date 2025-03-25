import Card from "../shared/card";
import SectionTitle from "../shared/section-title";
import ExperienceCard from "./experience-card";

type Experience = Readonly<{
    company: string;
    position: string[];
    date: string;
    description: string;
    techs?: string[];
}>

export default function Experience() {

    const experience: Experience[] = [
        {
            company: "Ingenosya - Fullstack internship",
            position: ["Confidential project"],
            date: "Date 1",
            description: `

                A digital platform that streamlines and automates public procurement processes, improving efficiency, transparency, and accessibility for government entities.
            
                Joined an existing cross-functional development team as intern to contribute to the ongoing project. 

                I handled both frontend and backend tasks simultaneously. I also occasionally wrote automation scripts using PostgreSQL.
            
            `,
            techs: ['CodeIgniter', 'Angular', 'Typescript', 'PostgreSQL', 'Angular Material'],
        },
        {
            company: "Ingenosya - Frontend developer",
            position: ["Confidential project"],
            date: "Date 2",
            description: `

                A client project involving a healthcare management system designed to streamline patient queueing, appointment scheduling, and resource allocation. My role included full-stack development, contributing to both frontend and backend functionalities to ensure a seamless and efficient experience for users.

            `,
            techs: ['Angular', 'Angular Material', 'JavaScript', 'TypeScript']
        },
        {
            company: "Relia consulting - Frontend developer / Lead developer",
            position: ["Confidential project"],
            date: "Date 3",
            description: `
            
                A food delivery platform similar to Uber Eats.
                
                Joined an existing cross-functional development team as a frontend developer to contribute to the ongoing project. Became lead developer on the project after the lead developer was promoted to the project manager post.

                Other than the developement, I was responsible for validating merge request, ensuring clean code for the project.

            `,
            techs: ['Angular', 'Angular Material', 'JavaScript', 'TypeScript', 'Laravel', 'Mysql'],
        },
    ]

    return (
        <section id="experience" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="Experience" />
            <ol className="group/list flex flex-col gap-6">
                {
                    experience.map((exp, index) => (
                        <ExperienceCard key={index} company={exp.company} position={exp.position} date={exp.date} description={exp.description} techs={exp.techs}>

                        </ExperienceCard>
                    ))
                }
            </ol>
        </section>
    );
}