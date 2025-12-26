import photo1 from "../../../assets/Img.png";

export default function ThirdSection() {
  return (
    <div className="p-5 mt-[40px] md:mt-[60px]">
      <div className="
    flex flex-col md:flex-row
    items-center md:items-start
    justify-between
    gap-10
  ">
        <img
          src={photo1}
          alt=""
          className="w-full md:w-auto max-w-[500px]"
        />
        <div>
          <div className="w-full md:w-[550px] mb-6 md:mb-[30px]">
            <div className="flex gap-[10px] mb-[20px]">
              <p className="py-[4px] px-[12px] rounded-[50px] bg-[#5937E0] text-white">
                1
              </p>
              <p className="text-[18px] md:text-[20px] font-bold">
                Erat at semper
              </p>
            </div>
            <p className="text-[#00000099] text-sm md:text-base">
              Non amet fermentum est in enim at sit ullamcorper. Sit elementum
              rhoncus nullam feugiat. Risus sem fermentum
            </p>
          </div>

          <div className="w-full md:w-[550px] mb-6 md:mb-[30px]">
            <div className="flex gap-[10px] mb-[20px]">
              <p className="py-[4px] px-[12px] rounded-[50px] bg-[#5937E0] text-white">
                2
              </p>
              <p className="text-[18px] md:text-[20px] font-bold">
                Urna nec vivamus risus duis arcu
              </p>
            </div>
            <p className="text-[#00000099] text-sm md:text-base">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
          </div>

          <div className="w-full md:w-[550px] mb-6 md:mb-[30px]">
            <div className="flex gap-[10px] mb-[20px]">
              <p className="py-[4px] px-[12px] rounded-[50px] bg-[#5937E0] text-white">
                3
              </p>
              <p className="text-[18px] md:text-[20px] font-bold">
                Lobortis euismod imperdiet tempus
              </p>
            </div>
            <p className="text-[#00000099] text-sm md:text-base">
              Viverra scelerisque mauris et nullam molestie et. Augue adipiscing
              praesent nisl cras nunc luctus viverra nisi
            </p>
          </div>

          <div className="w-full md:w-[550px]">
            <div className="flex gap-[10px] mb-[20px] items-center">
              <p className="py-[4px] px-[12px] rounded-[50px] bg-[#5937E0] text-white">
                4
              </p>
              <p className="text-[18px] md:text-[20px] font-bold">
                Cras nulla aliquet nam eleifend amet et
              </p>
            </div>
            <p className="text-[#00000099] text-sm md:text-base">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper sed integer. Quisque eleifend tincidunt vulputate
              libero
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
