import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { Link } from "react-router-dom";
import about from '../../assets/img/svg/about.svg'
import { useEffect, useState } from "react";
import { partnerData, pricingData } from "../../data/data";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import Aos from "aos";


export default function Pricing() {

    const [price, setprice] = useState(true)

    const onInputChange = () =>{
        setprice(!price)
    }
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Pricing</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Pricing</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container">
                <div className="max-w-xl mx-auto mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <img src={about} className="w-16 mx-auto" alt="" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Choose Price Plan</h3>
                    <p className="mt-3">Discover the ideal plan to suit your budget and requirements. Choose flexibility and affordability with our tailored pricing options.</p>
                </div>
                <div className="mb-8 flex items-center justify-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="switch-wrapper p-[5px] bg-[#F7F7F7] dark:bg-dark-card-bg border border-title/10 dark:border-white/10 rounded-[70px] mx-auto relative inline-flex">
                        <input id="monthly" type="radio" name="switch" onChange={()=>onInputChange()}/>
                        <input id="yearly" type="radio" name="switch" onChange={()=>onInputChange()}/>
                        <label htmlFor="monthly">Monthly</label>
                        <label htmlFor="yearly">Yearly</label>
                        <span className="highlighter"></span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px] max-w-[1342px] mx-auto" data-aos="fade-up" data-aos-delay="400">
                    {pricingData.map((item,index)=>{
                        return(
                            <div className="w-full sm:w-[47%] lg:w-auto flex flex-col justify-between bg-primary bg-opacity-10 px-7 md:px-10 py-8 md:py-12 group" key={index}>
                                <div>
                                    <h4 className="font-normal leading-none">{item.title}</h4>
                                    <span className="block text-title dark:text-white text-4xl md:text-5xl font-bold leading-none mt-4 md:mt-6 duration-300 price">{price ? item.month : item.year}</span>
                                    <ul className="mt-4 md:mt-6 flex flex-col gap-[15px]">
                                        {item.feature.map((el,index)=>{
                                            return(
                                                <li className="flex items-center gap-[10px] text-title dark:text-white-light" key={index}>
                                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.80386 12.9623L4.6596 12.7166C3.57757 10.8731 0.699387 6.95693 0.670357 6.91758L0.585938 6.80285L1.66876 5.73317L4.76732 7.89681C6.70934 5.38699 8.51847 3.65968 9.70196 2.6474C11.0094 1.52905 11.8372 1.02863 11.8716 1.00787L11.9107 0.984375H13.8186L13.4955 1.27213C9.41548 4.90614 4.98911 12.6371 4.94486 12.7147L4.80386 12.9623Z" fill="#BB976D"/>
                                                    </svg>
                                                    {el}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="mt-4 md:mt-6">
                                    <Link className="btn btn-theme-outline duration-300 group-hover:border-primary" to="#" data-text="Subscribe">
                                        <span className="duration-300 group-hover:text-primary">Subscribe</span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className="bg-[#FFF7F0] dark:bg-primary dark:bg-opacity-10 py-12">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="flex flex-wrap items-center justify-evenly gap-y-8 gap-x-5">
                    {partnerData.slice(0,5).map((item,index)=>{
                        return(
                            <Link to="#" key={index}>
                                <img src={item.image} className="block dark:hidden" alt="" />
                                <img src={item.image2} className="hidden dark:block" alt="" />
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
