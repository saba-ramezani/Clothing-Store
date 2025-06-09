import React from 'react'
import { logo } from '../../assets'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='flex flex-col'>
      <Topbar />
      <Menubar />
    </div>
  )
}


const Topbar = () => {
  return (
    <div className='bg-[#785424] h-[55px] flex items-center justify-center'>
      <div className='max-w-[70%] w-[70%] flex justify-between items-center'>
        <a href="#" className='flex items-center gap-2'>
          <img src={logo} alt="" className='w-[40px] h-[35px]' />
          <span className='text-white font-bold text-3xl'>Shopsy</span>
        </a>
        <div className='flex'>
          <div className='group flex justify-center items-center bg-[#202c34] h-[35px] border-[1px] border-gray-400 px-3 rounded-[20px]'>
            <input type="text" className='text-gray-200 w-[200px] group-hover:w-[300px] transition-all duration-300 focus:outline-none' placeholder='search' />
            <FaSearch size={15} className='text-gray-400 group-hover:text-[#fea928] ml-2' />
          </div>
          <button className='group flex justify-center items-center transition-all duration-300 bg-gradient-to-r from-[#fea928] to-[#ed8900] h-[35px] px-5 rounded-[20px] gap-2'>
            <span className='text-white group-hover:block hidden transition-all duration-300 font-semibold text-[17px]'>Order</span>
            <FaShoppingCart size={20} className='text-white' />
          </button>
          <div></div>
        </div>
      </div>
      
    </div>
  )
}


const Menubar = () => {
  return (
    <div>
      menubar
    </div>
  )
}

export default Navbar