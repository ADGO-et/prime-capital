import type { MetadataRoute } from "next";

const baseUrl = "https://primecapitalsc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact-us",
    "/listed-companies",
    "/news",
    "/our-team",
    "/services",
    "/vacancy",
    "/vacancy/jobs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}