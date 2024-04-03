import EmailSignUp from "./EmailSignUp";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <EmailSignUp />
      <div
        className="h-[200px] flex items-center justify-center [&>a]:text-[40px] [&>a]:m-6 
      [&>a]:cursor-pointer hover:[&>a]:text-[#FB9AD1]"
      >
        <Link to={"https://www.facebook.com/"}>
          <FaFacebookF />
        </Link>
        <Link to={"https://www.instagram.com/"}>
          <FaInstagram />
        </Link>
        <Link to={"https://twitter.com/?lang=en"}>
          <FaXTwitter />
        </Link>
        <Link to={"https://www.pinterest.com/"}>
          <FaPinterest />
        </Link>
        <Link to={"https://www.youtube.com/"}>
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
