import { footerBannerImg, logo } from "../../assets";
import { FooterLinks } from "../data";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {

  const BannerImg = {
    backgroundImage: `url(${footerBannerImg})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={BannerImg} className="pt-10">
      <div className="w-full h-fit pb-[250px] px-[50px] pt-[50px] space-x-5 grid grid-cols-4 justify-center items-center text-white">
        <div className="col-span-1">
          <div className="flex items-center gap-5 mb-5">
            <img src={logo} alt="" className="h-[75px] w-[75px] object-contain" />
            <h1 className="text-5xl font-bold">Shopsy</h1>
          </div>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.</p>
        </div>
        <div className="col-span-3 flex justify-evenly">
          <div className="flex flex-col col-span-1">
          <h1 className="text-2xl mb-5">Important Links</h1>
          {FooterLinks.map((link) => (
            <a href={link.link} className="my-0.5">{link.title}</a>
          ))}
        </div>
        <div className="flex flex-col col-span-1 ">
          <h1 className="text-2xl mb-5">Links</h1>
          {FooterLinks.map((link) => (
            <a href={link.link} className="my-0.5">{link.title}</a>
          ))}
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="flex gap-4">
            <a href="#">
              <FaTelegram size={40} className="opacity-90" />
            </a>
            <a href="#">
              <FaFacebook size={40} className="opacity-90" />
            </a>
            <a href="#">
              <FaInstagram size={40} className="opacity-90" />
            </a>
            <a href="#">
              <FaLinkedin size={40} className="opacity-90"/>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-8 mb-3 justify-start">
            <IoLocationSharp size={30} className="opacity-90" />
            <span className="text-lg">US, New York</span>
          </div>
          <div className="flex items-center gap-4 justify-start">
            <FaPhoneAlt size={20} className="opacity-90" />
            <span className="text-lg">+21 123456789</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer