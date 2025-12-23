import { Link } from "react-router-dom";
import Button from "./Button";

const HomeShopNow = () => {
  return (
    <div
      className="border h-[90vh] 2xl:h-[100vh] max-width-[100%]   
     bg-cover bg-homeShop1 flex lg:justify-end items-center 2xl:justify-center lg:pr-8 2xl:pr-0"
    >
      <div className="text 2xl:ml-[25rem] mb-[20rem]">
        <h2 className="text-red-500 text-center bg-white rounded-md p-2 text-5xl 2xl:text-7xl m-4 font-Garamond">
          New Summer <br /> 2025 Collection
        </h2>
        <Link
          className="self-center sm:self-end md:self-center lg:self-start m-4"
          to={"/shop"}
        >
          <button
            className="h-[3.5rem] w-[13rem]  bg-white text-black mt-3 
           hover:bg-black hover:text-white transition-[.5s] font-Poppins  border-black text-lg"
          >
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeShopNow;

{
  /* <Button border={false} text={"SHOP NOW"} /> */
}
