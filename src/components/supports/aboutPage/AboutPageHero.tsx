import React from 'react'
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import Header from '../homePage/Header';
import { Value } from '../homePage/Value';
import { ValueCard } from '../homePage/ValueCard';
import { ContactTextDesign } from './ContactTextDesign';
import { FetchDataProps } from '@/types/fetchDataProps';

const AboutPageHero = ({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) => {
    return (
        <>
            <img src="GerWithStars.jpg" className='lg:w-full h-[600px] lg:h-[1042px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
                <div className='lg:max-w-[1520px] lg:m-auto lg:w-[90%] lg:h-[600px] mt-8 flex lg:mt-8 justify-center'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='z-10 text-white flex justify-center gap-3 lg:mt-20 lg:text-[20px] lg:leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p>About Us</p>
                            </div>
                            <div className='flex flex-col items-center drop-shadow-md'>
                                <h1 className='font-oswald drop-shadow-md font-bold lg:text-[200px] xl:text-[246px] text-[50px] text-white uppercase'>about us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Value margin='lg:mb-52 mb-40' />
            <div className='flex  justify-center items-center'>
                <div className='max-w-[1520px] w-[90%]'>
                    <div className='font-oswald mt-20 mb-20'>
                        <h1 className='font-bold lg:text-[40px] uppercase text-2xl'>Contact Information</h1>
                        <div className='flex flex-col gap-5 lg:gap-16 mt-20'>
                            <div className='flex lg:flex-row flex-col gap-5 lg:gap-96'>
                                <ContactTextDesign title='phone' contact='+1-555-555-555' />
                                <ContactTextDesign title='EMAIL' contact='info@vacasky.com' />
                            </div>
                            <div className='w-full flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center'>
                                <ContactTextDesign title='ADDRESS' contact='123 Anywhere Street, Any City, Canada' />
                                <button className='uppercase btn bg-blue text-white lg:w-[286px] lg:h-[88px] lg:text-[32px]'>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { getServerSideProps };

export default AboutPageHero;
