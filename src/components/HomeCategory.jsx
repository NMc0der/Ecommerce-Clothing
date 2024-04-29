import { Link } from "react-router-dom";
import { ProductList } from "../data/ProductList";

const HomeCategory = () => {
  const filteredLink = (category) => {
    // return console.log(category);
    return ProductList.filter((product) => product.type === category);
  };

  return (
    <Link to="/shop" state={filteredLink("dress")}>
      Hello
    </Link>
  );
};

export default HomeCategory;

// state={{ from: filteredLink("dress") }}
