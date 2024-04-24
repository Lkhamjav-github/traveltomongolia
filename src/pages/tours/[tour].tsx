import { Travel } from '@/types/travelTypes'
import TourDetailHero, { getServerSideProps } from '@/components/supports/travelDetail/TourDetailHero'
import React, { useState } from 'react'
// import { Footer } from '@/components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FetchDataProps } from '@/types/fetchDataProps';


const TourDetail = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {

    return (
        <div>
            <TourDetailHero destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} toursData={toursData} />
        </div>
    )
}

export { getServerSideProps };

export default TourDetail;