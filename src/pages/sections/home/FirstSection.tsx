import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import car from "../../../assets/Imgs.png";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { GetTodo } from "../../../api/api";

export default function FirstSection() {
  const { data } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch<AppDispatch>()

  const fieldStyle = {
    backgroundColor: "#F7F7F7",
    borderRadius: "14px",
    boxShadow: "none",
    "&:before": { display: "none" },
    marginBottom: "16px",
  };


  useEffect(() => {
    dispatch(GetTodo())
  }, [])

  return (
    <div className="relative flex flex-col md:flex-row bg-[#5937E0] rounded-[24px] md:rounded-[40px] w-full h-auto md:h-[660px] p-6 md:p-[72px] text-white justify-between items-center overflow-hidden">
      <div className="z-10 text-center md:text-left">
        <p className=" text-[32px] md:text-[60px] font-bold mb-6 md:mb-[27px] w-full md:w-[600px]">
          Experience the road like never before
        </p>
        <p className="
      w-full md:w-[400px]
      text-sm md:text-base
    ">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <button className="
      mt-6 md:mt-[32px]
      bg-[#FF9E0C]
      rounded-[12px]
      py-[13px]
      px-[28px]
    ">
          View all cars
        </button>
      </div>
      <div
        className="
        w-full md:w-[410px]
        bg-white text-black
        p-6 md:p-[40px]
        rounded-[20px]
        z-10
      "
      >
        <p className="
        text-[22px] md:text-[28px]
        font-bold
        mb-8
        text-center
      ">
          Book your car
        </p>
        <select className="px-3 outline-none cursor-pointer mb-[16px] md:w-[310px] w-[275px]">
          <option>Car Type</option>
          {data?.map((car, i) => (
            <option key={i} className="py-1 cursor-pointer">
              {car.title}
            </option>
          ))}
        </select>
        <Accordion sx={fieldStyle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>Place of rental</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>New York</p>
            <p>Los Angeles</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={fieldStyle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>Place of return</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>Same location</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={fieldStyle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>Rental date</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>Select date</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={fieldStyle}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>Return date</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>Select date</p>
          </AccordionDetails>
        </Accordion>

        <button
          className="
          w-full
          h-[52px]
          bg-orange-400 hover:bg-orange-500
          rounded-[14px]
          text-white
          font-semibold
          text-[16px]
          mt-4
        "
        >
          Book now
        </button>
      </div>
      <img
        src={car}
        alt=""
        className="
      hidden md:block
      absolute
      ml-[250px]
      mt-[320px]
    "
      />
    </div>
  );
}
