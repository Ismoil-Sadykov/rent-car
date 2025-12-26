import frame from "../../../assets/Frame 125.png";
import img from "../../../assets/Img.png";

export default function ThirdSection() {
  return (
    <div
      className="
        mt-[40px] md:mt-[60px]
        p-4 md:p-5
        flex flex-col md:flex-row
        justify-between
        items-center
        gap-10
      "
    >
      <div>
        <p
          className="
            text-[32px] md:text-[50px]
            font-bold
            mb-[20px] md:mb-[40px]
            w-full md:w-[600px]
            text-center md:text-left
          "
        >
          Unlock unforgettable memories on the road
        </p>
        <p
          className="
            text-[#00000099]
            mb-[20px] md:mb-[40px]
            w-full md:w-[600px]
            text-center md:text-left
          "
        >
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <div
          className="
            flex flex-col md:flex-row
            justify-around
            items-center md:items-start
            flex-wrap
          "
        >
          <div className="flex gap-[10px] w-full md:w-[350px] items-start mb-[30px] md:mb-[40px]">
            <img src={frame} alt="" />
            <p className="text-[#00000099]">
              Velit semper morbi. Purus non eu cursus porttitor tristique et
              gravida ...
            </p>
          </div>

          <div className="flex gap-[10px] w-full md:w-[350px] items-start mb-[30px] md:mb-[40px]">
            <img src={frame} alt="" />
            <p className="text-[#00000099]">
              Purus non eu cursus porttitor tristique et gravida. Quis nunc
              interdum
            </p>
          </div>

          <div className="flex gap-[10px] w-full md:w-[350px] items-start mb-[30px] md:mb-[40px]">
            <img src={frame} alt="" />
            <p className="text-[#00000099]">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor
            </p>
          </div>

          <div className="flex gap-[10px] w-full md:w-[350px] items-start mb-[30px] md:mb-[40px]">
            <img src={frame} alt="" />
            <p className="text-[#00000099]">
              Quis nunc interdum gravida ullamcorper
            </p>
          </div>
        </div>
      </div>

      <img
        src={img}
        alt=""
        className="w-full md:w-auto max-w-[500px]"
      />
    </div>
  );
}