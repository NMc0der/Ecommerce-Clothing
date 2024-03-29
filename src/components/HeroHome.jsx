import fassionGirl from "../assets/PngItem_3977074.png";
import Button from "./Button";

const HeroHome = () => {
  return (
    <section className="min-h-[650px] bg-red-300 flex items-center justify-center px-5 text-white">
      <div className="self-end">
        <img src={fassionGirl} alt="" />
      </div>
      <div className="hero-text">
        <h2 className="font-Poppoins text-[2.5rem]">NEW ARRIVALS</h2>
        <h1 className="font-Courgette text-[3.5rem]">Summer Season!</h1>

        <Button border={false} text={"SHOP NOW"} />
      </div>
    </section>
  );
};

export default HeroHome;

{
  /* <p>The Season of Summer is here, so embrace it with the newest styles and      the latest trends next time you go out!{" "}  </p> */
}
