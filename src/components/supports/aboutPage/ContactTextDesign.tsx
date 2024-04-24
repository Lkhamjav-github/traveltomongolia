import React from 'react'

export const ContactTextDesign = ({ title, contact }: { title: string, contact: string }) => {
    return (
        <div className='flex flex-col gap-1'>
            <h1 className='uppercase lg:text-[32px] font-primary font-light text-blue'>{title}</h1>
            <p className='lg:text-[32px] font-primary font-normal text-black'>{contact}</p>
        </div>
    )
}
