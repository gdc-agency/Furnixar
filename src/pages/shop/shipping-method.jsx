import { Link } from "react-router-dom";
import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import about from '../../assets/img/svg/about.svg'
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import { useEffect } from "react";
import Aos from "aos";

export default function ShippingMethod() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Method of Shipping</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Shipping Method</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container">
                <div className="max-w-[940px] mx-auto">
                    <div className="max-w-xl mb-8 md:mb-12">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <img src={about} alt="" className="size-16"/>
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl" data-aos="fade-up" data-aos-delay="200">Delivery Option</h3>
                        <p className="mt-3" data-aos="fade-up" data-aos-delay="300">Delivery Option: Choose your preferred delivery option for seamless convenience. Get your items delivered on your terms, hassle-free. </p>
                    </div>
                    <div className="overflow-x-auto border-b border-dashed border-primary pb-6 md:pb-10" data-aos="fade-up" data-aos-delay="600">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#ECF2F5] dark:bg-dark-secondary
                                text-base sm:text-lg font-medium text-title dark:text-white leading-none text-left">
                                    <th className="p-4 sm:p-5 whitespace-nowrap">Delivery Option</th>
                                    <th className="p-4 sm:p-5 whitespace-nowrap">Time</th>
                                    <th className="p-4 sm:p-5 whitespace-nowrap">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td className="p-4 sm:p-5 whitespace-nowrap">Standard Delivery</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">2 Days</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">$5</td>
                                </tr>
                                <tr className="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td className="p-4 sm:p-5 whitespace-nowrap">Quick Delivery</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">1 Days</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">$7.5</td>
                                </tr>
                                <tr className="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td className="p-4 sm:p-5 whitespace-nowrap">Regular Working Day</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">3 Days</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">FREE</td>
                                </tr>
                                <tr className="text-base sm:text-lg text-title dark:text-white leading-none text-left">
                                    <td className="p-4 sm:p-5 whitespace-nowrap">Super Fast Delivery</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">12 Hour</td>
                                    <td className="p-4 sm:p-5 whitespace-nowrap">$10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl">Shipping Rule</h3>
                        <p className="text-base sm:text-lg mt-3 md:mt-4">Shipping Rule: Discover our transparent shipping rules, ensuring clarity and peace of mind. We prioritize efficient delivery, ensuring your items arrive safely and on time. With clear guidelines in place, you can shop confidently knowing your orders are handled with care. </p>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
