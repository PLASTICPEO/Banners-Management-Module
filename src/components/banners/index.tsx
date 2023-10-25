import { Pagination } from "antd";
import CustomButton from "../button";
import { useBanners } from "./hooks/useBanners";

const BannersList: React.FC = () => {
  const { banners, handleDelete, handleEdit } = useBanners();

  return (
    <div>
      <div className="flex items-center  w-full bg-[#E8EBED] p-2 border-b-[1px] border-[#C7CCD1]">
        <div className="flex items-center justify-center space-x-20">
          <p className="w-10">ID</p>
          <p className="w-40">დასახელება</p>
        </div>

        <div className="flex">
          <p className="w-64">შექმნის თარიღი</p>
          <p>რედაქტირება</p>
        </div>
      </div>
      {banners?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="flex space-x-10  border-b-[1px] hover:bg-[#F4F5F6] cursor-pointer px-4 py-2"
          >
            <div className="text-xs flex space-x-6">
              <p>{index + 1}</p>
              <p className="w-32">{item.name}</p>
            </div>

            <div className="text-xs flex space-x-6 ">
              {/* <img src={item?.url} alt="" className="w-10 h-10" /> */}
              <p>{item.startDate}</p>
              <CustomButton
                title="რედაქტირება"
                hoverColor="hover:border-[#C0B7B1] hover:text-[#C0B7B1]"
                onClick={() => handleEdit(item.id)}
              />
              <CustomButton
                title="წაშლა"
                hoverColor="hover:border-[#C0B7B1] hover:text-[#C0B7B1]"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-center m-5">
        <Pagination
          current={1}
          total={10} // Replace with the actual total number of items
          onChange={() => console.log("check")} // Function to handle page changes
        />
      </div>
    </div>
  );
};

export default BannersList;
