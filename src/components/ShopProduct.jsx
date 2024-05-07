import ProductPage from "../pages/ProductPage";
import { Link } from "react-router-dom";
const ShopProduct = (props) => {
  const { name, price, image, image2 } = props;
  const mouseOver = (e) => {
    console.log(e.target.src);
    return (e.target.src = image2);
  };
  const mouseOut = (e) => {
    return (e.target.src = image);
  };

  return (
    <Link
      to={"/product"}
      state={props}
      className="hover:cursor-pointer h-[400px] max-w-[300px] border flex flex-col items-center font-Garamond font-semibold m-2 
    "
    >
      <div className="img-container origin-[0_0] duration-[.25s] ">
        <img
          className="h-[350px] w-auto duration-700  hover:scale-[1.02] cursor-pointer"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          src={image}
          alt=""
        />
      </div>
      {/* <div
        className={`img h-[400px] w-full bg-cover bg-center bg-no-repeat bg-[image:var(${image})] `}
      ></div> */}
      <h3>{name}</h3>
      <p>{price}</p>
    </Link>
  );
};

export default ShopProduct;

// style={{ backgroundImage: `url(${image})` }}
