import { useQuery } from "@tanstack/react-query";
import { getVacancies, VacancyQueryParams } from "@/services/vacancy";

export const useGetVacancyQuery = (params: VacancyQueryParams) => {
  return useQuery({
    queryKey: ["vacancies", params],
    queryFn: () => getVacancies(params),
  });
};
