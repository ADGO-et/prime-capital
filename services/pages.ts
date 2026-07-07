import strapi from "@/lib/strapi";

export interface StrapiMedia {
  id: number;
  url: string;
}

export interface TitleDescription {
  id: number;
  title: string;
  description: string;
}

export interface HomePage {
  introTitle: string;
  introText: string;
  strengths: TitleDescription[];
  strategicExcellenceHeading: string;
  strategicExcellenceText: string;
}

export interface AboutPage {
  overview: string;
  visionTitle: string;
  vision: string;
  missionTitle: string;
  mission: string;
  coreValues: TitleDescription[];
  strategicContext: TitleDescription[];
  csrItems: TitleDescription[];
  orgChartImage?: StrapiMedia | null;
}

export interface ContactPage {
  address: string;
  email: string;
  phone: string;
  weekdayHours: string;
  saturdayHours?: string;
  mapEmbedUrl: string;
  newClientInquiriesText: string;
  careerOpportunitiesText: string;
}

export interface ServicesPage {
  introHeading: string;
  introText: string;
  services: TitleDescription[];
  processHeading: string;
  processText: string;
  processSteps: TitleDescription[];
  whyChooseHeading: string;
  whyChooseText: string;
  differentiators: TitleDescription[];
  ctaHeading: string;
  ctaText: string;
}

export interface VacancyPage {
  reasonsHeading: string;
  reasonsSubtext: string;
  reasons: TitleDescription[];
}

interface StrapiSingleResponse<T> {
  data: T | null;
}

async function getSingleType<T>(path: string): Promise<T | null> {
  const response = await strapi.get<StrapiSingleResponse<T>>(path, {
    params: { populate: "*" },
  });
  return response.data.data;
}

export const getHomePage = () => getSingleType<HomePage>("/home-page");
export const getAboutPage = () => getSingleType<AboutPage>("/about-page");
export const getContactPage = () => getSingleType<ContactPage>("/contact-page");
export const getServicesPage = () => getSingleType<ServicesPage>("/services-page");
export const getVacancyPage = () => getSingleType<VacancyPage>("/vacancy-page");
