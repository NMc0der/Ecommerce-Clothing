import { Link } from "react-router-dom";

const CartOrderEmpty = () => {
  return (
    <div>
      <p>
        Your bag is empty.{" "}
        <Link to={"/shop"} className="decoration-solid underline">
          Shop the Collection.
        </Link>
      </p>
    </div>
  );
};

export default CartOrderEmpty;
