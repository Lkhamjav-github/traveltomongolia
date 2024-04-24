import { GetServerSideProps } from "next";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { Destination } from "@/types/destinationTypes";
import { instance } from "./functions/TravelUtilities";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const travelRes = await instance.get("/travel/get");
    const travelDatas: Travel = travelRes.data;

    const toursRes = await instance.get("tourist/get");
    const toursData: Tours = toursRes.data;

    const categoryRes = await instance.get("/destinationcategory/get");
    const categoryDatas: DestinationCategory = categoryRes.data;

    const destinationRes = await instance.get("/destination/get");
    const destinationDatas: Destination = destinationRes.data;

    return {
      props: {
        travelDatas,
        toursData,
        categoryDatas,
        destinationDatas,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        travelDatas: [],
        toursData: [],
        categoryDatas: [],
        destinationDatas: [],
      },
    };
  }
};
