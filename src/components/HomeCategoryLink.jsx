const HomeCategoryLink = ({ list, type }) => {
  const item = list[Math.floor(Math.random() * list.length)];
  console.log(item);
  return (
    <div
      className=" border border-[2px]  tracking-widest
    h-[400px] max-w-[300px] text-center font-[Garmond]  bg-white flex justify-center  "
    >
      {console.log(list)}
      <div className="hover:scale-[1.02] duration-300  bg-white h-full w-full hover:border-[2px] hover:border-black">
        <img
          className="h-[350px] w-[300px] duration-400 "
          src={item.image}
          alt=""
        />
        <h3 className="mt-2">Shop {type}</h3>
      </div>
    </div>
  );
};

export default HomeCategoryLink;

// hover:scale-[1.02]

// border-black border-[2px]
