import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTodo } from "../../../api/api";
import { Link } from "react-router-dom";
import photo from "../../../assets/car.jpg";
import logo1 from "../../../assets/gear-shift(1) 1.png";
import logo2 from "../../../assets/g17.png";
import logo3 from "../../../assets/g1593.png";
import log1 from "../../../assets/011-sedan.png";
import log2 from "../../../assets/039-cabriolet.png";
import log3 from "../../../assets/002-pickup.png";
import log4 from "../../../assets/012-suv.png";
import log5 from "../../../assets/034-minivan.png";
import Button from "@mui/material/Button";
import type { AppDispatch, RootState } from "../../../store/store";
import CircularProgress from "@mui/material/CircularProgress";
import logos from "../../../assets/Logos.png";

export default function FirstSection() {
  const { data, isLoading } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetTodo());
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="p-5 mt-[40px] md:mt-[60px]">
      <p className="text-[28px] md:text-[50px] font-bold text-center mb-[30px] md:mb-[50px]">
        Select a vehicle group
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-around gap-4 mb-[50px] md:mb-[100px]">
        <Button
          sx={{
            backgroundColor: "#5937E0",
            color: "white",
            fontWeight: 600,
            px: "16px",
            py: "4px",
            borderRadius: "50px",
            width: "148px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          All vehicles
        </Button>
        {[log1, log2, log3, log4, log5].map((logo, idx) => {
          const labels = ["Sedan", "Cabriolet", "Pickup", "Suv", "Minivan"];
          return (
            <Button
              key={idx}
              className="flex gap-[10px] items-center cursor-pointer"
              sx={{ color: "black" }}
            >
              <img src={logo} alt={labels[idx]} />
              <span className="font-semibold">{labels[idx]}</span>
            </Button>
          );
        })}
      </div>
      <div className="flex justify-center md:justify-between p-5 flex-wrap gap-6">
        {data?.map((car) => (
          <div
            key={car.id}
            className="w-full sm:w-[360px] md:w-[400px] p-[20px] md:p-[30px] rounded-[20px] shadow-[0px_0px_20px_grey] mb-6 md:mb-10"
          >
            <img
              src={photo}
              alt={car.title}
              className="w-full h-[240px] mb-[20px] rounded-[12px]"
            />

            <div className="flex justify-between items-center mb-[30px] md:mb-[40px]">
              <div>
                <p className="text-[20px] md:text-[24px] font-bold">{car.title}</p>
                <p className="text-[#00000099] text-sm md:text-base">{car.description}</p>
              </div>
              <div className="text-right">
                <p className="text-[#5937E0] text-[20px] md:text-[24px] font-bold">
                  ${car.pricePerHour}
                </p>
                <p className="text-[#00000099] text-sm md:text-base">Per Hour</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[30px] md:mb-[40px] gap-2 sm:gap-0">
              <div className="flex gap-[10px] items-center">
                <img src={logo1} alt="" />
                <p className="text-[#00000099] text-sm md:text-base">Automat</p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src={logo2} alt="" />
                <p className="text-[#00000099] text-sm md:text-base">PB 95</p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src={logo3} alt="" />
                <p className="text-[#00000099] text-sm md:text-base">Air Conditioner</p>
              </div>
            </div>

            <Link to={`/details/${car.id}`}>
              <button className="w-full bg-[#5937E0] text-white py-[10px] md:py-[13px] rounded-[12px] cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-[40px] md:mt-[60px] flex justify-center p-5 md:p-20">
        <img src={logos} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
}
