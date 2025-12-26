import poster from "../../../assets/iiii.png";

export default function SecondSection() {
  return (
    <div className="p-4 md:p-10 mt-[40px] md:mt-[60px]">
      <div>
        <img
          src={poster}
          alt=""
          className="w-full object-cover rounded-[20px]"
        />
      </div>

      <div className="
        mt-[40px] md:mt-[60px]
        flex flex-col md:flex-row
        gap-8 md:gap-0
        justify-around
        text-center
      ">
        <div>
          <p className="text-[48px] md:text-[80px] font-bold text-[#5937E0]">
            20k+
          </p>
          <p className="text-[16px] md:text-[20px] font-bold">
            Happy customers
          </p>
        </div>

        <div>
          <p className="text-[48px] md:text-[80px] font-bold text-[#5937E0]">
            540+
          </p>
          <p className="text-[16px] md:text-[20px] font-bold">
            Count of cars
          </p>
        </div>

        <div>
          <p className="text-[48px] md:text-[80px] font-bold text-[#5937E0]">
            25+
          </p>
          <p className="text-[16px] md:text-[20px] font-bold">
            Years of experince
          </p>
        </div>
      </div>
    </div>
  );
}