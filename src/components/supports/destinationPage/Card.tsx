import React from "react";
import { Dollar, LocationWhite } from "@/components/icons/destinationPage";
import { FetchDataProps } from "@/types/fetchDataProps";
import { FetchAdminDataProps } from "@/types/dashboardAdminCard";

export const Card = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const LearnMore = () => {
    console.log("first");
  };
  const widerName = travelDatas.result.map((data) => data.name.length > 25);
  return (
    <>
      {travelDatas.result.map((item, index) => (
        <div key={index} id="card" className={`card`}>
          <img
            className="rounded-3xl w-full h-full absolute -z-[1]"
            src={`${item?.image?.mainImage}`}
            alt="gazriin zurag"
          />
          <div className="image">
            <h1> {item.name}</h1>
            <div id="p" className="flex items-center  gap-5">
              <div className="flex items-center w-[132px] gap-2">
                <LocationWhite />
                <p>20 Packages</p>
              </div>
              <p>|</p>
              <div className="flex items-center w-[132px] gap-2">
                <Dollar />
                <p>Start from ₮{item.price.adultPrice}</p>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="center">
              <h1
                className={` text-[32px] ${
                  widerName
                    ? "lg:text-[24px] text-[18px] font-medium"
                    : " font-bold"
                }`}
              >
                {item.name}
              </h1>
              <div className="flex items-center  gap-3">
                <div className="flex items-center w-[132px] gap-3">
                  <LocationWhite />
                  <p>20 Packages </p>
                </div>
                <p>|</p>
                <div className="flex items-center w-[132px] gap-3">
                  <Dollar />
                  <p>Start from ₮{item.price.adultPrice}</p>
                </div>
              </div>
              <p className="overflow-hidden overflow-y-auto h-20">
                {item.additionalInfo}
              </p>
              <button className="button">Learn more</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
