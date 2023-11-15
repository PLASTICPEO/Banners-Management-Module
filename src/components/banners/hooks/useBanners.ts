import { useEffect, useState } from "react";
import { useGetBanners } from "../../../api/bannerList";
import { useRemoveBanner } from "../../../api/removeBanner";

export const useBanners = () => {
  const [banners, setBanners] = useState([]);
  const [bannerID, setBannerID] = useState("0");
  const { data: bannersList, refetch: refetchBanners }: any = useGetBanners(); // Added refetchBanners
  const { data: removeID }: any = useRemoveBanner(bannerID, {
    enabled: !!bannerID,
  });

  useEffect(() => {
    setBanners(bannersList?.data.data.entities);
  }, [bannersList]);

  useEffect(() => {
    refetchBanners();
  }, [bannerID]);

  const handleDelete = (id: any) => {
    setBannerID(id);
  };

  const handleEdit = (id: any) => {
    console.log(id, "რედაქტირება");
  };
  return {
    handleDelete,
    handleEdit,
    banners,
    bannersList,
  };
};
