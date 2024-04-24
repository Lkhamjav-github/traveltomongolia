import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = () => {
  return (
    <div className='w-full  h-28 bg-white flex justify-around items-center'>
        <div className='bg-gray-100 rounded-full flex items-center justify-center w-1/2 my-7'>
            <label className="input input-bordered flex 
            items-center gap-2 w-full h-full m-3  mx-10">
                <SearchIcon color='primary'/>
                <input type="text" className="grow bg-gray-100" placeholder="Search" />
            </label>
        </div>
        <div className='h-10 w-12 flex my-7'>
            <div className='relative h-full w-full'>
                <div className='absolute bottom-0 left-0'>
                    <NotificationsIcon fontSize='large'/>
                </div>
                <div className='absolute top-0 right-0 rounded-full bg-blue-500 text-white h-7 flex justify-center items-center w-7 '>{'15'}</div>
            </div>
        </div>
        <div className='h-16 my-7 border-r-2'></div>
        <div className='flex h-16 gap-2 items-center'>
            <div className="avatar">
                <div className="w-16 mask mask-squircle">
                    <img  className='rounded-xl' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <h2>{'Dulguun'}</h2>
                <h2 className='text-gray-400'>{'Dulguun@gmail.com'}</h2>
            </div>
        </div>
    </div>
  )
}

