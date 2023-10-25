import { useEffect, useState } from "react";
import { useGetBanners } from "../../../api/bannerList";
import { useRemoveBanner } from "../../../api/removeBanner";

export const useBanners = () => {
  const [banners, setBanners] = useState([]);
  const [bannerID, setBannerID] = useState("0");
  const { data: bannersList }: any = useGetBanners();
  const { data: removeID }: any = useRemoveBanner(bannerID, {
    enabled: !!bannerID,
  });

  useEffect(() => {
    setBanners(bannersList?.data.data.entities);
    console.log(bannersList);
  }, [bannersList]);

  useEffect(() => {
    console.log(bannersList);
  }, [bannersList]);

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
