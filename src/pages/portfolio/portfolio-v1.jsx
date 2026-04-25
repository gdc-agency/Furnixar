import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { portfolioOne } from "../../data/portfolio-data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { LuExpand } from "react-icons/lu";
import Aos from "aos";

export default function PortfolioV1() {
    useEffect(()=>{
        Aos.init()
    })

    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }

  return (
    <>
        <NavbarOne/>   

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Portfolio</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Portfolio</li>
                </ul>
            </div>
        </div>

        <div className="py-16 overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-v1-slider">
                <TinySlider settings={settings}> 
                    {portfolioOne.map((item,index)=>{
                        return(
                            <div>
                                <Link to={`/portfolio-details-v1/${item.id}`} className="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-100 before:duration-300 group overflow-hidden block" key={index}>
                                    <img className="w-full object-cover" src={item.image} alt="Portfolio"/>
                                    <div className="absolute left-7 bottom-7 z-10 duration-300">
                                        <span className="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">
                                            {item.tag}
                                        </span>
                                        <span className="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <LuExpand className="text-white size-10"/>
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                </TinySlider>
            </div>
            <div className="flex justify-between">
                <button className="icon prtflo01_prev w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:bg-primary hover:text-white p-2 absolute top-1/2 transform -translate-y-1/2 left-0 z-50">
                    <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.180223 7.38726L5.62434 12.8314C5.8199 13.0598 6.16359 13.0864 6.39195 12.8908C6.62031 12.6952 6.64693 12.3515 6.45132 12.1232C6.43307 12.1019 6.41324 12.082 6.39195 12.0638L1.87877 7.54516L23.4322 7.54516C23.7328 7.54516 23.9766 7.30141 23.9766 7.00072C23.9766 6.70003 23.7328 6.45632 23.4322 6.45632L1.87877 6.45632L6.39195 1.94314C6.62031 1.74758 6.64693 1.40389 6.45132 1.17553C6.25571 0.947171 5.91207 0.920551 5.68371 1.11616C5.66242 1.13441 5.64254 1.15424 5.62434 1.17553L0.180175 6.6197C-0.0308748 6.83196 -0.0308748 7.1749 0.180223 7.38726Z"/>
                    </svg>
                </button>
                <button className="icon prtflo01_next w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:bg-primary hover:text-white p-2 absolute top-1/2 transform -translate-y-1/2 right-0 z-50">
                    <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.8198 6.61958L18.3757 1.17541C18.1801 0.947054 17.8364 0.920433 17.608 1.11604C17.3797 1.31161 17.3531 1.65529 17.5487 1.88366C17.5669 1.90494 17.5868 1.92483 17.608 1.94303L22.1212 6.46168L0.567835 6.46168C0.267191 6.46168 0.0234375 6.70543 0.0234375 7.00612C0.0234375 7.30681 0.267191 7.55052 0.567835 7.55052L22.1212 7.55052L17.608 12.0637C17.3797 12.2593 17.3531 12.6029 17.5487 12.8313C17.7443 13.0597 18.0879 13.0863 18.3163 12.8907C18.3376 12.8724 18.3575 12.8526 18.3757 12.8313L23.8198 7.38714C24.0309 7.17488 24.0309 6.83194 23.8198 6.61958Z"/>
                    </svg>
                </button>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
