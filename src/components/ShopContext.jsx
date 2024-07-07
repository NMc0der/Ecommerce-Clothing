import React, { createContext, useRef, useState } from "react";
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
    return setCartItems((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const removeFromCart = (name) => {
    console.log(name);
    console.log(cartItems);
    return setCartItems((prev) => ({ ...prev, [name]: prev[name] - 1 }));
  };

  const removeItem = (name) => {
    setCartItems((prev) => ({ ...prev, [name]: 0 }));
  };

  const cartTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item;
    });
    return total;
  };

  const getTotalItemAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo =
        totalAmount += cartItems[item];
      }
    }
    // console.log(totalAmount);
    return totalAmount;
  };

  const getTotalPrice = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo =
        let itemInfo = ProductList.find((product) => {
          console.log(product.name);
          console.log(item);
          return product.name === item;
        });
        console.log(cartItems[item]);
        console.log(itemInfo);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    console.log(totalAmount);
    return totalAmount;
  };

  const test = () => {
    console.log("test successful");
  };

  const ref = useRef(null);

  const handleScroll = () => {
    console.log("handle scroll");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const addTo = (props) => {
  //   // setCartItems((prev) =>  )
  //   return console.log(props);
  // };

  const contextValue = {
    cartItems,
    test,
    addToCart,
    removeFromCart,
    removeItem,
    cartTotal,
    getTotalItemAmount,
    getTotalPrice,
    handleScroll,
    ref,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
