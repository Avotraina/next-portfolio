import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: "https://avotraina-rabe.vercel.app/en",
            lastModified: new Date(),
        },
        {
            url: "https://avotraina-rabe.vercel.app/fr",
            lastModified: new Date(),
        },
        // {
        //     url: "https://avotraina-rabe.vercel.app/projects",
        //     lastModified: new Date(),
        // },
        // {
        //     url: "https://avotraina-rabe.vercel.app/contact",
        //     lastModified: new Date(),
        // }
    ]

}