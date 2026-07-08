import strapi from "@/lib/strapi";
import { StrapiMedia } from "@/services/pages";

export interface LinkItem {
  id: number;
  label: string;
  url: string;
}

export interface Footer {
  logo?: StrapiMedia | null;
  tagline: string;
  quickLinks: LinkItem[];
  serviceLinks: LinkItem[];
  copyrightText: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}

interface StrapiSingleResponse<T> {
  data: T | null;
}

export const getFooter = async (): Promise<Footer | null> => {
  const response = await strapi.get<StrapiSingleResponse<Footer>>("/footer", {
    params: { populate: "*" },
  });
  return response.data.data;
};
