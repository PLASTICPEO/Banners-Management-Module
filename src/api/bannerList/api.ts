import axios from "axios";
import { ENDPOINTS } from "./index.enum";

const bannersKey = import.meta.env.VITE_BANNERS_MANAGEMENT_KEY;

export const getBannersList = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${bannersKey}`,
    },
  };
  return axios.post(
    ENDPOINTS.BANNERS,
    {
      includes: [
        "id",
        "name",
        "startDate",
        "endDate",
        "zoneId",
        "url",
        "channelId",
        "priority",
        "fileId",
      ],
    },
    config
  );
};
