import React, { useState } from 'react'
import { DownArrow, UpArrow } from '@/components/icons/homePage'


export const QuestionCard = () => {
    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <div className='lg:w-[987px] lg:p-6 p-4 rounded-2xl lg:rounded-3xl border transition-all duration-700 ease-in-out'>
            <div className='flex justify-between'>
                <h1 className='lg:text-3xl text-lg font-primary font-medium'>How do I book a trip with Vacasky?</h1>
                <button onClick={() => { setShowAnswers(!showAnswers) }}>
                    {showAnswers
                        ? <div className='p-2 bg-blue rounded-full'><UpArrow width='24' height='24' /></div>
                        : <div className='p-2 border border-blue rounded-full'><DownArrow width='24' height='24' fill="#4997D3" /></div>
                    }
                </button>
            </div>
            <p className={`lg:w-[841px] transition-all mt-5 ${showAnswers ? "block" : "hidden"}`}>Vacasky offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.</p>
        </div>
    )
}
