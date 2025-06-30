import { ProductsData, TopProductsData } from '../data'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const TopProducts = () => {
  return (
    <div className='flex flex-col py-16 bg-gradient-to-b from-white to-gray-200'>
      <div className='flex justify-center items-start flex-col my-10 mx-[10%] w-[80%]'>
        <h6 className='text-md text-amber-800 font-medium'>Trending Products</h6>
        <h1 className='font-bold text-5xl leading-18'>Top Rated Products</h1>
        <p className='max-w-[800px] text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus atque quae ut facere dolores soluta, saepe?</p>
      </div>
      <div className='flex flex-row justify-evenly items-center mx-[10%] w-[80%]'>
        {TopProductsData.map((topProduct) => (
          <TopProductCard product={topProduct} key={topProduct.id} />
        )) }
      </div>
    </div>
  )
}


const TopProductCard = ({product}) => {
  return(
    <div className='flex shadow-xl flex-col space-y-3 bg-white max-w-[300px] rounded-xl p-5 justify-end items-center'>
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
        <button className='flex mt-5 cursor-pointer w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
          <span className='text-white font-semibold text-[17px]'>Order</span>
          <FaShoppingCart size={20} className='text-white' />
        </button>  
      </div>
    </div>
  )
}

export default TopProducts