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
  strengthsHeading: string;
  strengthsSubtext: string;
  visionMissionHeading: string;
}

export interface AboutPage {
  overviewHeading: string;
  overview: string;
  visionTitle: string;
  vision: string;
  missionTitle: string;
  mission: string;
  coreValuesHeading: string;
  coreValues: TitleDescription[];
  strategicContextHeading: string;
  strategicContext: TitleDescription[];
  governanceHeading: string;
  governanceCards: TitleDescription[];
  csrHeading: string;
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
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  reasonsHeading: string;
  reasonsSubtext: string;
  reasons: TitleDescription[];
}

export interface NewsPage {
  heroTitle: string;
  heroDescription: string;
}

export interface OurTeamPage {
  boardHeading: string;
  boardSubtext: string;
  executiveHeading: string;
  executiveSubtext: string;
}

export interface ListedCompaniesPage {
  heroTitle: string;
  heroDescription: string;
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
export const getNewsPage = () => getSingleType<NewsPage>("/news-page");
export const getOurTeamPage = () => getSingleType<OurTeamPage>("/our-team-page");
export const getListedCompaniesPage = () =>
  getSingleType<ListedCompaniesPage>("/listed-companies-page");
