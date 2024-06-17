// import ceoPic1 from "../assets/AboutUs/tamara-bellis-eDVQwVMLMgU-unsplash.jpg";
// ("../assets/MidiDress/cn55589909.avif");
import ceoBlur from "../assets/AboutUs/tamara-bellis-eDVQwVMLMgU-unsplash (1).jpg";

import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const AboutCeo = () => {
  return (
    <div className=" overflow-x-hidden p-4 pt-36 grid flex justify-center pb-20 md:grid-cols-5 md:items-start  md:gap-9 container mx-auto relative">
      <h2 className="text-4xl text-center overflow-hidden font-bold font-[garmond] mb-5 md:hidden   ">
        a note from <br /> our ceo
      </h2>
      <div
        className=" ceo-img flex justify-center items-center  w-full container mx-auto md:col-span-2 md:col-start-4
       "
      >
        {/* <div
          className="border-red-500 h-[700px] w-[80%] border-2 bg-[#FFEAE3] absolute self-start  "
        ></div> */}

        <div
          className=" h-[300px] w-[95%] tablet:h-[600px] sm:h-[750px] md:h-[800px] xl:h-[750px]  md:w-[45%]  2xl:w-[700px]   bg-[#FFE6E6] translate-y-14
        md:translate-y-[10rem] lg:translate-y-[4rem] xl:translate-y-[4rem] absolute "
        ></div>
        <div className="h-[800px]">
          <img
            loading="lazy"
            className=" max-h-[800px]  mb-2  relative "
            src={ceoBlur}
            alt=""
          />
        </div>
      </div>

      <div className="ceo-note mt-20 font-[Garamond] text-lg  md:col-span-3  md:row-start-1 z-10 md:mt-0 lg:text-xl">
        <h2 className="hidden md:block text-5xl  overflow-hidden font-bold font-[garmond] mb-5 ">
          A note from <br /> our ceo
        </h2>
        <p className=" mb-6">
          We believe that there are many women all across the world that have
          the need and natural gift to be able to connect with one another,
          changing and affecting one anothers lives. We believe this natural
          gift is what drives our success and fulfillment.{" "}
        </p>
        <p className="mb-6">
          Shine was made with the understanding that when we are working
          together, we are better at what we are persuing. Together we can build
          businesses with each other, or we can simply enjoy life and help one
          another explore their own personal style. we believe that this
          connection helps establish a greater confidence and then add in a
          stylish outfit to go along with that confidence and we will be ready
          to take on life feeling like the person we truly are. we will be able
          to share are contributions to the world and those around us.
        </p>
        <p className="mb-6">
          To put it simply, we believe clothing can change lives.
        </p>
        <p className="mb-6">
          Shine gives a great opportunity to achieve this connection and
          confidence through are technology and we want you to join in because
          we belive together we can find our true style.{" "}
        </p>
        <span className="font-[Parisienne] text-7xl">Olivia</span>
        <p>Olivia Taylor</p>
        <p>Chief Executive Officer</p>
        <div className="flex items-center">
          {" "}
          <FaInstagram />
          <Link to={"https://www.instagram.com/"} className="ml-1 underline">
            {" "}
            @oliviataylor_shine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCeo;

// before:h-[34rem] before:w-[15rem] before:bg-red-500 before:absolute
