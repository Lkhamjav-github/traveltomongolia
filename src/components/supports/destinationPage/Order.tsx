import React, { useState } from "react";
import {
  Correct,
  Wrong,
  LocationBlue,
  TimeBlue,
  DollarBlue,
  Human,
} from "@/components/icons/destinationPage";

export const Order = () => {
  const [name, setName] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const updateDate = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="md:flex max-w-[1520px] w-[90%] py-5 md:justify-between">
        <div className="md:w-[877px]">
          <h1 className="font-oswald font-bold text-[40px] leading-[50px]">
            OVERVIEW
          </h1>
          <p className="py-8 font-normal text-[20px] leading-[30px] text-[#222222]">
            Discover the stunning landscapes of Halong Bay, where you'll cruise
            on a traditional junk boat and explore the breathtaking limestone
            karsts that rise from the emerald waters. Discover the beauty and
            charm of this unique region through a boat tour.
          </p>
          <div className="grid grid-cols-2">
            <div className="flex gap-4 items-center">
              <LocationBlue />
              <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                Halong Bay , Vietnam
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <TimeBlue />
              <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                5 Days
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <DollarBlue />
              <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                Strated from $2,200
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Human />
              <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                50 People
              </p>
            </div>
          </div>
          <div className="flex pb-20 w-full md:gap-[100px]">
            <div>
              <h1 className="font-oswald font-bold pt-20 pb-10 md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]">
                INCLUDED
              </h1>
              <div className="flex gap-4 items-center">
                <Correct />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Correct />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Correct />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Correct />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Correct />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-oswald font-bold pt-20 pb-10 md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]">
                NOT INCLUDED
              </h1>
              <div className="flex gap-4 items-center">
                <Wrong />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Wrong />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Wrong />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Wrong />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Wrong />
                <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
                  Accommodation in 4-star hotels
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="order"
          className="rounded-[25px] p-12 max-w-[581px] flex flex-col gap-6"
        >
          <h1 className="font-oswald font-bold md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]">
            JOIN THIS TOUR
          </h1>
          <p className="font-normal text-[20px] leading-[30px] text-[#222222]">
            No extra hassle, just fill the form and let us contact you for more
            informations.
          </p>
          <div className="flex">
            <h2 className="text-[20px] leading-[30px] font-medium">
              Full Name
            </h2>
            <h2 className="text-blue">*</h2>
          </div>
          <div className="bg-grayColor rounded-xl">
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-grayColor outline-0 p-4 rounded-xl "
              value={name}
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="flex">
            <h2 className="text-[20px] leading-[30px] font-medium">
              Starting Date
            </h2>
            <h2 className="text-blue">*</h2>
          </div>
          <div className="bg-grayColor rounded-xl">
            <select name="status" id="status">
              <option value="todo">To do</option>
              <option value="inprogress">In progress</option>
              <option value="stuck">Stuck</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex">
            <h2 className="text-[20px] leading-[30px] font-medium">Quests</h2>
            <h2 className="text-blue">*</h2>
          </div>
          <div className="bg-grayColor rounded-xl">
            <input
              className="bg-grayColor outline-0 p-4 rounded-xl"
              type="text"
              placeholder="Amelia Watson"
            />
          </div>
          <div className="flex">
            <h2 className="text-[20px] leading-[30px] font-medium">
              Extra Facilities
            </h2>
            <h2 className="text-blue">*</h2>
          </div>
          <div className="bg-grayColor rounded-xl">
            <input
              className="bg-grayColor outline-0 p-4 rounded-xl"
              type="text"
              placeholder="Amelia Watson"
            />
          </div>
          <div className="flex w-full justify-between pt-4">
            <div>
              <h2 className="text-[20px] leading-[30px] font-medium">
                Total Payment
              </h2>
              <h1 className="font-oswald font-bold text-[40px] leading-[50px]">
                $2200
              </h1>
            </div>
            <button className="bg-blue p-4 rounded-[10px] text-white">
              Book This Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
