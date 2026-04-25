import { Link } from 'react-router-dom'

import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'

import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../data/nav-data'

import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'

export default function FooterFour() {
  return (
    <div className="s-py-100-50">
    <div className="container">
        <div className="max-w-1366 mx-auto flex items-start gap-10 justify-between flex-col 2xl:flex-row">
            <div className="max-w-md sm:mx-auto 2xl:mx-0 2xl:max-w-[208px] w-full sm:text-center 2xl:text-left">
                <Link to="#">
                    <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                    <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/>                         
                </Link>
                <p className="mt-[15px]">Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store.</p>
            </div>
            <div className="hidden 2xl:block h-[121px] w-[1px] transform translate-y-12 border border-dashed border-title dark:border-white"></div>
            <div className="2xl:max-w-[1057px] w-full grid grid-cols-2 sm:grid-cols-3 lg:flex items-start justify-between gap-10">
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
                <div className="h-[121px] w-[1px] transform translate-y-12 border border-dashed border-title dark:border-white hidden lg:block"></div>
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
                <div className="h-[121px] w-[1px] transform translate-y-12 border border-dashed border-title dark:border-white hidden lg:block"></div>
                <div>
                    <h4 className="leading-none mb-5 md:mb-6 text-xl">Social Media</h4>
                    <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                        <li className="duration-100 hover:text-primary inline-block group"><Link className="gap-3 flex items-center" to="#">
                            <FaFacebookF className="text-[#5D656E] dark:text-white duration-300 group-hover:text-primary"/>                                  
                            Facebook
                        </Link></li>
                        <li className="duration-100 hover:text-primary inline-block group"><Link className="gap-3 flex items-center" to="#">
                            <FaTwitter className="text-[#5D656E] dark:text-white duration-300 group-hover:text-primary"/>                      
                            Twitter
                        </Link></li>
                        <li className="duration-100 hover:text-primary inline-block group"><Link className="gap-3 flex items-center" to="#">
                            <FaInstagram className="text-[#5D656E] dark:text-white duration-300 group-hover:text-primary"/>                        
                            Instagram
                        </Link></li>
                        <li className="duration-100 hover:text-primary inline-block group"><Link className="gap-3 flex items-center" to="#">
                            <FiLinkedin className="text-[#5D656E] dark:text-white duration-300 group-hover:text-primary"/>
                            Linkedin
                        </Link></li>
                    </ul>
                </div>
                <div className="h-[121px] w-[1px] transform translate-y-12 border border-dashed border-title dark:border-white hidden lg:block"></div>
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
                <div className="h-[121px] w-[1px] transform translate-y-12 border border-dashed border-title dark:border-white hidden lg:block "></div>
                <div className="col-span-2 sm:col-span-1">
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
        <p className="max-w-1366 mx-auto mt-12 flex ">© {new Date().getFullYear()} Furnixar Develop with <FaHeart className="fa-solid fa-heart mx-1 text-red-500"></FaHeart>  By <a href="https://www.globaldigitalcare.pk/" target="_blank" rel="noopener noreferrer">
      Global Digital Care
    </a>.</p>
    </div>
</div>
  )
}
