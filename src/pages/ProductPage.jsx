import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ShopPrdouctSize from "../components/ShopProductSize";
import { ShopContext } from "../components/ShopContext";

const ProductPage = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  // const [sizeData, setSizeData] = React.useState({
  //   size: "",
  // });

  // function handleChange(event) {
  //   const { size } = event.target;

  //   setSizeData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  const location = useLocation().state;
  console.log(location.state);
  return (
    <div className="min-h-[500px] flex flex-col container m-auto w-full md:flex-row justify-center align-center">
      <div className="lg:max-h-[0px] 2xl:max-h-fit img-section pt-[8rem] pb-[2rem] md:pb-[8rem]  grid justify-center  md:grid-cols-1 lg:grid-cols-2  gap-5 m-2">
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
        <p className="text-[#E72929] text-xl mt-3">
          ${location.price.toFixed(2)}
        </p>
        <p className="mt-4 lg:mt-8 mb-2 lg:mb-4 text-lg lg:text-xl font-semibold">
          SIZE:
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addToCart(location.name);
            const formData = new FormData(e.target.value);
            console.log(formData);
            // console.log(sizeData);
            // console.log(e);

            // addTo(location);
          }}
        >
          <fieldset
            className="mb-8 grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 sm:grid-cols-5 md:grid-cols-3
          xl:grid-cols-4 2xl:grid-cols-5
        justify-items-center gap-5 w-full"
          >
            <ShopPrdouctSize selected={false} size="xs" />

            <ShopPrdouctSize selected={false} size="s" />

            <ShopPrdouctSize selected={true} size="m" />

            <ShopPrdouctSize selected={false} size="l" />

            <ShopPrdouctSize selected={false} size="xl" />
          </fieldset>
          <button
            // onClick={() => addToCart(location.name)}
            // onClick={}
            className="border h-[4rem] font-semi-bold hover:font-bold w-[10rem] mb-8 mt-8 lg:mb-16 lg:mt-16 self-center tablet:self-center tablet:w-[20rem] 
        bg-black  hover:bg-white  hover:text-black text-white transition-[.5s] border-black 
        active:scale-[.9]"
          >
            ADD TO CART
          </button>
        </form>
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
          <p className="max-w-[450px] font-Garamond my-8 xl:text-lg">
            Shine offers a variety of shipping options for our clients. Delivery
            times include processing time at Shine. Each item ordered will be
            properly packaged in way that will ensure a safe delivery upon
            arrival.
          </p>
          <p className="max-w-[450px] font-Garamond my-8 xl:text-lg">
            For orders placed with Shine: No Rush (7-10 business days) and
            Standard(3-7 days, including weekends) shipping Options are
            available. Shine also offers shipping options available for
            Expedited shipping and Express Shipping.
          </p>
          <p className="max-w-[450px] font-Garamond my-8 xl:text-lg">
            We want to be certain that you are happy with your Shine pieces, so
            returns and exchanges are easy! When using one of Shines return
            shipping options, a shipping fee of 5.00 will be deducted from your
            refund, and this fee will be waived if you place another order with
            us within seven days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

{
  /* <div className="w-[4rem]">
              <input
                required
                onClick={(e) => console.log(e)}
                className="hidden peer"
                type="radio"
                name="size"
                id="s"
                value="s"
                checked={sizeData.size === "s"}
                onChange={handleChange}
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
                value="M"
                checked={sizeData.size === "m"}
                onChange={handleChange}
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
                value="l"
                checked={sizeData.size === "l"}
                onChange={handleChange}
              />
              <label
                htmlFor="l"
                className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <p className="w-full text-lg font-semibold">L</p>
                </div>
              </label>
            </div> */
}
