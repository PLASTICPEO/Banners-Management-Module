import { useMutation, useQuery } from "react-query";
import { getFindBlob } from "./api";

export const useFindBlobs = () => {
  return useMutation({
    mutationFn: getFindBlob,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
