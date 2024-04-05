import { Link } from "react-router-dom";

Link;

const HomeHashtag = () => {
  return (
    <div className="h-[200px] flex flex-col items-center p-4 gap-4 font-Poppins px-[10%] text-center justify-center">
      <h2 className="tablet:text-2xl">FEELING #Shiny</h2>
      <p className="font-Garamond text-sm tablet:text-xl">
        We love to see it! Find inspiration for new outfit combinations from
        some of our most stylish fans.
      </p>
      <Link
        to={"https://www.instagram.com/"}
        className="decoration-1 underline text-sm tablet:text-xl hover:scale-110 duration-75"
      >
        <span> Follow @ShineCLOTHING</span>
      </Link>
    </div>
  );
};

export default HomeHashtag;
