import HeroHome from "../components/HeroHome";
import HomeAbout from "../components/HomeAbout";
import HomeFeatured from "../components/HomeFeatured";
import HomeHashtag from "../components/HomeHashtag";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <HomeAbout />
      <HomeHashtag />
      <HomeFeatured />
    </div>
  );
};

export default Home;
