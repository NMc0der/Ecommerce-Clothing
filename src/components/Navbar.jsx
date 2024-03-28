import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar border">
      <div className="wrapper border flex justify-between items-center  gap-6 mx-[10%] p-4">
        <div className=" flex  justify-between items-center gap-[10%] ">
          <Link to="/">
            <h1 className="navbar-logo text-[2.5rem] ">Shine</h1>
          </Link>
          <div className="link-wrapper font-Poppoins">
            <Link className="px-4 " to="shop">
              SHOP
            </Link>
            <Link className="px-4" to="services">
              SERVICES
            </Link>
            <Link className="px-4" to="about">
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
