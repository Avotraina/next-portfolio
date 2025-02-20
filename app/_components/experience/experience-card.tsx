type Children = Readonly<{
  company: string,
  position: string,
  date: string,
  description: string
}>;

const ExperienceCard: React.FC<Children> = (props) => {

  const { company, position, date, description } = props;

  return (
    <div className="flex flex-col px-4 py-4 gap-4 border rounded-sm border-red-600">
      {/* {children} */}
      <div id="experience-header" className="flex flex-row">
        <div id="company" className="flex-grow">
          <h3 className="text-lg font-semibold tracking-tight">{company}</h3>
        </div>
        <div id="date" className="flex-grow">
          <h3 className="text-lg font-semibold tracking-tight">{date}</h3>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;