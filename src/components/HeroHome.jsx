import { Link } from "react-router-dom";
import fassionGirl from "../assets/PngItem_3977074.png";
import Button from "./Button";

const HeroHome = () => {
  return (
    <section
      className="sm:min-h-[800px] min-h-[600px]  flex-row 
    bg-red-300 flex items-center justify-center px-5 text-white gap-1"
    >
      <div className="self-end pt-20">
        <img className="max-h-[700px] :" src={fassionGirl} alt="" />
      </div>
      <div
        className="hero-text absolute tablet:right-6  md:top-80 md:right-6  lg:static top-20 sm:items-start 
      items-center flex flex-col "
      >
        <h2 className="font-Poppoins text-[2rem] sm:text-[2.5rem] ">
          NEW ARRIVALS
        </h2>
        <h1 className="font-Courgette text-[2.5rem] sm:text-[3.5rem] ">
          Summer Season!
        </h1>
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

// flex-col-reverse sm:
