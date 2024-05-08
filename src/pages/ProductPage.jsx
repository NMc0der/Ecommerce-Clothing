import { useLocation } from "react-router-dom";
import ShopPrdouctSize from "../components/ShopProductSize";

const ProductPage = () => {
  const location = useLocation().state;
  console.log(location.state);
  return (
    <div className="min-h-[500px] flex flex-col container m-auto w-full md:flex-row justify-center">
      <div className="img-section pt-[8rem] pb-[2rem] md:pb-[8rem] grid md:grid-cols-1 lg:grid-cols-2  gap-5 m-2">
        {/* flex flex-col 2xl:flex-row  */}
        <img src={location.image} alt="" />
        <img src={location.image2} alt="" />
        {location.gallery.map((img) => {
          console.log(img);
          return <img key={img} className="hidden lg:block" src={img} alt="" />;
        })}
      </div>
      <div className="product-text 2xl:pt-[8rem] md:pt-[8rem] md:pl-8  2xl:pl-[2rem] m-2 flex flex-col">
        <h2 className="text-3xl lg:text-5xl">{location.name}</h2>
        <p className="text-[#E72929] text-xl mt-3">{location.price}</p>
        <p className="mt-4 lg:mt-8 mb-2 lg:mb-4 text-lg lg:text-xl font-semibold">
          SIZE:
        </p>
        <fieldset className="mb-8 grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4  justify-items-center gap-3 w-full">
          <div className="w-[4rem]">
            <input
              onClick={(e) => console.log(e)}
              className="hidden peer"
              type="radio"
              name="size"
              id="s"
            />
            <label
              htmlFor="s"
              className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <p className="w-full text-lg font-semibold">S</p>
              </div>
            </label>
          </div>
          <div className="w-[4rem]">
            <input
              onClick={(e) => console.log(e)}
              className="hidden peer"
              type="radio"
              name="size"
              id="m"
            />
            <label
              htmlFor="m"
              className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <p className="w-full text-lg font-semibold">M</p>
              </div>
            </label>
          </div>
          <div className="w-[4rem]">
            <input
              onClick={(e) => console.log(e)}
              className="hidden peer"
              type="radio"
              name="size"
              id="l"
            />
            <label
              htmlFor="l"
              className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <p className="w-full text-lg font-semibold">L</p>
              </div>
            </label>
          </div>
          <ShopPrdouctSize size="xl" />
        </fieldset>
        <button
          className="border h-[4rem] font-semi-bold hover:font-bold w-[10rem] mb-8 mt-8 lg:mb-16 lg:mt-16 self-center tablet:self-center tablet:w-[20rem] 
        bg-black  hover:bg-white  hover:text-black text-white transition-[.5s] border-black "
        >
          ADD TO CART
        </button>
        <div
          className="product-details tablet:self-start
        "
        >
          <h2 className="text-2xl font-semibold mb-4 lg:mb-8">
            Product Details
          </h2>
          {console.log(location.details)}
          <ol className="font-Garamond text-xl  mb-8 lg:mb-16">
            {location.details.map((detail) => {
              return (
                <li className="list-disc list-inside" key={detail}>
                  {detail}
                </li>
              );
            })}
          </ol>
          <h2 className="text-2xl font-semibold mb-4 lg:mb-8">
            Delivery and Returns
          </h2>
          <p className="max-w-[450px] font-Garamond">
            Shine offers a variety of shipping options for our clients. Delivery
            times include processing time at Shine. Each item ordered will be
            properly packaged in way that will ensure a safe delivery upon
            arrival.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
