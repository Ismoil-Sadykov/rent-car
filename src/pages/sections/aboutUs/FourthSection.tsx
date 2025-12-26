import phone from "../../../assets/Img (3).png";
import button from "../../../assets/Buttons (1).png";

export default function FourthSection() {
  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center md:items-end
        bg-[#5937E0]
        rounded-[24px] md:rounded-[40px]
        py-[40px] md:py-[80px]
        px-[20px] md:px-[135px]
        gap-[40px] md:gap-[120px]
        h-auto md:h-[440px]
        mt-[120px] md:mt-[250px]
        text-center md:text-left
      "
    >
      <img
        src={phone}
        alt=""
        className="w-[200px] md:w-auto"
      />

      <div>
        <p className="text-white mb-[10px] text-[16px] md:text-[20px]">
          Download our app
        </p>

        <p className="text-[32px] md:text-[50px] font-bold mb-[20px] md:mb-[40px] text-white">
          Download our app
        </p>

        <p className="
          text-white
          w-full md:w-[600px]
          mb-[20px] md:mb-[40px]
          text-[14px] md:text-[16px]
        ">
          Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
          semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
          vulputate. Nulla nam eget urna fusce vulputate at risus
        </p>

        <img
          src={button}
          alt=""
          className="mx-auto md:mx-0"
        />
      </div>
    </div>
  );
}