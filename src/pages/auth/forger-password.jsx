import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavbarOne from '../../components/navbar/navbar-one'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/img/bg/forget-pass.jpg'

import Aos from 'aos'

export default function ForgerPassword() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex">
            <div className="w-1/2 hidden md:block lg:flex-1">
                <img className="h-full object-cover" src={bg} alt="forget password"/>
            </div>
            <div className="w-full md:w-1/2 lg:max-w-lg xl:max-w-3xl lg:w-full py-16 px-[20px] sm:px-8 lg:p-16 xl:p-24 relative z-10 flex items-center overflow-hidden">
                <div className="mx-auto md:mx-0 max-w-md">
                    <h2 className="leading-none" data-aos="fade-up" data-aos-delay="100">Forget Password</h2>
                    <p className="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="200">Buy & sale your exclusive product only on Furnixar</p>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="300">
                        <label className="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Email</label>
                        <input className="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Enter your email address"/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Link to="#" className="btn btn-theme-solid mt-[15px]" data-text="Send Info">
                            <span>Send Info</span>
                        </Link>
                    </div>
                    <p className="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="500">
                        Note: We will send a password reset link to your email
                    </p>
                </div>
            </div>
        </div>  
        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
