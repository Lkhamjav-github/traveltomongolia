import React, { ReactElement } from 'react'

interface Props {
    style: string
    svg: ReactElement
    title: string
    description: string
}

export const ProcessCard = ({ style, svg, title, description }: Props) => {
    return (
        <div className={`${style} flex flex-col lg:gap-14 gap-8 items-center lg:max-w-[211px] mb-6`}>
            <div className='transition-all lg:hover:scale-125 hover:scale-105 duration-500 ease-in-out w-40 h-40 flex justify-center items-center bg-white rounded-full'>{svg}</div>
            <div className='text-center'>
                <h1 className='lg:text-3xl font-semibold font-primary'>{title}</h1>
                <p className='font-primary lg:text-base text-center mt-2'>{description}</p>
            </div>
        </div>
    )
}
