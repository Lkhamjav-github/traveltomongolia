import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "@/utils/functions/TravelUtilities";

export const FoodAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();
  const [IsIncludeFood, setIsIncludeFood] = useState(false);
  const [IsIncludeFoodPrice, setIsIncludeFoodPrice] = useState(false);
  const [IsIncludeTraffic, setIsIncludeTraffic] = useState(false);
  const [IsIncludeTrafficPrice, setIsIncludeTrafficPrice] = useState(false);
  const formik = useFormik({
    initialValues: {
      foodNumber: 0,
      foodPrice: 0,
      IsIncludeFoodCheck: false,
      IsIncludeFoodPriceCheck: false,
      trafficPrice: 0,
      IsIncludeTrafficCheck: false,
      IsIncludeTrafficPriceCheck: false,
    },
    validationSchema: Yup.object({
      foodNumber: Yup.number(),
      foodPrice: Yup.number(),
      IsIncludeFoodCheck: Yup.boolean(),
      IsIncludeFoodPriceCheck: Yup.boolean(),
      trafficPrice: Yup.number(),
      IsIncludeTrafficCheck: Yup.boolean(),
      IsIncludeTrafficPriceCheck: Yup.boolean(),
    }),
    onSubmit: (values) => {
      showToastMessage();
      const travelInputTwo = {
        food: {
          foodNumber: formik.values.foodNumber,
          foodPrice: formik.values.foodPrice,
          IsIncludeFoodCheck: formik.values.IsIncludeFoodCheck,
          IsIncludeFoodPriceCheck: formik.values.IsIncludeFoodPriceCheck,
        },
        traffic: {
          trafficPrice: formik.values.trafficPrice,
          IsIncludeTrafficCheck: formik.values.IsIncludeTrafficCheck,
          IsIncludeTrafficPriceCheck: formik.values.IsIncludeTrafficPriceCheck,
        },
      };
      console.log("step", travelInputTwo);
      updateTravel(travelInputTwo);
      console.log("travel", travel);
    },
  });

  return (
    <div
      className={`w-full h-full gap-7 flex flex-col justify-start items-start`}
    >
      <form
        className="p-10 flex gap-5 w-full items-center justify-center h-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="flex  gap-5 w-full  bg-white p-5 rounded-lg">
            <div className="w-1/2 text-sm  flex flex-col gap-2">
              <label htmlFor="duration">Хоолны мэдээлэл</label>
              <div className="w-full gap-3 flex flex-col items-center">
                <div className="w-full flex justify-start items-center gap-4 mb-2">
                  <input
                    id="IsIncludeFoodCheck"
                    type="checkbox"
                    className="toggle toggle-success"
                    {...formik.getFieldProps("IsIncludeFoodCheck")}
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.setFieldValue(
                        "IsIncludeFoodCheck",
                        e.target.checked
                      );
                      setIsIncludeFood(e.target.checked);
                    }}
                  />
                  <label htmlFor="checkbox" className="text-sm">
                    Аялалд хоол багтсан эсэх
                  </label>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                  <div className="w-4/5  text-sm flex items-center">
                    <label
                      htmlFor="name"
                      className={`${!IsIncludeFood ? "text-gray-400" : ""}`}
                    >
                      Нэг өдрийн аялалын хоолны тоо
                    </label>
                    <input
                      id="foodNumber"
                      type="number"
                      placeholder="Нэг өдрийн аялалын хоолны тоог оруулна уу"
                      className={`${
                        !IsIncludeFood
                          ? "bg-gray-50 border-gray-100"
                          : "bg-gray-100 border-gray-200"
                      } rounded-lg w-full p-1 gap-3 text-sm h-10 border`}
                      disabled={!IsIncludeFood}
                      {...formik.getFieldProps("foodNumber")}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                  <div className="w-full flex justify-start items-center gap-4 mb-2">
                    <input
                      id="IsIncludeFoodPriceCheck"
                      type="checkbox"
                      className="toggle toggle-success"
                      {...formik.getFieldProps("IsIncludeFoodPriceCheck")}
                      disabled={!IsIncludeFood}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue(
                          "IsIncludeFoodPriceCheck",
                          e.target.checked
                        );
                        setIsIncludeFoodPrice(e.target.checked);
                      }}
                    />
                    <label htmlFor="checkbox" className="text-sm">
                      Аялалын төлбөрт хоолны төлбөр багтсан эсэх
                    </label>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-4">
                  <div className="w-4/5  text-sm flex items-center">
                    <label
                      htmlFor="name"
                      className={`${
                        !IsIncludeFoodPrice ? "text-gray-400" : ""
                      }`}
                    >
                      Нэмэлт хоолны төлбөр
                    </label>
                    <input
                      id="foodPrice"
                      type="number"
                      placeholder="Хоолны төлбөрийг оруулна уу"
                      className={`${
                        !IsIncludeFood
                          ? "bg-gray-50 border-gray-100"
                          : "bg-gray-100 border-gray-200"
                      } rounded-lg w-full p-1 gap-3 text-sm h-10 border`}
                      disabled={!IsIncludeFoodPrice}
                      {...formik.getFieldProps("foodPrice")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 text-sm  flex flex-col gap-2">
              <label htmlFor="duration">Тээврийн мэдээлэл</label>
              <div className="w-full gap-3 flex flex-col items-center">
                <div className="w-full flex justify-start items-center gap-4 mb-2">
                  <input
                    id="IsIncludeTrafficCheck"
                    type="checkbox"
                    className="toggle toggle-success"
                    {...formik.getFieldProps("IsIncludeTrafficCheck")}
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.setFieldValue(
                        "IsIncludeTrafficCheck",
                        e.target.checked
                      );
                      setIsIncludeTraffic(e.target.checked);
                    }}
                  />
                  <label htmlFor="checkbox" className="text-sm">
                    Аялалын компани тээврийн хэрэгслийг зохион байгуулах эсэх
                  </label>
                </div>

                <div className="w-full flex justify-start items-center gap-4">
                  <div className="w-full flex justify-start items-center gap-4 mb-2">
                    <input
                      id="IsIncludeTrafficPriceCheck"
                      type="checkbox"
                      className="toggle toggle-success"
                      {...formik.getFieldProps("IsIncludeTrafficPriceCheck")}
                      disabled={!IsIncludeTraffic}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue(
                          "IsIncludeTrafficPriceCheck",
                          e.target.checked
                        );
                        setIsIncludeTrafficPrice(e.target.checked);
                      }}
                    />
                    <label htmlFor="checkbox" className="text-sm">
                      Аялалын төлбөрт тээврийн төлбөр багтсан эсэх
                    </label>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-4">
                  <div className="w-4/5 h-20 text-sm flex items-center">
                    <label
                      htmlFor="name"
                      className={`${
                        !IsIncludeTrafficPrice ? "text-gray-400" : ""
                      }`}
                    >
                      Нэмэлт тээврийн төлбөр
                    </label>
                    <input
                      id="trafficPrice"
                      type="number"
                      placeholder="Хоолны төлбөрийг оруулна уу"
                      className={`${
                        !IsIncludeTraffic
                          ? "bg-gray-50 border-gray-100"
                          : "bg-gray-100 border-gray-200"
                      } rounded-lg w-full p-1 gap-3 text-sm h-10 border`}
                      disabled={!IsIncludeTrafficPrice}
                      {...formik.getFieldProps("trafficPrice")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="bg-blue text-white p-2 rounded-lg font-semibold"
            >
              Хадгалах
            </button>
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      </form>
    </div>
  );
};
