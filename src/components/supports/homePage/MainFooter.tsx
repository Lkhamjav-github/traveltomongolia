import React from 'react'

export const MainFooter = () => {
    return (
        <div className='flex items-center justify-center relative lg:h-[634px]'>
            <img src="LandscapeMongolia.jpg" className='absolute w-full h-full top-0 right-0 left-0' alt="" />
            <div className='bg-[#D9D9D9] absolute w-full h-full opacity-35'></div>
            <div className='max-w-[1520px] w-[90%] pt-20 pb-20 z-20'>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <h1 className='font-bold font-oswald lg:text-[100px] text-black text-3xl text-center'>START YOUR ADVENTURE</h1>
                    <p className='lg:text-[20px] lg:mt-10 font-primary lg:w-[881px] text-center'>Sign up for our newsletter and receive exclusive travel deals, insider tips, and destination
                        inspiration. Don't miss out on the adventure - join our mailing list today!</p>
                    <div className='flex lg:flex-row flex-col gap-2'>
                        <input type="text" placeholder='Enter your email address here ...' className='lg:p-5 p-2 w-[271px] rounded-lg lg:w-[551px] lg:text-[20px] bg-transparent border-black border placeholder-black' />
                        <button className='bg-black text-white px-5 py-2 lg:w-[164px] rounded-lg'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
