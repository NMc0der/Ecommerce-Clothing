import ShopProduct from "./ShopProduct";
import { ProductList } from "../data/ProductList";

const ShopProducts = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center container m-auto">
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
