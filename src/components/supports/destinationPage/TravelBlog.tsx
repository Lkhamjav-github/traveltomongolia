import React from 'react'
import { TravelCard } from './TravelCard'
export const TravelBlog = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white'>
            <div className='flex max-w-[1520px] w-[90%] py-5 flex-col gap-[80px]'>
                <div className='flex w-full justify-between'>
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-10.jpg" category="GUIDE" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-11.jpg" category="Category" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-10.jpg" category="Category" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                </div>
                <div className='flex w-full justify-between'>
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-10.jpg" category="GUIDE" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-11.jpg" category="Category" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                    <TravelCard img="https://wpthemebooster.com/demo/themeforest/html/vacasky/images/resource/news-10.jpg" category="Category" detail="Our Beginner’s Guide to Start Hiking in The Swiss Alps" />
                </div>
            </div>
        </div>
    )
}