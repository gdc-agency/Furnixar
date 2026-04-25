import { Link } from "react-router-dom";
import { useEffect } from "react";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import AccountTab from "../../components/account/account-tab";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { productList } from "../../data/data";

import { RiShoppingBag2Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

import Aos from "aos";

export default function Wishlist() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Wishlist</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">wishlist</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div className="w-full md:w-[200px] lg:w-[300px] flex-none" data-aos="fade-up" data-aos-delay="100">
                        <AccountTab/>
                    </div>
                    <div className="w-full md:w-auto md:flex-1" data-aos="fade-up" data-aos-delay="300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg::gap-8">
                            {productList.slice(0,6).map((item,index)=>{
                                return(
                                    <div className="group" key={index}>
                                        <div className="relative overflow-hidden group z-[5] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:opacity-0 before:duration-300 before:z-[5] hover:before:opacity-80">
                                            <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>

                                            <div className="absolute z-10 top-0 w-full h-full flex items-center justify-center gap-2">
                                                <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-10 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon">
                                                    <RiShoppingBag2Line className="text-white size-6"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
                                                </Link>
                                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-10 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon">   
                                                    <FaHeart className="dark:text-white text-[#F0264A] size-6"/>   
                                                </button>
                                            </div>
                                        </div>
                                        <div className="lg:pt-7 pt-5 flex gap-3 md:gap-4 flex-col">
                                            <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}</h4>
                                            <div>
                                                <h5 className="font-normal dark:text-white text-xl leading-[1.5]">
                                                    <Link to="/product-details" className="text-underline">{item.name}</Link>
                                                </h5>
                                                <ul className="flex items-center gap-2 mt-1">
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-slate-300 size-4'/></li>
                                                    <li className="dark:text-gray-100">( 1,230 )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
