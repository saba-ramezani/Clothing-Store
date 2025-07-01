import { womenImg2 } from "../../assets"
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";




const Banner = () => {
  return (
    <div className="bg-gradient-to-t dark:from-black dark:to-gray-800 from-white to-gray-200">
      <div className="w-[80%] mx-[10%] flex py-16 justify-between items-center">
        <div className="flex-1/2">
          <img src={womenImg2} alt="" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
        </div>
        <div className="flex-1/2 dark:text-white text-black">
          <h1 className="font-bold text-5xl leading-20">Winter Sale Up To 50% Off</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni pariatur id cumque quasi quibusdam doloribus voluptate soluta reiciendis suscipit exercitationem!</p>
          <div className="flex flex-col mt-5 gap-5">
            <div className="flex items-center gap-5">
              <GrStatusGood size={50} className="bg-orange-200 p-2 rounded-full dark:text-black text-white" />
              <p className="font-semibold text-lg">Quality Products</p>
            </div>
            <div className="flex items-center gap-5">
              <CiDeliveryTruck size={50} className="bg-purple-200 p-2 rounded-full dark:text-black text-white" />
              <p className="font-semibold text-lg">Fast Delivery</p>
            </div>
            <div className="flex items-center gap-5">
              <MdOutlinePayment size={50} className="bg-blue-200 p-2 rounded-full dark:text-black text-white" />
              <p className="font-semibold text-lg">Easy Payment method</p>
            </div>
            <div className="flex items-center gap-5">
              <BiSolidOffer size={50} className="bg-green-200 p-2 rounded-full dark:text-black text-white" />
              <p className="font-semibold text-lg">Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner