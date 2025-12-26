import photo from "../../../assets/Img (8).png";
import logos from "../../../assets/Logos.png";

export default function SecondSection() {
  return (
    <div className="mt-[60px] md:mt-[100px] p-4 md:p-5">
      <p className="text-[32px] md:text-[50px] font-bold text-center mb-6 md:mb-[40px]">
        Latest blog posts & news
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between p-2 md:p-5">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center md:items-start w-full md:w-[30%]">
            <img src={photo} alt={`Blog ${item}`} className="mb-4 md:mb-[20px] w-full rounded-md" />
            <p className="text-[16px] md:text-[20px] font-bold mb-2 md:mb-[20px] text-center md:text-left">
              How to choose the right car
            </p>
            <p className="text-[#00000099] text-[12px] md:text-[14px] text-center md:text-left">
              News / 12 April 2024
            </p>
          </div>
        ))}
      </div>

      <img src={logos} alt="Logos" className="mt-[60px] md:mt-[100px] mb-[40px] w-full" />
    </div>
  );
}