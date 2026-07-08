import { useQuery } from "@tanstack/react-query";
import {
  getHomePage,
  getAboutPage,
  getContactPage,
  getServicesPage,
  getVacancyPage,
  getNewsPage,
  getOurTeamPage,
  getListedCompaniesPage,
} from "@/services/pages";

const staleTime = 1000 * 60 * 5;

export const useHomePage = () =>
  useQuery({ queryKey: ["home-page"], queryFn: getHomePage, staleTime });

export const useAboutPage = () =>
  useQuery({ queryKey: ["about-page"], queryFn: getAboutPage, staleTime });

export const useContactPage = () =>
  useQuery({ queryKey: ["contact-page"], queryFn: getContactPage, staleTime });

export const useServicesPage = () =>
  useQuery({ queryKey: ["services-page"], queryFn: getServicesPage, staleTime });

export const useVacancyPage = () =>
  useQuery({ queryKey: ["vacancy-page"], queryFn: getVacancyPage, staleTime });

export const useNewsPage = () =>
  useQuery({ queryKey: ["news-page"], queryFn: getNewsPage, staleTime });

export const useOurTeamPage = () =>
  useQuery({ queryKey: ["our-team-page"], queryFn: getOurTeamPage, staleTime });

export const useListedCompaniesPage = () =>
  useQuery({ queryKey: ["listed-companies-page"], queryFn: getListedCompaniesPage, staleTime });
