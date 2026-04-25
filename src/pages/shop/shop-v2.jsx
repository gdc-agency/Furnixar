/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import cardImg from '../../assets/img/thumb/shop-card.jpg'

import { productList } from '../../data/data'

import SelectOne from '../../components/product/select-one'
import NavbarOne from '../../components/navbar/navbar-one'
import LayoutOne from '../../components/product/layout-one'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import MultiRangeSlider from "multi-range-slider-react";

import Aos from 'aos'

export default function ShopV2() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(()=>{
        Aos.init()
    })

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

        <div className="s-py-100" >
            <div className="container">
                <div className="max-w-[1477px] mx-auto flex items-start justify-between gap-8 md:gap-10 flex-col lg:flex-row">
                    <div className="grid gap-[15px] lg:max-w-[300px] w-full sm:grid-cols-2 lg:grid-cols-1" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Categoryies</h4>
                            <div className="grid gap-5">
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Chair (6)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Table (12)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Sofa Set (19)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Lamp (08)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Vases (25)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Mirror (14)</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="checkbox" name="categories"/>
                                    <span className="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Art & Paint (07)</span>
                                </label>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Item Type</h4>
                            <div className="grid gap-5">
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="radio" name="item-type"/>
                                    <span className="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="sm:text-lg text-title duration-300 dark:text-white block sm:leading-none transform translate-y-[1px] select-none text">Regular</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="radio" name="item-type"/>
                                    <span className="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Premium</span>
                                </label>
                                <label className="categoryies-iteem flex items-center gap-[10px]">
                                    <input className="appearance-none hidden" type="radio" name="item-type"/>
                                    <span className="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg className="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span className="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Vintage</span>
                                </label>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Brand</h4>
                            <div>
                                <SelectOne/>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Price Range</h4>
                            <div className="price-filter">
                                <div id="slider-container">
                                    <MultiRangeSlider
                                        ruler={false}
                                        label={false}
                                        onInput={(e) => {
                                            setMinValue(e.minValue);
                                            setMaxValue(e.maxValue);
                                        }}>
                                    </MultiRangeSlider>
                                </div>
                                <div className="price-filter-content">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[15px] leading-none">Price:</span>
                                        <input className="text-[15px] text-paragraph placeholder:text-paragraph dark:text-white-light dark:placeholder:text-white-light leading-none bg-transparent focus:border-none outline-none" type="text" id="amount" placeholder={`$${minValue} - $${maxValue}`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/shop-v1" className="hidden lg:block">
                            <img className="w-full" src={cardImg} alt="shop-card"/>
                        </Link>
                    </div>
                    <div className="lg:max-w-[1100px] w-full" data-aos="fade-up" data-aos-delay="300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">
                            {productList.map((item,index)=>{
                                return(
                                    <LayoutOne item={item} key={index} />
                                )
                            })}
                        </div>
                        <div className="mt-10 md:mt-12 flex items-center justify-center gap-[10px]">
                            <Link to="#" className="text-title dark:text-white text-xl"><span className="lnr lnr-arrow-left"></span></Link>         
                            <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">01</Link>        
                            <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">02</Link>        
                            <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">03</Link> 
                            <Link to="#" className="text-title dark:text-white text-3xl sm:text-4xl transform">...</Link>          
                            <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">09</Link>        
                            <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">10</Link>        
                            <Link to="#" className="text-title dark:text-white text-xl"><span className="lnr lnr-arrow-right"></span></Link>         
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
