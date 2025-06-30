import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { ImageList } from '../data';


const Hero = () => {
  
  return (
    <div className='relative flex h-[550px] overflow-hidden'>
        <div className='bg-[#785424] h-[700px] w-[700px] rounded-3xl rotate-[45deg] absolute top-[-300px] right-0 -z-10' />
        <Swiper 
            loop={true} 
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
          {ImageList.map((item) => {
            return (
              <SwiperSlide>
                <div className='flex h-full mx-[10%] w-[80%] justify-center' key={item.id}>
                  <div className='flex max-w-[50%] justify-center flex-1/2'>
                  <div className='flex flex-col justify-center max-w-[500px] gap-6'>
                    <h1 className='font-bold text-6xl leading-20'>{item.title}</h1>
                    <p className='text-lg'>{item.description}</p>
                    <button className='flex w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
                      <span className='text-white font-semibold text-[17px]'>Order</span>
                      <FaShoppingCart size={20} className='text-white' />
                    </button>                
                  </div>
                    
                  </div>
                  <div className='flex flex-1/2 justify-center items-center'>
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              )
          })}
        </Swiper>
    </div>
  )
}

export default Hero