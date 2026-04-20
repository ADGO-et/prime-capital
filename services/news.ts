import api from "@/lib/axios";
export interface LocalizedText {
  en: string;
  am: string;
  om: string;
}

export interface ImageBlockContent {
  urls: string[];
}

export type ParagraphBlockContent = LocalizedText;
export type HeadingBlockContent = LocalizedText;

export interface YoutubeBlockContent {
  url: string;
}

export interface LinkBlockContent {
  url: string;
  text: string;
}

export interface BaseBlock {
  order: number;
}

export interface ImageBlock extends BaseBlock {
  type: "image";
  content: ImageBlockContent;
}

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  content: ParagraphBlockContent;
}

export interface HeadingBlock extends BaseBlock {
  type: "heading";
  content: HeadingBlockContent;
}

export interface YoutubeBlock extends BaseBlock {
  type: "youtube";
  content: YoutubeBlockContent;
}

export interface LinkBlock extends BaseBlock {
  type: "link";
  content: LinkBlockContent;
}

export type Block =
  | ImageBlock
  | ParagraphBlock
  | YoutubeBlock
  | LinkBlock
  | HeadingBlock;

export interface Blog {
  _id: string;
  title: LocalizedText;
  thumbnail: string;
  blocks: Block[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ApiResponseData {
  blogs: Blog[];
  pagination: Pagination;
}

export interface PublishedNewsApiResponse {
  status: string;
  message: string;
  data: ApiResponseData;
}

export interface SingleBlogApiResponse {
  status: string;
  message: string;
  data: Blog;
}

export const getPublishedNews = async (params?: {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
  sort?: "asc" | "desc";
}): Promise<PublishedNewsApiResponse> => {
  const queryParams: Record<string, string | number> = {};

  if (params) {
    if (typeof params.page !== "undefined") queryParams.page = params.page;
    if (typeof params.limit !== "undefined") queryParams.limit = params.limit;

    // Normalize sort mapping for common backends
    if (params.sortBy === "latest") {
      queryParams.sortBy = "createdAt";
      queryParams.order = "desc";
      queryParams.sort = "desc";
    } else if (params.sortBy === "oldest") {
      queryParams.sortBy = "createdAt";
      queryParams.order = "asc";
      queryParams.sort = "asc";
    } else if (params.sortBy) {
      // Pass-through custom field with optional order/sort if provided
      queryParams.sortBy = params.sortBy;
      if (params.order) queryParams.order = params.order;
      if (params.sort) queryParams.sort = params.sort;
    } else {
      // If only order/sort provided
      if (params.order) queryParams.order = params.order;
      if (params.sort) queryParams.sort = params.sort;
    }
  }

  const response = await api.get("/blogs", { params: queryParams });
  return response.data;
};

export const getBlogById = async (
  id: string
): Promise<SingleBlogApiResponse> => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};
