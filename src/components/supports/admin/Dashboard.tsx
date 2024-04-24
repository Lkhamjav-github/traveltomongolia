import React from 'react'
import { Header } from './Header'
import { DashboardCard } from './dashboardInput/DashboardCard'
import { dashboardDataType } from '@/types/dashboardAdminCard'

export const Dashboard = ({dashboardData}: {dashboardData: dashboardDataType }) => {
  const {tourCardData, revenueCardData, destinationCardData, orderCardData, table}=dashboardData

  return (
    <div className='bg-gray-50 h-full w-full flex flex-col'>
      <Header/>
      <div className='w-full h-full bg-gray-50 p-5 flex flex-col'>
        <div className='w-full grid grid-cols-4 gap-2'>
          <DashboardCard title='Total tour' number={tourCardData.totalTravelNumber} chartData={tourCardData.chartData} changes={tourCardData.changes}/>
          <DashboardCard title='Total destination' number={tourCardData.totalTravelNumber} chartData={tourCardData.chartData} changes={tourCardData.changes}/>
          <DashboardCard title='Total revenue'number={tourCardData.totalTravelNumber} chartData={tourCardData.chartData} changes={tourCardData.changes}/>
          <DashboardCard title='Booked tour' number={tourCardData.totalTravelNumber} chartData={tourCardData.chartData} changes={tourCardData.changes}/>
        </div>

      </div>
    </div>
  )
}
