import photoCar from "../../../assets/car(3) 1.png";

export default function SeventhSection() {
  return (
    <div
      className="
    bg-[#5937E0]
    rounded-[20px]
    py-[40px] md:py-[58px]
    px-5 md:px-[86px]
    text-white
    flex flex-col md:flex-row
    justify-between
    items-center
    gap-10
  "
    >
      <div className="text-center md:text-left">
        <p
          className="
        text-[28px] md:text-[50px]
        font-bold
        w-full md:w-[700px]
        mb-[20px] md:mb-[50px]
      "
        >
          Enjoy every mile with adorable companionship.
        </p>

        <p
          className="
        w-full md:w-[500px]
        mb-[24px] md:mb-[40px]
        text-sm md:text-base
      "
        >
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat
        </p>

        <div
          className="
        bg-white
        w-full md:w-[450px]
        rounded-[20px]
        h-[56px] md:h-[60px]
        p-3 md:p-4
        flex items-center justify-between
        gap-2
      "
        >
          <input
            type="search"
            placeholder="City"
            className="
          border-none
          outline-none
          text-black
          text-[16px] md:text-[18px]
          w-full md:w-[300px]
        "
          />
          <button
            className="
          bg-[#FF9E0C]
          font-bold
          px-[20px] md:px-[28px]
          py-[6px] md:py-[8px]
          rounded-[12px]
          cursor-pointer
          whitespace-nowrap
        "
          >
            Search
          </button>
        </div>
      </div>
      <img
        src={photoCar}
        alt=""
        className="w-[260px] md:w-auto"
      />
    </div>
  );
}
