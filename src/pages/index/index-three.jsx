import { useEffect } from "react";
import { Link } from "react-router-dom";

import SliderTwo from "../../components/banner-slider/slider-two";
import NavbarThree from "../../components/navbar/navbar-three";
import PartnerTwo from "../../components/partner-two";
import FooterThree from "../../components/footer/footer-three";
import ScrollToTop from "../../components/scroll-to-top";
import BlogThree from "../../components/blog/blog-three";

import services from '../../assets/img/home-v3/service.png'
import product1 from '../../assets/img/home-v3/pdct-01.jpg'
import product2 from '../../assets/img/home-v3/pdct-02.jpg'

import { servicesData } from "../../data/index-three";
import { productList } from "../../data/data";

import { GoStarFill } from "react-icons/go";
import { LuEye, LuHeart } from "react-icons/lu";
import { RiShoppingBag2Line } from "react-icons/ri";

import Aos from "aos";

export default function IndexThree() {

    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarThree/>
        <SliderTwo/>

        <div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary relative z-10 overflow-hidden">
            <div className="absolute -z-[1] right-0 bottom-0 hidden 2xl:block w-[28%]" data-aos="fade-up" data-aos-delay="300">
                <img className="w-full" src={services} alt="service"/>
            </div>
            <div className="container-fluid max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1326px] grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] xl:gap-12">
                    {servicesData.map((item,index)=>{
                    return(
                        <div className="text-center sm:text-left group" key={index}>
                            <div className="w-14 sm:w-[70px] h-14 sm:h-[70px] p-[10px] mx-auto sm:mx-0 flex items-center justify-center border border-primary rounded-[10px]">
                                <img src={item.image} alt="" />           
                            </div>
                            <h4 className="mt-6 font-semibold leading-none text-xl lg:text-2xl"><Link to="/product-category" className="text-underline-primary hover:text-primary">{item.title}</Link></h4>
                            <span className="block leading-none mt-[10px]">{item.product}</span>
                            <p className="mt-[15px]">{item.desc}</p>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>

        <div className="s-py-100-50">
            <div className="container-fluid max-w-[1720px] mx-auto">
                <div className="flex justify-center items-center mb-[40px] md:mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <span className="text-primary font-normal text-6xl sm:text-7xl font-secondary block -ml-5 -mb-3 sm:-mb-[30px] leading-normal sm:leading-normal">New</span>
                        <h6 className="font-normal leading-none tracking-[.5em] sm:tracking-[1em] uppercase">PRODUCTS</h6>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8" data-aos="fade-up" data-aos-delay="300">
                    {productList.slice(3,7).map((item,index)=>{
                    return(
                        <div className="relative overflow-hidden group" key={index}>
                            <Link to="/product-details">
                                <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>
                            </Link>
                            
                            <div className="flex flex-col items-start gap-3 md:gap-4 absolute z-20 w-11/12 bottom-3 xl:bottom-5 left-[4%]  p-4 xl:p-5 bg-white dark:bg-title bg-opacity-[85%] dark:bg-opacity-[85%] group-hover:-translate-y-1/2 duration-500 group-hover:opacity-0 group-hover:invisible">
                                <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}</h4>
                                <div>
                                    <h5 className="font-normal dark:text-white text-paragraph leading-[1.5]">
                                        <Link to="/product-details">{item.name}</Link>
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

                            <div className="absolute z-10 flex gap-2 justify-center bottom-5 md:bottom-7 w-full transform translate-y-5 opacity-0 duration-500 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">

                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative tooltip-icon rounded-full">
                                    <LuHeart className="dark:text-white h-[22px] w-[20px]"/>
                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                    </span>
                                </button>

                                <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative tooltip-icon rounded-full">
                                    <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>
                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                    </span>
                                </Link>

                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative quick-view tooltip-icon rounded-full">
                                    <LuEye className="dark:text-white h-[22px] w-[20px]"/>
                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                    })}
                </div>
                <div className="text-center mt-7 md:mt-12">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="See all Product">
                        <span>See all Product</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="s-py-50" data-aos="fade-up">
            <div className="container-fluid max-w-[1720px] mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                        <img className="w-full object-cover" src={product1} alt="product"/>
                        <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
                            <div className="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-8 xl:p-12 flex items-start flex-col">
                                <h4 className="font-normal leading-none">Up to <span className="text-primary">20% off</span> all furniture on store</h4>
                                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Home & Office</h2>
                                <Link to="/shop-v2" className="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                    <span>Shop Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-full object-cover" src={product2} alt="product"/>
                        <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
                            <div className="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-8 xl:p-12 flex items-start flex-col">
                                <h4 className="font-normal leading-none">Up to <span className="text-primary">35% off</span> all Interior Items</h4>
                                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Interior Setup</h2>
                                <Link to="/shop-v1" className="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                    <span>Shop Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-50-100">
            <div className="container-fluid max-w-[1720px] mx-auto">
                <div className="flex justify-center items-center mb-[40px] md:mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <span className="text-primary font-normal text-6xl sm:text-7xl font-secondary block -ml-5 leading-normal sm:leading-normal">Blog</span>
                        <h6 className="font-normal leading-none tracking-[.5em] sm:tracking-[1em] uppercase">LATEST BLOG</h6>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <BlogThree/>
                </div>
            </div>
        </div>

        <div className="bg-title dark:bg-dark-secondary py-9 md:py-12" >
            <div className="container-fluid max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="2xl:flex items-center gap-10">
                    <div className="max-w-[273px] w-full hidden 2xl:block">
                        <h4 className="text-white leading-none text-xl md:text-2xl">Top Brands</h4>
                        <p className="text-white mt-[10px]">Discover the finest collections from top furniture brands. </p> 
                    </div>
                    <div className="w-[2px] h-12 bg-primary relative hidden 2xl:block"></div>
                    <div className="2xl:max-w-[1340px] w-full relative">
                        <PartnerTwo/>
                        <div className="md:absolute md:top-2/4 md:right-0 transform md:-translate-y-2/4 mt-6 md:mt-0 hidden">
                            <div className="flex gap-4">
                                <button className="icon ptnrSlider01_prev w-9 h-9 border border-white flex items-center justify-center text-white">
                                    <span className="lnr lnr-arrow-left"></span>
                                </button>
                                <button className="icon ptnrSlider01_next w-9 h-9 border border-white flex items-center justify-center text-white">
                                    <span className="lnr lnr-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterThree/>

        <ScrollToTop/>
    </>
  )
}
