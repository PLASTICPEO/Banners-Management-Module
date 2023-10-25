import { UseQueryOptions, useQuery } from "react-query";
import { getBannersList } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useGetBanners = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNERS],
    queryFn: () => getBannersList(),
    select: (data: any) => {
      return data;
    },

    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
