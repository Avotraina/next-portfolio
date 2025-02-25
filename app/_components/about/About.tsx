import SectionTitle from "../shared/section-title";

export default function About() {
    return (
        <section id="about" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="About" />
            <div className=" py-4">
                <p className="mb-4 leading-normal text-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
                
                <p className="mb-4 leading-normal">
                    Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices Maurois.
                </p>
                
                <p className="mb-4 leading-normal">
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                </p>
            </div>
        </section>
    );
}