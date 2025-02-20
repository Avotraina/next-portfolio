type SectionTitleProps = {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
    return (
        <div className="flex flex-col">
            <span>
                {title}
            </span>
            <span className="h-px w-6 bg-red-600 border border-red-600">
            </span>
        </div>
    );
}