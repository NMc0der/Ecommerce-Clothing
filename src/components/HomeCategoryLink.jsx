const HomeCategoryLink = ({ list }) => {
  const item = list[Math.floor(Math.random() * list.length)];
  console.log(item);
  return (
    <div>
      {console.log(list)}
      <img src="" alt="" />
      <h3></h3>
    </div>
  );
};

export default HomeCategoryLink;
