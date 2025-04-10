"use client"

import { useCurrentLocale, useI18n } from "@/locales/client";
import { getScopedI18n } from "@/locales/server";
import { get } from "http";

type Children = Readonly<{
  company: string,
  position: string[],
  date: string,
  description: { title: string, description: string }[],
  techs?: string[]
}>;

// const ExperienceCard: React.FC<Children> = (props) => {
function ExperienceCard(props: Children) {


  const { company, position, description, techs, date } = props;

  // const t = await getScopedI18n(`experience.Ingenosya`);

  const i = useCurrentLocale()

  console.log("locale", i)

  // const experience = t.raw("posts.0");

  return (
    <li className="group flex flex-col px-4 py-4 gap-0 rounded-sm bg-secondary-50 hover:bg-secondary-200 hover:!opacity-100 group-hover/list:opacity-70 transition duration-300 ease-in-out">
      <article>
        <header className="px-4 py-4 rounded-sm">
          <h2 className="font-semibold flex flex-col gap-1">
            <div className="flex flex-row justify-between content-start">
              <div className="font-semibold flex flex-col gap-2">
                <span className="group-hover:text-accent">
                  {company}
                </span>
                <div className="flex flex-col rounded-sm text-base pb-4 opacity-50 bg-secondary-50 group-hover:opacity-70">
                  {position.map((pos, index) => (
                    <span key={index} className="text-base font-bold tracking-tight group-hover:opacity-70">
                      {pos}
                    </span>
                  ))}
                </div>
              </div>
              <span className="rounded-sm text-base pb-0 opacity-50 bg-secondary-50">
                {date}
              </span>
            </div>
          </h2>
        </header>

        {/* Card body */}
        <div id="experience-body" className="flex flex-col px-4 py-4 gap-4 rounded-sm">
          {/* <h4 className="text-base font-bold tracking-tight text-foreground-700 group-hover:text-accent">{position}</h4> */}
          {/* <p className="text-sm leading-normal">
          {description}
        </p> */}

          <ul>
            {
              description?.map((desc, index) => (
                <li key={index} className="text-base leading-normal mb-2">
                  <span className="font-semibold">{desc.title}:</span>
                  <p className="text-sm leading-normal">
                    {desc.description}
                  </p>
                </li>
              ))
            }
          </ul>

          <footer>
            <ul className="flex flex-row gap-2 flex-wrap">
              {
                techs?.map((tech, index) => (
                  <li key={index} className="rounded-full px-4 py-2 text-xs font-semibold bg-accent-100 text-accent">
                    {tech}
                  </li>
                ))
              }
            </ul>
          </footer>
        </div>
      </article>
    </li>
  );
}

export default ExperienceCard;