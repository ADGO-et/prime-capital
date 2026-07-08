import { useQuery } from "@tanstack/react-query";
import { getNavigation } from "@/services/navigation";

export const useNavigation = () =>
  useQuery({
    queryKey: ["navigation"],
    queryFn: getNavigation,
    staleTime: 1000 * 60 * 5,
  });
