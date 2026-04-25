import { Link } from 'react-router-dom'

import AccountTab from '../../components/account/account-tab'
import NavbarOne from '../../components/navbar/navbar-one'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { LuMail, LuMapPin, LuPhoneCall } from 'react-icons/lu'

import { cartData } from '../../data/data'
import { useEffect } from 'react'
import Aos from 'aos'

export default function MyAccount() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">My Account</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Account</li>
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
                        <div className="w-full max-w-[951px] bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px]">
                            <div>
                                <h3 className="font-semibold leading-none">Kathlene Roser</h3>
                                <span className="leading-none mt-3">Product Designer</span>
                            </div>
                            <p className="text-base sm:text-lg mt-5 sm:mt-8 md:mt-10 text-justify">
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate posuere habitant vel tempor varius. 
                            </p>
                            <div className="mt-5 sm:mt-8 md:mt-10 grid gap-4 sm:gap-6">
                                <Link to="#" className="flex items-center gap-2">
                                    <LuPhoneCall className="text-primary size-5"/>
                                    <span className="leading-none font-medium text-base sm:text-lg">+111 - (1234 5678 99)</span>
                                </Link>
                                <Link to="#" className="flex items-center gap-2">
                                    <LuMail className="text-primary size-5"/>
                                    <span className="leading-none font-medium text-base sm:text-lg">furnixar123@gmail.com</span>
                                </Link>
                                <Link to="#" className="flex items-center gap-2">
                                    <LuMapPin className="text-primary size-5"/>
                                    <span className="leading-none font-medium text-base sm:text-lg">23/ A Lake Side , New Arizona , USA</span>
                                </Link>
                            </div>                        
                        </div>
                        <div className="w-full max-w-[951px] bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px]">
                            <div className="flex items-start flex-col lg:flex-row gap-5 sm:gap-6">
                                <div className="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Full Name</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your full name"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Designation</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your designation"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Phone No.</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300 appearance-none" type="number" placeholder="Type your phone number"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Mail</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Enter your email address"/>
                                    </div>
                                </div>
                                <div className="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Location</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your location"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Bio</label>
                                        <textarea className="w-full h-28 md:h-[168px] bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" name="Message" placeholder="Write your bio . . ."></textarea>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Web / Social Media</label>
                                        <input className="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="www.facebook.com/johndoe"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-8 md:mt-12">
                                <button className="btn btn-solid" data-text="Save Change">
                                    <span>Save Change</span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px] order-history-table" >
                            <ul className="order-history">
                                <li className="title flex items-center justify-between gap-5 pb-[10px] sm:pb-5 border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <span className="cart-product-title text-lg md:text-xl font-semibold leading-none text-title dark:text-white block w-[270px] sm:w-[310px] xl:w-[330px]">Product</span>
                                    <span className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[60px]">Price</span>
                                    <span className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[100px]">Status</span>
                                    <span className="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[72px]">Remove</span>
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

                                            <span className="text-base md:text-lg leading-none text-title dark:text-white font-semibold text-left w-[60px]">$74</span>

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

                                            <div className="w-[72px] flex justify-end">
                                                <button className="w-8 h-8 flex-none bg-[#E8E9EA] dark:bg-title flex items-center justify-center duration-300 text-title dark:text-white">
                                                    <svg className="fill-current " width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.546875 1.70822L1.70481 0.550293L5.98646 4.83195L10.2681 0.550293L11.3991 1.6813L7.11746 5.96295L11.453 10.2985L10.295 11.4564L5.95953 7.12088L1.67788 11.4025L0.546875 10.2715L4.82853 5.98988L0.546875 1.70822Z"/>
                                                    </svg>
                                                </button>
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
