import strapi from "@/lib/strapi";

export interface StrapiMedia {
  id: number;
  url: string;
}

export interface HeroButton {
  id: number;
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroSlide {
  id: number;
  documentId: string;
  title: string;
  description: string;
  alignment: "left" | "center" | "right";
  order: number;
  image: StrapiMedia;
  buttons?: HeroButton[];
}

interface StrapiListResponse<T> {
  data: T[];
}

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const response = await strapi.get<StrapiListResponse<HeroSlide>>("/hero-slides", {
    params: {
      populate: "*",
      sort: "order:asc",
      "pagination[pageSize]": 50,
    },
  });
  return response.data.data;
};
