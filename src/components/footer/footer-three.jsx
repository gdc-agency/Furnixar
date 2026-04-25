import { Link } from "react-router-dom";
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { footerLink1, footerLink2, footerLink3, footerLink4 } from "../../data/nav-data";

export default function FooterThree() {
  return (
    <div className="s-pt-100 bg-snow dark:bg-title 2xl:pb-[100px]">
        <div className="container-fluid max-w-[1720px] mx-auto">
            <div className="flex flex-col 2xl:flex-row items-start justify-between gap-10">
                <div className="max-w-[478px] w-full text-left sm:text-center 2xl:text-left sm:mx-auto 2xl:mx-0">
                    <Link to="#">
                        <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                        <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/>                            
                    </Link>
                    <p className="mt-[15px]">Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store for your furniture. </p>
                    <div className="flex items-center gap-4 mt-6 sm:justify-center 2xl:justify-start">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 2xl:max-w-[1094px] w-full lg:flex items-start justify-between gap-10">
                    <div className="lg:w-[300px] order-7 2xl:order-none col-span-2 md:col-span-1">
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Subscribe Newsletter</h4>
                        <div className="flex flex-col gap-[10px] sm:items-start">
                            <input className="w-full h-12 md:h-14 bg-transparent border border-primary p-4 outline-none dark:text-white placeholder:text-title dark:placeholder:text-white" type="text" placeholder="Enter your email address"/>
                            <button className="btn btn-primary-solid" data-text="Subscribe"><span>Subscribe</span></button>
                        </div>
                    </div>
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
            <p className="text-dark  inline-flex align-middle mt-6">© {new Date().getFullYear()} Furnixar Develop with <FaHeart className="fa-solid fa-heart mx-1 text-red-500"></FaHeart>  By <a href="https://www.globaldigitalcare.pk/" target="_blank" rel="noopener noreferrer">
      Global Digital Care
    </a>.</p>
        </div>
    </div>
  )
}
