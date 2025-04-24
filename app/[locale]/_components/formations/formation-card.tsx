import { T_Formation } from "./formations";

const FormationCard: React.FC<T_Formation> = (props) => {
    const { name, school, date } = props;

    return (
        <li className="group flex flex-col px-4 py-4 gap-0 rounded-sm bg-secondary-50 hover:bg-secondary-200 hover:!opacity-100 group-hover/list:opacity-70 transition duration-300 ease-in-out">
            <article>
                <header className="px-4 py-0 rounded-sm">
                    <h2 className="font-semibold flex flex-col gap-1">
                        <div className="flex flex-row justify-between content-start">
                            <div className="font-semibold flex flex-col gap-2">
                                <span className="group-hover:text-accent">
                                    {name}
                                </span>
                                <div className="flex flex-col rounded-sm text-base pb-4 opacity-50 bg-secondary-50 group-hover:opacity-70">
                                    <span className="text-base font-bold tracking-tight group-hover:opacity-70">
                                        {school}
                                    </span>
                                </div>
                            </div>
                            <span className="rounded-sm text-base pb-0 opacity-50 bg-secondary-50">
                                {date}
                            </span>
                        </div>
                    </h2>
                </header>
            </article>
        </li>
    );
}

export default FormationCard;