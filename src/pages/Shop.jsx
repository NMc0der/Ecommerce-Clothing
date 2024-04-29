import ShopProducts from "../components/ShopProducts";
import ShopTitle from "../components/ShopTitle";
import React from "react";

const Shop = () => {
  // const location = useLocation();
  // console.log(location);

  return (
    <div>
      <ShopTitle />
      <ShopProducts />
    </div>
  );
};

export default Shop;
