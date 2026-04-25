import { Link } from "react-router-dom";
import { useEffect } from "react";

import NavbarOne from "../../components/navbar/navbar-one";
import FaqOne from "../../components/faq/faq-one";
import FaqTwo from "../../components/faq/faq-two";
import FaqThree from "../../components/faq/faq-three";
import FaqFour from "../../components/faq/faq-four";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import Aos from "aos";

export default function Faq() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">FAQs</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">FAQS</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid max-w-[1720px]">
                <div className="faq-wrapper grid lg:grid-cols-2 gap-12 2xl:gap-20">
                    <div className="faq-left">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <FaqOne/>
                        </div>

                        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="font-semibold leading-none mb-4 md:mb-6 text-2xl md:text-3xl">Warranty & Support</h3>
                            <FaqTwo/>
                        </div>
                    </div>
                    <div className="faq-right" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="font-semibold leading-none mb-4 md:mb-6 text-2xl md:text-3xl">Order & Payment</h3>
                        <FaqThree/>

                        <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="font-semibold leading-none mb-4 md:mb-6 text-2xl md:text-3xl">Product Return</h3>
                            <FaqFour/>
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
