import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavbarOne from '../../components/navbar/navbar-one'
import SliderOne from '../../components/banner-slider/slider-one';
import LayoutOne from '../../components/product/layout-one';
import FooterOne from '../../components/footer/footer-one';
import PartnerOne from '../../components/partner-one';
import ScrollToTop from '../../components/scroll-to-top';
import BlogOne from '../../components/blog/blog-one';

import {categoryOne, featureOne, productList } from '../../data/data';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import chair from '../../assets/img/svg/chair.svg'
import sofa from '../../assets/img/svg/sofa.svg'
import bg from '../../assets/img/home-v1/choose-us-bg.jpg'
import shape1 from '../../assets/img/home-v1/shape-01.png'
import like from '../../assets/img/svg/like.svg'
import bed from '../../assets/img/svg/bed.svg'
import comment from '../../assets/img/svg/comment.svg'
import hand from '../../assets/img/svg/hand.svg'

import { RiShoppingBag2Line } from 'react-icons/ri';
import { LuEye, LuHeart } from 'react-icons/lu';
import { GoStarFill } from 'react-icons/go';

import AOS from 'aos';

function Index() {
    useEffect(() => {
        AOS.init();
    }, []);

     let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
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
        <NavbarOne/>
        <SliderOne/>

        <div className="s-py-100-50 overflow-hidden">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <div>
                        <img src={chair} alt="" className="mx-auto w-14 sm:w-24"/>                                               
                    </div>
                    <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Product Category</h3>
                    <p className="mt-3">Explore our curated selection of premium products, tailored to suit every need and taste. From essentials to indulgences, find your perfect fit. </p>
                </div>
                <div className="max-w-[1720px] mx-auto relative group" data-aos="fade-up" data-aos-delay="100">
                    <div className="hv1-pdct-ctgry-slider">
                        <TinySlider settings={settings}> 
                            {categoryOne.map((item,index)=>{
                                return(
                                    <Link className="relative block" to="/product-category" key={index}>
                                        <img className="w-full object-cover" src={item.image} alt="product"/>
                                        <div className="absolute bottom-7 left-0 px-5 transform w-full flex justify-start">
                                            <div className="p-[15px] bg-white dark:bg-title w-auto">
                                                <span className="md:text-xl text-primary font-medium leading-none">{item.item}</span>
                                                <h4 className="text-xl md:text-2xl mt-[10px] font-semibold leading-[1.5]">{item.name}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </TinySlider>
                    </div>
                    <button className="icon hv1pdct_prev w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:bg-primary transform p-2 absolute top-1/2  -translate-y-1/2 left-0 z-[999]" aria-label="Prev Navigation">
                        <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.180223 7.38726L5.62434 12.8314C5.8199 13.0598 6.16359 13.0864 6.39195 12.8908C6.62031 12.6952 6.64693 12.3515 6.45132 12.1232C6.43307 12.1019 6.41324 12.082 6.39195 12.0638L1.87877 7.54516L23.4322 7.54516C23.7328 7.54516 23.9766 7.30141 23.9766 7.00072C23.9766 6.70003 23.7328 6.45632 23.4322 6.45632L1.87877 6.45632L6.39195 1.94314C6.62031 1.74758 6.64693 1.40389 6.45132 1.17553C6.25571 0.947171 5.91207 0.920551 5.68371 1.11616C5.66242 1.13441 5.64254 1.15424 5.62434 1.17553L0.180175 6.6197C-0.0308748 6.83196 -0.0308748 7.1749 0.180223 7.38726Z"/>
                        </svg>
                    </button>
                    <button className="icon hv1pdct_next w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:bg-primary transform p-2 absolute top-1/2 -translate-y-1/2 right-0 z-[999]" aria-label="Next Navigation">
                        <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8198 6.61958L18.3757 1.17541C18.1801 0.947054 17.8364 0.920433 17.608 1.11604C17.3797 1.31161 17.3531 1.65529 17.5487 1.88366C17.5669 1.90494 17.5868 1.92483 17.608 1.94303L22.1212 6.46168L0.567835 6.46168C0.267191 6.46168 0.0234375 6.70543 0.0234375 7.00612C0.0234375 7.30681 0.267191 7.55052 0.567835 7.55052L22.1212 7.55052L17.608 12.0637C17.3797 12.2593 17.3531 12.6029 17.5487 12.8313C17.7443 13.0597 18.0879 13.0863 18.3163 12.8907C18.3376 12.8724 18.3575 12.8526 18.3757 12.8313L23.8198 7.38714C24.0309 7.17488 24.0309 6.83194 23.8198 6.61958Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className="s-py-50-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <div>  
                        <img src={sofa} alt="" className="mx-auto w-14 sm:w-24"/>                                           
                    </div>
                    <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">New Products</h3>
                    <p className="mt-3">Be the first to experience innovation with our latest arrivals. Stay ahead of the curve and discover what's new in style, technology, and more. </p>
                </div>
                <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
                    {productList.slice(0,4).map((item,index)=>{
                        return(
                            <LayoutOne item={item} key={index}/>
                        )
                    })}
                </div>
                <div className="text-center mt-7 md:mt-12">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="All Products">
                        <span>All Products</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="s-py-100 bg-overlay dark:before:bg-title dark:before:bg-opacity-80" style={{backgroundImage:`url(${bg})`}} data-aos="fade-up">
            <img className="absolute top-0 right-0 w-[20%] z-[-1]" src={shape1} alt="shape"/>
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div className="max-w-[1186px] ml-auto">
                        <div className="max-w-xl mb-8 md:mb-12">
                            <div> 
                                <img src={like} className="w-14 sm:w-24" alt="" />                                                     
                            </div>
                            <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Why you Choose Us</h3>
                            <p className="mt-3">Choose us for unparalleled quality, exceptional service, and a commitment to your satisfaction. Join countless others who rely on us for reliability. </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                            {featureOne.slice(0,4).map((item,index)=>{
                                return(
                                    <div className="why-choose-card p-6 rounded-[10px]" key={index}>
                                        <img src={item.image} alt="" className='size-12'/>
                                        <h4 className="font-semibold leading-none mt-5 sm:mt-7 text-xl md:text-2xl">{item.title}</h4>
                                        <p className="mt-[15px]">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-100-50" data-aos="fade-up">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center">
                    <div>
                        <img src={bed} className="mx-auto w-14 sm:w-24" alt="" />                                              
                    </div>
                    <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Featured Products</h3>
                    <p className="mt-3">Discover our handpicked selection of standout products. Elevate your lifestyle with our top picks that combine quality, style, and innovation. </p>
                </div>
                <div className="max-w-[1720px] mx-auto flex gap-5 sm:gap-8 flex-col lg:flex-row" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 lg:max-w-[766px] w-full">
                        {productList.slice(0,4).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <div className="relative overflow-hidden">
                                        <Link to="/product-details">
                                            <img className="w-full transform group-hover:scale-110 duration-300 sm:max-h-[320px] object-cover" src={item.image} alt="product-card"/> 
                                        </Link>

                                        <div className="absolute z-10 top-[50%] right-3 transform -translate-y-[40%] opacity-0 duration-300 transition-all group-hover:-translate-y-1/2 group-hover:opacity-100 flex flex-col items-end gap-3">
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <LuHeart className="dark:text-white h-[22px] w-[20px]"/>                                                                      
                                                <span className="mt-1">Add to wishlist</span>
                                            </Link>
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>  
                                                <span className="mt-1">Add to Cart</span>
                                            </Link>
                                            <button className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon quick-view">
                                                <LuEye className="dark:text-white h-[22px] w-[20px]"/>                                      
                                                <span className="mt-1">Quick View</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="lg:pt-6 pt-5 flex gap-3 md:gap-4 flex-col">
                                        <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}  <span className="text-title/50 line-through pl-2 inline-block">$140.99</span></h4>
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
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 lg:max-w-[925px] w-full">
                        {productList.slice(7,9).map((item,index)=>{
                            return(
                                <div className="group flex flex-col" key={index}>
                                    <div className="relative overflow-hidden flex-1">
                                        <Link to="/product-details">
                                            <img className="w-full transform group-hover:scale-110 duration-300 h-full object-cover" src={item.image} alt="product-card"/>
                                        </Link>

                                        <div className="absolute z-10 top-[50%] right-3 transform -translate-y-[40%] opacity-0 duration-300 transition-all group-hover:-translate-y-1/2 group-hover:opacity-100 flex flex-col items-end gap-3">
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <LuHeart className="dark:text-white h-[22px] w-[20px]"/>                                                                      
                                                <span className="mt-1">Add to wishlist</span>
                                            </Link>
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>  
                                                <span className="mt-1">Add to Cart</span>
                                            </Link>
                                            <button className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon quick-view">
                                                <LuEye className="dark:text-white h-[22px] w-[20px]"/>                                      
                                                <span className="mt-1">Quick View</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="lg:pt-6 pt-5 flex gap-3 md:gap-4 flex-col">
                                        <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}  <span className="text-title/50 line-through pl-2 inline-block">$140.99</span></h4>
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

        <div className="s-py-50" data-aos="fade-up">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center">
                        <div> 
                            <img src={comment} className="mx-auto w-14 sm:w-24" alt="" />                                                 
                        </div>
                        <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Latest Blog</h3>
                        <p className="mt-3">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love. </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <BlogOne/>
                    </div>
                </div>
            </div>
        </div>
        <div className="s-py-50-100" data-aos="fade-up">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <img src={hand} className='mx-auto w-14 sm:w-24' alt="" />
                    </div>
                    <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Trusted Partner</h3>
                    <p className="mt-3">Count on our trusted partnerships to deliver excellence. Collaborating with industry leaders ensures top-quality products and services for your satisfaction. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <PartnerOne/>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}

export default Index