import React, { useEffect, useState } from 'react'
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import DestinationDropdown from './DestinationDropdown'
import { FetchDataProps } from '@/types/fetchDataProps';
import Header from './Header';


const Hero = ({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) => {

    return (
        <>
            <img src="HomeBackground.jpg" className='lg:w-full h-[600px] lg:h-[1200px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} />
                <div className='lg:max-w-[1520px] lg:m-auto lg:w-[90%] lg:h-[600px] mt-8 flex lg:mt-8 justify-center'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center drop-shadow-md'>
                                <h1 className='lg:text-3xl text-white font-primary lg:text-[32px] text-sm lg:leading-10 drop-shadow-md lg:tracking-widest'>TRAVEL TO MONGOLIA</h1>
                                <h1 className='font-oswald drop-shadow-md font-bold lg:text-[200px] xl:text-[246px] text-[50px] text-white'>ADVENTURE</h1>
                            </div>
                            <p className='text-white font-primary font-normal p-2 lg:w-[730px] text-center'>Experience the thrill of exploring the world's most fascinating destinations
                                with our expertly curated travel packages.</p>
                            <div className='bg-white lg:mt-12 lg:w-[791px] w-[300px] lg:h-[116px] shadow-lg mt-4 lg:pb-6 lg:p-6 flex rounded-lg lg:rounded-3xl'>
                                <div className='flex lg:flex-row flex-col lg:justify-between w-full items-center lg:w-full'>
                                    <DestinationDropdown categoryDatas={categoryDatas} destinationDatas={destinationDatas} />
                                    <div className='border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-5 lg:w-[219px] lg:h-[66px] flex flex-col lg:flex-col gap-1 items-start lg:justify-start w-full pb-2'>
                                        <div className='flex items-center justify-between w-full cursor-pointer'>
                                            <p className='font-medium lg:text-lg text-lg p-2 lg:p-1'>Date</p>
                                        </div>
                                        <input type="date" className='text-sm text-center outline-none border-none cursor-pointer' />
                                    </div>
                                    <button className='px-5 py-2 lg:mt-0 lg:mb-0 mt-2 mb-2 lg:w-40 lg:h-full rounded-lg bg-blue text-white'>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export { getServerSideProps };

export default Hero;

