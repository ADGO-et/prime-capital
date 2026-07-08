import { useQuery } from "@tanstack/react-query";
import { getFooter } from "@/services/footer";

export const useFooter = () =>
  useQuery({
    queryKey: ["footer"],
    queryFn: getFooter,
    staleTime: 1000 * 60 * 5,
  });
