import { Link } from "react-router-dom";
import theTimes from "../assets/The_Times_100-logo-1294566530-seeklogo.com.png";
import fastCompany from "../assets/fast-company-1-logo.png";
import createCultivate from "../assets/1519404219259.png";
import vouge from "../assets/Vogue-logo.png";
import forbes from "../assets/Forbes-Logo-PNG-Pic.png";
const HomeFeatured = () => {
  return (
    <div className="min-h-[400px]">
      <h2 className="text-center">AS SEEN IN</h2>
      <div
        className="grid grid-cols-2 justify-center justify-items-center items-center
      hover:[&>a]:scale-110 [&>a]:duration-100 lg:grid-cols-5"
      >
        <Link>
          <img className=" w-[200px]" src={theTimes} alt="" />
        </Link>
        <Link>
          <img className=" w-[200px]" src={fastCompany} alt="" />
        </Link>
        <Link>
          <img className=" w-[200px]" src={createCultivate} alt="" />
        </Link>
        <Link className="self-center">
          <img className=" w-[200px]" src={vouge} alt="" />
        </Link>
        <Link className="col-span-2 lg:col-span-1">
          <img className=" w-[200px]" src={forbes} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFeatured;
