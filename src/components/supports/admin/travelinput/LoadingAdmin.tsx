import React, { useEffect, useState } from "react";
import { createTravelInfo } from "@/utils/functions/TravelUtilities";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "@/utils/functions/TravelUtilities";

export const LoadingAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();
  const [IsSend, setIsSend] = useState(false);

  const submitTravel = () => {
    showToastMessage();
    if (travel) {
      createTravelInfo(travel);
      setIsSend(true);
    } else {
      return false;
    }
  };

  return (
    <div
      className={`   w-full h-full  flex gap-7  flex-col justify-start items-start relative`}
    >
      {IsSend ? (
        <p>Аялал амжилттэй нэмэгдлээ</p>
      ) : (
        <div className="p-10 flex flex-col gap-5 w-full items-center justify-center h-full">
          <div>Ачлалын мэдээллүүд орж ирнэ. Тун уудахгүй засварлах болно.</div>
          <button
            className="p-3 rounded-lg bg-primary text-white"
            onClick={submitTravel}
          >
            Аялал нэмэх
          </button>
          <ToastContainer autoClose={2000} />
        </div>
      )}
    </div>
  );
};
