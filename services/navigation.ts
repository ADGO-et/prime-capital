import strapi from "@/lib/strapi";
import { StrapiMedia } from "@/services/pages";
import { LinkItem } from "@/services/footer";

export interface Navigation {
  logo?: StrapiMedia | null;
  navLinks: LinkItem[];
  resourcesLabel: string;
  resourcesLinks: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
}

interface StrapiSingleResponse<T> {
  data: T | null;
}

export const getNavigation = async (): Promise<Navigation | null> => {
  const response = await strapi.get<StrapiSingleResponse<Navigation>>("/navigation", {
    params: { populate: "*" },
  });
  return response.data.data;
};
