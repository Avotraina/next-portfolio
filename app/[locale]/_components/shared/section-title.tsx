type SectionTitleProps = {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
    return (
        <div className="flex flex-col max-lg:sticky max-lg:top-0 z-10 bg-background py-2">
            <span className="text-2xl font-bold">
                {title}
            </span>
            <span className="h-px w-6 bg-secondary border border-secondary">
            </span>
        </div>
    );
}