import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://tabnify.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date("2026-01-02"),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
