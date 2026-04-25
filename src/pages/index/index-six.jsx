import { Link } from "react-router-dom";
import { useEffect } from "react";

import NavbarOne from "../../components/navbar/navbar-one";
import PartnerOne from "../../components/partner-one";
import FooterSix from "../../components/footer/footer-six";
import ScrollToTop from "../../components/scroll-to-top";

import offer1 from '../../assets/img/home-v6/offer-01.png'
import offer2 from '../../assets/img/home-v6/offer-02.png'
import product1 from '../../assets/img/home-v3/pdct-01.jpg'
import product2 from '../../assets/img/home-v3/pdct-02.jpg'
import bed from '../../assets/img/svg/bed-2.svg'
import comment from '../../assets/img/svg/comment-2.svg'

import { servicesData } from "../../data/index-three";
import { productList } from "../../data/data";
import { blogData2 } from "../../data/index-five";

import { GoStarFill } from "react-icons/go";
import { LuEye, LuHeart } from "react-icons/lu";
import { RiShoppingBag2Line } from "react-icons/ri";

import Aos from "aos";

export default function IndexSix() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <div className="dark:bg-title bg-[#EBEBEB]">
        <NavbarOne/>   

        <div className="hv6-banner bg-overlay py-20 sm:py-24 md:py-32 2xl:py-[245px] bg-[#EBEBEB] dark:bg-title dark:before:bg-dark-secondary dark:before:bg-opacity-50 2xl:dark:before:hidden">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    <span className="text-xl sm:text-2xl lg:text-3xl leading-none block text-primary" data-aos="fade-up" data-aos-delay="100">New Arrival</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl sm:leading-tight leading-tight lg:leading-tight max-w-[300px] sm:max-w-[400px] lg:max-w-[602px] mt-5" data-aos="fade-up" data-aos-delay="200">Premium Lounge Sofa Chair</h2>
                    <p className="max-w-[450px] lg:max-w-[550px] mt-3 sm:mt-0" data-aos="fade-up" data-aos-delay="300">We offer you an extremely comfortable lounge sofa chair. Taking the time to relax at home or the office will be more appealing than ever when you choose a modern lounge sofa chair.</p>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Link to="/shop-v1" className="btn btn-outline mt-6" data-text="Let's Shop Now">
                            <span>Let's Shop Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#EBEBEB] dark:bg-title s-py-100">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    <div className="bg-[#F3F3F3] dark:bg-dark-secondary rounded-[10px] xl:flex xl:justify-between sm:gap-5 grid sm:grid-cols-2 relative" data-aos="fade-up" data-aos-delay="100">
                        {servicesData.map((item,index)=>{
                            return(
                                <>
                                <Link to="/product-category" className="group flex items-center gap-5 p-6" key={index}>
                                    <div className="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300">
                                        <img src={item.image} alt="" className='block group-hover:hidden'/>                           
                                        <img src={item.image2} alt="" className='hidden group-hover:block'/>                           
                                    </div>
                                    <div>
                                        <h5 className="font-medium leading-none text-lg lg:text-xl">{item.title}</h5>
                                        <p className="leading-none mt-[10px]">{item.product}</p>
                                    </div>
                                </Link>
                                <div className="w-[1px] border border-dashed border-title border-opacity-50 dark:border-opacity-50 dark:border-white absolute h-full xl:h-auto xl:static transform left-1/2 -translate-x-1/2 xl:-translate-x-0 top-0 hidden sm:block last:hidden"></div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-100 bg-[#F3F3F3] dark:bg-dark-secondary relative z-[1] overflow-hidden">
            <img className="absolute top-0 left-[6%] z-[-1] w-[10%] 2xl:w-auto" src={offer1} alt="offer-shape"/>
            <img className="absolute right-0 bottom-0 lg:bottom-auto lg:top-1/2 transform lg:-translate-y-1/2 z-[-1] w-1/4 2xl:w-auto" src={offer2} alt="offer-shape"/>
            <div className="container">
                <div className="max-w-[780px] mx-auto text-center">
                    <h2 className="leading-none text-7xl sm:text-100 lg:text-[150px] xl:text-[200px] italic flex items-start justify-center" data-aos="fade-up" data-aos-delay="100">45% <sup className="text-xl sm:text-2xl lg:text-3xl font-normal text-primary transform rotate-90 inline-block not-italic translate-y-[20px] lg:translate-y-[40px]">OFF</sup></h2>
                    <h3 className="font-normal leading-none mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl" data-aos="fade-up" data-aos-delay="300">Hurry Up ! It,s Only for Today</h3>
                    <p className="mt-5 sm:mt-6" data-aos="fade-up" data-aos-delay="400">Don't miss out on exclusive savings! Enjoy a massive 45% discount, available for today only. Hurry, grab your deal before it's gone!This special deal won’t last long, so claim it while you can! </p>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <Link to="/shop-v2" className="btn btn-outline mt-6" data-text="Claim Discount">
                            <span>Claim Discount</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-100-50" >
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    <div className="max-w-[547px] mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <img src={bed} alt="" className="mx-auto"/>           
                        <h2 className="mt-6 leading-none">Latest Products</h2>
                        <p className="mt-[10px] md:mt-[15px]">Be the first to experience innovation with our latest arrivals. Stay ahead of the curve and discover what's new in style. </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 lg:gap-x-7 gap-y-[30px] lg:gap-y-12" data-aos="fade-up" data-aos-delay="300">
                        {productList.slice(0,8).map((item,index)=>{
                            return(
                                <div key={index}>
                                    <div className="group relative overflow-hidden">
                                        <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>
                                        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-white dark:bg-title bg-opacity-70 dark:bg-opacity-70 flex items-end p-5 scale-110 opacity-0 duration-200 group-hover:scale-100 group-hover:opacity-100">
                                            <div className="">
                                                <ul className="flex items-center gap-2 mt-1">
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-slate-300 size-4'/></li>
                                                    <li className="dark:text-gray-100 text-[#3C474E]">( 1,230 )</li>
                                                </ul>
                                                <div className="absolute z-10 top-5 right-5 flex flex-col items-end gap-3">
                                                    <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon new-product-icon-3">
                                                        <LuHeart className="dark:text-white size-6"/>                                                                      
                                                        <span className="mt-1">Add to wishlist</span>
                                                    </Link>
                                                    <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon new-product-icon-3">
                                                        <RiShoppingBag2Line className="dark:text-white size-6"/>
                                                        <span className="mt-1">Add to Cart</span>
                                                    </Link>
                                                    <button className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon new-product-icon-3 quick-view">
                                                        <LuEye className="dark:text-white size-6"/>                                        
                                                        <span className="mt-1">Quick View</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-6 flex items-start justify-between gap-4">
                                        <div>
                                            <h5 className="leading-none mb-4 dark:text-white font-primary text-lg font-medium">{item.price}</h5>
                                            <h5 className="text-lg md:text-xl font-normal dark:text-white leading-[1.5]"><Link to="/product-details">{item.name}</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-center mt-7 md:mt-12" data-aos="fade-up" data-aos-delay="100">
                        <Link to="/shop-v3" className="btn btn-outline" data-text="See all Products">
                            <span>See all Products</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-50">
            <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="relative">
                    <img className="w-full object-cover" src={product1} alt="product"/>
                    <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                        <div className="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-6 flex items-start flex-col">
                            <h4 className="font-normal leading-none">Up to <span className="text-primary">20% off</span> all furniture on store</h4>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Home & Office</h2>
                            <Link to="/shop-v4" className="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                <span>Shop Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full object-cover" src={product2} alt="product"/>
                    <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                        <div className="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-6 flex items-start flex-col">
                            <h4 className="font-normal leading-none">Up to <span className="text-primary">35% off</span> all Interior Items</h4>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Interior Setup</h2>
                            <Link to="/shop-v2" className="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                <span>Shop Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-50-100">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    <div className="max-w-[547px] mx-auto mb-8 sm:mb-[70px] text-center" data-aos="fade-up" data-aos-delay="100">
                        <img src={comment} className="mx-auto" alt="" />
                        <h2 className="mt-6 leading-none">From the Blog</h2>
                        <p className="mt-[10px] md:mt-[15px]">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends. </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]" data-aos="fade-up" data-aos-delay="300">
                        {blogData2.map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <Link to="/blog-details-v1" className="p-[10px] sm:p-[15px] bg-[#F3F3F3] transition-all duration-300 group-hover:bg-opacity-0 overflow-hidden block">
                                        <img className="duration-200 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog-card"/>
                                    </Link>
                                    <div className="pt-5 md:pt-6 md:px-4 text-center">
                                        <ul className="text-[15px] font-medium flex items-center justify-center gap-2 md:gap-4">
                                            <li className="dark:text-white leading-none">{item.date}</li>
                                            <li className="w-1 h-1 rounded-full bg-primary relative"></li>
                                            <li className="leading-none"><Link className="text-primary leading-none" to="/blog-tag">{item.tag}</Link></li>
                                        </ul>
                                        <h5 className="mt-3 text-xl font-medium dark:text-white leading-[1.5]"><Link to="/blog-details-v1" className="text-underline">{item.title}</Link></h5>
                                        <div className="mt-5 md:mt-6">
                                            <Link className="font-medium text-base text-title md:text-[17px] leading-none py-[15px] px-5 relative z-10 before:absolute before:bottom-0 before:left-0 before:bg-primary-midum before:w-full before:h-2/4 before:-z-10 blog-btn-hover before:transition-all before:duration-300 dark:text-white inline-block" to="/blog-details-v1">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="py-12 bg-[#F3F3F3] dark:bg-dark-secondary">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1265px] mx-auto">
                    <div className="w-full relative">
                        <PartnerOne/>
                    </div>
                </div>
            </div>
        </div>

        <FooterSix/>

        <ScrollToTop/>
    </div>
  )
}
