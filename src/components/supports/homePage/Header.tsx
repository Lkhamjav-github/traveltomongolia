import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import Link from 'next/link';
import { getServerSideProps } from '@/utils/fetchTravelDatas';
import { BurgerMenu, DownArrow, XIcon } from '@/components/icons/homePage';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FetchDataProps } from '@/types/fetchDataProps';


const Header = ({ toursData, destinationDatas, categoryDatas }: FetchDataProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const personalTours = toursData.result.filter(tour => tour.group === "personal tours");
    const groupTours = toursData.result.filter(tour => tour.group === "groups tour");

    const { y } = useWindowScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(y > 450);
    }, [y]);

    const destinationsByCategory = categoryDatas.result.map(category => {
        const destinationsInCategory = destinationDatas.result.filter(destination => destination.destinationCategory._id === category._id);

        return { category, destination: destinationsInCategory };
    });

    const { user, error } = useUser();

    console.log(user)
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className='flex max-w-[1520px] w-[90%] z-10'>
                    <div className={`${isScrolled ? "duration-700 ease-in-out transition-all lg:static fixed top-0 right-0 left-0 bg-white shadow-lg text-black" : ""} flex items-center justify-between w-full text-white lg:p-8 p-4 font-primary text-base`}>
                        <Link href={'/'}>
                            <img className='w-[100px] h-[50px]' src="http://localhost:3000/logoNoBackground.png" alt="" />
                        </Link>
                        <div className='hidden lg:flex gap-14 lg:items-center lg:drop-shadow-lg'>
                            <div className='flex items-center relative gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                                <div className="dropdown dropdown-hover relative">
                                    <Link href={"/destination"}><div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Destination <DownArrow /></div></Link>
                                    <ul tabIndex={0} className="dropdown-content -left-80 z-[1] menu p-2 shadow bg-base-100 rounded-box  w-[60vw] flex-row grid grid-cols-5">
                                        {destinationsByCategory.map(({ category, destination }) =>
                                            <div className='flex flex-col justify-start'>
                                                <div className="text-gray-700 flex justify-between font-semibold capitalize">
                                                    <h1 className='border-b-2 pl-2 w-full pb-2 font-openSans'>
                                                        {category.english}
                                                    </h1>
                                                </div>
                                                <div className='text-black capitalize font-primary'>
                                                    {destination.map((dest) => (
                                                        <Link href={`/destination/${dest.english}`}><div><p className='hover:bg-slate-200 font-openSans text-md rounded-lg p-2 duration-300 transition-all ease-in-out'>{dest.english}</p></div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                                <div className="dropdown dropdown-hover relative">
                                    <div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Tours</div>
                                    {/* <ul tabIndex={0} className="dropdown-content absolute -left-40 z-50 menu p-2 shadow bg-base-100 w-[400px] rounded-box flex-row grid grid-cols-2">
                                        <div className='flex flex-col'>
                                            <div className="text-gray-700 font-semibold pl-2 capitalize">
                                                <h1 className='border-b-2 pb-1'>{personalTours.length > 0 ? personalTours[0].group : ''}</h1>
                                            </div>
                                            <div className='text-black mt-2 flex flex-col font-openSans gap-3 capitalize'>
                                                {personalTours.map((tour) =>
                                                (
                                                    <div><p className='hover:bg-slate-200 rounded-lg p-2 duration-300 transition-all ease-in-out'>{tour.english}</p></div>
                                                )
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-gray-700 font-semibold pl-2 capitalize">
                                                <h1 className='border-b-2 pb-1'>
                                                    {groupTours.length > 0 ? groupTours[0].group : ''}
                                                </h1>
                                            </div>
                                            <div className='text-black mt-2 flex flex-col gap-3 font-openSans capitalize'>
                                                {groupTours.map((tour) => (
                                                    <div><p className='hover:bg-slate-200 rounded-lg p-2 duration-300 transition-all ease-in-out'>{tour.english}</p></div>
                                                ))}
                                            </div>
                                        </div>
                                    </ul> */}
                                </div>
                            </div>
                            <Link href={'/about'}><p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>About</p></Link>
                            {user &&
                                <Link href={`dashboard/${user.sid}`}><p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>Dashboard</p></Link>
                            }
                        </div>
                        {user?.name ? (
                            <>
                                <div className='flex gap-6 items-center'>

                                    <a href="/api/auth/logout" className='hidden lg:block p-3 border rounded-lg font-medium cursor-pointer hover:-translate-y-1 transition ease-in-out hover:scale-110'>
                                        Log Out
                                    </a>
                                </div>
                            </>
                        ) : (
                            <a href="/api/auth/login" className='hidden lg:block p-3 border rounded-lg font-medium cursor-pointer hover:-translate-y-1 transition ease-in-out hover:scale-110'>
                                Log in
                            </a>
                        )}
                        <div className='lg:hidden'>
                            <button onClick={() => { setShowMenu(true) }}>
                                {isScrolled ? <BurgerMenu fill='#4997D3' /> : <BurgerMenu fill='white' />}
                            </button>
                        </div>
                    </div>
                </div >
            </div >
            <div className='fixed right-0 left-auto top-0 z-50 transition-all bg-slate-900 text-white w-[200px] h-screen duration-500 ease-in-out' style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100%)', opacity: showMenu ? '1' : '0', visibility: showMenu ? 'visible' : 'hidden' }}>
                <div className='flex flex-col gap-4'>
                    <div className='w-full border-b-2 pb-4'>
                        <button className='ml-4 mt-5' onClick={() => { setShowMenu(false) }}>
                            <XIcon width='18' fill='#4997D3' />
                        </button>
                        <div className='flex items-center justify-center'>
                            <img className='w-1/2' src="logoNoBackground.png" alt="" />
                        </div>
                    </div>
                    <ul className='ml-2 mr-2 mt-10 font-primary flex flex-col gap-6'>
                        <Link className='w-full  text-xl font-semibold' href={'/'}><li>Home</li></Link>
                        <Link className='w-full  text-xl font-semibold' href={'/destination'}><li>Destination</li></Link>
                        <Link className='w-full  text-xl font-semibold' href={'/tours'}><li>Tours</li></Link>
                        <Link className='w-full text-xl font-semibold' href={'/about'}><li>About</li></Link>
                        {user?.name ? (<a className='w-full text-xl font-semibold' href='/api/auth/logout'>Log out</a>) : (<a className='w-full text-xl font-semibold' href='/api/auth/login'>Log in</a>)}
                    </ul>
                </div>
            </div>
        </>
    )
};

export { getServerSideProps };

export default Header;