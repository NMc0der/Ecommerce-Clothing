import HeroHome from "../components/HeroHome";
import HomeAbout from "../components/HomeAbout";
import HomeCategory from "../components/HomeCategory";
import HomeFeatured from "../components/HomeFeatured";
import HomeHashtag from "../components/HomeHashtag";
import HomeShopNow from "../components/HomeShopNow";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <HomeCategory />
      <HomeAbout />
      <HomeShopNow />
      <HomeHashtag />
      <HomeFeatured />
    </div>
  );
};

export default Home;
