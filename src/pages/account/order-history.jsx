import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavbarOne from '../../components/navbar/navbar-one'
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import AccountTab from '../../components/account/account-tab'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import { cartData } from '../../data/data'

import Aos from 'aos'

export default function OrderHistory() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>   

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Order History</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">History</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div className="w-full md:w-[200px] lg:w-[300px] flex-none" data-aos="fade-up" data-aos-delay="100">
                        <AccountTab/>
                    </div>
                    <div className="w-full md:w-auto md:flex-1 overflow-auto" data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px] order-history-table">
                            <ul className="order-history">
                                <li className="title flex items-center justify-between gap-5 pb-[10px] sm:pb-5 border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <span className="cart-product-title text-lg md:text-xl font-semibold leading-none text-title dark:text-white block w-[270px] sm:w-[310px] xl:w-[330px]">Product</span>
                                    <span className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[60px]">Price</span>
                                    <span className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[100px]">Status</span>
                                </li>
                                {cartData.map((item,index)=>{
                                    return(
                                        <li className="flex items-center justify-between gap-5 py-[15px] sm:py-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk" key={index}>
                                            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 ordered-product w-[270px] sm:w-[310px] xl:w-[330px]">
                                                <div className="w-16 sm:w-[90px] flex-none">
                                                    <img src={item.image} alt="product"/>
                                                </div>
                                                <div className="flex-1">
                                                    <span className="text-[15px] font-medium leading-none">{item.tag}</span>
                                                    <h5 className="font-semibold leading-none mt-2 md:mt-4"><Link to="#">{item.name}</Link></h5>
                                                </div>
                                            </div>

                                            <span className="text-base md:text-lg leading-none text-title dark:text-white font-semibold text-left w-[60px]">{item.price}</span>

                                            <div className="w-[100px]">
                                                {item.status === 'Completed' && 
                                                    <Link to="#" className="bg-[#31A051] py-[7px] px-[10px] font-semibold leading-none text-white text-sm rounded">
                                                        Completed
                                                    </Link>
                                                }
                                                {item.status === 'Pending' && 
                                                    <Link to="#" className="bg-[#EC991D] py-[7px] px-[10px] font-semibold leading-none text-white text-sm rounded">
                                                        Pending
                                                    </Link>
                                                }
                                                {item.status === 'Cancel' && 
                                                    <Link to="#" className="bg-[#E13939] py-[7px] px-[10px] font-semibold leading-none text-white text-sm rounded">
                                                        Cancel
                                                    </Link>
                                                }
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
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
