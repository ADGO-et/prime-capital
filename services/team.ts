import strapi from "@/lib/strapi";

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

export interface ListItem {
  id: number;
  value: string;
}

export type TeamCategory = "Board of Directors" | "Executive Management";

export interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  role: string;
  category: TeamCategory;
  order: number;
  edu: string;
  summary?: string;
  qualifications?: string;
  occupation?: string;
  bio?: string;
  appointed?: boolean;
  email?: string;
  education?: ListItem[];
  exposure?: ListItem[];
  socialLinks?: SocialLink[];
  photo?: StrapiMedia | null;
}

interface StrapiListResponse<T> {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const response = await strapi.get<StrapiListResponse<TeamMember>>("/team-members", {
    params: {
      populate: "*",
      sort: "order:asc",
      "pagination[pageSize]": 100,
    },
  });
  return response.data.data;
};
