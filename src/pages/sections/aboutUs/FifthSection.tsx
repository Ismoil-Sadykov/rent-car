import logo from "../../../assets/“.png";
import first from "../../../assets/Img (4).png";
import second from "../../../assets/Img (5).png";
import third from "../../../assets/Img (6).png";

export default function FifthSection() {
  return (
    <div className="p-4 md:p-5 mt-[60px] md:mt-[100px]">
      <p className="text-[32px] md:text-[50px] font-bold text-center">
        Reviews from our customers
      </p>
      <div
        className="
          flex flex-col md:flex-row
          items-center md:items-stretch
          gap-8 md:gap-0
          justify-between
          mt-[30px] md:mt-[40px]
        "
      >
        <div className="w-full md:w-[410px] p-6 md:p-10">
          <img src={logo} alt="" className="mb-[30px] md:mb-[40px] mx-auto" />
          <p className="text-center w-full md:w-[240px] mb-[60px] md:mb-[100px] m-auto">
            Et aliquet netus at sapien pellentesque mollis nec dignissim
            maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida
            neque
          </p>
          <div className="bg-[#5937E0] flex items-center flex-col py-[24px] h-[120px] justify-end rounded-bl-[20px] rounded-br-[20px]">
            <img src={first} alt="" className="mb-[12px]" />
            <p className="mb-[4px] text-[#FFFFFF99]">Kuphal LLC</p>
            <p className="text-white font-bold">Emanuel Boyle</p>
          </div>
        </div>
        <div className="w-full md:w-[410px] p-6 md:p-10">
          <img src={logo} alt="" className="mb-[30px] md:mb-[40px] mx-auto" />
          <p className="text-center w-full md:w-[240px] mb-[60px] md:mb-[100px] m-auto">
            Purus consectetur varius quis urna phasellus enim mattis. Sem
            tincidunt tortor nunc egestas amet adipiscing ligula
          </p>
          <div className="bg-[#5937E0] flex items-center flex-col py-[24px] h-[120px] justify-end rounded-bl-[20px] rounded-br-[20px]">
            <img src={second} alt="" className="mb-[12px]" />
            <p className="mb-[4px] text-[#FFFFFF99]">Glover - Orn</p>
            <p className="text-white font-bold">River Graves</p>
          </div>
        </div>
        <div className="w-full md:w-[410px] p-6 md:p-10">
          <img src={logo} alt="" className="mb-[30px] md:mb-[40px] mx-auto" />
          <p className="text-center w-full md:w-[240px] mb-[60px] md:mb-[100px] m-auto">
            Quam neque odio urna euismod felis. Sit egestas magna in quisque
            famesdapibus quis sapien magna. Nisl non eget sit pellentesque
            tristique et
          </p>
          <div className="bg-[#5937E0] flex items-center flex-col py-[24px] h-[120px] justify-end rounded-bl-[20px] rounded-br-[20px]">
            <img src={third} alt="" className="mb-[12px]" />
            <p className="mb-[4px] text-[#FFFFFF99]">Kuphal LLC</p>
            <p className="text-white font-bold">Emanuel Boyle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
