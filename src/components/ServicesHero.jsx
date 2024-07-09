import hero from "../assets/Services/roberto-nickson-vRAYwESFc-U-unsplash.jpg";

const ServicesHero = () => {
  return (
    <div
      className=" h-[90vh] max-width-[100%]   
     bg-cover bg-heroServices2  flex lg:justify-end items-center "
    >
      <div className="text w-[80%] md:w-[25rem] xl:w-[40rem]  m-10 xl:m-[2rem] 2xl:m-[15rem]  font-[Garamond]">
        <h3 className="text-3xl xl:text-5xl font-[Poppins] m-2">
          YOUR PERFECT STYLE
        </h3>
        <h4 className="text-7xl xl:text-8xl m-2 font-bold">it's special</h4>
        <p className="m-2 mt-5 text-lg xl:text-3xl md:text-xl">
          At Shine, clothing and style are things that should be special. Shine
          offers styling Services where you can get in touch with a stylist who
          learns about you to recommend you your special style!
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;

// h-[90vh]

// bg-heroServices3

// border-black border-2
