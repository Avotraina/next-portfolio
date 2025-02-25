type Children = Readonly<{
  company: string,
  position: string,
  date: string,
  description: string
}>;

const ExperienceCard: React.FC<Children> = (props) => {

  const { company, position, date, description } = props;

  return (
    <li className="group flex flex-col px-4 py-4 gap-4 border rounded-sm border-red-600 bg-secondary-50 hover:bg-secondary-200 hover:!opacity-100 group-hover/list:opacity-70">
      <header className="border border-green-600 px-4 py-4 rounded-sm">
        <h3 className="font-bold flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent"><path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" /></svg>
            <span className="group-hover:text-accent text-base">{company}</span>
          </div>
          <div className="flex flex-row gap-4">
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
          </div>
        </h3>
      </header>

      {/* Card body */}
      <div id="experience-body" className="flex flex-col px-4 py-4 gap-4 border rounded-sm border-red-600">
        <h4 className="text-base font-bold tracking-tight text-foreground-700 group-hover:text-accent">{position}</h4>
        <p className="text-sm leading-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi provident quibusdam est sapiente, eaque mollitia rerum ab praesentium. Esse, unde culpa molestias perspiciatis sequi excepturi impedit veniam accusantium! Tenetur beatae, accusamus nemo excepturi eaque ab. Reiciendis, ea, et deserunt soluta asperiores in, voluptatem odio eaque esse tempora error consequuntur aperiam earum! Alias iure eveniet tempore autem recusandae quod, dolorum ipsam. Nulla amet libero dolorum et vel enim voluptate quae debitis maxime. Enim odit ea optio quaerat esse aut ipsam voluptates beatae nisi, suscipit, ipsum, repellendus fuga commodi. Ex tempore aspernatur sequi nesciunt inventore perspiciatis debitis ducimus suscipit voluptate nemo repellat, eaque veritatis consequuntur vero excepturi quo.
        </p>
      </div>

    </li>
  );
}

export default ExperienceCard;