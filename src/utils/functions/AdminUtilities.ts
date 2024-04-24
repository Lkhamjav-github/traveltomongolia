import { instance } from "./TravelUtilities";

export const getTravelNumber = async (set: Function)=>{
  try {
    const response = await instance.get("/travel/number");
    set(response.data.result)
  } catch (error) {
    return alert(`Та дахин оролдоно уу.`);
  }
}