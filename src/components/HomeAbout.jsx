import Button from "./Button";
import { Link } from "react-router-dom";
const HomeAbout = () => {
  return (
    <div
      className="h-[550px] text-center  bg-[#EEEEEE] flex flex-col items-center
    gap-2 justify-center tablet:gap-4 sm:gap-8 px-[10%] xl:px-[30%] font-Garamond"
    >
      <div>
        <h2 className="tablet:text-2xl xl:text-3xl font-bold">
          Can clothing change someones life?
        </h2>
        <h2 className="tablet:text-2xl xl:text-3xl font-bold">
          We know it can.
        </h2>
      </div>
      <p className="text-sm tablet:text-xl">
        We like to engage with others to feel stylish, beautiful and inspired to
        look their best.
      </p>
      <p className="text-sm tablet:text-xl">
        We do this with the care and connection at our personalized fashion
        expepriences. We do this with the passion we bring to our communities
        and the world. We do this with our many wearable outfits and clothing
        pieces made to stun with beauty. At Shine our clothes are meant to
        motivate us all to take on each new day feeling confident in what we
        wear and to change the lives of those around us through inspiration.
      </p>
      <Link className="text-white border-[1px] border-black" to={"/about"}>
        <Button border={false} text={"MORE ABOUT US"} />
      </Link>
    </div>
  );
};

export default HomeAbout;
