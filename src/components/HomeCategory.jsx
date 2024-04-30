import { Link } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import HomeCategoryLink from "./HomeCategoryLink";
const HomeCategory = () => {
  const filteredLink = (category) => {
    // return console.log(category);
    return ProductList.filter((product) => product.type === category);
  };

  return (
    <>
      <Link to="/shop" state={filteredLink("dress")}>
        <HomeCategoryLink list={filteredLink("dress")} />
      </Link>

      <Link to="/shop" state={filteredLink("shorts")}>
        whats up
      </Link>
    </>
  );
};

export default HomeCategory;

// state={{ from: filteredLink("dress") }}
