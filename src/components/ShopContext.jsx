import React, { createContext, useState } from "react";
import { ProductList } from "../data/ProductList";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  ProductList.map((item) => {
    // console.log(item.name);
    cart[item.name] = 0;
  });
  console.log(cart["Rockstar Skinny Jeans"]);
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (name) => {
    console.log(name);
    console.log(cartItems);
    setCartItems((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const test = () => {
    console.log("test successful");
  };

  const contextValue = { cartItems, test, addToCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
