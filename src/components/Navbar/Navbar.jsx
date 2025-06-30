import React, { useState } from 'react'
import { darkModeBtn, lightModeBtn, logo } from '../../assets'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import classNames from "classnames";
import { DropdownLinks, Menu } from '../data';
import { IoMdArrowDropdown } from "react-icons/io";





const Navbar = () => {
  return (
    <div className='flex flex-col w-screen'>
      <Topbar />
      <Menubar />
    </div>
  )
}


const Topbar = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className='bg-[#785424] h-[55px] flex items-center justify-center '>
      <div className='container flex justify-between items-center'>
        <a href="#" className='flex items-center gap-2'>
          <img src={logo} alt="" className='w-[40px] h-[35px]' />
          <span className='text-white font-bold text-3xl'>Shopsy</span>
        </a>
        <div className='flex gap-3'>
          <div className='group flex justify-center items-center bg-[#202c34] h-[35px] border-[1px] border-gray-400 px-3 rounded-[20px]'>
            <input type="text" className='text-gray-200 w-[150px] group-hover:w-[200px] transition-all duration-300 focus:outline-none' placeholder='search' />
            <FaSearch size={15} className='text-gray-400 group-hover:text-[#fea928] ml-2' />
          </div>
          <button className='group flex justify-center items-center transition-all duration-300 bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
            <span className='text-white group-hover:block hidden transition-all duration-300 font-semibold text-[17px]'>Order</span>
            <FaShoppingCart size={20} className='text-white' />
          </button>
          <div className='flex items-center'>
            <img src={lightModeBtn} className={classNames('h-[25px] cursor-pointer transition-all duration-300', theme === "light" ? "block" : "hidden")} onClick={() => setTheme('dark')} />
            <img src={darkModeBtn} className={classNames('h-[25px] cursor-pointer transition-all duration-300', theme === "dark" ? "block" : "hidden")} onClick={() => setTheme('light')} />
          </div>
        </div>
      </div>
    </div>
  )
}


const Menubar = () => {
  return (
    <div data-aos="zoom-in" className='bg-[#181c24]'>
      <ul className='flex items-center gap-4 justify-center py-2'>
        {Menu.map((item) => {
          if (item.name === "Trending Items") {
            return (
              <li id={item.id} className='group' key={item.id}>
                <a href={item.link} className='hover:text-[#fea928] flex items-center gap-2 text-white px-4 text-[15px]'>
                  {item.name}
                  <IoMdArrowDropdown className='group-hover:rotate-180 transition-all duration-200' />
                  </a>
                <div className='absolute z-[1000] hidden group-hover:flex bg-white py-1 rounded-xl'>
                  <ul className=''>
                    {DropdownLinks.map((dropdownItem) => (
                      <li key={dropdownItem.id} className='p-3 flex text-[15px] rounded-xl hover:bg-[#f5dfbf] '>
                        <a href={dropdownItem.link} className='w-full'>{dropdownItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li> 
            )
          } else {
            return (
            <li id={item.id} key={item.id}>
              <a href={item.link} className='hover:text-[#fea928] text-white px-4 text-[15px]'>{item.name}</a>
            </li>
            )
          }
          
        })}
      </ul>
    </div>
  )
}

export default Navbar