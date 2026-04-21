import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://primecapitalsc.com/sitemap.xml",
    host: "https://primecapitalsc.com",
  };
}