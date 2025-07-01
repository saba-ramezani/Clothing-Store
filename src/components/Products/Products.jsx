import { ProductsData } from '../data'
import { FaStar } from "react-icons/fa";


const Products = () => {
  return (
    <div className='w-full dark:bg-gray-950 bg-gray-50 py-20 border-y-[1px] dark:border-y-white border-y-gray-400'>
      <div className='flex flex-col mx-[10%] w-[80%]'>
      <div className='flex justify-center items-center flex-col mb-10'>
        <h6 className='text-md text-amber-800 font-medium'>Top Selling Products for YOU</h6>
        <h1 className='font-bold text-5xl leading-18 dark:text-white text-black'>Top Selling Products</h1>
        <p className='max-w-[800px] text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus atque quae ut facere dolores soluta, saepe?</p>
      </div>
      <div className='flex flex-row justify-evenly items-center'>
        {ProductsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        )) }
      </div>
      <div className='flex justify-center mt-10'>
        <button className='flex cursor-pointer w-fit justify-center items-center bg-gradient-to-r from-[#e79924] to-[#d47c01] h-[35px] px-5 rounded-[20px] gap-2'>
          <span className='text-white font-semibold text-[17px]'>View All Products</span>
        </button> 
      </div>
      
    </div>
    </div>
    
  )
}


const ProductCard = ({product}) => {
  return(
    <div className='space-y-3'>
      <img className='h-[220px] w-[150px] object-cover rounded-md' src={product.img} alt="" />
      <div className='dark:text-white text-black'>
        <h6 className='font-bold text-md'>{product.title}</h6>
        <span className='text-sm'>{product.color}</span>
        <div className='flex items-center gap-2 font-semibold'>
          <FaStar color='orange' />
          {product.rating}
        </div>
      </div>
    </div>
  )
}

export default Products