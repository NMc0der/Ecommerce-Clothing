import ShopProduct from "./ShopProduct";
import { ProductList } from "../data/ProductList";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ShopProducts = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // const from = location.state;
  // console.log(from);

  // const prodList = {location.state ? location.state : productList}

  const [category, setCategory] = useState(
    location.state ? location.state : ProductList
  );

  const CategoryChange = (e) => {
    console.log(ProductList);
    if (e.target.id === "all") {
      setCategory(ProductList);
    } else {
      const filteredList = ProductList.filter(
        (product) => product.type === e.target.id
      );
      setCategory(filteredList);
    }
    return setMenuOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div
          onMouseLeave={() => setMenuOpen(false)}
          className={`dropdown w-[12rem] tablet:w-[12rem]  mb-4 pl-1  sm:pl-4 `}
        >
          <div
            onMouseEnter={() => setMenuOpen(true)}
            className=" w-[12rem] h-10 text-start p-2 bg-[#EEEEEE] font-semibold cursor-default"
          >
            CATEGORY{<IoMdArrowDropdown className="inline" />}
          </div>
          {menuOpen && (
            <ul
              className={`border absolute z-20 w-[12rem] bg-white [&>li]:p-2 hover:[&>li]:bg-[#EEEEEE]
            [&>li]:cursor-pointer hover:[&>li]:underline border-black
             `}
            >
              <li id="all" onClick={CategoryChange}>
                All
              </li>
              <li id="dress" onClick={CategoryChange}>
                Dresses
              </li>
              <li id="jeans" onClick={CategoryChange}>
                Jeans
              </li>
              <li id="shorts" onClick={CategoryChange}>
                Shorts
              </li>
            </ul>
          )}
        </div>
        <div
          className="grid grid-cols-1 tablet:grid-cols-2 
      sm:grid-cols-3 justify-items-center gap-4 lg:gap-8 container m-auto  mb-16 p-3 sm:p-5 sm:gap-6 lg:grid-cols-4"
        >
          {category.map((item, key) => {
            return <ShopProduct {...item} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;

// {StoreList.map((item, key) => {
//   return (
//     <StoreItem
//       name={item.name}
//       key={key}
//       price={item.price}
//       image={item.image}
//     />
//   );
// })}

// ${
//   menuOpen ? "hidden" : "block"
// }

// [&>ul]:hover:${
//   menuOpen ? "block" : "hidden"
// }
