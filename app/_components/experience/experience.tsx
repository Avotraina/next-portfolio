import Card from "../shared/card";
import SectionTitle from "../shared/section-title";
import ExperienceCard from "./experience-card";

type Experience = Readonly<{
    company: string;
    position: string;
    date: string;
    description: string;
}>

export default function Experience() {

    const experience: Experience[] = [
        {
            company: "Company 1",
            position: "Position 1",
            date: "Date 1",
            description: "Description 1"
        },
        {
            company: "Company 2",
            position: "Position 2",
            date: "Date 2",
            description: "Description 2"
        },
        {
            company: "Company 3",
            position: "Position 3",
            date: "Date 3",
            description: "Description 3"
        }
    ]

    return (
        <section id="experience" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="Experience" />
            <ol className="group/list flex flex-col gap-4">
                {
                    experience.map((exp, index) => (
                        <ExperienceCard key={index} company={exp.company} position={exp.position} date={exp.date} description={exp.description}>

                        </ExperienceCard>
                    ))
                }
            </ol>
        </section>
    );
}