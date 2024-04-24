import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePageStore, useTravelCalendarStore, useTravelStore , useTravelRouteStore} from "@/utils/functions/AdminFunctions";
import { instance } from "@/utils/functions/TravelUtilities";

export const CalendarAdd = () => {
  const { travelCalendarsZustand, updateTravelCalendarZustand } =
    useTravelCalendarStore();

  const formik = useFormik({
    initialValues: {
      startDay: "",
      startTime: "",
      endDay: "",
      endTime: "",
    },
    validationSchema: Yup.object({
      startDay: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      startTime: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      endDay: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      endTime: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const travelCalendarInput = {
        startDay: formik.values.startDay,
        startTime: formik.values.startTime,
        endDay: formik.values.endDay,
        endTime: formik.values.endTime,
      };
      updateTravelCalendarZustand(travelCalendarInput);
      formik.resetForm();
    },
  });

  return (
    <form
      className="w-full flex flex-col gap-2 bg-gray-50 p-2 rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full flex gap-2">
        <div className="w-1/2 flex flex-col gap-1">
          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Эхлэх өдөр</label>
            <input
              id="startDay"
              type="Date"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("startDay")}
            />
            {formik.touched.startDay && formik.errors.startDay ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.startDay}
              </div>
            ) : null}
          </div>

          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Эхлэх цаг</label>
            <input
              id="startTime"
              type="time"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("startTime")}
            />
            {formik.touched.startTime && formik.errors.startTime ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.startTime}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Дуусах өдөр</label>
            <input
              id="endDay"
              type="Date"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("endDay")}
            />
            {formik.touched.endDay && formik.errors.endDay ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.endDay}
              </div>
            ) : null}
          </div>

          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Дуусах цаг</label>
            <input
              id="endTime"
              type="time"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("endTime")}
            />
            {formik.touched.endTime && formik.errors.endTime ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.endTime}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary text-white font-medium p-2"
      >
        Add
      </button>
    </form>
  );
};
