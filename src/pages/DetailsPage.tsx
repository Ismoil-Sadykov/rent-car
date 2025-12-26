import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { GetCarById, GetReservationsByCarId, PostReservation } from "../api/api";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import photo from "../assets/car.jpg";
import log1 from "../assets/gear-shift(1) 1.png";
import log2 from "../assets/g17 (1).png";
import log3 from "../assets/g3353.png";
import log4 from "../assets/Mask group (2).png";
import log5 from "../assets/free-icon-distance-9709725 1.png";
import frame from "../assets/Frame 125.png";
import logo2 from "../assets/g17.png";
import logo3 from "../assets/g1593.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import { clearError } from "../store/carStore";


export default function DetailsPage() {
  const { id } = useParams();
  const { infoData, isLoading, data, error, busyDates } = useSelector(
    (state: RootState) => state.counter
  );
  console.log(infoData);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRange(undefined)
  };

  const handleRent = async () => {
    if (!range?.from || !range?.to) return;
    setLoading(true);
    try {
      const result = await dispatch(
        PostReservation({
          carId: Number(id),
          startDate: range.from.toISOString(),
          endDate: range.to.toISOString(),
        })
      );
      if (result.error) {
        return;
      }
      handleClose();
      setSuccess(true)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(GetCarById(Number(id)))
      dispatch(GetReservationsByCarId(Number(id)));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="text-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="p-5 md:p-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <p className="text-[28px] md:text-[40px] font-bold mb-[20px] md:mb-[35px]">{infoData?.title}</p>
          <p className="text-[#5937E0] font-bold text-[28px] md:text-[40px] mb-[20px] md:mb-[34px]">
            ${infoData?.pricePerHour}
            <span className="text-[#00000099] text-[14px] md:text-[16px] font-normal">/hour</span>
          </p>
          <img
            src={photo}
            alt=""
            className="w-full h-[300px] md:h-[300px] mb-5 md:mb-10 rounded-[12px]"
          />
          <div className="flex gap-2 md:gap-[24px] overflow-x-auto pb-2">
            {[photo, photo, photo].map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt=""
                className="w-[100px] sm:w-[140px] h-[70px] sm:h-[100px] rounded-[12px] flex-shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[20px] md:text-[24px] font-bold mb-6 md:mb-[100px]">Technical Specification</p>
          <div className="flex flex-wrap gap-4 md:gap-[20px]">
            {[
              { icon: log1, title: "Gear Box", value: "Automat" },
              { icon: log2, title: "Fuel", value: "Petrol" },
              { icon: log3, title: "Doors", value: "2" },
              { icon: log1, title: "Air Conditioner", value: "Yes" },
              { icon: log4, title: "Seats", value: "5" },
              { icon: log5, title: "Distance", value: "500" },
            ].map((spec, idx) => (
              <div key={idx} className="w-[140px] sm:w-[200px] bg-gray-200 p-4 sm:p-6 rounded-[10px]">
                <img src={spec.icon} alt="" className="mb-2 sm:mb-[20px]" />
                <p className="font-semibold mb-1 sm:mb-[20px]">{spec.title}</p>
                <p className="text-[#00000099] text-sm sm:text-base">{spec.value}</p>
              </div>
            ))}
          </div>
          <Button
            sx={{
              mt: 6,
              width: "100%",
              maxWidth: "290px",
              height: "50px",
              backgroundColor: "#5937E0",
              fontWeight: 600,
              color: "white",
              borderRadius: "12px",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          >
            Rent a car
          </Button>
          <div className="mt-8 md:mt-[64px]">
            <p className="text-[20px] md:text-[24px] font-bold mb-4 md:mb-[40px]">Car Equipment</p>
            <div className="flex flex-col sm:flex-row gap-6">
              {[["ABS", "Air Bags", "Cruise Control"], ["ABS", "Air Bags", "Air Conditioner"]].map((group, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {group.map((item, i) => (
                    <div key={i} className="flex gap-2 sm:gap-[20px] items-center">
                      <img src={frame} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                      <p className="text-[#00000099] text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-[100px]">
        <div className="flex justify-between items-end mb-8 md:mb-[100px]">
          <p className="text-[28px] md:text-[50px] font-bold">Other cars</p>
          <p className="font-bold cursor-pointer">View All</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-10">
          {data?.map((car) => (
            <div key={car.id} className="w-full sm:w-[360px] md:w-[400px] p-[20px] md:p-[30px] rounded-[20px] shadow-[0px_0px_30px_grey]">
              <img
                src={photo}
                alt={car.title}
                className="w-full h-[200px] md:h-[240px] mb-[20px] rounded-[12px] object-cover"
              />
              <div className="flex justify-between items-center mb-[30px] md:mb-[40px]">
                <div>
                  <p className="text-[20px] md:text-[24px] font-bold">{car.title}</p>
                  <p className="text-[#00000099] text-sm md:text-base">{car.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#5937E0] text-[20px] md:text-[24px] font-bold">${car.pricePerHour}</p>
                  <p className="text-[#00000099] text-sm md:text-base">Per Hour</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[30px] md:mb-[40px] gap-2 sm:gap-0">
                <div className="flex gap-2 sm:gap-[10px] items-center">
                  <img src={log1} alt="" />
                  <p className="text-[#00000099] text-sm md:text-base">Automat</p>
                </div>
                <div className="flex gap-2 sm:gap-[10px] items-center">
                  <img src={logo2} alt="" />
                  <p className="text-[#00000099] text-sm md:text-base">PB 95</p>
                </div>
                <div className="flex gap-2 sm:gap-[10px] items-center">
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
      </div>
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "px" }} > <DialogTitle sx={{ fontWeight: "700", textAlign: "center" }}>Rent this car</DialogTitle> <DialogContent> <DayPicker mode="range" selected={range} onSelect={setRange} fromDate={new Date()} className="rounded-xl" disabled={busyDates} /> {range?.from && range?.to && (<p className="mt-4 text-center text-sm text-gray-600"> Selected:{" "} <b> {range.from.toLocaleDateString()} –{" "} {range.to.toLocaleDateString()} </b> </p>)} </DialogContent> <DialogActions> <Button onClick={handleClose}>Cancel</Button> <Button onClick={handleRent} disabled={!range?.from || !range?.to || loading} variant="contained" > {loading ? "Loading..." : "Rent"} </Button> </DialogActions> </Dialog> <Dialog open={Boolean(error)} onClose={() => { }}> <DialogTitle sx={{ textAlign: "center", fontWeight: 700 }}> Reservation error </DialogTitle> <DialogContent> <p className="text-center text-red-600 font-semibold"> {error} </p> </DialogContent> <DialogActions> <Button onClick={() => dispatch(clearError())} variant="contained" > OK </Button> </DialogActions> </Dialog> <Dialog open={success} onClose={() => setSuccess(false)}> <DialogTitle sx={{ textAlign: "center", fontWeight: 700 }}> Reservation Successful </DialogTitle> <DialogContent> <p className="text-center text-green-600 font-semibold"> Your car has been successfully booked! </p> </DialogContent> <DialogActions> <Button onClick={() => setSuccess(false)} variant="contained"> OK </Button> </DialogActions> </Dialog>
    </div>
  );
}
