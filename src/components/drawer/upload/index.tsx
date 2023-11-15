import { useEffect, useState } from "react";
import { usePostBlobs } from "../../../api/blobs/upload";

const UploadBannerImage = () => {
  const [selectedImage, setSelectedImage]: any = useState(null);
  const { mutate, data: success, error }: any = usePostBlobs();

  const uploadImage = (formData: any) => {
    mutate(formData);
  };

  const handleImageChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.set("blob", selectedImage);

      uploadImage(formData);
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
