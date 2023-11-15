import { useMutation } from "react-query";
import { uploadBlobs } from "./api";

export const usePostBlobs = () => {
  return useMutation({
    mutationFn: uploadBlobs,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
