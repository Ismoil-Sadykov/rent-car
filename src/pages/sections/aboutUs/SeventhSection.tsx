import car from "../../../assets/Imgs.png";

export default function SeventhSection() {
  return (
    <div
      className="
        mt-[40px] md:mt-[60px]
        p-5 md:p-10
        bg-[#5937E0]
        m-2 md:m-5
        rounded-[16px] md:rounded-[20px]
        text-white
        flex flex-col md:flex-row
        items-center md:items-center
        justify-between
        gap-6 md:gap-0
        text-center md:text-left
      "
    >
      <div className="w-full md:w-auto">
        <p className="text-[32px] md:text-[50px] font-bold mb-[16px] md:mb-[24px]">
          Looking for a car?
        </p>
        <p className="text-[28px] md:text-[40px] font-semibold mb-[16px] md:mb-[24px]">
          +537 547-6401
        </p>
        <p className="w-full md:w-[500px] mb-[24px] md:mb-[40px] text-[14px] md:text-[16px]">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in
        </p>
        <button className="bg-[#FF9E0C] py-[10px] px-[20px] md:py-[13px] md:px-[28px] font-semibold rounded-[10px] md:rounded-[12px]">
          Book now
        </button>
      </div>
      <img
        src={car}
        alt=""
        className="w-full md:w-auto max-w-[400px]"
      />
    </div>
  );
}