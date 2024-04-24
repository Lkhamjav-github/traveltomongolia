import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { instance, showToastMessage } from "@/utils/functions/TravelUtilities";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CategoryAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();
  const route = useRouter();
  const [categoryData, setCategoryData] = useState([]);
  const [touristData, setTouristdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedTourist, setSelectedTourist] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        type repsonse = {
          data: { result: [] };
        };
        const response = await instance.get("/category/get");
        const data = response.data.result;
        console.log("category data", data);

        setCategoryData(data);
      } catch (error) {
        alert(`fail to get category data`);
      }
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchCategory() {
      try {
        type repsonse = {
          data: { result: [] };
        };
        const response = await instance.get("/tourist/get");
        const data = response.data.result;
        console.log("category data", data);

        setTouristdata(data);
      } catch (error) {
        alert(`fail to get category data`);
      }
    }
    fetchCategory();
  }, []);

  const IsChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string[],
    setData: Function
  ) => {
    if (e.target.checked) {
      return true;
    } else {
      const unChecked = e.target.value;
      console.log("uncheck", unChecked);
      const CheckedData = data.filter((item) => item !== unChecked);
      console.log("checkdata", CheckedData);
      return setData(CheckedData);
    }
  };

  const addCatagory = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string[],
    setData: Function
  ) => {
    IsChecked(e, data, setData);
    const itemValue = e.target.value;
    console.log(itemValue);
    if (!data.includes(itemValue)) {
      const itemArray = [itemValue];
      setData([...data, ...itemArray]);
      console.log(data);
    }
  };

  const submit = () => {
    showToastMessage();
    const travelDataInput = {
      categoryType: selectedCategory,
      touristType: selectedTourist,
    };
    console.log("step", travelDataInput);
    updateTravel(travelDataInput);
    console.log("travel", travel);
  };

  return (
    <div
      className={`w-full h-full gap-7 flex flex-col justify-start items-start`}
    >
      <div className="p-5 flex  w-full justify-center items-start">
        <div className="w-full text-sm  flex flex-col mb-2 gap-5 p-10 bg-white rounded-lg ">
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">1. Аялалын ангилалыг сонгоно уу.</label>
              {categoryData?.map(
                (category: { name: string; english: string; _id: string }) => (
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-5">
                      <input
                        type="checkbox"
                        value={category._id}
                        className="checkbox"
                        onChange={(e) =>
                          addCatagory(e, selectedCategory, setSelectedCategory)
                        }
                      />
                      <span className="label-text capitalize">
                        {category.name}
                      </span>
                    </label>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">
                2. Аялалд хамрагдах жуулчдын ангилалыг сонгоно уу.
              </label>
              {touristData?.map(
                (tourist: { name: string; english: string; _id: string }) => (
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-5">
                      <input
                        type="checkbox"
                        value={tourist._id}
                        className="checkbox"
                        onChange={(e) =>
                          addCatagory(e, selectedTourist, setSelectedTourist)
                        }
                      />
                      <span className="label-text capitalize">
                        {tourist.name}
                      </span>
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-end items-center">
            <button
              type="submit"
              onClick={submit}
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
