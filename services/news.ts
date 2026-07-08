import strapi from "@/lib/strapi";

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface NewsArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  banner?: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface StrapiListResponse<T> {
  data: T[];
  meta: { pagination: Pagination };
}

export const getPublishedNews = async (params?: {
  page?: number;
  limit?: number;
  sortBy?: "latest" | "oldest";
  query?: string;
}): Promise<{ articles: NewsArticle[]; pagination: Pagination }> => {
  const sort = params?.sortBy === "oldest" ? "publishedAt:asc" : "publishedAt:desc";

  const response = await strapi.get<StrapiListResponse<NewsArticle>>("/news-articles", {
    params: {
      populate: "banner",
      sort,
      "pagination[page]": params?.page ?? 1,
      "pagination[pageSize]": params?.limit ?? 9,
      ...(params?.query ? { "filters[title][$containsi]": params.query } : {}),
    },
  });

  return { articles: response.data.data, pagination: response.data.meta.pagination };
};

export const getNewsArticleBySlug = async (slug: string): Promise<NewsArticle | null> => {
  const response = await strapi.get<StrapiListResponse<NewsArticle>>("/news-articles", {
    params: {
      populate: "banner",
      "filters[slug][$eq]": slug,
    },
  });

  return response.data.data[0] ?? null;
};
