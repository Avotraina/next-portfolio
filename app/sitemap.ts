import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        // {
        //     url: "https://avotraina-rabe.vercel.app/",
        //     lastModified: new Date(),
        // },
        {
            url: "https://avotraina-rabe.vercel.app/en",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            // alternates: {
            //     languages: {
            //         en: "https://avotraina-rabe.vercel.app/en",
            //         fr: "https://avotraina-rabe.vercel.app/fr",
            //     }
            // },
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