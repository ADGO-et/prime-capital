import { useQuery } from "@tanstack/react-query";
import { getListedCompanies } from "@/services/companies";

export const useListedCompanies = () =>
  useQuery({
    queryKey: ["listed-companies"],
    queryFn: getListedCompanies,
    staleTime: 1000 * 60 * 5,
  });
