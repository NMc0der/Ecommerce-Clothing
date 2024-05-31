const CartOrderSummary = ({ amount }) => {
  return (
    <div className="border bg-[#EEEEEE] h-[30rem] w-[20rem]">
      <h3>Order Summary</h3>
      <div>
        <p className="text-lg flex place-content-between">
          subtotal <span>$1230</span>
        </p>
        <p>{amount}</p>
        <p></p>
        <p></p>
      </div>
      <button></button>
      <p></p>
    </div>
  );
};

export default CartOrderSummary;
