import React from 'react'

interface Props {
    message: string
    proPic: string
    name: string
    bio: string
}

const ReviewCard = ({ message, proPic, name, bio }: Props) => {
    return (
        <div className='lg:w-[745px] w-full h-[300px] lg:h-[428px] rounded-3xl lg:p-16 p-6 font-primary shadow-xl flex flex-col justify-between'>
            <p className='lg:text-[20px] font-normal'>{message}</p>
            <div className='flex gap-5 items-center'>
                <div className='overflow-hidden lg:w-20 lg:h-20 rounded-full'> <img src={proPic} alt="" className='w-full h-full' /></div>
                <div className='flex flex-col'>
                    <h1 className='lg:text-[20px] font-medium'>{name}</h1>
                    <p className='font-light'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard