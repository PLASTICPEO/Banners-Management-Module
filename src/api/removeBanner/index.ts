import { UseQueryOptions, useQuery } from "react-query";
import { removeBanner } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useRemoveBanner = (id: any, queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNERS, id],
    queryFn: () => removeBanner(id),
    select: (data: any) => {
      return data;
    },
    ...queryOptions,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
