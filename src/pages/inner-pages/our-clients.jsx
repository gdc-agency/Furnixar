import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import { partnerDataTwo } from "../../data/data";
import Aos from "aos";

export default function OurClients() {
    useEffect(()=>{
        Aos.init()
    })

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap mt-5 md:mt-7 bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Our Clients</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Clients</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-10 md:gap-y-16">
                    {partnerDataTwo.map((item,index)=>{
                        return(
                            <Link to="#" className="flex items-center justify-center" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                                <img src={item.image} alt="" className="block dark:hidden"/>
                                <img src={item.image2} alt="" className="hidden dark:block"/>
                            </Link>
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
