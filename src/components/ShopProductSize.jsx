const ShopPrdouctSize = ({ size }) => {
  return (
    <div className="w-[4rem]">
      <input
        onClick={(e) => console.log(e)}
        className="hidden peer"
        type="radio"
        name="size"
        id={size}
      />
      <label
        htmlFor={size}
        className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">
          <p className="w-full text-lg font-semibold">{size.toUpperCase()}</p>
        </div>
      </label>
    </div>
  );
};

export default ShopPrdouctSize;
