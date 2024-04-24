import React, { useState } from "react";
import {
  Dollar,
  Minus,
  Plus,
  Left,
  LocationWhite,
  Right,
  Select,
} from "@/components/icons/destinationPage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FetchDataProps } from "@/types/fetchDataProps";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const FormComponent = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const orderData = {
        lastname: formik.values.lastName,
        firstName: formik.values.firstName,
        email: formik.values.email,
        phoneNumber: formik.values.phoneNumber,
      };
    },
  });
  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);

  const handleChildIncrement = () => {
    if (childCount < 20 - 1) {
      setChildCount(childCount + 1);
    }
  };

  const handleChildDecrement = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const handleAdultIncrement = () => {
    if (adultCount < 20) {
      setAdultCount(adultCount + 1);
    }
  };

  const handleAdultDecrement = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white pt-20">
        <div className="flex max-w-[1520px] w-[90%] flex-col ">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="pb-[60px] font-oswald font-bold text-[40px] leading-[50px]">
              PERSONAL IDENTITY
            </h1>
            <div className="md:flex gap-[30px]">
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> FIRST NAME </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="lg:pl-5">{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className="flex gap-[30px] w-full">
                  <div className="max-w-[745px] w-full flex items-center rounded-[15px] bg-grayColor h-[100px]">
                    <input
                      id="firstName"
                      type="firstName"
                      {...formik.getFieldProps("firstName")}
                      className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                      placeholder="Amelia"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> LAST NAME </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="lg:pl-[20px]">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="lastName"
                    type="lastName"
                    {...formik.getFieldProps("lastName")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="Watson"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex gap-[30px] pt-12">
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> EMAIL ADDRESS </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="pl-5">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="AmeliaWatson@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex pb-4">
                  <h2 className=""> PHONE NUMBER </h2>
                  <p className="text-blue">*</p>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="pl-5">{formik.errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="lg:max-w-[745px] w-full  flex items-center rounded-[15px] bg-grayColor h-[100px]">
                  {" "}
                  <input
                    id="phoneNumber"
                    type="phoneNumber"
                    {...formik.getFieldProps("phoneNumber")}
                    className="bg-grayColor rounded-[15px] pl-12 w-full h-full"
                    placeholder="123 - 456 - 7890"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-20">
              <h1 className=" font-oswald font-bold text-[40px] leading-[50px] pb-12">
                PACKAGE
              </h1>
              <div className="flex gap-[64px]">
                <Left />
                <Right />
              </div>
            </div>
            <div>
              <img
                src="./sakura.png"
                alt=""
                className="absolute -z-1 rounded-3xl h-[562px] flex flex-col  justify-between"
              />
              <div className="relative rounded-3xl h-[562px] flex flex-col pl-9 justify-between">
                <div className="w-[56px] h-[56px] rounded-full border-white border-2 flex items-center justify-center bg-blue mt-8">
                  <Select />
                </div>
                <div className="pb-[64px]">
                  <h1 className="font-oswald font-bold md:text-[100px] md:leading-[100px] text-[40px] leading-[50px] text-white">
                    DISCOVER JAPAN TOUR PACKAGE
                  </h1>
                  <div className="flex items-center pt-10">
                    <LocationWhite />
                    <p className="font-normal text-[20px] text-white leading-[30px] pl-4 pr-6">
                      {" "}
                      Tokyo & Kyoto , Japan{" "}
                    </p>
                    <p className="font-normal text-[20px] text-white leading-[30px] pr-4 ">
                      |
                    </p>
                    <Dollar />
                    <p className="font-normal text-[20px] text-white leading-[30px] pl-4 pr-6">
                      Start from $ 3,500
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex justify-between pt-20 pb-[120px]">
              {travelDatas.result.map((item, index) =>
                item._id === "66100067d0b3d401b5e0e2d8" ? (
                  <>
                    <div
                      key={index}
                      className="border-2 lg:w-[500px] rounded-xl border-[#F15D31] p-4"
                    >
                      <div className="flex items-center justify-between pb-4">
                        <div>
                          <h1>Children</h1>
                          <p>{item.price.childPrice}₮</p>
                        </div>
                        <div className="p-4 border border-black rounded-lg flex justify-between">
                          <button
                            className={`w-7 h-7 ${
                              childCount === 0 ? "bg-white" : "bg-orange-500"
                            } border-gray-400  border rounded-sm flex items-center justify-center text-[30px] text-center`}
                            disabled={childCount === 0}
                            onClick={handleChildDecrement}
                          >
                            <RemoveIcon
                              className={`text-${
                                childCount === 0 ? "gray-400" : "white"
                              } w-[14px] `}
                            />
                          </button>
                          <input
                            className="outline-0 w-[84px] px-3 text-center"
                            min={0}
                            max={item.maxTourist - 1}
                            value={childCount}
                            readOnly
                          />
                          <button
                            className={`w-7 h-7 ${
                              childCount === 19 ? "bg-white" : "bg-orange-500"
                            }  border-gray-400 border  rounded-sm flex items-center justify-center`}
                            onClick={handleChildIncrement}
                          >
                            <AddIcon
                              className={`text-${
                                childCount === 19 ? "gray-400" : "white"
                              } w-[14px] h-[14px]`}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h1>Adult</h1>
                          <p>{item.price.adultPrice}₮</p>
                        </div>
                        <div className="p-4 border border-black rounded-lg flex justify-between">
                          <button
                            className={`w-7 h-7 ${
                              adultCount === 1 ? "bg-white" : "bg-orange-500"
                            } border-gray-400  border rounded-sm flex items-center justify-center`}
                            onClick={handleAdultDecrement}
                          >
                            {" "}
                            <RemoveIcon
                              className={`text-${
                                adultCount === 1 ? "gray-400" : "white"
                              } w-[14px] `}
                            />
                          </button>
                          <input
                            className="outline-0 w-[84px] px-3 text-center"
                            min={1}
                            max={item.maxTourist}
                            value={adultCount}
                            readOnly
                          />
                          <button
                            className={`w-7 h-7 ${
                              adultCount === 20 ? "bg-white" : "bg-orange-500"
                            } border-gray-400  border rounded-sm flex items-center justify-center`}
                            onClick={handleAdultIncrement}
                          >
                            <AddIcon
                              className={`text-${
                                adultCount === 20 ? "gray-400" : "white"
                              } w-[14px] h-[14px]`}
                            />
                          </button>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-[16px] leading-[20px]">
                          {" "}
                          Total :
                        </div>
                        <div className="font-semibold text-[20px] leading-[28px]">
                          {childCount * item.price.childPrice +
                            adultCount * item.price.adultPrice}
                          ₮
                        </div>
                      </div>
                    </div>
                  </>
                ) : null
              )}
              <button
                type="submit"
                className="md:py-[30px] md:px-[100px] py-[15px] px-12 bg-blue text-white rounded-xl"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
