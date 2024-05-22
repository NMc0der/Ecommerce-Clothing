import React, { useContext } from "react";
import { ProductList } from "../data/ProductList";
import { ShopContext } from "../components/ShopContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="py-[8rem] text-3xl pl-4">
      <h2>Your Shopping Bag</h2>
      <div className="cart-items">
        {ProductList.map((product) => {
          if (cartItems[product.name] !== 0) {
            return <CartItem key={product.name} props={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
