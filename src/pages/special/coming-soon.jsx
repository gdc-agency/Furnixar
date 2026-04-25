import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image1 from '../../assets/img/thumb/coming-soon.png'
import image2 from '../../assets/img/shape/coming-soon-shape.png'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import bg from '../../assets/img/bg/coming-soon-bg.jpg'
import bg2 from '../../assets/img/thumb/coming-soon-shape.png'

import Switcher from "../../components/switcher";
import Aos from "aos";

export default function ComingSoon() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "September, 13, 2026";
    const getTime = (deadline) => {
      const time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        Aos.init()
      const interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
    })

  return (
    <>
        <div className="pt-8 sm:pt-12 relative z-10">
            <img className="absolute top-0 left-[5%] -z-10 w-[12%]" src={image1} alt="light" data-aos="fade-up" data-aos-delay="100"/>
            <img className="absolute bottom-0 right-0 w-1/4 -z-10" src={image2} alt="shape" data-aos="fade-up" data-aos-delay="100"/>
            <div className="container">
                <div className="text-center">
                    <Link className="cursor-pointer inline-block" to="/">
                      <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]' data-aos="fade-up" data-aos-delay="100"/> 
                      <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]' data-aos="fade-up" data-aos-delay="100"/>  
                    </Link>
                </div>
                <div className="text-center py-16 sm:py-24 lg:py-[150px]">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none" data-aos="fade-up" data-aos-delay="200">We are Coming Soon</h1>
                    <p className="max-w-[503px] mx-auto mt-3 sm:mt-6 text-base sm:text-lg" data-aos="fade-up" data-aos-delay="300">Our website is under construction.
                    We'll be here soon with our new awesome site.</p>
                    <div className="countdown-clock flex gap-8 md:gap-12 justify-center items-center mt-10 sm:mt-12" data-aos="fade-up" data-aos-delay="400">
                        <div className="countdown-item">
                            <div className="ci-inner font-[300] text-title dark:text-white leading-none text-4xl md:text-5xl">
                                <div className="clock-days ci-value">{days}</div>
                            </div>
                            <p className="text-sm sm:text-lg md:text-xl leading-none mt-[10px]">Days</p>
                        </div>
                        <div className="hidden sm:block">
                            <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.33261" y1="40.0015" x2="24.2798" y2="0.255847" stroke="#BB976D"/>
                            </svg>
                        </div>
                        <div className="countdown-item">
                            <div className="ci-inner font-[300] text-title dark:text-white leading-none text-4xl md:text-5xl">
                                <div className="clock-hours ci-value">{hours}</div>
                            </div>
                            <p className="text-sm sm:text-lg md:text-xl leading-none mt-[10px]">Hours</p>
                        </div>
                        <div className="hidden sm:block">
                            <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.33261" y1="40.0015" x2="24.2798" y2="0.255847" stroke="#BB976D"/>
                            </svg>
                        </div>
                        <div className="countdown-item">
                            <div className="ci-inner font-[300] text-title dark:text-white leading-none text-4xl md:text-5xl">
                                <div className="clock-minutes ci-value">{minutes}</div>
                            </div>
                            <p className="text-sm sm:text-lg md:text-xl leading-none mt-[10px]">Minutes</p>
                        </div>
                        <div className="hidden sm:block">
                            <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.33261" y1="40.0015" x2="24.2798" y2="0.255847" stroke="#BB976D"/>
                            </svg>
                        </div>
                        <div className="countdown-item">
                            <div className="ci-inner font-[300] text-title dark:text-white leading-none text-4xl md:text-5xl">
                                <div className="clock-seconds ci-value">{seconds}</div>
                            </div>
                            <p className="texttext-sm sm:text-lg md:text-xl leading-none mt-[10px]">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="coming-soon-footer py-12 sm:py-20 lg:py-28 bg-overlay relative z-20" style={{backgroundImage:`url(${bg})`}}>
          <img className="absolute bottom-10 right-0 w-[25%] hidden sm:block" src={bg2} alt="shape"/>
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="max-w-md">
                        <h2 className="font-bold leading-none dark:text-white" data-aos="fade-up" data-aos-delay="600">Subscribe to be Notified</h2>
                        <p className="mt-3 md:mt-5 dark:text-white-light" data-aos="fade-up" data-aos-delay="200">Stay updated with our latest news, tips, and exclusive offers! Subscribe to our newsletter and never miss out on what’s new. </p>
                        <div className="mt-4 lg:mt-6 sm:flex" data-aos="fade-up" data-aos-delay="300">
                            <input className="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-primary border-opacity-10 duration-300 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0" type="text" placeholder="Enter your email address"/>
                            <button className="w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-title">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="switcher z-20 w-12 sm:w-[60px] h-12 sm:h-[60px] fixed bottom-[10px] md:bottom-5 left-[10px] md:left-5 rounded-xl flex items-center justify-center cursor-pointer">
            <Switcher/>
        </div>
    </>
  )
}
