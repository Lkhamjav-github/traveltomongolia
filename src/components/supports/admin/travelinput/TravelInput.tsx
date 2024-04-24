import Image from "next/image";
import { Inter } from "next/font/google";
import { CategoryAdmin } from "./CategoryAdmin";
import { GeneralAdmin } from "./GeneralAdmin";
import { FoodAdmin } from "./FoodAdmin";
import {
  usePageStore,
  useTravelCalendarStore,
  useTravelStore,
  useTravelRouteStore,
  CalendarType,
} from "@/utils/functions/AdminFunctions";
import { PictureAdmin } from "./PictureAdmin";
import { RouteAdmin } from "./RouteAdmin";
import { CalendarAdmin } from "./CalendarAdmin";
import { LoadingAdmin } from "./LoadingAdmin";
import { SuccessAdmin } from "./SuccessAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Travelinput() {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  return (
    <main
      className={`flex max-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <div className="flex w-full  h-full bg-gray-100">
        <GeneralAdmin />
        <FoodAdmin />
        <CategoryAdmin />
        <PictureAdmin />
        <RouteAdmin />
        <CalendarAdmin />
        <LoadingAdmin />
        <SuccessAdmin />
      </div>
    </main>
  );
}
