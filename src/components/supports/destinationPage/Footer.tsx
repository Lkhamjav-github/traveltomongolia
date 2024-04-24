import { Brand, Fb, Instagram, Twitter } from '@/components/icons/destinationPage'
import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#222222]'>
            <div className='flex max-w-[1520px] w-[90%] py-5 flex-col'>
                <div className='flex items-center justify-between w-full flex-col gap-6 md:flex-row'>
                    <div className='flex'>
                        <Brand />
                    </div>
                    <div className='flex  gap-6 md:gap-10 xl:gap-20 flex-wrap'>
                        <a className='text-white font-light text-base ' href="/destination">Destination</a>
                        <a className='text-white font-light text-base ' href="/tours">Tours</a>
                        <a className='text-white font-light text-base ' href="/about">About</a>
                    </div>
                    <div className='flex gap-6 flex-wrap'>
                        <Fb />
                        <Instagram />
                        <Twitter />
                    </div>
                </div>
                <hr className='text-white w-full mt-[64px] mb-[16px]' />
                <div className='flex justify-between items-center w-full flex-wrap'>
                    <p className='text-white font-light text-base'>Copyright © 2023 Vacasky. All rights reserved.</p>
                    <p className='text-white font-light text-base'>Privacy Policy | Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

