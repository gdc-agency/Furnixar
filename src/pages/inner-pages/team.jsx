import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { teamDataTwo } from "../../data/data";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Aos from "aos";

export default function Team() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Team Member</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Team</li>
                </ul>
            </div>
        </div>

        <div className="py-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto grid lg:grid-cols-2 gap-[30px]">
                    {teamDataTwo.map((item,index)=>{
                        return(
                            <div className="group sm:grid sm:grid-cols-2 bg-[#F8F5F0] dark:bg-[#1E2A35]" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                                <div className={item.class1}>
                                    <img className="w-full object-cover h-full" src={item.image} alt="team member"/>
                                </div>
                                <div className={item.class2}>
                                    <div className="sm:max-w-[294px]">
                                        <h4 className="font-semibold leading-none text-xl md:text-2xl duration-300 transition-all group-hover:text-primary"><Link to="#">{item.name}</Link></h4>
                                        <span className="text-title dark:text-white-light leading-none mt-[10px] block">{item.position}</span>
                                        <p className="mt-[15px]">{item.desc}</p>
                                        <div className="flex items-center gap-5 md:gap-6 mt-[15px]">
                                            <Link to="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 text-paragraph dark:text-white">
                                                <FaFacebookF/>
                                            </Link>
                                            <Link to="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 text-paragraph dark:text-white">
                                                <FaTwitter/>
                                            </Link>
                                            <Link to="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 text-paragraph dark:text-white">
                                                <FaInstagram/>
                                            </Link>
                                            <Link to="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 text-paragraph dark:text-white">
                                                <FaLinkedinIn/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
