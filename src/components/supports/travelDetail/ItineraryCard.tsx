import React, { useState } from 'react'
import { TimeIcon } from '@/components/icons/travelDetail'

interface Props {
    image: string
    title: string
    time: number
    description?: string
}

const ItineraryCard = ({ image, title, time, description }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative overflow-hidden lg:w-[487px] lg:h-[459px] rounded-3xl cursor-pointer'>
            <div className={`w-full h-full ${isHovered ? "scale-125" : "scale-100 "} transform transition-all duration-700`}>
                <img src={image} alt="" className='h-full w-full' />
                <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black'>
                </div>
            </div>
            <div className='text-white absolute bottom-0 p-10 font-primary '>
                <h1 className='lg:text-3xl text-xl font-openSans font-medium'>{title}</h1>
                <div className='flex gap-3 items-center mt-5 font-openSans font-light'>
                    <TimeIcon width='20' height='20' fill='white' />
                    Estimated time: {time} hours
                </div>
                <div className={`transition-all duration-500 mt-5 font-light transform ${isHovered ? "transition-all" : "hidden"}`}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ItineraryCard