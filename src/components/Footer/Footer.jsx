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
      <div className="w-full h-fit pb-[250px] px-6 sm:px-10 pt-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo and Description */}
          <div className="flex flex-col col-span-1">
            <div className="flex items-center gap-5 mb-5">
              <img src={logo} alt="" className="lg:h-[75px] lg:w-[75px] h-[45px] w-[45px] object-contain" />
              <h1 className="lg:text-4xl text-lg font-bold">Shopsy</h1>
            </div>
            <p className="text-gray-300 text-sm md:text-md lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links and Contact */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Links Column 1 */}
            <div className="flex flex-col">
              <h1 className="md:text-2xl text-lg mb-5">Important Links</h1>
              {FooterLinks.map((link, idx) => (
                <a href={link.link} className="my-0.5" key={idx}>{link.title}</a>
              ))}
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col">
              <h1 className="text-2xl mb-5">Links</h1>
              {FooterLinks.map((link, idx) => (
                <a href={link.link} className="my-0.5" key={idx}>{link.title}</a>
              ))}
            </div>

            {/* Social & Contact Info */}
            <div className="flex flex-col">
              <div className="flex gap-4 flex-wrap">
                <a href="#"><FaTelegram size={30} className="opacity-90" /></a>
                <a href="#"><FaFacebook size={30} className="opacity-90" /></a>
                <a href="#"><FaInstagram size={30} className="opacity-90" /></a>
                <a href="#"><FaLinkedin size={30} className="opacity-90" /></a>
              </div>
              <div className="flex items-center gap-4 mt-8 mb-3">
                <IoLocationSharp size={24} className="opacity-90" />
                <span className="text-base">US, New York</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt size={16} className="opacity-90" />
                <span className="text-base">+21 123456789</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer