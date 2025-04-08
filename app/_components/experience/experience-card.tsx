type Children = Readonly<{
  company: string,
  position: string[],
  date: string,
  description: { title: string, description: string }[],
  techs?: string[]
}>;

const ExperienceCard: React.FC<Children> = (props) => {

  const { company, position, description, techs, date } = props;

  return (
    <li className="group flex flex-col px-4 py-4 gap-0 rounded-sm bg-secondary-50 hover:bg-secondary-200 hover:!opacity-100 group-hover/list:opacity-70 transition duration-300 ease-in-out">
      <article>
        <header className="px-4 py-4 rounded-sm">
          {/* <h3 className="font-bold flex flex-row justify-between"> */}
          {/* <div className="flex flex-row gap-4"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent"><path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" /></svg> */}
          {/* <span className="group-hover:text-accent text-base">{company}</span> */}
          {/* </div> */}
          {/* <div className="flex flex-row gap-4">
            <svg width="24" height="24" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-accent">
              <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                <path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z" className="group-hover:stroke-accent" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m.5 4.5h16" className="group-hover:stroke-accent" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                <g fill="#000000">
                  <circle cx="8.5" cy="8.5" r="1" />
                  <circle cx="4.5" cy="8.5" r="1" />
                  <circle cx="12.5" cy="8.5" r="1" />
                  <circle cx="8.5" cy="12.5" r="1" />
                  <circle cx="4.5" cy="12.5" r="1" />
                  <circle cx="12.5" cy="12.5" r="1" />
                </g>
              </g>
            </svg>
            <div id="date">
              <span className="group-hover:text-accent text-base tracking-tight">{date}</span>
            </div>
          </div> */}
          {/* </h3> */}

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