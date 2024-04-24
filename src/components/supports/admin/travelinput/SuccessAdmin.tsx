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
export const SuccessAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  return (
    <div
      className={`   w-full h-full min-h-screen flex gap-7  flex-col justify-start items-start relative`}
    >
      <div className="p-10 flex flex-col gap-5 w-full items-center justify-center h-full text-green-600">
        <div>Аялал амжилттэй нэмэгдлээ</div>
      </div>
    </div>
  );
};
