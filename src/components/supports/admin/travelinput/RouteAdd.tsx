import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import { instance } from "@/utils/functions/TravelUtilities";

export const RouteAdd = () => {
  const { travelRoutesZustand, updateTravelRouteZustand } =
    useTravelRouteStore();
  const [travelPointImage, setTravelPointImage] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      startPoint: "",
      endPoint: "",
      sectionDuration: "",
      vehicle: "",
      place: "",
      activity: "",
    },
    validationSchema: Yup.object({
      startPoint: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Travel start point is required"),
      endPoint: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Travel end point is required"),
      vehicle: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      place: Yup.string()
        .max(50, "Required")
        .required("Travel name is required"),
      activity: Yup.string()
        .max(150, "Must be 50 characters or less")
        .required("Travel activities is required"),
      sectionDuration: Yup.number()
        .max(24, "Must be 24 or less")
        .required("Travel duration is required"),
    }),
    onSubmit: (values) => {
      const travelRouteInput = {
        startPoint: formik.values.startPoint,
        endPoint: formik.values.endPoint,
        vehicle: formik.values.vehicle,
        place: formik.values.place,
        activity: formik.values.activity,
        sectionDuration: Number(formik.values.sectionDuration),
        sectionImage: travelPointImage,
      };
      updateTravelRouteZustand(travelRouteInput);
      formik.resetForm();
      setTravelPointImage("");
    },
  });
  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setUrl: Function,
    setLoad: Function
  ) => {
    setLoad(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target?.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post(`/upload`, formData, config);
      setUrl(res.data.image.imageUrl);
      setLoad(false);
    } catch (error) {
      alert(`Зураг оруулахад алдаа үүслээ. Та дахин оролдоно уу`);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-2 bg-gray-50 p-4 rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full flex gap-2">
        <div className="w-1/2 flex flex-col gap-1">
          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Эхлэх цэг</label>
            <input
              id="startPoint"
              type="text"
              placeholder="Аялалын эхлэх газрыг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("startPoint")}
            />
            {formik.touched.startPoint && formik.errors.startPoint ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.startPoint}
              </div>
            ) : null}
          </div>

          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Үргэжлэх цаг</label>
            <input
              id="sectionDuration"
              type="number"
              placeholder="Үргэлжлэх цагийг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("sectionDuration")}
            />
            {formik.touched.sectionDuration && formik.errors.sectionDuration ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.sectionDuration}
              </div>
            ) : null}
          </div>
          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Тээврийн хэрэгсэл</label>
            <input
              id="vehicle"
              type="text"
              placeholder="Үргэлжлэх цагийг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("vehicle")}
            />
            {formik.touched.vehicle && formik.errors.vehicle ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.vehicle}
              </div>
            ) : null}
          </div>
          <div className="w-full h-12 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Зураг</label>
            <div className="bg-gray-100 border-dashed border-2 border-gray-300 h-12 rounded-lg w-full relative">
              <img
                src={travelPointImage}
                className="w-full h-full  absolute top-0 left-0 opacity-70"
                alt=""
              />
              <div
                className={`absolute top-[40%] left-[40%]  gap-5 text-lg ${
                  loading ? "flex" : "hidden"
                } `}
              >
                <span>Loading</span>
                <span className="loading loading-ring loading-md"></span>
              </div>
              <div
                className={`w-full  h-full absolute top-0 left-0 flex flex-col items-center gap-2 justify-center ${
                  loading ? "hidden" : "flex"
                }`}
              >
                <div className="w-1/2 relative h-8">
                  <button className="bg-black w-full h-full absolute top-0 left-0 text-white p-2 rounded">
                    {travelPointImage ? "Change image" : "Add image"}
                  </button>
                  <input
                    type="file"
                    className="h-full  w-full absolute top-0 left-0 opacity-0"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) =>
                      uploadImage(e, setTravelPointImage, setLoading)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Дуусах цэг</label>
            <input
              id="endPoint"
              type="text"
              placeholder="Аялалын дуусах газрыг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("endPoint")}
            />
            {formik.touched.endPoint && formik.errors.endPoint ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.endPoint}
              </div>
            ) : null}
          </div>

          <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Байрлах газар</label>
            <input
              id="place"
              type="text"
              placeholder="Байрлах газрыг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
              {...formik.getFieldProps("place")}
            />
            {formik.touched.place && formik.errors.place ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.place}
              </div>
            ) : null}
          </div>
          <div className="w-full h-40 text-sm flex-col mb-2 gap-1">
            <label htmlFor="travelName">Үйл ажиллагаа</label>
            <textarea
              id="activity"
              placeholder="Үйл ажиллагааг оруулна уу"
              className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-36 border border-gray-200"
              {...formik.getFieldProps("activity")}
            />
            {formik.touched.activity && formik.errors.activity ? (
              <div className=" text-red-500  text-xs">
                {formik.errors.activity}
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
