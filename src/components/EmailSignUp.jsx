import React, { useState } from "react";
import Button from "./Button";

const EmailSignUp = () => {
  const [signedUp, setSignedUp] = useState(4);

  return (
    <div className="text-white bg-black h-[350px] flex  flex-col items-center justify-around py-4">
      <form
        action=""
        className="flex flex-col items-center justify-around mx-[8rem] h-[350px] w-[50%] xl:w-[30%]"
      >
        <h2 className="text-xl sm:text-3xl font-EB font-Garamond italic">
          Stay in the Know!
        </h2>
        <p className="font-Garamond text-sm sm:text-base md:text-xl">
          Join the Shine email list and get all the latest fashion news and new
          style inspiration straight to your inbox.
        </p>
        <input
          className="w-full h-10  border-b-2 border-b-white  bg-black focus:outline-none 
          placeholder:text-xl placeholder:font-Garamond placeholder:italic"
          placeholder="Email Address"
          type="text"
          name=""
          id=""
        />
        <Button border={true} text={"SIGN UP"} />
      </form>
    </div>
  );
};

export default EmailSignUp;
