import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import React, { useState } from "react";

const ServicesForm = () => {
  const [errors, setErrors] = useState({ email: "" });
  const [nameErrors, setNameErrors] = useState({ name: "" });
  const [lastErrors, setLastErrors] = useState({ last: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[1].value);
    if (e.target[1].value === "" || e.target[1].value == null) {
      console.log("yooo");
      return setNameErrors({
        ...nameErrors,
        name: "First name is required",
      });
    } else {
      console.log("working");
      console.log(errors.name);
      setNameErrors({
        ...nameErrors,
        name: "",
      });
      console.log(errors.name);
    }

    if (e.target[2].value === "" || e.target[2].value == null) {
      console.log("yooo");
      return setLastErrors({
        ...lastErrors,
        last: "Last name is required",
      });
    } else {
      console.log("working");
      console.log(errors.name);
      setLastErrors({
        ...lastErrors,
        last: "",
      });
      console.log(errors.name);
    }

    console.log(errors);

    if (!e.target[3].value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
      return setErrors({
        ...errors,
        email: "Please enter a valid email address.",
      });
    } else {
      console.log("wassup");
      setErrors({
        ...errors,
        email: "",
      });
    }

    console.log("important");
  };

  return (
    <div className="mx-auto container  p-3">
      <h2 className="font-[Garmond] text-center text-4xl m-[1.5rem]">
        Connect with a Personsal Stylist
      </h2>
      <div>
        <form
          className="flex flex-col font-[Garmond] mb-10"
          action=""
          onSubmit={handleSubmit}
        >
          <h4 className="font-semibold mt-[1rem]">
            WHAT ARE YOU INTERESTED IN?
          </h4>

          <select
            name=""
            id=""
            className="border-2 border-gray-500 p-[.75rem]  px-4 py-3 mb-3  text-lg"
          >
            <option className="" value="">
              Purchasing With a Stylist
            </option>
            <option value="">Hosting Service</option>
          </select>
          <label className="mt-3 font-semibold text-lg" htmlFor="first">
            First Name
            {nameErrors.name && (
              <span className="text-red-500 text-sm lg:text-base ml-3">
                {nameErrors.name}
              </span>
            )}
          </label>
          <input
            placeholder="First Name"
            className="border-2 border-gray-500 p-[.75rem] mb-3 px-4  text-lg outline-none "
            type="text"
            name="first"
            id="first"
          />
          <label className="mt-3 font-semibold text-lg" htmlFor="last">
            Last Name
            {lastErrors.last && (
              <span className="text-red-500 text-sm lg:text-base ml-3">
                {lastErrors.last}
              </span>
            )}
          </label>
          <input
            placeholder="Last Name"
            className="border-2 border-gray-500 p-[.75rem] mb-3 px-4  text-lg outline-none "
            type="text"
            name="last"
            id="last"
          />
          <label className="mt-3 font-semibold text-lg" htmlFor="email">
            Email Address
            {errors.email && (
              <span className="text-red-500 text-sm lg:text-base ml-3">
                {errors.email}
              </span>
            )}
          </label>
          <input
            placeholder="Email"
            className="border-2 border-gray-500 p-[.75rem] mb-3 px-4  text-lg outline-none "
            type="text"
            name="email"
            id="email"
          />
          <label className="mt-3 font-semibold text-lg" htmlFor="phone">
            Phone Number{" "}
            <span className="text-gray-400 text-base ml-1">{"(Optional)"}</span>
          </label>
          <input
            placeholder="Daytime Phone Number"
            className="border-2 border-gray-500 p-[.75rem] mb-3 px-4  text-lg outline-none "
            type="phone"
            name="phone"
            id="phone"
          />
          <div className="email-sign-up-box flex gap-3 mt-6 mb-6 ">
            <label htmlFor="check-box-1" className="flex relative">
              <input
                className={` h-6 w-6 appearance-none border bg-[#d5d5d5] cursor-pointer after:content-['']
              after:bg-url('')`}
                type="checkbox"
                name="check"
                id="check-box-1"
              />
              <FontAwesomeIcon
                icon={faCheck}
                className="text-2xl h-6 w-6 absolute  text-green-500 text-opacity-0 check-1 transition"
              />
            </label>
            <p className="bg-white text-lg">
              Sign me up for exclusive emails on the latest fashion news, events
              and announcements!
            </p>
          </div>
          <button
            className="h-[3.5rem] w-[13rem] bg-black text-white mt-3 
           hover:bg-white hover:text-black transition-[.5s] font-Poppins border border-black text-lg"
          >
            GET ME STARTED
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesForm;

{
  /* <select name="services-select" id="services-select">
            <option value="">Hosting</option>
            <option value="">Purchasing With a Stylist</option>
          </select> */
}

// <input className="w-full h-[2.5rem]" type="text" name="" id="" />
//           <label htmlFor="services-select"></label>

// bg-slate-400

{
  /* <Button border={true} text={"get me started"} /> */
}
