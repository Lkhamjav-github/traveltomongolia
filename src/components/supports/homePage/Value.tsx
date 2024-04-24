import React, { useState } from 'react'
import { ValueCard } from './ValueCard'
import { SmileSvg, MountainSvg, FlagSvg, TimeSvg } from '@/components/icons/homePage'
import { ValueCardHovered } from './ValueCardHovered'

export const Value = ({ text, miniText, margin, padding }: { text?: string, miniText?: string, margin?: string, padding?: string }) => {
    return (
        <div className={`flex items-center justify-center bg-grayColor ${padding}`}>
            <div className={`max-w-[1520px] w-[90%] flex flex-col gap-5 justify-center items-center ${margin}`}>
                <div className='text-center'>
                    <p className='text-blue lg:text-xl'>{text}</p>
                    <h1 className='lg:text-[100px] lg:mt-10 text-3xl font-oswald font-bold'>{miniText}</h1>
                </div>
                <div className='flex lg:flex-row flex-col items-center gap-10 mt-10 lg:mt-48 lg:h-[350px] lg:justify-around w-full'>
                    <ValueCardHovered hoveredSvg={<ValueCard svg={<SmileSvg fill='white' />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>} notHoveredSvg={<ValueCard svg={<SmileSvg />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>} />
                    <ValueCardHovered hoveredSvg={<ValueCard svg={<MountainSvg stroke='white' />} title='Authentic Adventure' description='We deliver the real adventure
experience for our customer.'/>} notHoveredSvg={<ValueCard svg={<MountainSvg />} title='Authentic Adventure' description='We deliver the real adventure
experience for our customer.'/>} />
                    <ValueCardHovered hoveredSvg={<ValueCard svg={<FlagSvg stroke='white' />} title='Expert Guide' description='We deliver only expert
tour guides for our customer.'/>} notHoveredSvg={<ValueCard svg={<FlagSvg />} title='Expert Guide' description='We deliver only expert
tour guides for our customer.'/>} />
                    <ValueCardHovered hoveredSvg={<ValueCard svg={<TimeSvg stroke='white' />} title='Time Flexibility' description='We welcome time flexibility
of traveling for our customer.'/>} notHoveredSvg={<ValueCard svg={<TimeSvg />} title='Time Flexibility' description='We welcome time flexibility
of traveling for our customer.'/>} />
                </div>
            </div>
        </div>
    )
}
