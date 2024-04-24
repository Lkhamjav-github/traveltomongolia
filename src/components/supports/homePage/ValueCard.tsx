import React, { ReactElement } from 'react'

interface Props {
    svg: ReactElement
    title?: string
    description?: string
}

export const ValueCard = ({ svg, title, description }: Props) => {
    return (
        <div className='lg:w-[264px] lg:h-[230px] flex flex-col justify-center items-center cursor-pointer rounded-3xl lg:hover:bg-blue lg:hover:text-white lg:hover:scale-125  lg:hover:-translate-y-10 transition ease-out duration-500 lg:hover:p-5'>
            {svg}
            < div className='text-center mt-8 flex gap-2 flex-col' >
                <h1 className='font-medium font-primary text-[20px]'>{title}</h1>
                <p className='font-primary'>{description}</p>
            </div >
        </div >
    )
}