import BannersList from "../../components/banners";
import BannerDrawer from "../../components/drawer";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#FFFFFF] container mx-auto my-10">
      <BannerDrawer title="ბანერის დამატება" />
      <BannersList />
    </div>
  );
};

export default Home;
