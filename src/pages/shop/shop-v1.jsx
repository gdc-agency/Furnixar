import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import LayoutOne from "../../components/product/layout-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import SelectOne from "../../components/product/select-one";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { productList } from "../../data/data";

import Aos from "aos";

export default function ShopV1() {

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

        <div className="s-py-100">
            <div className="container-fluid">
                <div className="flex items-start justify-between gap-8 max-w-[1720px] mx-auto flex-col lg:flex-row border-b border-bdr-clr dark:border-bdr-clr-drk pb-8 md:pb-[50px]" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Category</h4>
                        <div className="flex flex-wrap gap-[10px] md:gap-[15px]">
                            <Link className="btn btn-theme-outline btn-sm shop1-button" to="/product-category" data-text="Sofa & Chair"><span>Sofa & Chair</span></Link>
                            <Link className="btn btn-theme-outline btn-sm shop1-button" to="product-category" data-text="Full Interior"><span>Full Interior</span></Link>
                            <Link className="btn btn-theme-outline btn-sm shop1-button" to="product-category" data-text="Lamp & Vase"><span>Lamp & Vase</span></Link>
                            <Link className="btn btn-theme-outline btn-sm shop1-button" to="product-category" data-text="Table"><span>Table</span></Link>
                            <Link className="btn btn-theme-outline btn-sm shop1-button" to="product-category" data-text="Wood Design"><span>Wood Design</span></Link>
                        </div>
                    </div>
                    <div className="max-w-[562px] w-full grid sm:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Price Range</h4>
                            <div className="grid grid-cols-2 gap-[15px]">
                                <div className="py-[10px] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span className="text-title dark:text-white font-medium leading-none">Min:</span>
                                    <div className="relative">
                                        <span className="text-title dark:text-white font-medium leading-none absolute left-0 top-1 block">$</span>
                                        <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white placeholder  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="0" value="0"/>
                                    </div>
                                </div>
                                <div className="py-[10] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span className="text-title dark:text-white font-medium leading-none">Max:</span>
                                    <div className="relative">
                                        <span className="text-title dark:text-white  font-medium leading-none absolute left-0 top-1 block">$</span>
                                        <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="100" value="100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Brand</h4>
                            <SelectOne/>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-8 md:pt-[50px]" data-aos="fade-up" data-aos-delay="300">
                    {productList.map((item,index)=>{
                        return(
                            <LayoutOne item={item} key={index}/>
                        )
                    })}
                </div>
                <div className="text-center mt-7 md:mt-12">
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
