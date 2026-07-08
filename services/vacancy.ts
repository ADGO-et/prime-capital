import strapi from "@/lib/strapi";

export interface ListItem {
  id: number;
  value: string;
}

export type JobLevel = "Junior" | "Intermediate" | "Senior";
export type EmploymentType = "Full-time" | "Part-time";

export interface JobVacancy {
  id: number;
  documentId: string;
  title: string;
  level: JobLevel;
  employmentType: EmploymentType;
  location?: string;
  infoTags?: ListItem[];
  description: string;
  responsibilities?: ListItem[];
  qualifications?: ListItem[];
  whatWeOffer?: ListItem[];
  applyLink: string;
  createdAt: string;
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

export interface VacancyQueryParams {
  page?: number;
  limit?: number;
  level?: JobLevel;
  employmentType?: EmploymentType;
}

export const getVacancies = async (
  params: VacancyQueryParams
): Promise<{ vacancies: JobVacancy[]; pagination: Pagination }> => {
  const response = await strapi.get<StrapiListResponse<JobVacancy>>("/job-vacancies", {
    params: {
      populate: "*",
      sort: "createdAt:desc",
      "pagination[page]": params.page ?? 1,
      "pagination[pageSize]": params.limit ?? 5,
      ...(params.level ? { "filters[level][$eq]": params.level } : {}),
      ...(params.employmentType ? { "filters[employmentType][$eq]": params.employmentType } : {}),
    },
  });

  return { vacancies: response.data.data, pagination: response.data.meta.pagination };
};
