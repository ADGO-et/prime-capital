import { useQuery } from "@tanstack/react-query";
import { getHeroSlides } from "@/services/hero";

export const useHeroSlides = () =>
  useQuery({
    queryKey: ["hero-slides"],
    queryFn: getHeroSlides,
    staleTime: 1000 * 60 * 5,
  });
