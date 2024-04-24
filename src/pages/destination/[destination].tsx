
import { FetchDataProps } from "@/types/fetchDataProps";
import { getServerSideProps } from "@/utils/fetchTravelDatas";
import { useRouter } from "next/router";
import Header from "@/components/supports/homePage/Header";
import { DestinationDetailMain } from "@/components/supports/destinationDetail/DestinationDetailMain";
import { TourPackages } from "@/components/supports/destinationDetail/TourPackages";
import { Footer } from "@/components/supports/destinationPage/Footer";

const DestinationDetailHero = ({
  travelDatas,
  toursData,
  destinationDatas,
  categoryDatas,
}: FetchDataProps) => {
  const router = useRouter();
  const { destination } = router.query;

  return (
    <>
      {travelDatas.result.map((data) =>
        data.destination.english === destination ? (
          <img
            src={data.destination.image}
            className="lg:w-full h-[500px] lg:h-[1042px]"
            alt=""
          />
        ) : null
      )}
      <div className="absolute top-0 right-0 left-0">
        <Header
          travelDatas={travelDatas}
          toursData={toursData}
          destinationDatas={destinationDatas}
          categoryDatas={categoryDatas}
        />
        <div className="lg:max-w-[1520px] lg:m-auto lg:w-[90%] lg:h-[600px] mt-8 flex lg:mt-8 justify-center">
          <div>
            <div className="flex flex-col items-center">
              <div className="z-0 text-white flex justify-center gap-3 lg:mt-20 lg:text-[20px] lg:leading-[30px] font-primary">
                <p className="border-r-2 pr-3">Home</p>
                <p className="border-r-2 pr-3">Destinations</p>
                {destinationDatas.result.map((dest) =>
                  dest.english === destination ? (
                    <p className="capitalize">
                      {dest.destinationCategory.english}
                    </p>
                  ) : null
                )}
              </div>
              <div className="flex flex-col items-center drop-shadow-md">
                <h1 className="font-oswald drop-shadow-md font-bold lg:text-[200px] xl:text-[246px] text-[50px] text-white uppercase">
                  {destination}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-20 items-center justify-center">
        <div className="max-w-[1520px] w-[90%]">
          <DestinationDetailMain destinationDatas={destinationDatas} />
          <TourPackages travelDatas={travelDatas} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { getServerSideProps };

export default DestinationDetailHero;
