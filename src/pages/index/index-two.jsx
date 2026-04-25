import { Link } from "react-router-dom";

import shape1 from '../../assets/img/home-v2/banner-shape-01.png'
import shape2 from '../../assets/img/home-v2/banner-shape-02.png'
import shape3 from '../../assets/img/home-v2/banner-shape-03.png'
import hero from '../../assets/img/home-v2/banner-shape-04.png'
import chair from '../../assets/img/svg/chair.svg'
import comments from '../../assets/img/svg/comment-2.svg'
import arrival1 from '../../assets/img/home-v2/arrival-01.jpg'
import arrival2 from '../../assets/img/home-v2/arrival-02.jpg'
import bed from '../../assets/img/svg/bed.svg'
import like from '../../assets/img/svg/like.svg'

import NavbarTwo from "../../components/navbar/navbar-two";
import ClientOne from "../../components/client/client-one";
import BlogTwo from "../../components/blog/blog-two";
import NewsOne from "../../components/news-letter/news-one";
import PartnerOne from "../../components/partner-one";
import FooterTwo from "../../components/footer/footer-two";
import ScrollToTop from "../../components/scroll-to-top";

import { FaArrowDown } from "react-icons/fa";
import { productList, productSlider } from "../../data/data";
import { LuEye, LuHeart } from "react-icons/lu";
import { RiShoppingBag2Line } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { useEffect } from "react";
import Aos from "aos";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function IndexTwo() {
    useEffect(()=>{
        Aos.init()
    })

     let settings = {
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 0,
        responsive: {
            992: {
                items: 4
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }
    
  return (
    <>
        <NavbarTwo/>

        <div className="pt-36 sm:pt-52 lg:pt-[250px] pb-12 sm:pb-16 lg:pb-36 2xl:py-[360px] bg-[#f5f5f5] dark:bg-dark-secondary relative z-[1] overflow-hidden">
            <div className="absolute -z-[1] top-0 left-0 w-[60%] 2xl:w-[955px]">
                <svg className="fill-current text-[#BB976D] dark:text-title w-[100%]" viewBox="0 0 955 780" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M830.97 723.759C971.43 620.07 992.216 359.628 893.195 163.09C862.083 101.856 819.328 46.7521 768.467 0H0V470.225C59.4825 536.72 135.112 598.064 218.046 647.736C429.653 775.193 690.606 828.224 830.97 723.759Z"/>
                </svg>                
            </div>
            <div className="absolute bottom-0 left-0 -z-[1] hidden 2xl:block">
                <img src={shape1} alt="banner-shape"/>
                <div className="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 right-0 top-[35%]">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 className="font-normal leading-none"><sup>$</sup>20</h4>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-[1] w-[17%] hidden lg:block">
                <img src={shape2} alt="banner-shape"/>
                <div className="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 -left-[10%] bottom-0">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 className="font-normal leading-none"><sup>$</sup>20</h4>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-[1] w-[40%] md:w-40 lg:w-64 2xl:w-auto">
                <img src={shape3} alt="banner-shape"/>
                <div className="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 right-6 top-[60%]">
                    <div className="w-12 md:w-20 h-12 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 className="font-normal leading-none"><sup>$</sup>12</h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="max-w-1366 mx-auto flex flex-col gap-10">
                    <div>
                        <h4 className="leading-none font-medium dark:text-white">All products in Store</h4>
                        <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">25%</span> Off</h2>
                        <p className="mt-4 md:mt-5 dark:text-white-light md:max-w-[350px] lg:max-w-xl">Unlock unbeatable savings on every purchase. Introducing our new collection of stylish and comfortable sofas, designed to elevate your living space with modern elegance. </p>
                        <div className="button">
                            <Link className="btn btn-outline mt-6" to="/shop-v2" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                        </div>
                    </div>
                    <div className="relative md:absolute bottom-0 right-0 2xl:right-24 w-full md:max-w-[400px] lg:max-w-[40%] 2xl:w-auto">
                        <img src={hero} alt="thumb"/>
                        <div className="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 top-5 left-[10%] lg:left-[25%]">
                            <div className="w-12 md:w-20 h-12 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                                <h4 className="font-normal leading-none"><sup>$</sup>55</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="" className="w-7 lg:w-9 h-12 lg:h-[60px] rounded-[69px] border-[1.5px] border-title dark:border-white text-title dark:text-white flex items-center justify-center absolute bottom-7 md:bottom-12 left-1/2 transform -translate-x-1/2" id="scroll-button">
                <FaArrowDown className="fill-current scroll-down-icon"/>
            </Link>
        </div>

        <div className="s-py-100-50" id="sec-2">
            <div className="container">
                <div className="max-w-[1365px] mx-auto flex 2xl:items-center gap-[30px] md:gap-10 justify-between flex-col 2xl:flex-row">
                    <div className="2xl:max-w-[360px] w-full flex justify-between 2xl:justify-start flex-wrap items-end 2xl:items-start gap-5 2xl:gap-0 flex-row 2xl:flex-col" data-aos="fade-up">
                        <div>
                            <img src={chair} alt="" className="size-16"/>
                            <h2 className="mt-[15px] leading-none">Popular Collection</h2>
                            <p className="mt-[10px] md:mt-[15px]">Explore our curated popular collection product categories featuring high-quality furniture. </p>
                        </div>
                        <Link className="btn btn-outline 2xl:mt-6" to="/shop-v2" data-text="See all Productss"><span>See all Productss</span></Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg::gap-8 2xl:max-w-[903px] w-full" data-aos="fade-up" data-aos-delay="300">
                        {productList.slice(0,3).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <div className="relative overflow-hidden">
                                        <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>

                                        <div className="absolute z-10 inset-0  w-full h-full flex justify-center items-center gap-2">

                                            <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                <LuHeart className="dark:text-white h-[22px] w-[20px]"/>
                                                <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                                    <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                </span>
                                            </button>

                                            <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>
                                                <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                    <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                </span>
                                            </Link>

                                            <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                                <LuEye className="dark:text-white h-[22px] w-[20px]"/>
                                                <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                                    <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                </span>
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

        <div className="s-py-50 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <div className="blog-v1-wrapper">
                <TinySlider settings={settings}> 
                    {productSlider.map((item,index)=>{
                        return(
                            <Link className="relative" to="/product-category" key={index}>
                                <img className="w-full object-cover" src={item.image} alt="product"/>
                                <div className="absolute bottom-7 left-0 px-5 transform w-full flex justify-center">
                                    <div className="min-w-[250px] bg-white bg-opacity-80 dark:bg-title dark:bg-opacity-80 p-5 z-10">
                                        <h4 className="leading-[1.5] font-semibold">{item.name}</h4>
                                        <p className="leading-none mt-[10px]">{item.product}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </TinySlider>
            </div>
        </div>

        <div className="s-py-50-100">
            <div className="container max-w-[1365px] mx-auto">
                <div className="max-w-[547px] mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <img src={bed} alt="" className="mx-auto w-14 sm:w-[70px]"/>
                    <h2 className="mt-[15px] leading-none">New Arrival</h2>
                    <p className="mt-[10px] md:mt-[15px]">Discover the latest must-have arrivals! Elevate your style with our newest collection of trendsetting items. </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-[30px]" data-aos="fade-up" data-aos-delay="300">
                    <div className="grid gap-[30px]">
                        <div className="grid sm:grid-cols-2 gap-[30px]">
                            {productList.slice(2,4).map((item,index)=>{
                                return(
                                    <div className="group group flex flex-col" key={index}>
                                        <div className="relative overflow-hidden">
                                            <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>
                                            <div className="absolute z-10 top-0 w-full h-full flex items-center justify-center gap-2">
                                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                    <LuHeart className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
                                                </button>

                                                <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                    <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
                                                </Link>

                                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                                    <LuEye className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
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
                        <div className="relative">
                            <img className="w-full object-cover" src={arrival1} alt="arrival"/>
                            <div className="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                                <h2 className="text-5xl sm:text-7xl leading-none italic">30% <sup className="text-lg sm:text-2xl leading-none">OFF</sup></h2>
                                <h6 className="sm:mt-[10px]">All new Arival Sofa</h6>
                                <Link to="/shop-v2" className="btn btn-outline mt-4 md:mt-6" data-text="See all Productss"><span>See all Productss</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:grid gap-[30px]">
                        <div className="relative">
                            <img className="w-full object-cover" src={arrival2} alt="arrival"/>
                            <div className="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                                <h2 className="text-5xl sm:text-7xl leading-none italic">45%<sup className="text-lg sm:text-2xl leading-none ">OFF</sup></h2>
                                <h6 className="sm:mt-[10px]">All new Flower Vase</h6>
                                <Link to="/shop-v2" className="btn btn-outline mt-4 md:mt-6" data-text="See all Productss"><span>See all Products</span></Link>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-[30px]">
                            {productList.slice(4,6).map((item,index)=>{
                                return(
                                    <div className="group group flex flex-col" key={index}>
                                        <div className="relative overflow-hidden">
                                            <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>
                                            <div className="absolute z-10 top-0 w-full h-full flex items-center justify-center gap-2">
                                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                    <LuHeart className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
                                                </button>

                                                <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                                    <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
                                                </Link>

                                                <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                                    <LuEye className="dark:text-white h-[22px] w-[20px]"/>
                                                    <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                                        <span className="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                                    </span>
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
                <div className="text-center mt-7 md:mt-12">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="Go to shop">
                        <span>Go to shop</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="bg-[#f5f5f5] dark:bg-dark-secondary s-py-100">
            <div className="container max-w-[1365px] mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="text-center mb-8 md:mb-12 max-w-[548px] mx-auto">
                    <img src={like} alt="" className="mx-auto size-16"/>
                    <h2 className="dark:text-white font-bold leading-none mt-4">Testimonial</h2>
                    <p className="mt-3 md:mt-4">Discover what our customers are saying about us. Real stories, real experiences – find out why they choose us. </p>
                </div>
                <ClientOne/>
            </div>
        </div>

        <div className="s-py-100-50 overflow-hidden">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[547px] mx-auto mb-8 md:mb-12 text-center">
                    <img src={comments} alt="" className="mx-auto size-16"/>
                    <h2 className="mt-[15px] leading-none">Latest Blog</h2>
                    <p className="mt-[10px] md:mt-[15px]">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love..</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <BlogTwo/>
            </div>
        </div>

        <div className="s-py-50-100" data-aos="fade-up" data-aos-delay="100">
            <NewsOne/>
        </div>

        <div className="bg-primary-light px-5 py-7 md:py-12 dark:bg-primary dark:bg-opacity-20" data-aos="fade-up" data-aos-delay="100">
            <div className="container">
                <PartnerOne/>
            </div>
        </div>
        <FooterTwo/>
        <ScrollToTop/>
    </>
  )
}
