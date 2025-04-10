import { getScopedI18n } from "@/locales/server";

export default async function Footer() {

    const footer = await getScopedI18n("labels.footer");

    return (
        <div className="border-t pt-4 px-4 hidden lg:block">
            <span className="text-xs">
                {footer("description")}
                {/* Developed with NextJS and Tailwind CSS */}
            </span>
        </div>
    );
}