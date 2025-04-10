import { getScopedI18n } from "@/locales/server";
import SectionTitle from "../shared/section-title";

export default async function Contact() {

    const contact = await getScopedI18n(`labels.contact`);

    return (
        <section id="contact" className="flex flex-col px-4 py-4 gap-4 scroll-mt-16 lg:scroll-mt-24">
            <SectionTitle title="Contact" />

            <div className="flex flex-col gap-4">
                {/* <h2 className="font-semibold text-lg">
                    Get in touch
                </h2> */}
                <p className="text-sm opacity-80">
                    {contact("description")}
                    
                    {/* Feel free to reach out to me via email for any inquiries or collaboration opportunities: */}
                </p>
                <span className="font-semibold">Email: <a href="mailto:avotrainarabe@gmail.com" className="text-accent font-normal hover:font-semibold">avotrainarabe@gmail.com</a></span>
                <span className="mb-4 font-semibold">{contact("phone")}: <a href="tel:+261324681639" className="text-accent font-normal hover:font-semibold">+261 32 46 816 39</a></span>
            </div>
        </section>
    );

}