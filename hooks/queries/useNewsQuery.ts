import { useQuery } from "@tanstack/react-query";
import { getPublishedNews, getNewsArticleBySlug } from "@/services/news";

export const newsQueryKeys = {
  all: ["news"] as const,
  published: (params?: { page?: number; limit?: number; sortBy?: "latest" | "oldest"; query?: string }) =>
    [...newsQueryKeys.all, "published", params] as const,
  bySlug: (slug: string) => [...newsQueryKeys.all, "slug", slug] as const,
};

export const usePublishedNews = (params?: {
  page?: number;
  limit?: number;
  sortBy?: "latest" | "oldest";
  query?: string;
}) => {
  return useQuery({
    queryKey: newsQueryKeys.published(params),
    queryFn: () => getPublishedNews(params),
    staleTime: 1000 * 60 * 5,
  });
};

export const useNewsArticleBySlug = (slug: string) => {
  return useQuery({
    queryKey: newsQueryKeys.bySlug(slug),
    queryFn: () => getNewsArticleBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
