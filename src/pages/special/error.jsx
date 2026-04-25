import { Link } from "react-router-dom";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import error from '../../assets/img/thumb/error.png'

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import { useEffect } from "react";
import Aos from "aos";

export default function Error() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Error Page</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Error</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100 overflow-hidden">
            <div className="container">
                <div className="flex items-center justify-center gap-5">
                    <h2 className="text-6xl sm:text-[100px] md:text-[150px] font-semibold leading-none" data-aos="fade-right">4</h2>
                    <img className="w-36 sm:w-44 md:w-auto" src={error} alt="error" data-aos="zoom-in"/>
                    <h2 className="text-6xl sm:text-[100px] md:text-[150px] font-semibold leading-none" data-aos="fade-left">4</h2>
                </div>
                <div className="max-w-[603px] mx-auto text-center mt-8 md:mt-12">
                    <h2 data-aos="fade-up">Oops Sorry ! Page not found</h2>
                    <p className="mt-4 md:mt-6" data-aos="fade-up">Sorry for the inconvenience. Go to our homepage or check out our for Fashion, Chair, Decoration...</p>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Link className="btn btn-outline mt-4 md:mt-6" to="/" data-text="Go Back To Home">
                            <span>Go Back To Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
