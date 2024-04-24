import React from 'react'
import { DollarBlack, LocationBlue, Time } from '@/components/icons/destinationPage'
export const TravelCard = (props: { img: String, category: String, detail: String }) => {
    return (
        <div className='flex flex-col gap-2'>
            <img className='rounded-3xl w-full' src={`${props.img}`} alt="travel blog " />
            <div className='flex justify-between items-center pr-5'>
                <div className='flex items-center gap-3'>
                    <img src="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/author-2.jpg" alt="" />
                    <div className='flex flex-col '>
                        <h1 className='font-medium text-[20px] leading-[30px]'>Argus Smith</h1>
                        <p className='font-light text-[16px] leading-[24px]'>August 12, 2022</p>
                    </div>
                </div>
                <h1 className='font-light text-blue text-[16px] leading-[24px]'>{props.category}</h1>
            </div>
            <h2 className='font-medium text-[32px] leading-[40px] max-w-[465px]'>{props.detail}</h2>
        </div>
    )
}
