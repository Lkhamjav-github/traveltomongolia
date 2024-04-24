import React from 'react'
import { PageTitleDesign } from './PageTitleDesign'
import { getServerSideProps } from '../../../utils/fetchTravelDatas'
import { Travel } from '../../../types/travelTypes'

const Gallery = ({ travelDatas }: { travelDatas: Travel }) => {
    const slicedData = travelDatas.result.slice(0, 6)
    return (
        <div className='mb-40 flex justify-center pt-20'>
            <div className='max-w-[1520px] w-[90%]'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <PageTitleDesign title='GALLERY' textColor='text-grayColor' frontText='OUR ADVENTURES' />
                        <div className='mt-20'>
                            <div>
                                <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-4 flex flex-col gap-4">
                                    {/* {slicedData.map((data) => <img className='lg:w-[900px] lg:h-[400px] w-full h-[400px] rounded-3xl' src={data.image.mainImage} alt="" />)} */}
                                    <div className="row-span-2">
                                        <img className='lg:w-full lg:h-full rounded-3xl' src="GenghisKhaan.jpg" alt="" />
                                    </div>
                                    <div className="row-span-5">
                                        <img className='lg:w-full lg:h-full rounded-3xl' src="LandscapeMongolia.jpg" alt="" />
                                    </div>
                                    <div className="row-span-2">
                                        <img className='lg:w-full lg:h-full rounded-3xl' src="GerWithStars.jpg" alt="" />
                                    </div>
                                    <div className="row-span-3">
                                        <img className='lg:h-full rounded-3xl' src="PersonWithEagle.jpg" alt="" />
                                    </div>
                                    <div className="row-span-3">
                                        <img className='lg:h-full rounded-3xl' src="GobiDesert.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { getServerSideProps };

export default Gallery;