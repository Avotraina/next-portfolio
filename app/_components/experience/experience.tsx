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
        {
            company: "Relia consulting - Fullstack developer",
            position: ["Confidential internal project"],
            date: "Date 4",
            description: `
            
                A super app designed to integrate multiple services within a single platform, similar to Amazon
            
                My role envolved to share best practice to the team too.

            `,
            techs: ['Angular', 'Angular Material', 'JavaScript', 'TypeScript', 'NextJS', 'React', 'NestJS', 'Spring Boot', 'MongoDB'],
        },
        {
            company: "Relia consulting - Laravel developer",
            position: ["Confidential project"],
            date: "Date 4",
            description: `
            
                An intranet fisheries information management system designed to enhance and expedite the exchange of information among fisheries authorities.

                Joined an existing cross-functional development team as a Laravel developer to contribute to the ongoing project.
            
            `,
            techs: ['Laravel', 'AlpineJS', 'Mysql'],
        },
        {
            company: "Relia consulting - Laravel developer",
            position: ["Confidential project"],
            date: "Date 4",
            description: `
            
                An intranet fisheries information management system designed to enhance and expedite the exchange of information among fisheries authorities.

                Joined an existing cross-functional development team as a Laravel developer to contribute to the ongoing project.
            
            `,
            techs: ['Laravel', 'AlpineJS', 'Mysql'],
        },
        {
            company: "Relia consulting - React Native developer",
            position: ["Confidential project"],
            date: "Date 4",
            description: `
            
                A social networking mobile app designed for poker enthusiasts worldwide. The platform allows players to connect, share upcoming poker events, and discover local or online poker parties.

                Joined an existing cross-functional development team as a React Native developer.
            
            `,
            techs: ['React Native'],
        },
        {
            company: "Relia consulting - Fullstack developer",
            position: ["Confidential project"],
            date: "Date 4",
            description: `
            
                A professional networking app that allows users to share job opportunities and book interviews.

                I handled both frontend and backend tasks simultaneously

            `,
            techs: [''],
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