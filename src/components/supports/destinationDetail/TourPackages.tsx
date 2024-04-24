import React from "react";
import TourPackageCard from "./TourPackageCard";
import { useRouter } from "next/router";
import { Travel } from "@/types/travelTypes";
import Link from "next/link";
import { Loading } from "../Loading";

export const TourPackages = ({ travelDatas }: { travelDatas: Travel }) => {
  const router = useRouter();
  const { destination } = router.query;

  return (
    <div className="flex items-center flex-col mt-20 mb-20">
      <h1 className="font-oswald text-3xl lg:text-[40px] font-bold">
        AVAILABLE TOUR PACKAGES
      </h1>
      <div className="w-full justify-between flex mt-10">
        {travelDatas.result.map((data) =>
          data.destination.english === destination ? (
            <Link href={`/tours/${data._id}`}>
              <TourPackageCard
                image={data.image.mainImage}
                title={data.name}
                time={data.duration}
                destinationName={destination}
                startPrice={data.price.adultPrice}
                duration={data.duration}
              />
            </Link>
          ) : null
        )}
      </div>
      <button className="font-primary text-blue text-[20px] font-medium underline mt-10">
        See More Packages
      </button>
    </div>
  );
};
