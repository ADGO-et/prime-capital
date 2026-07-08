import strapi from "@/lib/strapi";

export interface ListItem {
  id: number;
  value: string;
}

export interface LinkItem {
  id: number;
  label: string;
  url: string;
}

export interface ListedCompany {
  id: number;
  documentId: string;
  symbol: string;
  companyName: string;
  order: number;
  marketClassification: string;
  listedCapital: string;
  listedCapitalIncludingPremium?: string;
  listedShares: string;
  shareholders: string;
  securityType?: string;
  natureOfBusiness?: string;
  yearOfFormation?: string;
  dateOfIncorporation?: string;
  dateListed?: string;
  companyAddress?: string;
  telephone?: string;
  email?: string;
  website?: string;
  auditor?: string;
  boardOfDirectors?: ListItem[];
  sector?: string;
  subSector?: string;
  prospectus?: LinkItem | null;
  financialStatements?: LinkItem[];
}

interface StrapiListResponse<T> {
  data: T[];
}

export const getListedCompanies = async (): Promise<ListedCompany[]> => {
  const response = await strapi.get<StrapiListResponse<ListedCompany>>("/listed-companies", {
    params: {
      populate: "*",
      sort: "order:asc",
      "pagination[pageSize]": 100,
    },
  });
  return response.data.data;
};
