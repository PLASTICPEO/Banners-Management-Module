import { useQuery } from "react-query";
import { getblobs } from "./api";
import { QUERY_KEYS } from "./index.enum";

export const useGetBlobs = (file: any) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLOBS],
    queryFn: () => getblobs(file),
    select: (data: any) => {
      return data;
    },

    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
