import React from "react";
import { instance, showToastMessage } from "@/utils/functions/TravelUtilities";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { RouteAdd } from "./RouteAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import { RouteType } from "@/utils/functions/AdminFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RouteAdmin = () => {
  const {
    travelRoutesZustand,
    updateTravelRouteZustand,
    deleteTravelRouteZustand,
  } = useTravelRouteStore();
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  const deleteRoute = (data: RouteType) => {
    deleteTravelRouteZustand(data);
  };

  const submitTravelRoute = () => {
    showToastMessage();
    console.log("route", travelRoutesZustand);

    updateTravel({ route: travelRoutesZustand });
    console.log("travel", travel);
  };

  return (
    <div
      className={`   w-full h-full flex gap-7  flex-col justify-start items-start`}
    >
      <div className="p-10 flex gap-5 w-full items-center justify-center h-full">
        <div className="flex flex-col w-[95%]  bg-white rounded-lg p-5">
          <div className="w-full flex gap-3">
            <div className="w-1/3">
              <RouteAdd />
            </div>
            <div className="w-2/3">
              <table className="table bg-gray-50">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Эхлэх цэг</th>
                    <th>Дуусах цэг</th>
                    <th>Үргэлжлэх хугцаа</th>
                    <th>Тээврийн хэрэгсэл</th>
                    <th>Байрлах газар</th>
                    <th>Зураг</th>
                    <th>Устгах</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {travelRoutesZustand.map((RouteInfo: RouteType, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{RouteInfo?.startPoint}</td>
                        <td>{RouteInfo?.endPoint}</td>
                        <td>{RouteInfo?.sectionDuration}</td>
                        <td>{RouteInfo?.vehicle}</td>
                        <td>{RouteInfo?.place}</td>
                        <td>{RouteInfo.sectionImage ? "Yes" : "No"}</td>
                        <td>
                          <button onClick={() => deleteRoute(RouteInfo)}>
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              onClick={submitTravelRoute}
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
