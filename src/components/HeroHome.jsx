import { Link } from "react-router-dom";
import fassionGirl from "../assets/PngItem_3977074.png";
import Button from "./Button";

const HeroHome = () => {
  return (
    <section className="min-h-[800px] bg-red-300 flex items-center justify-center px-5 text-white">
      <div className="self-end ">
        <img className="max-h-[700px]" src={fassionGirl} alt="" />
      </div>
      <div className="hero-text absolute md:top-80 md:right-6  lg:static top-20 flex flex-col">
        <h2 className="font-Poppoins text-[2.5rem] ">NEW ARRIVALS</h2>
        <h1 className="font-Courgette text-[3.5rem]">Summer Season!</h1>
        <Link
          className="self-center sm:self-end md:self-center lg:self-start"
          to={"/shop"}
        >
          <Button border={false} text={"SHOP NOW"} />
        </Link>
      </div>
    </section>
  );
};

export default HeroHome;

{
  /* <p>The Season of Summer is here, so embrace it with the newest styles and      the latest trends next time you go out!{" "}  </p> */
}
