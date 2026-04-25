import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import IncreDre from "../../components/incre-dre";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import cart1 from '../../assets/img/gallery/cart/cart-01.jpg'
import cart2 from '../../assets/img/gallery/cart/cart-02.jpg'
import cart3 from '../../assets/img/gallery/cart/cart-03.jpg'
import { useEffect } from "react";
import Aos from "aos";

export default function Cart() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>  

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Cart</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Cart</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container ">
                <div className="flex xl:flex-row flex-col gap-[30px] lg:gap-[30px] xl:gap-[70px]">
                    <div className="flex-1 overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
                        <table id="cart-table" className="responsive nowrap table-wrapper" style={{width:'100%'}}>
                            <thead className="table-header">
                                <tr>
                                    <th className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">Product Info</th>
                                    <th className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">Price</th>
                                    <th className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">Quantity</th>
                                    <th className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">Total</th>
                                    <th className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">Remove</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="">
                                    <td className="md:w-[42%]">
                                        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 cart-product my-4">
                                            <div className="w-14 sm:w-20 flex-none">
                                                <img src={cart1} alt="product"/>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="leading-none font-medium">Chair</h6>
                                                <h5 className="font-semibold leading-none mt-2"><Link to="#">Modern Sofa Set</Link></h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$45</h6>
                                    </td>
                                    <td>
                                        <IncreDre/>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$312</h6>
                                    </td>
                                    <td>
                                        <button className="w-8 h-8 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center ml-auto duration-300 text-title dark:text-white">
                                            <svg className="fill-current " width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.546875 1.70822L1.70481 0.550293L5.98646 4.83195L10.2681 0.550293L11.3991 1.6813L7.11746 5.96295L11.453 10.2985L10.295 11.4564L5.95953 7.12088L1.67788 11.4025L0.546875 10.2715L4.82853 5.98988L0.546875 1.70822Z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="md:w-[42%]">
                                        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 cart-product mb-4">
                                            <div className="w-14 sm:w-20 flex-none">
                                                <img src={cart2} alt="product"/>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="leading-none font-medium">Light/Lamp</h6>
                                                <h5 className="font-semibold leading-none mt-2"><Link to="#">Classic Chair with Vase</Link></h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$120</h6>
                                    </td>
                                    <td>
                                        <IncreDre/>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$780</h6>
                                    </td>
                                    <td>
                                        <button className="w-8 h-8 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center ml-auto duration-300 text-title dark:text-white">
                                            <svg className="fill-current " width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.546875 1.70822L1.70481 0.550293L5.98646 4.83195L10.2681 0.550293L11.3991 1.6813L7.11746 5.96295L11.453 10.2985L10.295 11.4564L5.95953 7.12088L1.67788 11.4025L0.546875 10.2715L4.82853 5.98988L0.546875 1.70822Z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="md:w-[42%]">
                                        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 cart-product">
                                            <div className="w-14 sm:w-20 flex-none">
                                                <img src={cart3} alt="product"/>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="leading-none font-medium">Interior</h6>
                                                <h5 className="font-semibold leading-none mt-2"><Link to="#">Luxury Hanging Lamp</Link></h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$90</h6>
                                    </td>
                                    <td>
                                        <IncreDre/>
                                    </td>
                                    <td>
                                        <h6 className="text-base md:text-lg leading-none text-title dark:text-white font-semibold">$380</h6>
                                    </td>
                                    <td>
                                        <button className="w-8 h-8 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center ml-auto duration-300 text-title dark:text-white">
                                            <svg className="fill-current " width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.546875 1.70822L1.70481 0.550293L5.98646 4.83195L10.2681 0.550293L11.3991 1.6813L7.11746 5.96295L11.453 10.2985L10.295 11.4564L5.95953 7.12088L1.67788 11.4025L0.546875 10.2715L4.82853 5.98988L0.546875 1.70822Z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="mb-[30px]">
                            <h4 className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white mb-[15px]">
                                Promo Code
                            </h4>
                            <div className="flex xs:flex-row flex-col gap-3">
                                <input className="h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300 placeholder:text-title dark:placeholder:text-white flex-1" type="text" placeholder="Coupon Code"/>
                                <button className="btn btn-solid" data-text="Apply">
                                    <span>Apply</span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#FAFAFA] dark:bg-dark-secondary pt-[30px] md:pt-[40px] px-[30px] md:px-[40px] pb-[30px] border border-[#17243026] border-opacity-15 rounded-xl">   
                            <div className="text-right flex justify-end flex-col w-full ml-auto mr-0">
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium">
                                    <span>Sub Total:</span>
                                    <span>$870</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <span>Coupon Discount:</span>
                                    <span>-$20</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <span>VAT:</span>
                                    <span> $5</span>
                                </div>
                                
                            </div>
                            <div className="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk">
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label className="flex items-center gap-[10px] categoryies-iteem">
                                            <input className="appearance-none hidden" type="radio" name="item-type"/>
                                            <span className="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg className="duration-300 opacity-0" width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                                </svg>
                                            </span>
                                            <span className="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none">Free Shipping:</span>
                                        </label>
                                    </div>
                                    <span> $0</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label className="flex items-center gap-[10px] categoryies-iteem">
                                            <input className="appearance-none hidden" type="radio" name="item-type"/>
                                            <span className="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg className="duration-300 opacity-0" width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                                </svg>
                                            </span>
                                            <span className="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none"> Fast Shipping:</span>
                                        </label>
                                    </div>
                                    <span>$10</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label className="flex items-center gap-[10px] categoryies-iteem">
                                            <input className="appearance-none hidden" type="radio" name="item-type"/>
                                            <span className="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg className="duration-300 opacity-0" width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                                </svg>
                                            </span>
                                            <span className="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none"> Local Pickup:</span>
                                        </label>
                                    </div>
                                    <span>$15</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk">
                                <div className="flex justify-between flex-wrap font-semibold leading-none text-2xl">
                                    <span>Total:</span>
                                    <span>&nbsp;$850</span>
                                </div>
                            </div>
                        </div>
                        <div className="sm:mt-[10px] py-5 flex items-end gap-3 flex-wrap justify-end">
                            <Link to="/shop-v1" className="btn btn-sm btn-outline !text-title hover:!text-white before:!z-[-1] dark:!text-white dark:hover:!text-title">
                                Continue Shopping
                            </Link>
                            <Link to="/checkout" className="btn btn-sm btn-theme-solid !text-white hover:!text-primary before:!z-[-1]">
                                Checkout
                            </Link>
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
