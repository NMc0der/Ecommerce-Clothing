import ShopProduct from "./ShopProduct";
import { ProductList } from "../data/ProductList";

const ShopProducts = () => {
  return (
    <div>
      {ProductList.map((item, key) => {
        return <ShopProduct {...item} key={key} />;
      })}
    </div>
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
