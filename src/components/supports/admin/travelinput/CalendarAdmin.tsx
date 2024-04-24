import React, { useState } from "react";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import { CalendarAdd } from "./CalendarAdd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "@/utils/functions/TravelUtilities";

export const CalendarAdmin = () => {
  const {
    travelCalendarsZustand,
    updateTravelCalendarZustand,
    deleteTravelCalendarZustand,
  } = useTravelCalendarStore();
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  const decreasePageNumber = () => {
    decrement(1);
  };

  const deleteCalendar = (data: CalendarType) => {
    deleteTravelCalendarZustand(data);
  };

  const submitTravelCalendar = () => {
    showToastMessage();
    console.log("calendar", travelCalendarsZustand);
    updateTravel({ calendar: travelCalendarsZustand });
    console.log("travel ", travel);
  };

  return (
    <div
      className={`   w-full h-full flex gap-7  flex-col justify-start items-start relative`}
    >
      <div className="p-10 flex gap-5 w-full items-center justify-center h-full">
        <div className="flex flex-col w-full  bg-white rounded-lg p-5">
          <div className="w-full flex gap-3">
            <div className="w-1/3">
              <CalendarAdd />
            </div>
            <div className="w-2/3">
              <table className="table bg-white">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Эхлэх өдөр</th>
                    <th>Эхлэх цаг</th>
                    <th>Дуусах өдөр</th>
                    <th>Дуусах цаг</th>
                    <th>Устгах</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {travelCalendarsZustand.map(
                    (calendarInfo: CalendarType, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td>{calendarInfo?.startDay}</td>
                          <td>{calendarInfo?.startTime}</td>
                          <td>{calendarInfo?.endDay}</td>
                          <td>{calendarInfo?.endTime}</td>
                          <td>
                            <button
                              onClick={() => deleteCalendar(calendarInfo)}
                            >
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              onClick={submitTravelCalendar}
              className="bg-blue text-white p-2 rounded-lg font-semibold"
            >
              Хадгалах
            </button>
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      </div>
    </div>
  );
};
