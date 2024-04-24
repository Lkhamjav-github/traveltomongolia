import React from 'react'
import ItineraryCard from './ItineraryCard'
import { getServerSideProps } from '../../../utils/fetchTravelDatas'
import { FetchDataProps } from '@/types/fetchDataProps';
import { useRouter } from 'next/router';



const Itinerary = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const router = useRouter();
    const { tour } = router.query;
    return (
        <div className='w-full flex flex-col gap-10 mt-14'>
            <div className='text-[40px] font-oswald font-bold'>
                ITINERARY
            </div>
            <div className='flex gap-5 lg:gap-0 lg:flex-row flex-col items-center lg:justify-between w-full'>
                {travelDatas.result.map((data) => data._id === tour
                    ?
                    data.route.map((activity) => (
                        < ItineraryCard image={activity.sectionImage} title={activity.endPoint} time={activity.sectionDuration} description={activity.activity} />
                    ))
                    : null
                )}
            </div>
        </div>
    )
}

export { getServerSideProps };

export default Itinerary