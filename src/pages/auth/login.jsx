import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/bg/login.jpg'

import Aos from "aos";

export default function Login() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex">
            <div className="w-1/2 hidden md:block lg:flex-1">
                <img className="h-full object-cover" src={bg} alt="login"/>
            </div>
            <div className="w-full md:w-1/2 lg:max-w-lg xl:max-w-3xl lg:w-full py-16 px-[20px] sm:px-8 lg:p-16 xl:p-24 relative z-10 flex items-center overflow-hidden">
                
                <div className="mx-auto md:mx-0 max-w-md">
                    <h2 className="leading-none" data-aos="fade-up" data-aos-delay="100">Welcome back !</h2>
                    <p className="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="200">Buy & sale your exclusive product only on Furnixar</p>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="300">
                        <label className="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Email</label>
                        <input className="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Enter your email address"/>
                    </div>
                    <div className="mt-5" data-aos="fade-up" data-aos-delay="400">
                        <label className="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Password</label>
                        <input className="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="password" placeholder="* * * * * * * *"/>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="500">
                        <label className="flex items-center gap-2 iam-agree">
                            <input className="appearance-none hidden" type="checkbox" name="categories"/>
                            <span className="w-[18px] h-[18px] rounded-[5px] border-2 border-title dark:border-white flex items-center justify-center duration-300">
                                <svg className="duration-300 opacity-0 fill-current text-title dark:text-white" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z"/>
                                </svg>
                            </span>
                            <span className="text-base sm:text-lg text-title dark:text-white leading-none sm:leading-none select-none inline-block transform translate-y-[3px]">Remember Me</span> 
                        </label>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <Link to="#" className="btn btn-theme-solid mt-[15px]" data-text="Login"><span>Login</span></Link>
                    </div>
                    <p className="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="700">Don't have an account yet? <Link to="/register" className="text-primary font-medium ml-1 inline-block">Register</Link></p>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
