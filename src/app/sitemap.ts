import { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/routing";


const siteUrl = siteConfig.url;

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never"
  | undefined;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/privacy-policy", "/terms-of-service"];

  const pages = LOCALES.flatMap((locale) => {
    return staticPages.map((page) => ({
      url: `${siteUrl}${locale === DEFAULT_LOCALE ? "" : `/${locale}`}${page}`,
      lastModified: new Date(),
      changeFrequency: (page === "" ? "daily" : "monthly") as ChangeFrequency,
      priority: page === "" ? 1.0 : 0.5,
    }));
  });

  return pages;
}
