import { darkModeBtn, lightModeBtn, logo } from '../../assets'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { DropdownLinks, Menu } from '../data';
import { IoMdArrowDropdown } from "react-icons/io";



const Navbar = ({setIsVisible}) => {
  return (
    <div className='flex flex-col w-screen'>
      <Topbar setIsVisible={setIsVisible} />
      <Menubar />
    </div>
  )
}


const Topbar = ({setIsVisible}) => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className='dark:bg-[#785424] bg-[#f5dfbf] h-[55px] flex items-center justify-center '>
      <div className='container flex justify-between items-center'>
        <a href="#" className='flex items-center gap-2' data-aos="flip-right">
          <img src={logo} alt="" className='w-[40px] h-[35px]' />
          <span className='text-black dark:text-white font-bold text-3xl'>Shopsy</span>
        </a>
        <div className='flex gap-3'>
          <div className='group flex justify-center text-gray-800 dark:text-gray-200 items-center dark:bg-[#202c34] bg-white h-[35px] border-[1px] border-gray-400 px-3 rounded-[20px]'>
            <input type="text" className='text-gray-800 dark:text-gray-200 w-[150px] group-hover:w-[200px] transition-all duration-300 focus:outline-none' placeholder='search' />
            <FaSearch size={15} className='text-gray-400 group-hover:text-[#fea928] ml-2' />
          </div>
          <button 
          onClick={() => setIsVisible(true)}
          className='group cursor-pointer flex justify-center items-center transition-all duration-300 bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
            <span className='text-white group-hover:block hidden transition-all duration-300 font-semibold text-[17px]'>Order</span>
            <FaShoppingCart size={20} className='text-white' />
          </button>
          <div className='flex items-center'>
            <img src={lightModeBtn} 
              className='h-[25px] cursor-pointer transition-all duration-300 dark:block hidden' 
              onClick={toggleTheme} />
            <img src={darkModeBtn} 
              className='h-[25px] cursor-pointer transition-all duration-300 dark:hidden block' 
              onClick={toggleTheme} />
          </div>
        </div>
      </div>
    </div>
  )
}


const Menubar = () => {
  return (
    <div data-aos="zoom-in" className='dark:bg-[#181c24] bg-white dark:text-white text-black'>
      <ul className='flex items-center gap-4 justify-center py-2'>
        {Menu.map((item) => {
          if (item.name === "Trending Items") {
            return (
              <li id={item.id} className='group' key={item.id}>
                <a href={item.link} className='hover:text-[#fea928]  flex items-center gap-2 px-4 text-[15px]'>
                  {item.name}
                  <IoMdArrowDropdown className='group-hover:rotate-180 transition-all duration-200' />
                  </a>
                <div className='absolute z-[1000] hidden group-hover:flex dark:bg-[#181c24] bg-white py-1 rounded-xl'>
                  <ul className=''>
                    {DropdownLinks.map((dropdownItem) => (
                      <li key={dropdownItem.id} className='p-3 flex text-[15px] rounded-xl hover:bg-[#f5dfbf] dark:hover:text-black'>
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
              <a href={item.link} className='hover:text-[#fea928] px-4 text-[15px]'>{item.name}</a>
            </li>
            )
          }
          
        })}
      </ul>
    </div>
  )
}

export default Navbar