const Button = ({ border, text }) => {
  return (
    <button
      className={`${
        border ? "border" : "border-none"
      } h-[3.5rem] w-[10rem] bg-black  hover:bg-white hover:text-black transition-[.5s] 
      font-Poppins`}
    >
      {text}
    </button>
  );
};

export default Button;
