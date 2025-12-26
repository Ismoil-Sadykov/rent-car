import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useEffect } from "react";
import { GetTodo } from "../../../api/api";
import photo from "../../../assets/car.jpg";
import logo1 from "../../../assets/gear-shift(1) 1.png";
import logo2 from "../../../assets/g17.png";
import logo3 from "../../../assets/g1593.png";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function FourthSection() {
  const { data, isLoading } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodo());
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-between p-5 flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-[400px] p-[30px] rounded-[20px] shadow-[0px_0px_20px_grey] mb-10"
          >
            <Skeleton
              variant="rectangular"
              width={360}
              height={240}
              sx={{ borderRadius: "12px", mb: "20px" }}
            />
            <div className="flex justify-between items-center mb-[40px]">
              <div>
                <Skeleton variant="text" width={180} height={30} />
                <Skeleton variant="text" width={140} />
              </div>
              <div>
                <Skeleton variant="text" width={80} height={30} />
                <Skeleton variant="text" width={60} />
              </div>
            </div>
            <div className="flex justify-between items-center mb-[40px]">
              <Skeleton variant="rounded" width={90} height={24} />
              <Skeleton variant="rounded" width={70} height={24} />
              <Skeleton variant="rounded" width={120} height={24} />
            </div>
            <Skeleton
              variant="rounded"
              width="100%"
              height={48}
              sx={{ borderRadius: "12px" }}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="p-5 mt-[40px] md:mt-[60px]">
      <div>
        <div
          className="
        flex flex-col md:flex-row
        items-start md:items-end
        justify-between
        mb-[40px] md:mb-[60px]
        px-0 md:px-10
        mt-[40px] md:mt-[100px]
        gap-4
      "
        >
          <p className="
        text-[28px] md:text-[50px]
        font-bold
        w-full md:w-[550px]
      ">
            Choose the car that suits you
          </p>
          <p className="font-bold cursor-pointer">
            View All
          </p>
        </div>
        <div className="
      flex justify-center md:justify-between
      gap-6
      p-0 md:p-5
      flex-wrap
    ">
          {data?.map((car) => (
            <div
              key={car.id}
              className="
            w-full sm:w-[340px] md:w-[400px]
            p-6 md:p-[30px]
            rounded-[20px]
            shadow-[0px_0px_20px_grey]
            mb-6 md:mb-10
          "
            >
              <img
                src={photo}
                alt={car.title}
                className="
              w-full md:w-[360px]
              h-[200px] md:h-[240px]
              mb-[20px]
              rounded-[12px]
              object-cover
            "
              />
              <div className="flex justify-between items-center mb-[30px] md:mb-[40px]">
                <div>
                  <p className="text-[20px] md:text-[24px] font-bold">
                    {car.title}
                  </p>
                  <p className="text-[#00000099] text-sm md:text-base">
                    {car.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#5937E0] text-[20px] md:text-[24px] font-bold">
                    ${car.pricePerHour}
                  </p>
                  <p className="text-[#00000099] text-sm">
                    Per Hour
                  </p>
                </div>
              </div>
              <div className="
            flex flex-col sm:flex-row
            justify-between
            gap-3
            mb-[30px] md:mb-[40px]
          ">
                <div className="flex gap-[10px] items-center">
                  <img src={logo1} alt="" />
                  <p className="text-[#00000099]">Automat</p>
                </div>
                <div className="flex gap-[10px] items-center">
                  <img src={logo2} alt="" />
                  <p className="text-[#00000099]">PB 95</p>
                </div>
                <div className="flex gap-[10px] items-center">
                  <img src={logo3} alt="" />
                  <p className="text-[#00000099]">Air Conditioner</p>
                </div>
              </div>
              <Link to={`/details/${car.id}`}>
                <button className="
              w-full
              bg-[#5937E0]
              text-white
              py-[13px]
              rounded-[12px]
              cursor-pointer
            ">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
