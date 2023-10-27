import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { ENDPOINTS } from "../../../api/blobs/index.enum";
import { useGetBlobs } from "../../../api/blobs";

const accessKey = import.meta.env.VITE_BANNERS_MANAGEMENT_KEY;

const UploadBannerImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  //   const { data: blob }: any = useGetBlobs(selectedImage, {
  //     enabled: !!selectedImage,
  //   });

  const uploadImage = async (formData: any) => {
    console.log(formData, "ფორმ დატაა");
    // setSelectedImage(formData);
    const response = await axios.post(ENDPOINTS.BLOBS, formData, {
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
    });

    console.log(response.data);

    // Handle the server's response here
    if (response.status === 200) {
      // Success
    } else {
      // Handle errors
    }
  };

  const { mutate } = useMutation(uploadImage);

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.set("blob", selectedImage);

      // Use React Query's mutate function to send the FormData
      mutate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default UploadBannerImage;
