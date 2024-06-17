import { Link } from "react-router-dom";

const AboutMember = ({ pic, name, title, social }) => {
  return (
    <div className="w-[130px] tablet:w-[200px] text-center">
      <img className="h-[200px] tablet:h-[300px] " src={pic} alt="" />
      <h4>{name}</h4>
      <h4>{title}</h4>
      {social && (
        <Link className="underline" to={"https://www.instagram.com/"}>
          {social}
        </Link>
      )}
    </div>
  );
};

export default AboutMember;
