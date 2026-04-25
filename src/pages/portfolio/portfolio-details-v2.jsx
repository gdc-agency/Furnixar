/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import image2 from '../../assets/img/gallery/portfolio-03/portfolio-02.jpg'
import image3 from '../../assets/img/gallery/portfolio-03/portfolio-03.jpg'
import image4 from '../../assets/img/gallery/portfolio-03/portfolio-04.jpg'

import { portfolioTwo } from "../../data/portfolio-data";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


import NavbarOne from "../../components/navbar/navbar-one";
import RelatedProject from "../../components/related-project";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function PortfolioDetailsV2() {

    const params = useParams()
    const id = params.id

    const data = portfolioTwo.find(item => item.id === parseInt(id))

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
        gutter:0,
        items:1
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
                    <li>Portfolio</li>
                    <li>/</li>
                    <li className="text-primary">{data?.name ? data?.name : 'Classic Interior Set'}</li>
                </ul>
            </div>
        </div> 

        <div className="portfolio-single s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="relative">
                        <div  className="portfolio-v3-slider" >
                            <TinySlider settings={settings}> 
                                <Link className="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="#">
                                    <img className="w-full" src={image2} alt="Portfolio"/>
                                </Link>
                                <Link className="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="#">
                                    <img className="w-full" src={image3} alt="Portfolio"/>
                                </Link>
                                <Link className="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="#">
                                    <img className="w-full" src={image4} alt="Portfolio"/>
                                </Link>
                            </TinySlider>
                        </div>
                        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-20 w-full">
                            <button className="prtflo03_prev w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:text-white hover:bg-primary p-2">
                                <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.180223 7.38726L5.62434 12.8314C5.8199 13.0598 6.16359 13.0864 6.39195 12.8908C6.62031 12.6952 6.64693 12.3515 6.45132 12.1232C6.43307 12.1019 6.41324 12.082 6.39195 12.0638L1.87877 7.54516L23.4322 7.54516C23.7328 7.54516 23.9766 7.30141 23.9766 7.00072C23.9766 6.70003 23.7328 6.45632 23.4322 6.45632L1.87877 6.45632L6.39195 1.94314C6.62031 1.74758 6.64693 1.40389 6.45132 1.17553C6.25571 0.947171 5.91207 0.920551 5.68371 1.11616C5.66242 1.13441 5.64254 1.15424 5.62434 1.17553L0.180175 6.6197C-0.0308748 6.83196 -0.0308748 7.1749 0.180223 7.38726Z"/>
                                </svg>
                            </button>
                            <button className="prtflo03_next w-9 h-9 md:w-14 md:h-14 flex items-center justify-center text-title duration-300 bg-white hover:text-white hover:bg-primary p-2">
                                <svg className="fill-current" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.8198 6.61958L18.3757 1.17541C18.1801 0.947054 17.8364 0.920433 17.608 1.11604C17.3797 1.31161 17.3531 1.65529 17.5487 1.88366C17.5669 1.90494 17.5868 1.92483 17.608 1.94303L22.1212 6.46168L0.567835 6.46168C0.267191 6.46168 0.0234375 6.70543 0.0234375 7.00612C0.0234375 7.30681 0.267191 7.55052 0.567835 7.55052L22.1212 7.55052L17.608 12.0637C17.3797 12.2593 17.3531 12.6029 17.5487 12.8313C17.7443 13.0597 18.0879 13.0863 18.3163 12.8907C18.3376 12.8724 18.3575 12.8526 18.3757 12.8313L23.8198 7.38714C24.0309 7.17488 24.0309 6.83194 23.8198 6.61958Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="max-w-[680px] mx-auto w-full block mt-[40px]">
                    <div className="div">
                        <div>
                            <span className="inline-block text-title font-medium text-[15px] leading-none p-[10px] rounded-md bg-primary-midum">{data?.tag ? data?.tag : 'Classic Interior'}</span>
                            <h2 className="font-semibold leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                {data?.name ? data?.name : 'Classic Interior Set'}
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur vulputate posuere habitant vel tempor varius.
                            </p>
                        </div>

                        <div className="bg-[#FAFAFA] dark:bg-dark-secondary p-8 mt-[30px] block">
                            <table className="meta-table block">
                                <tbody className="w-full block">
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th className="text-[18px] sm:text-[20px] font-medium">Client</th>
                                        <td className='text-base sm:text-lg'>Wordpress</td>
                                    </tr>
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th>Designer</th>
                                        <td>John Smith Doe</td>
                                    </tr>
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th>Material</th>
                                        <td>Wood, Steel, Paper, Fiber</td>
                                    </tr>
                                    <tr className="py-4">
                                        <th>Website</th>
                                        <td>demosite.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 

                        <div className="mt-5 sm:mt-7 lg:mt-10">
                            <div className="flex items-center justify-start gap-6">
                                <h6 className="font-normal">Share : </h6>
                                <div className="flex items-center gap-6">
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaFacebookF/>
                                    </Link>
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaTwitter/>
                                    </Link>
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaInstagram/>
                                    </Link>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-100 bg-primary-light dark:bg-dark-secondary">
            <RelatedProject/>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
