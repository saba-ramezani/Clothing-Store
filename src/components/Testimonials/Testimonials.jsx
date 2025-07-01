import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TestimonialData } from "../data";


const Testimonials = () => {
  return (
    <div className='w-full dark:bg-gradient-to-b from-black to-[#444040] bg-white py-10'>
      <div className='flex flex-col mx-[10%] w-[80%]'>
        <div className='flex justify-center items-center flex-col my-10'>
          <h6 className='text-md text-amber-800 font-medium'>What our customers say</h6>
          <h1 className='font-bold text-5xl leading-18 dark:text-white text-black'>Testimonial</h1>
          <p className='max-w-[800px] text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus atque quae ut facere dolores soluta, saepe?</p>
        </div>
        <div>
          <Swiper 
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
        >
          {TestimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="relative shadow-xl dark:bg-gray-700 bg-amber-100 mx-5 flex flex-col px-5 py-8 rounded-4xl ">
                <span className="absolute right-5 top-[-50px] text-9xl dark:text-gray-200 text-gray-500 font-serif opacity-35 z-0">,,</span>
                <div className="mb-5 z-10">
                  <img className="h-[75px] w-[75px] rounded-full " src={data.img} alt="" />
                </div>
                <p className="dark:text-gray-300 text-gray-500 text-[15px] z-10">{data.text}</p>
                <span className="dark:text-gray-100 text-black font-bold text-xl mt-3 z-10">{data.name}</span>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
          
        <div className='flex justify-center mt-10'>
          <button className='flex cursor-pointer w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
            <span className='text-white font-semibold text-[17px]'>View All Comments</span>
          </button> 
        </div>
        
      </div>
    </div>
      
    )
}

export default Testimonials