import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "@/services/team";

export const useTeamMembers = () =>
  useQuery({
    queryKey: ["team-members"],
    queryFn: getTeamMembers,
    staleTime: 1000 * 60 * 5,
  });
