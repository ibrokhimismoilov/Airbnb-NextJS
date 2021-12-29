import Image from 'next/image'
import React from 'react'

const MediumCard = ({ img, title }) => {
    return (
        <div className='cursor-pointer '>
            <div className="relative overflow-hidden rounded-lg h-80 w-80">
                <Image src={img} layout='fill' className=' hover:scale-105 transition transform duration-300 ease-out' />
            </div>
            <h1 className='text-2xl font-semibold mt-3'>{title}</h1>
        </div>
    )
}

export default MediumCard
