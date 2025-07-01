import React from 'react'
import { banner } from '../../assets';

const Subscribe = () => {
    const BannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        };
  return (
    <div data-aos="zoom-out" style={BannerImg} className='flex flex-col justify-center items-center py-12  gap-8'>
        <h1 className='text-white text-xl sm:text-2xl md:text-4xl font-bold'>Get Notified About New Products</h1>
        <input type="text" 
        placeholder='Enter your Email' className='bg-white text-sm sm:text-md md:text-lg focus:outline-none w-[50%] max-w-[500px] px-4 py-2 rounded-md' />
    </div>
  )
}

export default Subscribe