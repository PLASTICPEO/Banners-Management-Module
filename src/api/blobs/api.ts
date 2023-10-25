import axios from "axios";
import { ENDPOINTS } from "./index.enum";

const bannersKey = import.meta.env.VITE_BANNERS_MANAGEMENT_KEY;

export const getblobs = (file: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${bannersKey}`,
    },
  };
  return axios.post(ENDPOINTS.BANNERS, config);
};