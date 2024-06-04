import { useState } from "react";
import RockstarAnkle from "../assets/RockstarAnkle/cn55722604.avif";
import PaypalLogo from "../assets/paypal-svgrepo-com.png";

const CartOrderSummary = ({ amount }) => {
  const savings = () => {
    if (amount > 20) {
      return (Math.round(amount * 0.05 * 100) / 100).toFixed(2);
    } else return 0.0;
  };

  const [promoError, setPromoError] = useState(false);

  const showError = () => {};

  let totalAmount = (amount - savings()).toFixed(2);
  return (
    <div className="container flex flex-col gap-6 ">
      <div className="summary border bg-[#EEEEEE]  w-[22rem] p-4">
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
      <div className="promo border bg-[#EEEEEE] w-[22rem] p-4">
        <h2>Promos</h2>
        <div className="flex justify-between">
          <input
            onChange={() => setPromoError(false)}
            className={`border-b-2 border-black focus:outline-none bg-inherit w-[60%] text-base p-2
            ${promoError ? "border-red-600" : ""}`}
            placeholder="Enter Promo Code"
            type="text"
            name=""
            id=""
          />
          <button
            onClick={() => setPromoError(true)}
            className="border border-black text-lg w-[6rem] h-[3rem]  bg-white
          hover:bg-black hover:text-white hover:border-white"
          >
            APPLY
          </button>
        </div>
        {promoError && (
          <p className="text-xs mt-3 text-red-600">
            The code entered is invalid or expired.
          </p>
        )}
      </div>
    </div>
  );
};

export default CartOrderSummary;
