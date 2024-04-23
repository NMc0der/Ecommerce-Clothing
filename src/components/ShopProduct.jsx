const ShopProduct = ({ name, price, image, image2 }) => {
  const mouseOver = (e) => {
    console.log(e.target.src);
    return (e.target.src = image2);
  };
  const mouseOut = (e) => {
    return (e.target.src = image);
  };

  return (
    <div className="h-[500px] w-[300px] border flex flex-col items-center font-Garamond font-semibold">
      <img
        className="h-auto w-auto "
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        src={image}
        alt=""
      />
      {/* <div
        className={`img h-[400px] w-full bg-cover bg-center bg-no-repeat bg-[image:var(${image})] `}
      ></div> */}
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ShopProduct;

// style={{ backgroundImage: `url(${image})` }}
