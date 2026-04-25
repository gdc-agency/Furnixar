import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { footerLink1, footerLink2, footerLink3, footerLink4 } from "../../data/nav-data";
import { FiLinkedin } from "react-icons/fi";

export default function FooterTwo() {
  return (
    <div className="relative s-pt-100 bg-white dark:bg-title">
        <div className="container">
            <div className="max-w-1366 mx-auto flex items-start justify-between gap-10 flex-col lg:flex-row">
                <div className="sm:max-w-[450px] sm:mx-auto lg:mx-0 lg:max-w-[345px] xl:max-w-[477px] w-full sm:text-center lg:text-left">
                    <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                    <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/>                     
                    <p className="mt-4">Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store for your furniture. </p>
                    <div className="flex items-center gap-4 mt-6 sm:justify-center lg:justify-start">
                        <Link to="#" className="w-10 h-10 rounded-full border border-[#898F95] border-opacity-50 flex items-center justify-center group hover:border-primary duration-300" aria-label="Facebook">
                            <FaFacebookF className="fill-current text-[#5B646D] dark:text-white group-hover:text-primary duration-300 "/>
                        </Link>
                        <Link to="#" className="w-10 h-10 rounded-full border border-[#898F95] border-opacity-50 flex items-center justify-center group hover:border-primary duration-300" aria-label="Twitter">
                            <FaTwitter className="fill-current text-[#5B646D] dark:text-white group-hover:text-primary duration-300 "/>
                        </Link>
                        <Link to="#" className="w-10 h-10 rounded-full border border-[#898F95] border-opacity-50 flex items-center justify-center group hover:border-primary duration-300" aria-label="Instagram">
                            <FaInstagram className="fill-current text-[#5B646D] dark:text-white group-hover:text-primary duration-300 "/>
                        </Link>
                        <Link to="#" className="w-10 h-10 rounded-full border border-[#898F95] border-opacity-50 flex items-center justify-center group hover:border-primary duration-300" aria-label="Linkedin">
                            <FiLinkedin className="fill-current text-[#5B646D] dark:text-white group-hover:text-primary duration-300 "/>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:max-w-[695px] w-full sm:flex items-start justify-between gap-10 footer2-inner-wrapper">
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Sitemap</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                            {footerLink1.map((item,index)=>{
                                return(
                                    <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Others</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                            {footerLink2.map((item,index)=>{
                                return(
                                    <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Shop</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                            {footerLink3.map((item,index)=>{
                                return(
                                    <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Customer Service</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                            {footerLink4.map((item,index)=>{
                                return(
                                    <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-[1722px] mx-auto border-t border-bdr-clr dark:border-bdr-clr-drk py-5 md:py-7 mt-7 text-center">
                <p className="text-dark  inline-flex align-middle">© {new Date().getFullYear()} Furnixar Develop with <FaHeart className="fa-solid fa-heart mx-1 text-red-500"></FaHeart>  By <a href="https://globaldigitalcare.pk"> Global Digital Care</a></p>
            </div>
        </div>
    </div>
  )
}
