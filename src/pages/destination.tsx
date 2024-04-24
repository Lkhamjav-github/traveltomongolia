import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSideProps } from "../utils/fetchTravelDatas";
import React from "react";
import { Cart } from "@/components/supports/destinationPage/Cart";
import { FetchDataProps } from "@/types/fetchDataProps";
const inter = Inter({ subsets: ["latin"] });

function Destination({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) {
  return (
    <>
      <Cart
        toursData={toursData}
        travelDatas={travelDatas}
        destinationDatas={destinationDatas}
        categoryDatas={categoryDatas}
      />
      {/* <Order /> */}
      {/* <Hero toursData={toursData} travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} /> */}
      {/* <FormComponent /> */}
    </>
  );
}

export { getServerSideProps };

export default Destination;
