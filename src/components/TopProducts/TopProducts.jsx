import { ProductsData, TopProductsData } from '../data'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const TopProducts = ({setIsVisible}) => {
  return (
    <div className='flex flex-col py-16 bg-gradient-to-b dark:from-black dark:to-gray-800 from-white to-gray-200'>
      <div className='flex justify-center lg:items-start items-center flex-col my-10 mx-[10%] w-[80%]'>
        <h6 className='text-sm md:text-md text-amber-800 font-medium' data-aos="slide-right">Trending Products</h6>
        <h1 className='font-bold  my-5 md:text-left sm:text-2xl md:text-3xl lg:text-4xl text-2xl dark:text-white text-black' data-aos="slide-right">Top Rated Products</h1>
        <p className='max-w-[800px] text-sm md:text-sm text-center text-gray-500' data-aos="slide-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus atque quae ut facere dolores soluta, saepe?</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:justify-evenly items-center mx-[10%] w-[80%]'>
        {TopProductsData.map((topProduct) => (
          <TopProductCard product={topProduct} key={topProduct.id} setIsVisible={setIsVisible} />
        )) }
      </div>
    </div>
  )
}


const TopProductCard = ({product, setIsVisible}) => {
  return(
    <div data-aos="flip-right" className='flex shadow-xl flex-col space-y-3 dark:bg-black bg-white max-w-[300px] rounded-xl p-5 justify-end items-center'>
      <img className='h-[220px] w-[150px] object-cover rounded-md' src={product.img} alt="" />
      <div className='flex flex-col gap-2 items-center'>
        <div className='flex items-center gap-1 font-semibold'>
          <FaStar color='orange' />
          <FaStar color='orange' />
          <FaStar color='orange' />
          <FaStar color='orange' />
          <FaStar color='orange' />
        </div>
        <h6 className='font-bold text-md'>{product.title}</h6>
        <p className='text-sm text-center text-gray-400 line-clamp-2'>{product.description}</p>
        <button 
        onClick={() => setIsVisible(true)}
        className='flex mt-5 cursor-pointer w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
          <span className='text-white font-semibold text-[17px]'>Order</span>
          <FaShoppingCart size={20} className='text-white' />
        </button>  
      </div>
    </div>
  )
}

export default TopProducts