import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="p-5 md:p-5">
      <div className="text-center mt-[40px] md:mt-[70px]">
        <p className="text-[32px] md:text-[50px] font-bold mb-[12px] md:mb-[20px]">
          About Us
        </p>
        <div className="flex gap-1 justify-center">
          <Link to="/homePage">
            <p className="text-[#9B9B9B] text-[16px] md:text-[20px]">
              Home /
            </p>
          </Link>
          <p className="text-[16px] md:text-[20px]">About Us</p>
        </div>
      </div>
      <div className="
        flex flex-col md:flex-row
        items-start md:items-center
        gap-[40px] md:gap-[100px]
        p-4 md:p-10
        mt-[50px] md:mt-[100px]
      ">
        {/* Left title */}
        <p className="
          text-[32px] md:text-[50px]
          font-bold
          w-full md:w-[300px]
          text-center md:text-left
        ">
          Where every drive feels extraordinary
        </p>

        {/* Right blocks */}
        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="w-full md:w-[420px] mb-[30px]">
            <p className="text-[22px] md:text-[28px] font-bold mb-[12px] md:mb-[20px]">
              Variety Brands
            </p>
            <p className="w-full md:w-[350px] text-[14px] md:text-[16px]">
              Platea non auctor fermentum sollicitudin. Eget adipiscing augue
              sit quam natoque ornare cursus viverra odio
            </p>
          </div>

          <div className="w-full md:w-[420px] mb-[30px]">
            <p className="text-[22px] md:text-[28px] font-bold mb-[12px] md:mb-[20px]">
              Awesome Suport
            </p>
            <p className="w-full md:w-[350px] text-[14px] md:text-[16px]">
              Eget adipiscing augue sit quam natoque ornare cursus viverra odio.
              Diam quam gravida ultricies velit
            </p>
          </div>

          <div className="w-full md:w-[420px] mb-[30px]">
            <p className="text-[22px] md:text-[28px] font-bold mb-[12px] md:mb-[20px]">
              Flexibility on the go
            </p>
            <p className="w-full md:w-[350px] text-[14px] md:text-[16px]">
              Vitae pretium nulla sed quam id nisl semper. Vel non in proin
              egestas dis.faucibus rhoncus. Iaculis dignissim aenean
              pellentesque nisl
            </p>
          </div>

          <div className="w-full md:w-[420px] mb-[30px]">
            <p className="text-[22px] md:text-[28px] font-bold mb-[12px] md:mb-[20px]">
              Maximum Freedom
            </p>
            <p className="w-full md:w-[350px] text-[14px] md:text-[16px]">
              Diam quam gravida ultricies velit duis consequat integer. Est
              aliquam posuere vel rhoncus massa volutpat in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}