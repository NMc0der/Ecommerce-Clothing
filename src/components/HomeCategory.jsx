import { Link } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import HomeCategoryLink from "./HomeCategoryLink";
const HomeCategory = () => {
  const filteredLink = (category) => {
    // return console.log(category);
    return ProductList.filter((product) => product.type === category);
  };

  return (
    <div className="m-5 mt-8 container m-auto ">
      <h2 className="text-center text-3xl tracking-widest">
        SHOP BY <span className="font-bold">CATEGORY</span>
      </h2>
      <div
        className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 tablet:m-8 
       justify-items-center "
      >
        <Link to="/shop" state={filteredLink("dress")}>
          <HomeCategoryLink type={"Dresses"} list={filteredLink("dress")} />
        </Link>

        <Link to="/shop" state={filteredLink("shorts")}>
          <HomeCategoryLink type={"Shorts"} list={filteredLink("shorts")} />
        </Link>

        <Link to="/shop" state={filteredLink("jeans")}>
          <HomeCategoryLink type={"Jeans"} list={filteredLink("jeans")} />
        </Link>

        <Link to="/shop" state={filteredLink("sweaters&cardigans")}>
          <HomeCategoryLink
            type={"Sweaters & Cardigans"}
            list={filteredLink("sweaters&cardigans")}
          />
        </Link>

        <Link
          className="col-span-1 tablet:col-span-2 lg:col-span-1"
          to="/shop"
          state={filteredLink("shirts&blouses")}
        >
          <HomeCategoryLink
            type={"Shirts & Blouses"}
            list={filteredLink("shirts&blouses")}
          />
        </Link>
      </div>
      <div className="paragraph-section">
        <p></p>
      </div>
    </div>
  );
};

export default HomeCategory;

// state={{ from: filteredLink("dress") }}
