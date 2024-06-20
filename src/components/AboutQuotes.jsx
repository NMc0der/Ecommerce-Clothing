import { Link } from "react-router-dom";

const AboutQuotes = () => {
  return (
    <div className="bg-[#FFEFEF]">
      <div className=" container mx-auto py-[5rem]  pt-[3rem]">
        <h2 className="font-[Garmond] text-center  text-6xl font-light italic mx-2 mb-[3rem]">
          what people are saying about us
        </h2>
        <div className="quotes lg:flex  lg:justify-center gap-4">
          <div
            className="border flex flex-col items-center justify-center gap-5 2xl:gap-8 my-[2rem] py-[6rem] px-7 
          tablet:text-xl md:text-3xl
        lg:text-3xl text-center lg:w-[30%] font-[Garmond] italic
        border-[#FFCBCB] border-double border-8 m-2"
          >
            <p>
              {
                '"The Shine community is what makes it an appealing brand to shop for. The various posts across social media let you know that you are apart of something greater."'
              }
            </p>
            <div
              className=" not-italic mt-[2rem] font-Poppins  w-fit hover:scale-110 duration-100 
          underline underline-offset-8 hover:no-underline "
            >
              <Link>VOGUE</Link>
            </div>
          </div>
          <div
            className="border-8 border-double flex flex-col items-center justify-center gap-5 my-[2rem] py-[6rem] px-7 
          tablet:text-xl md:text-3xl
        lg:text-3xl text-center lg:w-[30%] font-[Garmond] italic
        border-[#FFCBCB] m-2"
          >
            <p>
              {
                '"Shine has figured out how to remain competiteve in the hyper-competative world of apparel."'
              }
            </p>
            <div
              className=" not-italic mt-[2rem] font-Poppins  w-fit hover:scale-110 duration-100 
          underline underline-offset-8 hover:no-underline "
            >
              <Link>FORBES</Link>
            </div>
          </div>
          <div
            className="border-8 border-double flex flex-col items-center justify-center gap-5 my-[2rem] py-[6rem] px-7 
          tablet:text-xl md:text-3xl
        lg:text-3xl text-center lg:w-[30%] font-[Garmond] italic
        border-[#FFCBCB] m-2"
          >
            <p>
              {
                '"Shine and other upcoming brands are filling a demand in the marketplace by letting customers try products whitout the pressure of making a fast decision."'
              }
            </p>
            <div
              className=" not-italic mt-[2rem] font-Poppins  w-fit hover:scale-110 duration-100 
          underline underline-offset-8 hover:no-underline "
            >
              <Link>FAST COMPANY</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuotes;

// FFEAE3
