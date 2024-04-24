import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

const Profile = () => {
    const { user } = useUser();
    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-[1520px] w-[90%] flex'>
                <div className='w-full flex flex-col'>
                    <div className='flex gap-5 items-center'>
                        <div className='bg-black w-[200px] h-[200px] p-2'>
                            {user && user.picture ? <img className='w-full h-full' src={user.picture} alt="" /> : null}
                        </div>
                        <div className='font-primary'>
                            <h1 className='font-bold text-3xl'>{user?.name}</h1>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className='flex font-primary flex-col gap-5 w-full'>
                    <h1 className='font-bold text-xl'>Contact</h1>
                    <div>
                        <p className='text-gray-500'>Email</p>

                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile