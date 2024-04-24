import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/component.json'
import { getServerSideProps } from '../../../utils/fetchTravelDatas'
import Description from './Description';
import Header from '../homePage/Header';
import { FetchDataProps } from '@/types/fetchDataProps';
import { useRouter } from 'next/router';


const TourDetailHero = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const router = useRouter();
    const { tour } = router.query;

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },

        ]
    };

    return (
        <>
            {travelDatas.result.map((data) => data._id === tour
                ? (
                    <>
                        <img src={data.image.mainImage} className='w-full h-[500px] lg:h-[950px]' alt="" />
                        <div className='absolute top-0 right-0 left-0'>
                            <Header toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} />
                            <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex lg:mt-8 bg justify-center'>
                                <div className={`flex flex-col items-center ${data.name.length > 25 ? 'mt-0' : 'mt-20'}`}>
                                    <div className='flex-col items-center drop-shadow-lg'>
                                        <div className='z-50 text-white flex justify-center gap-3 lg:text-[20px] lg:leading-[30px] font-primary'>
                                            <p className='border-r-2 pr-3'>Home</p>
                                            <p className='border-r-2 pr-3'>Tours</p>
                                            <p className='capitalize'>{data.destination.english}</p>
                                        </div>
                                        <h1 className={`uppercase font-oswald lg:mt-0 mt-5 drop-shadow-md font-bold text-4xl ${data.name.length > 25 ? "lg:text-[130px]" : "lg:text-[200px] "} lg:leading-[200px] text-white text-center`}>{data.name}</h1>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container mt-10 mb-10 w-full overflow-hidden">
                            <Slider {...settings}>
                                <div className='slide w-full'>
                                    <img src={data.image.supportImage} className="w-full h-[250px] lg:h-[500px] rounded-3xl" />
                                </div>
                                <div className='slide w-full'>
                                    <img src={data.image.supportImage} className="lg:w-[932px] w-full h-[250px] lg:h-[500px] rounded-3xl" />
                                </div>
                                <div className='slide w-full'>
                                    <img src={data.image.supportImage} className="lg:w-[932px] w-full h-[250px] lg:h-[500px] rounded-3xl" />
                                </div>
                            </Slider>
                        </div>
                        {/* <SimpleSlider /> */}
                        <Description destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} travelDatas={travelDatas} />
                    </>
                )
                : null
            )}
        </>
    );
};

export { getServerSideProps };

export default TourDetailHero;
