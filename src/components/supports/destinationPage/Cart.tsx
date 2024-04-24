import React from "react";
import { FetchDataProps } from "@/types/fetchDataProps";

export const Cart = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const LearnMore = () => {
    console.log("click learn more");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white pb-4">
        <div className="flex max-w-[1520px] w-[90%] py-5 flex-col border border-gray-400 rounded-3xl p-4  ">
          {travelDatas.result.map((item, index) => (
            <div
              key={index}
              className="md:flex  rounded-xl  justify-between w-full gap-12"
            >
              <img
                className="lg:w-[30%] w-[100%] h-[206px] rounded-3xl "
                src={`${item?.image?.mainImage}`}
                alt="winter"
              />
              <div className="lg:w-[40%] w-[100%]">
                <div className="max-w-[659px]">
                  <h3 className="font-normal text-blue text-[20px] leading-[30px]">
                    {item.name}
                  </h3>
                  <p className="font-normal text-[20px] leading-[30px] flex-wrap  text-[#222222] overflow-hidden overflow-y-auto h-20">
                    {item.additionalInfo}
                  </p>
                  <button className="border border-gray-400 px-8 py-4 rounded-xl text-red-600 font-semibold ">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-end w-[100%] lg:w-[25%]">
            <div className="flex items-center gap-4 pt-4 flex-col">
              <h3 className="font-normal text-[20px] leading-[30px]  text-[#222222]">
                Total : 10000
              </h3>
              <button className=" cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] bg-[green] text-white font-medium text-[20px] leading-[30px] py-4 px-8">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
