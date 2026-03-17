import type { MetadataRoute } from "next";

const BASE_URL = "https://mycleardebt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/options`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/quiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/scam-alert`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/debt-report`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-we-work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/for-providers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const optionSlugs = [
    "consumer-proposal",
    "bankruptcy",
    "debt-consolidation",
    "credit-counseling",
    "debt-settlement",
    "debt-management-plan",
  ];

  const optionPages: MetadataRoute.Sitemap = optionSlugs.map((slug) => ({
    url: `${BASE_URL}/options/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const calculatorTypes = ["consumer-proposal", "bankruptcy-cost", "debt-payoff"];
  const calculatorPages: MetadataRoute.Sitemap = calculatorTypes.map((type) => ({
    url: `${BASE_URL}/calculator/${type}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // TODO: Add dynamic city/service pages from database
  // TODO: Add blog posts from database
  // TODO: Add provider profiles from database
  // TODO: Add guide pages from database

  return [...staticPages, ...optionPages, ...calculatorPages];
}
