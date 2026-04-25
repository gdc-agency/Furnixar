/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Link } from "react-router-dom";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import bg1 from '../../assets/img/about/about-banner-01.jpg'
import bg2 from '../../assets/img/about/about-banner-02.jpg'
import bg3 from '../../assets/img/about/about-banner-03.jpg'
import bg4 from '../../assets/img/about/video-bg.jpg'
import about from '../../assets/img/svg/about.svg'
import like from '../../assets/img/svg/like.svg'
import hand from '../../assets/img/svg/hand.svg'

import NavbarOne from "../../components/navbar/navbar-one";
import PartnerOne from "../../components/partner-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";


import { featureOne } from "../../data/data";

import Aos from "aos";

export default function About() {

 
    useEffect(()=>{
        Aos.init()
    })

  return (
    <>
        <NavbarOne/>
        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">About Us</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">About</li>
                </ul>
            </div>
        </div>

        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid"  data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                        <div><img className="object-cover w-full" src={bg1} alt="about"/></div>
                    </div>
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                        <div className="lg:max-w-[600px]">
                            <div>
                                <img src={about} alt="" className="size-16"/>
                            </div>
                            <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Our Story Journey</h3>
                            <p className="mt-3 text-base sm:text-lg">At FurnXar, our story is one of passion, craftsmanship, and a relentless pursuit of excellence. It all began with a vision to redefine the way people experience furniture – not just as functional pieces, but as expressions of personal style and comfort. Driven by a love for design and a commitment to quality, we embarked on a journey to create furniture that transcends trends and stands the test of time. Each piece in our collection tells a story of meticulous attention to detail, from the selection of premium materials to the precision of craftsmanship.</p>
                            <p className="mt-3 text-base sm:text-lg">Over the years, our dedication to innovation and customer satisfaction has fueled our growth and earned us a reputation for excellence. From humble beginnings, we've grown into a trusted name in the industry, known for delivering furniture that exceeds expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center"  data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <img src={like} className="mx-auto size-16" alt="" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Why You Choose Us</h3>
                    <p className="mt-3">Choose us for exceptional quality, We prioritize your satisfaction by offering premium products and a seamless shopping experience. </p>
                </div>
                <div className="max-w-sm sm:max-w-[1720px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap" data-aos="fade-up" data-aos-delay="103">
                    {featureOne.map((item,index)=>{
                        return(
                            <div className="p-6 pb-0 rounded-[10px] relative" key={index}>
                                <div className={`w-[1px] h-[120px] absolute right-0 top-[30%] ${index === 4 ? '' : 'hidden 2xl:block border-l border-dashed border-primary'}`}></div>
                                <img src={item.image} alt="" className='size-12' />
                                <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">{item.title}</h5>
                                <p className="mt-2 sm:mt-3">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="container-fluid"  data-aos="fade-up" data-aos-delay="300">
            <div className="bg-overlay before:bg-title before:bg-opacity-20 h-64 sm:h-96 lg:h-[650px] flex items-center justify-center max-w-[1720px] mx-auto" style={{backgroundImage:`url(${bg4})`}}>
                <Link to="#" className="popup-video w-12 sm:w-[70px] h-12 sm:h-[70px] rounded-full bg-white dark:bg-title flex items-center justify-center">
                    <svg className="fill-current text-title dark:text-white" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58357 0.369445C1.15676 -0.497057 0 0.212792 0 1.95367V14.8006C0 16.5432 1.15676 17.2521 2.58357 16.3864L13.1895 9.94678C14.6168 9.07997 14.6168 7.67561 13.1895 6.80901L2.58357 0.369445Z"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="s-py-100" >
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <img src={hand} className="mx-auto size-16" alt="" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Trusted Partner</h3>
                    <p className="mt-3">Count on our trusted partnerships to deliver excellence. Collaborating with industry leaders ensures top-quality products. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <PartnerOne/>
                </div>
            </div>
        </div>
        <FooterOne/>
        <ScrollToTop/>

    </>
  )
}
