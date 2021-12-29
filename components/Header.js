import Image from 'next/image';
import React from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid';

const Header = () => {
    return (
        <header className='header sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src={"https://links.papareact.com/qd3"} width="100%" height="100%" objectFit='contain' objectPosition="left" />
            </div>

            <div className='relative header__search flex items-center justify-end border-2 rounded-full md:shadow-sm w-[100%]'>
                <input className='text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none' type="text" placeholder='Start your search' />
                <SearchIcon className="mr-1 p-2  h-8 text-white bg-red-400 rounded-full cursor-pointer" />
            </div>

            <div className='flex items-center justify-end space-x-4 text-gray-500 '>
                <p className='hidden lg:inline'>Become a host</p>
                <GlobeAltIcon className='h-6' />

                <div className='flex items-center space-x-2 border-2  p-2 rounded-full '>
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
