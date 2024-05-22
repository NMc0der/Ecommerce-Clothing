import React from "react";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const CartItem = ({ props }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="border flex container m-auto ">
      <img className="h-[300px]" src={props.image} alt="" />
      <div className="font-normal text-lg p-2">
        <h2 className="pb-5 text-3xl">{props.name}</h2>
        <p className=" my-1">Color: hi</p>
        <p className="my-3">Price: {props.price}</p>
        <div className="flex justify-start items-center">
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
    </div>
  );
};

export default CartItem;

// border grid  grid-cols-2 w-[500px] mt-10
// row-span-3 col-span-1
