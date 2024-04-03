import React, { useState } from "react";
import Button from "./Button";

const EmailSignUp = () => {
  const [signedUp, setSignedUp] = useState({
    h2: "Stay in the Know!",
    text: "Join the Shine email list and get all the latest fashion news and new style inspiration straight to your inbox.",
  });

  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState({ email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // setEmailErrors({email: '', password: ''});
    if (!email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
      console.log("hi");
      setEmailErrors({
        ...emailErrors,
        email:
          "This doesn't appear to be a valid email address. Please double-check the email and try again.",
      });
      setSignedUp({
        ...signedUp,
        h2: "Stay in the Know!",
        text: "Join the Shine email list and get all the latest fashion news and new style inspiration straight to your inbox.",
      });
    } else {
      setSignedUp({
        ...signedUp,
        h2: "Thank you for signing up!",
        text: "You'll now start reciveing the latest fashion news and new style inspiration straight to your inbox!",
      });
      setEmailErrors({
        ...emailErrors,
        email: "",
      });
    }
  }

  return (
    <div className="text-white bg-black h-[350px] flex  flex-col items-center justify-around py-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center justify-around mx-[8rem] h-[350px] w-[70%] sm:w-[50%] xl:w-[30%]"
      >
        <h2 className="text-xl sm:text-3xl font-EB font-Garamond italic">
          {signedUp.h2}
        </h2>
        <p className="font-Garamond text-sm sm:text-base md:text-xl">
          {signedUp.text}
        </p>
        <input
          className={`w-full h-10  border-b-2  ${
            emailErrors.email ? "border-b-[#E72929]" : "border-b-white"
          } 
            bg-black focus:outline-none 
          placeholder:text-xl placeholder:font-Garamond placeholder:italic`}
          placeholder="Email Address"
          type="text"
          name=""
          id="sign-up-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.email && (
          <div className="text-sm font-Garamond text-[#E72929] sm:text-base md:text-xl">
            {emailErrors.email}
          </div>
        )}
        {/* <span className="email-error"></span> */}
        <Button border={true} text={"SIGN UP"} />
      </form>
    </div>
  );
};

export default EmailSignUp;
