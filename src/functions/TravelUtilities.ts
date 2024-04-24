import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const instance = axios.create({
  baseURL: "http://localhost:8800",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const createTravelInfo = async (data: {} | null) => {
  console.log("data", data);

  try {
    const response = await instance.post("/travel/create", data);
    console.log(response);

    console.log(
      "response travel info data",
      response.data,
      "response travel info status",
      response.status
    );
  } catch (error) {
    return alert(`Та дахин оролдоно уу.`);
  }
};

export const getTravel = async (set: Function) => {
  try {
    const response = await instance.get("/travel/get");
    set(response.data.result);
    console.log("travel data", response.data.response);
  } catch (error) {
    return alert(`Уучлаарай алдаа үүслээ`);
  }
};

export const getDestination = async (set: Function) => {
  try {
    const response = await instance.get("/destination/get");
    set(response.data.result);
    console.log("destination data", response.data.response);
  } catch (error) {
    return alert(`Уучлаарай алдаа үүслээ`);
  }
};

export const showToastMessage = () => {
  toast.success(
    "Мэдээлэл амжилттай хадгалагдлаа. Та NEXT товчийг дарна уу.",
    {}
  );
};
