import { useContext } from "react";
import pic1 from "../assets/Services/tamara-bellis-pONwcn4IcVU-unsplash.jpg";
import { ShopContext } from "./ShopContext";

const ServicesExerience = () => {
  const { handleScroll } = useContext(ShopContext);

  return (
    <div className="md:flex md:flex-row-reverse justify-center items-center container mx-auto my-16 gap-10 ">
      <div className="text container mx-auto font-[Garamond] p-2">
        <h3 className="font-bold text-4xl mt-[3rem]">
          The Shine Fashion Experience
        </h3>
        <p className="text-xl mt-[.5rem]">
          Gather together with your friends while your Shine stylist walks you
          through the newest collection and helps create the perfect look for
          you.{" "}
        </p>
        <h3 className="text-3xl font-bold mt-[2rem]">
          Virtual Styling Services
        </h3>
        <p className="text-xl mt-[.5rem] mb-[2rem]">
          Cant meet up in person? Try Shine online. It's very easy and fun for
          our customers who have a hard time meeting in person. There's little
          to no setup, and the whole experience only takes about an hour.
        </p>
        <button
          onClick={() => handleScroll()}
          className="mb-[3rem] h-[3.5rem] w-[13rem] bg-black text-white mt-3 
           hover:bg-white hover:text-black transition-[.5s] font-Poppins border border-black text-lg"
        >
          GET IN TOUCH
        </button>
      </div>
      <div
        className=" mb-[2rem] tablet:mb-[3rem] p-2 ceo-img flex justify-center items-center  w-full 
        container mx-auto md:col-span-2 md:col-start-4
       "
      >
        {/* <div
          className="border-red-500 h-[700px] w-[80%] border-2 bg-[#FFEAE3] absolute self-start  "
        ></div> */}

        <div
          className=" h-[300px] w-[95%] tablet:h-[600px] sm:h-[750px] md:h-[600px] xl:h-[650px] 
           md:w-[45%]  2xl:w-[700px]   bg-[#FFE6E6] translate-y-14
        md:translate-y-[rem] lg:translate-y-[4rem] xl:translate-y-[4rem] absolute "
        ></div>
        <div className="h-[450px] tablet:h-[800px] md:h-[700px]">
          <img
            loading="lazy"
            className=" max-h-[800px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] mb-2 relative "
            src={pic1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesExerience;
