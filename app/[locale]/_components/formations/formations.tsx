"use client";

import { useCurrentLocale } from "@/locales/client";
import { formationsData } from "@/app/[locale]/data/formations/index";
import SectionTitle from "../shared/section-title";
import { useEffect, useState } from "react";
import FormationCard from "./formation-card";

export type T_Formation = Readonly<{
    name: string;
    school: string;
    date: string;
    description: string;
}>;

export default function Formations() {

    const locale = useCurrentLocale();
    const [formations, setFormations] = useState<T_Formation[]>([]);

    useEffect(() => {
        const formations = formationsData[locale].education.reverse();
        setFormations(formations);
    }, []);

    return (
        <section id="formations" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">

            <SectionTitle title="Education" />

            <ol className="group/list flex flex-col gap-6">

                {
                    formations.map((formation, index) => (
                        <FormationCard key={index} name={formation.name} school={formation.school} date={formation.date} description={formation.description}  />
                    ))
                }

            </ol>

        </section>
    );
}