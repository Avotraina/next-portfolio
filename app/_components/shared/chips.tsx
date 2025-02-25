type ChipsProps = Readonly<{
    label: string;
}>

const Chips: React.FC<ChipsProps> = ({label}) => {
    return (
        <div className="rounded-full bg-gray-200 px-4 py-2 text-xs">
            {label}
        </div>
    );
}

export default Chips;