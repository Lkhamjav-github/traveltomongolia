import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type TravelCalendar = {
  startDay: string;
  startTime: string;
  endDay: string;
  endTime: string;
};

export const OrderCard = ({ calendar }: { calendar: TravelCalendar[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full border border-gray-200 rounded-xl p-4 bg-white">
      <h2 className="font-semibold text-xl">Аялал хийх өдрөө сонгоно уу</h2>
      <div className="w-full flex flex-col gap-3">
        {calendar.map((travelCalendar: TravelCalendar) => (
          <div className="flex flex-col">
            <div className="w-full flex justify-around items-center">
              <p>
                <strong>{travelCalendar.startDay}</strong>
              </p>
              <div className="flex justify-start gap-2">
                <AccessTimeIcon />
                <p>
                  <strong>{travelCalendar.startTime}</strong>
                </p>
              </div>
              <button className="p-2 text-center rounded-lg border bg-blue text-white">
                Захиалга хийх
              </button>
            </div>
            <hr className="my-3" />
          </div>
        ))}
      </div>
    </div>
  );
};
