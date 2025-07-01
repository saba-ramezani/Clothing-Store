import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { ImageList } from '../data';


const Hero = ({setIsVisible}) => {
  
  return (
    <div className='relative flex h-screen max-h-[800px] overflow-hidden bg-gradient-to-bl dark:from-black dark:to-[#301c02] from-white to-[#f8f1e7] z-10'>
        <div className='dark:bg-[#785424] bg-[#f5dfbf] h-[700px] w-[700px] rounded-3xl rotate-[45deg] absolute top-[-300px] right-0 -z-10' />
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
                <div className='md:flex-row flex flex-col h-full mx-[10%] w-[80%] justify-center' key={item.id}>
                  <div className='flex md:max-w-[50%] w-full justify-center md:flex-1/2'>
                    <div className='flex flex-col items-center justify-center max-w-full sm:max-w-[500px] gap-6 dark:text-white text-black'>
                      <h1
                      className='font-bold text-center md:text-left sm:text-3xl md:text-4xl lg:text-6xl text-3xl lg:leading-20'>{item.title}</h1>
                      <p className='sm:text-md text-lg text-center md:text-left'>{item.description}</p>
                      <button 
                      onClick={() => setIsVisible(true)}
                      className='flex cursor-pointer w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
                        <span className='text-white font-semibold text-[17px]'>Order</span>
                        <FaShoppingCart size={20} className='text-white' />
                      </button>                
                    </div>
                  </div>
                  <div className='flex md:flex-1/2 justify-center items-center'>
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