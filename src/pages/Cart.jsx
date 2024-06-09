import React, { useContext } from "react";
import { ProductList } from "../data/ProductList";
import { ShopContext } from "../components/ShopContext";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";
import CartOrderEmpty from "../components/CartOrderEmpty";
import { GiShoppingBag } from "react-icons/gi";

const Cart = () => {
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  const totalAmount = getTotalPrice();
  return (
    <div className="py-[8rem] container m-auto">
      <h2 className="p-1 mb-6 tablet:pl-4 text-4xl font-[Garamond]">
        {" "}
        <span className="inline-block">
          <GiShoppingBag />
        </span>{" "}
        Shopping Bag
      </h2>
      <div className=" text-3xl lg:grid grid-cols-3 xl:grid-cols-4 container m-auto ">
        <div className="cart-items p-1 tablet:px-4 col-span-2 xl:col-span-3">
          {ProductList.map((product) => {
            if (cartItems[product.name] !== 0) {
              return <CartItem key={product.name} props={product} />;
            }
          })}
        </div>
        {/* <h2 className={`${!totalAmount && "hidden"}`}>hi {totalAmount}</h2> */}
        <div
          className={`${
            !totalAmount && "hidden"
          } mt-4 lg:mt-0 p-1 tablet:px-4 flex justify-center `}
        >
          <CartOrderSummary amount={totalAmount} />
        </div>
        <div
          className={`bg-[#EEEEEE] ${
            totalAmount && "hidden"
          } p-6 text-sm col-span-3 xl:col-span-4 tablet:text-lg lg:text-xl text-center font-[Garamond]`}
        >
          <CartOrderEmpty />
        </div>
      </div>
    </div>
  );
};

export default Cart;
