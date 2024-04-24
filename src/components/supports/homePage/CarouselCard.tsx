import React, { ReactElement, useState } from 'react'
import { LocationIcon } from '@/components/icons/homePage'

interface Props {
  title: string
  image: string
  icon: ReactElement
  miniTitle: string
  description: string
  responsivePackage: number
  responsiveTitle: string
}

const CarouselCard = ({ responsiveTitle, image, title, icon, miniTitle, description, responsivePackage }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsHovered(false)
    }
  }
  return (
    <div className='relative'>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cursor-pointer rounded-3xl'>
        <img src={image} className={`${isHovered ? "lg:w-[713px] lg:h-[609px]" : "lg:w-[472px] lg:h-[503px]"} transition-all w-[417px] h-[464px] m-auto ease-out duration-1000 rounded-3xl`} />
        <div className='lg:hidden flex items-center flex-col mt-2'>
          <div className='font-primary text-2xl font-bold'>{responsiveTitle}</div>
          <div className='flex gap-1 items-center font-primary mt-2'>
            <LocationIcon width='20' height='22' fill='#4997D3' />
            <h1>{responsivePackage} Packages</h1>
          </div>
        </div>
        <div className={`hidden lg:block absolute top-0 w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-t from-black to-transparent absolute inset-0 rounded-3xl">
            <div className='absolute bottom-0'>
              <div className='lg:p-8 flex font-primary flex-col gap-3 text-white transition-all duration-700'>
                <h1 className='text-3xl font-medium '>{title}</h1>
                <div className='flex gap-2 items-center'>
                  {icon}
                  <p className='text-xl font-normal'>{miniTitle}</p>
                </div>
                <p className='text-xl text-gray-500'>{description}</p>
                <div className='flex gap-5'>
                  <button className='lg:p-3  lg:w-[147px] rounded-lg font-medium bg-white btn text-black'>Book now</button>
                  <button className='border lg:w-[147px] rounded-lg font-medium border-white btn bg-black text-white p-3'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default CarouselCard;