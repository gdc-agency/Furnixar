import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import NavbarOne from '../../components/navbar/navbar-one'
import AccountTab from '../../components/account/account-tab'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import Aos from 'aos'

export default function EditAccount() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
     <NavbarOne/>   

    <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
        <div className="text-center w-full">
            <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Edit Account</h2>
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
                </div>
            </div>
        </div>
    </div>

    <FooterOne/>
    <ScrollToTop/>
    </>
  )
}
