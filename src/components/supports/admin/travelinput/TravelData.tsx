
import { getTravel } from '@/utils/functions/TravelUtilities'
import React, { useEffect, useState } from 'react'


export const TravelData = () => {
  const [travelData, setTravelData] = useState<TravelData[] | null>(null)

  useEffect(()=>{
    getTravel(setTravelData)
},[])

  type TravelData ={
    name: string,
    duration: number,
    price:{
        adult: number,
        child: number
    },
    _id: string,
    travelCompany: string
  }

  return (
    <div className='w-full h-full flex flex-col items-center mt-8'>
        <table className="table w-2/3 ">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Аялалын нэр</th>
                    <th>Үргэлжлэх хоног</th>
                    <th>Үнэ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {travelData?.map((travel:TravelData, index)=> {return(
                        <tr>
                            <th>{index+1}</th>
                            <th>{travel.name}</th>
                            <th>{travel.duration}</th>
                            <th>{`Том хүн -${travel.price.adult}`} <br /> {`Хүүхэд -${travel.price.child}`}
                            </th>
                        </tr>
                    )})
                }
            </tbody>
        </table>
      
    </div>
  )
}

