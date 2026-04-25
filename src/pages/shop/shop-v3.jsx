import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import LayoutOne from "../../components/product/layout-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import SelectOne from "../../components/product/select-one";
import SelectTwo from "../../components/product/select-two";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { productList, productSlider } from "../../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import Aos from "aos";

export default function ShopV3() {
    useEffect(()=>{
        Aos.init()
    })

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
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100-50 overflow-hidden">
            <div className="relative">
                <div>
                    <button className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 shop_prev w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-white duration-300 bg-title bg-opacity-90 hover:bg-primary p-2">
                        <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.180223 7.38726L5.62434 12.8314C5.8199 13.0598 6.16359 13.0864 6.39195 12.8908C6.62031 12.6952 6.64693 12.3515 6.45132 12.1232C6.43307 12.1019 6.41324 12.082 6.39195 12.0638L1.87877 7.54516L23.4322 7.54516C23.7328 7.54516 23.9766 7.30141 23.9766 7.00072C23.9766 6.70003 23.7328 6.45632 23.4322 6.45632L1.87877 6.45632L6.39195 1.94314C6.62031 1.74758 6.64693 1.40389 6.45132 1.17553C6.25571 0.947171 5.91207 0.920551 5.68371 1.11616C5.66242 1.13441 5.64254 1.15424 5.62434 1.17553L0.180175 6.6197C-0.0308748 6.83196 -0.0308748 7.1749 0.180223 7.38726Z"/>
                        </svg>
                    </button>
                    <button className="absolute top-1/2 transform -translate-y-1/2 z-10 right-0 shop_next w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-white duration-300 bg-title bg-opacity-90 hover:bg-primary p-2">
                        <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8198 6.61958L18.3757 1.17541C18.1801 0.947054 17.8364 0.920433 17.608 1.11604C17.3797 1.31161 17.3531 1.65529 17.5487 1.88366C17.5669 1.90494 17.5868 1.92483 17.608 1.94303L22.1212 6.46168L0.567835 6.46168C0.267191 6.46168 0.0234375 6.70543 0.0234375 7.00612C0.0234375 7.30681 0.267191 7.55052 0.567835 7.55052L22.1212 7.55052L17.608 12.0637C17.3797 12.2593 17.3531 12.6029 17.5487 12.8313C17.7443 13.0597 18.0879 13.0863 18.3163 12.8907C18.3376 12.8724 18.3575 12.8526 18.3757 12.8313L23.8198 7.38714C24.0309 7.17488 24.0309 6.83194 23.8198 6.61958Z"/>
                        </svg>
                    </button>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="100">
                    <div className="shop-v3-slider " >
                        <TinySlider settings={settings}> 
                            {productSlider.map((item,index)=>{
                                return(
                                    <Link to="/product-category" className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-title before:bg-opacity-70 group before:opacity-0 before:duration-300 hover:before:opacity-100 overflow-hidden before:z-10 block" key={index}>
                                        <img className="w-full object-cover transform duration-300 group-hover:scale-110" src={item.image} alt="shop"/>
                                        <div className="absolute z-20 w-full h-full flex top-0 left-0 flex-col items-center justify-center px-5">
                                            <h3 className="text-white leading-tight font-semibold transform -translate-y-5 opacity-0 duration-300 group-hover:-translate-y-0 group-hover:opacity-100">{item.name}</h3>
                                            <span className="text-white leading-none divide-black mt-3 transform translate-y-5 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">{item.product}</span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-50-100">
            <div className="container-fluid">
                <div className="flex items-center lg:justify-center gap-6 flex-wrap" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap sm:max-w-[420px] w-full flex-col sm:flex-row">
                        <h4 className="font-medium leading-none text-xl flex-none">Choose Brand</h4>
                        <div className="sm:max-w-[252px] w-full">
                            <SelectOne/>
                        </div>
                    </div>
                    <div className="hidden 2xl:block">
                        <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.566987" y1="40.6689" x2="23.567" y2="0.831777" stroke="#BB976D"/>
                        </svg>
                    </div>
                    <div className="flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap sm:max-w-[347px] w-full flex-col sm:flex-row">
                        <h4 className="font-medium leading-none text-xl flex-none">Sort By</h4>
                        <div className="sm:max-w-[252px] w-full">
                            <SelectTwo/>
                        </div>
                    </div>
                    <div className="hidden 2xl:block">
                        <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.566987" y1="40.6689" x2="23.567" y2="0.831777" stroke="#BB976D"/>
                        </svg>
                    </div>
                    <div className="sm:max-w-[411px] w-full flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap flex-col sm:flex-row">
                        <h4 className="font-medium leading-none text-xl flex-none">Price Range</h4>
                        <div className="grid grid-cols-2 gap-[15px] sm:max-w-[260px] w-full">
                            <div className="py-[10px] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                <span className="text-title dark:text-white font-medium leading-none">Min:</span>
                                <div className="relative">
                                    <span className="text-title dark:text-white font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                    <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white placeholder  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="0" value="0"/>
                                </div>
                            </div>
                            <div className="py-[10] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                <span className="text-title dark:text-white font-medium leading-none">Max:</span>
                                <div className="relative">
                                    <span className="text-title dark:text-white  font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                    <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="100" value="100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1720px] mx-auto mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-[30px]">
                        {productList.slice(0,10).map((item,index)=>{
                            return(
                                <LayoutOne item={item} key={index}/>
                            )
                        })}
                    </div>
                </div>
                <div className="text-center mt-7 md:mt-12" data-aos="fade-up">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="Load More">
                        <span>Load More</span>
                    </Link>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
