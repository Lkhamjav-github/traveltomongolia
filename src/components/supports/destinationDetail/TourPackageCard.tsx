import React, { useState } from 'react'
import { LocationIcon } from '@/components/icons/homePage'
import { TimeIcon } from '@/components/icons/travelDetail'

interface Props {
    image: string
    title: string
    time: number
    destinationName: string
    startPrice: number
    duration: number
}

const TourPackageCard = ({ image, title, destinationName, startPrice, duration }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative overflow-hidden h-[250px] lg:w-[487px] lg:h-[459px] rounded-3xl cursor-pointer'>
            <div className={`w-full h-full ${isHovered ? "scale-125" : "scale-100 "} transform transition-all duration-700`}>
                <img src={image} alt="" className='h-full w-full' />
                <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black'>
                </div>
            </div>
            <div className='text-white absolute bottom-0 p-5 lg:p-10 font-primary '>
                <h1 className='lg:text-[32px] text-xl font-openSans font-medium'>{title}</h1>
                <div className='flex gap-2 w-full items-center mt-5 font-openSans font-light'>
                    <div className='flex items-center gap-2 border-r-2 pr-2 capitalize'>
                        <LocationIcon />
                        {destinationName}
                    </div>
                    <div className='flex items-center gap-2 border-r-2 pr-2'>
                        <div className='p-2 bg-white w-[24px] h-[24px] font-openSans text-black flex justify-center items-center rounded-full'>₮</div>
                        {startPrice.toLocaleString()}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TimeIcon width='20' height='20' fill='white' />
                        <p className='capitalize'>{duration} days</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TourPackageCard;