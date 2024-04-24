import { Travel } from '@/types/travelTypes'
import TourDetailHero, { getServerSideProps } from '@/components/supports/travelDetail/TourDetailHero'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FetchDataProps } from '@/types/fetchDataProps';


const Detail = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    return (
        <div>
            <TourDetailHero destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} toursData={toursData} />
        </div>
    )
}

export { getServerSideProps };

export default Detail