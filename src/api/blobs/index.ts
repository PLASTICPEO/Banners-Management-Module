import { UseQueryOptions, useQuery } from "react-query";
import { getblobs } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useGetBlobs = (blob: any, queryOptions: UseQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLOBS],
    queryFn: () => getblobs(blob),
    select: (data: any) => {
      return data;
    },
    ...queryOptions,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
