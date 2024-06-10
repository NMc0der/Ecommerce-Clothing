import ceoPic1 from "../assets/AboutUs/tamara-bellis-eDVQwVMLMgU-unsplash.jpg";
("../assets/MidiDress/cn55589909.avif");
const AboutCeo = () => {
  return (
    <div className=" p-4 pt-36 grid flex justify-center pb-20">
      <h2>a note from our ceo</h2>
      <div className="ceo-img flex justify-center items-center  w-full">
        {/* <div
          className="border-red-500 h-[700px] w-[80%] border-2 bg-[#FFEAE3] absolute self-start  "
        ></div> */}

        <div className="h-[400px] w-[80%] bg-red-500 mb-6 absolute"></div>
        <img className=" h-[500px] relative" src={ceoPic1} alt="" />
      </div>
      <div className="ceo-note"></div>
    </div>
  );
};

export default AboutCeo;
