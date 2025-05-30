import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { GiShoppingBag } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
// import { ProductList } from "../data/ProductList";
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

  const [navColor, setNavColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else setNavColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const [menu, setMenu] = useState(true);

  useEffect(() => {
    const x = window.matchMedia("(max-width: 640px)");
    function showSidebar() {
      setMenu(true);
    }
    x.addListener(showSidebar);
    return () => x.removeListener(showSidebar);
  }, []);

  // const showSidebar = () => {};

  // className="navbar border fixed  w-full"

  return (
    <nav
      className={
        navColor
          ? "navbar  fixed w-full bg-white ease-in-out duration-200 z-20 "
          : "navbar  fixed  w-full ease-in-out duration-200 z-20 after:bg-white after:content-center after:ml-[5%]  after:h-[2px] after:w-[90%] after:absolute"
      }
    >
      <div className="wrapper  flex justify-between items-center  gap-6 mx-[10%] p-3">
        <div className=" flex  justify-between items-center gap-[10%] ">
          <Link to="/">
            <h1 className="  navbar-logo text-[2rem] font-Lobster ">Shine</h1>
          </Link>
          <div className="link-wrapper w-[20rem]  font-Poppins hidden sm:inline">
            <Link
              className=" px-4 after:bg-[#000000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="shop"
            >
              SHOP
            </Link>
            <Link
              className=" px-4 after:bg-[#000000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="services"
            >
              SERVICES
            </Link>
            <Link
              className=" px-4 after:bg-[#000000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
              to="about"
            >
              ABOUT
            </Link>
          </div>
        </div>
        <Link
          className="checkout  text-end hover:cursor-pointer text-[2rem] hidden sm:block"
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
        <div
          onClick={() => setMenu(false)}
          className="sm:hidden justify-self-end cursor-pointer"
        >
          {<GiHamburgerMenu className="text-5xl" />}
        </div>
      </div>
      <div
        className={`fixed ${
          menu && "hidden"
        } top-0 right-0 h-[100vh] w-full z-50 bg-[rgba(225,225,225,.4)] backdrop-blur-md
        flex flex-col  items-center gap-12 [&>div]:text-3xl font-[Poppins]
        `}
      >
        <div
          className="self-end cursor-pointer m-3"
          onClick={() => setMenu(true)}
        >
          <IoMdClose className="text-5xl" />
        </div>

        <div
          onClick={() => setMenu(true)}
          className="after:bg-[#FF0000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full hover:text-[#FF0000]"
        >
          <Link to="/">HOME</Link>
        </div>
        <div
          onClick={() => setMenu(true)}
          className="after:bg-[#FF0000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full hover:text-[#FF0000]"
        >
          <Link to="shop">SHOP</Link>
        </div>
        <div
          onClick={() => setMenu(true)}
          className="after:bg-[#FF0000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full hover:text-[#FF0000]"
        >
          <Link to="services">SERVICES</Link>
        </div>
        <div
          onClick={() => setMenu(true)}
          className="after:bg-[#FF0000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full hover:text-[#FF0000]"
        >
          <Link to="about">ABOUT</Link>
        </div>
        <div
          onClick={() => setMenu(true)}
          className="after:bg-[#FF0000] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full hover:text-[#FF0000]  "
        >
          <Link to="cart">CART</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full
