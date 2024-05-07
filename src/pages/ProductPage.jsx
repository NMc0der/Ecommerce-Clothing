import { useLocation } from "react-router-dom";
import ShopPrdouctSize from "../components/ShopProductSize";

const ProductPage = () => {
  const location = useLocation().state;
  console.log(location.state);
  return (
    <div className="min-h-[500px] flex flex-col container m-auto w-full">
      <div className="img-section pt-[8rem] flex flex-col gap-5 ">
        <img src={location.image} alt="" />
        <img src={location.image2} alt="" />
      </div>
      <div className="product-text 2xl:pt-[8rem]  2xl:pl-[2rem]">
        <h2 className="text-3xl">{location.name}</h2>
        <p className="text-[#E72929] text-xl mt-3">{location.price}</p>
        <p>Size</p>
        <fieldset className="flex gap-3 w-full">
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
        <button className="border">ADD TO CART</button>
        <div className="product-details">
          <p>Product Details</p>
          {console.log(location.details)}
          <ol>
            {location.details.map((detail) => {
              return (
                <li className="list-disc" key={detail}>
                  {detail}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
