import { useMutation } from "react-query";
import { bannersSave } from "./api";

export const useBannersSave = () => {
  return useMutation({
    mutationFn: bannersSave,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error: any) => {
      return error;
    },
  });
};
