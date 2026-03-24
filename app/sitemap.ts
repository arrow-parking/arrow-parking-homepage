import type { MetadataRoute } from "next";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "./types/parking";

export const dynamic = "force-static";

const parkings = parkingsData as Parking[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://yama6418.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : 'http://localhost:3000';

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/parkings`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/landowner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // 駐車場詳細ページ（全23箇所）
  const parkingPages: MetadataRoute.Sitemap = parkings.map((parking) => ({
    url: `${baseUrl}/parkings/${parking.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...parkingPages];
}
