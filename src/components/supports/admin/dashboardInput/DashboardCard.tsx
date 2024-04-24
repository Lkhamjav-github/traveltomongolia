import React, { useEffect, useState } from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { getTravelNumber } from '@/utils/functions/AdminUtilities';
import { DashboardChart } from './DashboardChart';

export const DashboardCard = ({ title, number, chartData, changes}:{ title: string, number: number, chartData: {label: string[], data: number[]}, changes: number}) => {
    const [numberTravel, setNumberTravel]= useState()

    useEffect(()=>{ getTravelNumber(setNumberTravel)},[])

  return (
    <div className='flex flex-col'>
    <div className='w-full flex flex-col gap-2 bg-white rounded-t-xl justify-center items-start p-3'>
      <div className='flex gap-2 items-center'>
        <div className='bg-blue rounded p-1 w-6 h-6 flex justify-center items-center'><WorkOutlineIcon sx={{color: "white", fontSize: "small" }}/></div>
        <h2>Total tour package</h2>
      </div>
      <div className='flex gap-2 py-3'>
        <p className='text-2xl'><strong>{numberTravel}</strong></p>
        <div><DashboardChart/></div>
      </div>
      
    </div>
    <div className='bg-blue flex gap-2 rounded-b-xl p-3'>
        <div className='rounded-full bg-white p-1 w-6 h-6 flex justify-center items-center'> <ArrowUpwardIcon color= "primary" fontSize="small"/> </div>
        <span className='text-white'>15%</span>
        <span className='text-white'>than last month</span>
      </div>
    </div>
  )
}

