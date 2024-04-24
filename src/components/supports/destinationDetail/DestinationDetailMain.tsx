import { Destination } from '@/types/destinationTypes'
import { useRouter } from 'next/router'
import React from 'react'
import { Loading } from '../Loading';

export const DestinationDetailMain = ({ destinationDatas }: { destinationDatas: Destination }) => {
    const router = useRouter();
    const { destination } = router.query;


    return (
        <div className='w-full flex gap-10 font-openSans'>
            {destinationDatas.result.map((dest) => (
                dest.english === destination
                    ? <p>{dest.additionalInfo}</p>
                    : null
            ))}
            <p></p>
        </div>
    )
}
