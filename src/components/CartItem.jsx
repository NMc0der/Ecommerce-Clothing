import React from "react";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ props }) => {
  const { cartItems, addToCart, removeFromCart, removeItem } =
    useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="border flex container mb-3 m-auto  ">
      <img
        className="h-[150px]  tablet:h-[200px] sm:h-[300px]"
        src={props.image}
        alt=""
      />
      <div className="font-normal text-lg p-2 w-[800px] pr-0">
        <h2 className="pb-5 sm:text-3xl font-bold sm:font-normal">
          {props.name}
        </h2>
        <p className=" my-1 text-sm tablet:text-base sm:text-lg">Color: hi</p>
        <p className="my-3 text-sm tablet:text-base sm:text-lg">
          Price: ${props.price.toFixed(2)}
        </p>
        <div className="flex justify-start items-center text-sm tablet:text-base sm:text-lg">
          <span>Qty: </span>
          <input
            readOnly
            className="underline w-6 text-center focus:outline-none"
            type="text"
            value={cartItems[props.name]}
          />

          <button
            onClick={() => removeFromCart(props.name)}
            className="border w-8 h-8 text-center flex justify-center items-center mr-1"
          >
            -
          </button>
          <button
            onClick={() => addToCart(props.name)}
            className="border w-8 h-8 text-center flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
      <div className=" w-full pr-2 pt-2 flex justify-end">
        <IoMdClose
          className="cursor-pointer"
          onClick={() => removeItem(props.name)}
        />
      </div>
    </div>
  );
};

export default CartItem;

// border grid  grid-cols-2 w-[500px] mt-10
// row-span-3 col-span-1
