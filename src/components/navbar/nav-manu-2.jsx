import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cartList, wishListData } from '../../data/nav-data';


import { LuSearch,LuX,LuMinus,LuPlus } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import {RiShoppingBag4Line} from 'react-icons/ri'
import Switcher from '../switcher';

export default function NavMenuTwo() {  
    const [wishList, setWishList] = useState(false)
    const [cart, setCart] = useState(false)

  return (
    <div className="flex items-center gap-4 sm:gap-6">
        <Link to="/login" className="text-lg leading-none text-title dark:text-white transition-all duration-300 hover:text-primary hidden lg:block">Login</Link>
        <button className="hdr_search_btn" aria-label="search">
            <LuSearch className="text-title dark:text-white size-6"/>
        </button>

        <button className="relative hdr_wishList_btn" onClick={()=>setWishList(!wishList)}>
            <span className="absolute w-[22px] h-[22px] bg-secondary -top-[10px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white">14</span>
            <GoHeart className="text-title dark:text-white size-6"/>
        </button>

        <div className={`wishlist_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-20 xl:right-11 bg-white dark:bg-title py-5 md:py-[30px] pl-5 md:pl-[30px] pr-[10px] md:pr-[15px] border border-primary ${wishList ? 'block' : 'hidden'}`}>
            <h4 className="font-medium leading-none dark:text-white mb-4 text-xl md:text-2xl">Wishlist</h4>
            <div>
                <div className="pr-4 md:pr-5 wishlist-item">
                    {wishListData.map((item,index)=>{
                        return(
                            <Link to="/product-details" className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk" key={index}>
                                <img className="w-[70px] md:w-auto" src={item.image} alt="wishlist"/>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[14px] md:text-[15px] leading-none block">{item.name}</span>
                                        <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                        <span className="text-[14px] md:text-[15px] leading-none block">{item.price}</span>
                                    </div>
                                    <h6 className="text-base md:text-lg font-semibold leading-none mt-3">{item.desc}</h6>
                                </div>
                                <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                                    <LuX className="text-title dark:text-white duration-300 group-hover:text-white"/>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="mt-6 md:mt-10">
                    <Link to="/wishlist" className="btn btn-outline btn-sm w-full">
                        <span>View All Wishlist</span>
                    </Link>
                </div>
            </div>
        </div>

        <button className="relative hdr_cart_btn" onClick={()=> setCart(!cart)}>
            <span className="absolute w-[22px] h-[22px] bg-secondary -top-[10px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white">22</span>
            <RiShoppingBag4Line className="text-title dark:text-white size-6"/>
        </button>

        <div className={`hdr_cart_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-10 xl:right-0 bg-white dark:bg-title p-5 md:p-[30px] border border-primary ${cart ? '' : 'hidden'}`}>
            <h4 className="font-medium leading-none mb-4 text-xl md:text-2xl">Cart List</h4>
            <div>
                <div className="hdr-cart-item">
                    {cartList.map((item,index)=>{
                        return(
                            <div className="flex gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group" key={index}>
                                <Link to="/product-details" className="block">
                                    <img className="w-[70px] md:w-auto h-full" src={item.image} alt="cart"/>
                                </Link>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[14px] md:text-[15px] leading-none block">{item.name}</span>
                                        <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                        <span className="text-[14px] md:text-[15px] leading-none block">{item.value}</span>
                                    </div>
                                    <h6 className="text-base md:text-lg font-semibold !leading-none mt-[10px]">
                                        <Link to="/product-details">{item.desc}</Link>
                                    </h6>
                                    <div className="inc-dec flex items-center gap-2 mt-4">
                                        <div className="dec w-6 h-6 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center">
                                            <LuMinus className="text-title dark:text-white"/>
                                        </div>
                                        <input className="w-6 h-auto outline-none bg-transparent text-base mg:text-lg leading-none text-title dark:text-white text-center" type="text" defaultValue="1"/>
                                        <div className="inc w-6 h-6 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center">
                                            <LuPlus className="text-title dark:text-white"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                                    <LuX className="text-title dark:text-white duration-300 group-hover:text-white"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="pt-5 md:pt-[30px] mt-5 md:mt-[30px] border-t border-bdr-clr dark:border-bdr-clr-drk">
                    <h4 className="mb-5 md:mb-[30px] font-medium !leading-none text-lg md:text-xl text-right">Subtotal : $870</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to="/cart" className="btn btn-outline btn-sm" data-text="View Cart">
                            <span>View Cart</span>
                        </Link>
                        <Link to="/checkout" className="btn btn-theme-solid btn-sm" data-text="Checkout">
                            <span>Checkout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[1px] bg-title/20 dark:bg-white/20 h-7 hidden sm:block"></div>
        <Switcher/>
    </div>
  )
}
