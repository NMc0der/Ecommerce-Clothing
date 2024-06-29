const ServicesHosting = () => {
  return (
    <div className="bg-[#F5F7F8] py-[3rem] px-3 flex flex-col items-center">
      <div className="text text-center">
        <h3 className="font-[Poppins] text-2xl">BENFITS OF HOSTING</h3>
        <p className="text-lg pt-2 font-[Garamond]">
          Save 50% off and more on your favorite styles!
        </p>
      </div>
      <div className="table mt-[4rem] text-center p-2 bg-[#EEEDEB]">
        <table className="border-separate border-spacing-3 font-[Poppins]">
          <thead>
            <tr>
              <td>SHOW SALES</td>
              <td>ITEMS 50% OFF</td>
              <td>SHINE CREDITS</td>
            </tr>
          </thead>
          <tbody className="bg-white [&>td]:[&>tr]:p-4">
            <tr>
              <td>$200</td>
              <td>1</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>$400</td>
              <td>2</td>
              <td rowSpan={2}>$30</td>
            </tr>
            <tr>
              <td>$600</td>
              <td>3</td>
            </tr>
            <tr>
              <td>$800</td>
              <td>5</td>
              <td rowSpan={2}>$45</td>
            </tr>
            <tr>
              <td>$1,000</td>
              <td>6</td>
            </tr>
            <tr>
              <td>$1,200</td>
              <td>7</td>
              <td rowSpan={2}>$60</td>
            </tr>
            <tr>
              <td>$1,400</td>
              <td>8</td>
            </tr>
            <tr>
              <td>$1,600</td>
              <td>9</td>
              <td rowSpan={2}>$75</td>
            </tr>
            <tr>
              <td>$1,800</td>
              <td>10</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="mb-5">
                  For every $200 over $1,000 sold, you'll recieve another item
                  50% off.
                </p>
                <p>
                  For every $400 spent, you'll recieve $30 in shine credits-and
                  when they add up, you can get items for free!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesHosting;
