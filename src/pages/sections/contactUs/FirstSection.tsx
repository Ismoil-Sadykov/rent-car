import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import img7 from "../../../assets/Img (7).png";
import logo from "../../../assets/Icon+bg (4).png";
import logo1 from "../../../assets/Icon+bg (1).png";
import logo2 from "../../../assets/Icon+bg (2).png";
import logo3 from "../../../assets/Icon+bg (3).png";

export default function FirstSection() {
  return (
    <div className="p-4 md:p-5">
      <div className="text-center mt-[50px] md:mt-[70px]">
        <p className="text-[32px] md:text-[50px] font-bold mb-[16px] md:mb-[20px]">
          Contact Us
        </p>
        <div className="flex flex-wrap gap-1 justify-center text-[14px] md:text-[20px]">
          <Link to="/homePage">
            <p className="text-[#9B9B9B]">Home / </p>
          </Link>
          <p>About Us</p>
        </div>
      </div>
      <div className="mt-[50px] md:mt-[150px] flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around">
        <div className="w-full md:w-[410px] bg-[#5937E0] text-white p-6 md:p-[40px] h-auto md:h-[580px] rounded-[16px] md:rounded-[20px] z-10">
          <p className="text-[20px] md:text-[28px] font-bold mb-6 md:mb-[32px] text-center">
            Book your car
          </p>
          {["Car type", "Place of rental", "Place of return", "Rental date", "Return date"].map((title, i) => (
            <Accordion
              key={i}
              disableGutters
              elevation={0}
              sx={{
                backgroundColor: "#694BE3",
                borderRadius: "14px",
                mb: i === 4 ? "24px" : "16px",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={i >= 3 ? <span>📅</span> : <ExpandMoreIcon />}
                sx={{
                  minHeight: { xs: "50px", md: "56px" },
                  px: { xs: "16px", md: "20px" },
                  "& .MuiAccordionSummary-content": { margin: 0 },
                }}
              >
                <Typography fontSize={{ xs: 14, md: 16 }} fontWeight={500} color="white">
                  {title}
                </Typography>
              </AccordionSummary>
            </Accordion>
          ))}
          <button className="w-full h-[48px] md:h-[52px] bg-orange-400 hover:bg-orange-500 rounded-[12px] md:rounded-[14px] text-white font-semibold text-[14px] md:text-[16px]">
            Book now
          </button>
        </div>
        <img src={img7} alt="" className="w-full md:w-auto" />
      </div>
      <div className="flex flex-wrap gap-6 md:gap-12 justify-center md:justify-around mt-[60px]">
        <div className="flex items-center gap-3">
          <img src={logo1} alt="" />
          <p className="text-[12px] md:text-sm">
            <b>Address</b>
            <br />
            Oxford Ave. Cary, NC 27511
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={logo2} alt="" />
          <p className="text-[12px] md:text-sm">
            <b>Email</b>
            <br />
            nwigar@yahoo.com
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={logo3} alt="" />
          <p className="text-[12px] md:text-sm">
            <b>Phone</b>
            <br />
            +537 547-6401
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={30} />
          <p className="text-[12px] md:text-sm">
            <b>Opening hours</b>
            <br />
            Sun-Mon: 10am - 10pm
          </p>
        </div>
      </div>
    </div>
  );
}
