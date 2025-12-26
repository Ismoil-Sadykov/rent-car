import phone from "../../../assets/phone.png";
import buttons from "../../../assets/Buttons.png";

export default function SixthSection() {
  return (
    <div
      className="
    px-5 md:px-20
    flex flex-col md:flex-row
    justify-between
    items-center
    mt-[60px] md:mt-[100px]
    gap-10
  "
    >
      <div className="text-center md:text-left">
        <p
          className="
        text-[28px] md:text-[50px]
        font-bold
        w-full md:w-[310px]
        mb-[20px] md:mb-[40px]
      "
        >
          Download mobile app
        </p>

        <p
          className="
        text-[#00000099]
        w-full md:w-[480px]
        mb-[30px] md:mb-[60px]
        text-sm md:text-base
      "
        >
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna
        </p>

        <div className="flex justify-center md:justify-start">
          <img src={buttons} alt="" />
        </div>
      </div>
      <img
        src={phone}
        alt=""
        className="w-[260px] md:w-auto"
      />
    </div>
  );
}
