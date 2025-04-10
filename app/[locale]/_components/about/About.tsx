import { getScopedI18n } from "@/locales/server";
import SectionTitle from "../shared/section-title";

export default async function About() {

    const title = await getScopedI18n("labels.about")
    const about = await getScopedI18n("about");

    return (
        <section id="about" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title={title("title")} />
            <div className=" py-4">
                <p className="mb-4 leading-normal text-foreground">
                    {about("p1")}
                    {/* I&apos;m a fullstack developer. I don&apos;t just write code, I craft solutions. Passionate about software development, I believe that clean, structured, and maintainable code is the foundation of scalable applications. My detail-oriented mindset drives me to create systems that are not only functional but also elegant in their simplicity. */}
                </p>

                <p className="mb-4 leading-normal">
                    {about("p2")}
                    {/* For me, software development is more than just implementing features; it&apos;s about solving problems thoughtfully, optimizing for performance, and continuously improving. I’m always exploring new best practices and architectural patterns to refine my approach and build software that stands the test of time. */}
                </p>

                <p className="mb-4 leading-normal">
                    {about("p3")}
                    {/* Currently, I&apos;m looking for a new opportunity to work with a team of talented individuals who are passionate about building great software products. */}
                </p>

                <p className="mb-4 leading-normal">
                    {about("p4")}
                    {/* When I&apos;m not coding, you can find me watching movies with my wife or playing a video games. */}
                </p>
            </div>
        </section>
    );
}