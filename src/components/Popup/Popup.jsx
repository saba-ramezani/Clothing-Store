import { IoMdCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const Popup = ({isVisible, setIsVisible}) => {
  if (isVisible) {
    return(
        <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-50 overflow-hidden'>
            <div className='bg-white rounded h-fit w-[400px] px-8 py-8 flex flex-col justify-center items-center'> 
                <div className='flex justify-between w-full items-center  mb-10'>
                    <h1 className='text-xl text-center'>Order Your Item</h1>
                    <button className="cursor-pointer" onClick={() => setIsVisible(false)}>
                        <IoMdCloseCircle size={25} />
                    </button>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    <input type="text" 
                    placeholder='Name' 
                    className='w-full border border-gray-400 rounded-xl px-2 py-1 focus:outline-none' />
                    <input type="text" 
                    placeholder='Email' 
                    className='w-full border border-gray-400 rounded-xl px-2 py-1 focus:outline-none' />
                    <input type="text" 
                    placeholder='Address' 
                    className='w-full border border-gray-400 rounded-xl px-2 py-1 focus:outline-none' />
                </div>
                <button className='flex cursor-pointer justify-center w-fit mt-5 items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
                    <span className='text-white font-semibold text-[17px]'>Order</span>
                    <FaShoppingCart size={20} className='text-white' />
                </button>
            </div>
        </div>
    )
  } else {
    return null
  }
}

export default Popup