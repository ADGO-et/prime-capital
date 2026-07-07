import strapi from "@/lib/strapi";

export interface Footer {
  tagline: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}

interface StrapiSingleResponse<T> {
  data: T | null;
}

export const getFooter = async (): Promise<Footer | null> => {
  const response = await strapi.get<StrapiSingleResponse<Footer>>("/footer");
  return response.data.data;
};
