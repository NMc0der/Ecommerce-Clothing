import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { ProductList } from "../data/ProductList";
const Navbar = () => {
  const { cartTotal, cartItems, getTotalItemAmount } = useContext(ShopContext);
  // const total = cartItems.map((item) => {
  //   console.log("hi");
  // });
  // {
  //   console.log(cartItems);
  // }

  // const totalItems = () => {
  //   let total = 0;
  //   for (const item in cartItems) {
  //     console.log(item);
  //   }
  //   console.log(cartItems);
  // };
  // console.log(totalItems());
  // const total = ProductList.map((product) => {
  //   let amount = 0;
  //   if (cartItems[product.name] !== 0) {
  //     console.log(product.name);
  //     return (amount += product.name);
  //   }
  //   return amount;
  // });

  // const total = ProductList.reduce((acc, cur) => acc + cur, 0);
  // console.log(cartItems["Swing Dress V-neck"]);
  // console.log(total);
  {
    getTotalItemAmount();
  }
  console.log(getTotalItemAmount());
  return (
    <nav className="navbar border fixed  w-full">
      <div className="wrapper border flex justify-between items-center  gap-6 mx-[10%] p-3">
        <div className=" flex  justify-between items-center gap-[10%] ">
          <Link to="/">
            <h1 className="navbar-logo text-[2rem] font-Lobster ">Shine</h1>
          </Link>
          <div className="link-wrapper w-[20rem]  font-Poppins">
            <Link
              className="px-4 after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="shop"
            >
              SHOP
            </Link>
            <Link
              className="px-4 after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="services"
            >
              SERVICES
            </Link>
            <Link
              className="px-4 after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="about"
            >
              ABOUT
            </Link>
          </div>
        </div>
        <Link
          className="checkout  text-end hover:cursor-pointer text-[2rem]"
          to={"cart"}
        >
          {/* <FaShoppingCart /> */}
          <GiShoppingBag className="relative" />
          <div
            className=" rounded-full text-[1rem] text-center absolute h-[1.5rem] w-[1.5rem]
          translate-x-[60%] translate-y-[-50%] bg-[#FF0000] text-white "
          >
            {getTotalItemAmount()}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full
