import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar border fixed  w-full">
      <div className="wrapper border flex justify-between items-center  gap-6 mx-[10%] p-2">
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
        <div className="checkout  text-end hover:cursor-pointer text-[1.5rem]">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full
