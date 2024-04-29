import HeroHome from "../components/HeroHome";
import HomeAbout from "../components/HomeAbout";
import HomeCategory from "../components/HomeCategory";
import HomeFeatured from "../components/HomeFeatured";
import HomeHashtag from "../components/HomeHashtag";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <HomeCategory />
      <HomeAbout />
      <HomeHashtag />
      <HomeFeatured />
    </div>
  );
};

export default Home;
