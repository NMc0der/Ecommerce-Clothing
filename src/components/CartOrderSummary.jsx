import RockstarAnkle from "../assets/RockstarAnkle/cn55722604.avif";
import PaypalLogo from "../assets/paypal-svgrepo-com.png";
const CartOrderSummary = ({ amount }) => {
  const savings = () => {
    if (amount > 20) {
      return (Math.round(amount * 0.05 * 100) / 100).toFixed(2);
    } else return 0.0;
  };

  let totalAmount = (amount - savings()).toFixed(2);
  return (
    <div className="border bg-[#EEEEEE]  w-[22rem] p-4">
      <h3>Order Summary</h3>
      <div>
        <p className="text-lg flex place-content-between">
          Subtotal <span>${amount.toFixed(2)}</span>
        </p>
        <p className="text-lg flex place-content-between">
          Savings <span>-${savings()}</span>
        </p>
        <p className="text-lg flex place-content-between">
          Shipping <span>TBD</span>
        </p>
        <p className="text-lg flex place-content-between">
          Est. Tax <span>TBD</span>
        </p>
        <hr align="right" className="border-y-[2px] mt-5  " />
        <div className="text-lg flex place-content-between  ">
          <div className="font-bold text-2xl">
            Est.Total{" "}
            <span className="text-xs font-normal">Before Tax & Shipping</span>
          </div>{" "}
          <span className="font-bold text-2xl">${totalAmount}</span>
        </div>
        <button className="mt-6 max-h-16 bg-[#FF0000] text-white p-3 w-full rounded-md font-bold text-2xl">
          CHECKOUT
        </button>
        <button className=" border border-black mt-3 flex justify-center items-center max-h-14 h-16 bg-[white] text-white  w-full rounded-md font-bold text-2xl">
          <img className="h-[4.2rem]" src={PaypalLogo} alt="" />
        </button>
        <p className="text-xs mt-[1rem]">
          Paypal & Afterpay: Limits Apply to Gap.Inc Credit Card Rewards
        </p>
      </div>
    </div>
  );
};

export default CartOrderSummary;
