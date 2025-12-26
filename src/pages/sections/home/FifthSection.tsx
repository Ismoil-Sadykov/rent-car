import log1 from "../../../assets/Icon+bg.png";
import img from "../../../assets/Img (1).png";

export default function FifthSection() {
  return (
    <div className="
  relative
  p-5
  bg-[#5937E0]
  rounded-[20px]
  py-[50px] md:py-[70px]
  px-6 md:px-[72px]
  mt-[60px] md:mt-[100px]
  overflow-hidden
">
      <img
        src={img}
        alt=""
        className="
      absolute inset-0 z-0 opacity-20
      hidden md:block
      ml-[300px] mt-[100px]
    "
      />

      <div className="relative z-10">
        <p className="
      text-center
      text-white
      font-bold
      text-[32px] md:text-[50px]
      mb-5
    ">
          Facts in numbers
        </p>

        <p className="
      text-white
      mx-auto
      text-center
      mb-[50px] md:mb-[80px]
      w-full md:w-[650px]
      text-sm md:text-base
    ">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
          fermentum
        </p>
        <div className="
      flex flex-col sm:flex-row
      flex-wrap
      justify-center md:justify-between
      gap-4 md:gap-0
    ">
          <div className="flex gap-[8px] items-center bg-white p-4 md:p-5 rounded-[20px] w-full sm:w-[240px]">
            <img src={log1} alt="" />
            <div>
              <p className="text-[20px] md:text-[24px] font-bold mb-[6px] md:mb-[10px]">
                540+
              </p>
              <p className="font-semibold text-[#00000099]">
                Cars
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center bg-white p-4 md:p-5 rounded-[20px] w-full sm:w-[240px]">
            <img src={log1} alt="" />
            <div>
              <p className="text-[20px] md:text-[24px] font-bold mb-[6px] md:mb-[10px]">
                20k+
              </p>
              <p className="font-semibold text-[#00000099]">
                Customers
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center bg-white p-4 md:p-5 rounded-[20px] w-full sm:w-[240px]">
            <img src={log1} alt="" />
            <div>
              <p className="text-[20px] md:text-[24px] font-bold mb-[6px] md:mb-[10px]">
                25+
              </p>
              <p className="font-semibold text-[#00000099]">
                Years
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center bg-white p-4 md:p-5 rounded-[20px] w-full sm:w-[240px]">
            <img src={log1} alt="" />
            <div>
              <p className="text-[20px] md:text-[24px] font-bold mb-[6px] md:mb-[10px]">
                20m+
              </p>
              <p className="font-semibold text-[#00000099]">
                Miles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
