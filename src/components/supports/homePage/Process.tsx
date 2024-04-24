import React from 'react'
import { ProcessCard } from './ProcessCard'
import { PageTitleDesign } from './PageTitleDesign'
import { CalendarSvg, TripSvg, AirplaneSvg, PlanningSvg, Line } from '@/components/icons/homePage'

export const Process = () => {
    return (
        <div className='mt-20 w-full lg:h-[1018px] flex justify-center lg:pb-0 pb-20 pt-20 bg-[#F6F6F6]'>
            <div className='lg:max-w-[1520px] lg:w-[90%]'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <PageTitleDesign title='PROCESS' textColor='text-white' frontText='HOW IT WORKS' />
                        <div className='lg:mt-20'>
                            <div className='relative mt-20'>
                                <div className='lg:block hidden'><Line width='1000' /></div>
                                <ProcessCard style='lg:absolute lg:top-0 lg:-left-28' svg={<PlanningSvg />} title='Trip Planning' description='We plan on what to do during the trip days.' />
                                <ProcessCard style='lg:absolute lg:top-[93px] lg:left-[230px]' svg={<CalendarSvg />} title='Trip Booking' description='We book the necessary hotel and travels for your trip.' />
                                <ProcessCard style='lg:absolute lg:-top-16 lg:right-[220px]' svg={<TripSvg />} title='Trip Preparation' description='We prepare all accommodation
and trip necessities.' />
                                <ProcessCard style='lg:absolute lg:top-24 lg:-right-28' svg={<AirplaneSvg />} title='Trip Experience' description='We give you the best travel
experience with our tour guide.' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
