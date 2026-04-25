import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cartList, wishListData } from '../../data/nav-data';

import { LuSearch,LuX} from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import {RiShoppingBag4Line} from 'react-icons/ri'
import Switcher from '../switcher';
import IncreDre from '../incre-dre';
import { blogTag } from '../../data/blog';

export default function NavMenu({toggle, setToggle}) {  
    const [wishList, setWishList] = useState(false)
    const [cart, setCart] = useState(false)
    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 sm:gap-6">
        <Link to="/login" className="text-lg leading-none text-title dark:text-white transition-all duration-300 hover:text-primary hidden lg:block">Login</Link>
        <button className="hdr_search_btn" aria-label="search" onClick={()=>setOpen(!open)}>
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
                                    <h6 className="text-base md:text-lg font-semibold !leading-none mt-[10px] mb-4">
                                        <Link to="/product-details">{item.desc}</Link>
                                    </h6>
                                   <IncreDre/>
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
        <button className={`hamburger ${toggle ? 'opened' : ''}`} onClick={()=>setToggle(!toggle)}>
            <svg className="stroke-current text-title dark:text-white" width="40" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
        <div className="w-[1px] bg-title/20 dark:bg-white/20 h-7 hidden sm:block"></div>
        <Switcher/>

        <div className={`search_popup fixed top-0 left-0 bg-red dark:bg-[#39434D] bg-opacity-90 dark:bg-opacity-80 backdrop-blur-[3px] dark:backdrop-blur-[7.5px] w-full h-screen z-[999] px-[15px] md:px-[30px] py-12 md:py-[70px] overflow-y-auto transform scale-90 opacity-0 invisible transition-all duration-300 flex items-center justify-center  ${open ? 'search-active' : ''}`}>
            <div className="container">
                <div className="relative max-w-4xl mx-auto hdr-search-wrapper">
                    <button className="hdr_search_close w-[36px] h-[36px] absolute bottom-full md:top-0 right-0 flex items-center justify-center bg-title dark:bg-white text-white dark:text-title" onClick={()=>setOpen(!open)}>
                        <LuX/>
                    </button>

                    <div className="bg-white dark:bg-title py-8 sm:py-10 md:py-[60px] px-5 sm:px-8">
                        <div className="relative">
                            <input className="outline-none border-b border-bdr-clr dark:border-bdr-clr-drk pb-4 md:pb-[22px] text-title w-full pr-7 md:pr-10 leading-none font-lg placeholder:text-title bg-transparent dark:bg-transparent dark:text-white dark:placeholder:text-white" type="text" placeholder="Type your keyword"/>
                            <button className="absolute right-0 top-0">
                                <svg className="fill-current text-title dark:text-white w-5 md:w-[30px]" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5439 28.2361L22.1484 20.5625C24.0499 18.3074 25.0917 15.4701 25.0917 12.5162C25.0917 5.61489 19.4635 0 12.5459 0C5.62818 0 0 5.61489 0 12.5162C0 19.4176 5.62818 25.0325 12.5459 25.0325C15.1429 25.0325 17.6177 24.251 19.7335 22.7676L27.1852 30.4994C27.4967 30.8221 27.9156 31 28.3646 31C28.7895 31 29.1926 30.8384 29.4986 30.5445C30.1488 29.9203 30.1695 28.8853 29.5439 28.2361ZM12.5459 3.26511C17.6591 3.26511 21.8189 7.41506 21.8189 12.5162C21.8189 17.6174 17.6591 21.7674 12.5459 21.7674C7.43261 21.7674 3.27283 17.6174 3.27283 12.5162C3.27283 7.41506 7.43261 3.26511 12.5459 3.26511Z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-10 md:mt-12">
                            <h4 className="font-medium leading-none">Popular Tags</h4>
                            <div className="flex flex-wrap gap-[10px] md:gap-[15px] mt-5 md:mt-6">
                                {blogTag.map((item,index)=>{
                                    return(
                                        <Link className="btn btn-theme-outline btn-xs" to="#" data-text={item}key={index}><span>{item}</span></Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
