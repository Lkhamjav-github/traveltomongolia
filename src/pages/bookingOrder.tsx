import Image from "next/image";
import { Inter } from "next/font/google";
import { OrderCard } from "@/components/supports/bookingOrderPage/OrderCard";
import { FormComponent } from "@/components/supports/destinationPage/FormComponent";
import { FetchDataProps } from "@/types/fetchDataProps";
const inter = Inter({ subsets: ["latin"] });

export default function Bookingorder({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  const calendars = [
    {
      startDay: "2024-04-06",
      startTime: "09:00",
      endDay: "2024-04-11",
      endTime: "18:12",
    },
    {
      startDay: "2024-04-16",
      startTime: "11:00",
      endDay: "2024-04-11",
      endTime: "18:12",
    },
    {
      startDay: "2024-04-26",
      startTime: "10:00",
      endDay: "2024-04-11",
      endTime: "18:12",
    },
  ];

  return (
    <main>
      <FormComponent
        toursData={toursData}
        travelDatas={travelDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
      />
      <OrderCard calendar={calendars} />
    </main>
  );
}
