import logo from '../../../assets/location 1.png'
import logo1 from '../../../assets/car(2) 1.png'
import logo2 from '../../../assets/wallet(1) 1.png'

export default function SecondSection() {
  return (
    <div className=" flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 p-5 mt-[30px] md:mt-[50px ">
      <div className="flex flex-col items-center w-full md:w-[360px]">
        <img src={logo} alt="" className="mb-4" />
        <p className="text-[20px] md:text-[24px] font-semibold mb-4 md:mb-[30px]">
          Availability
        </p>
        <p className="text-center text-sm md:text-base">
          Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
        </p>
      </div>

      <div className="flex flex-col items-center w-full md:w-[360px]">
        <img src={logo1} alt="" className="mb-4" />
        <p className="text-[20px] md:text-[24px] font-semibold mb-4 md:mb-[30px]">
          Comfort
        </p>
        <p className="text-center text-sm md:text-base">
          Gravida auctor fermentum morbi vulputate ac egestas orcietium
          convallis
        </p>
      </div>

      <div className="flex flex-col items-center w-full md:w-[360px]">
        <img src={logo2} alt="" className="mb-4" />
        <p className="text-[20px] md:text-[24px] font-semibold mb-4 md:mb-[30px]">
          Savings
        </p>
        <p className="text-center text-sm md:text-base">
          Pretium convallis id diam sed commodo vestibulum lobortis volutpat
        </p>
      </div>
    </div>

  );
}
