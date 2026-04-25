import { Link } from "react-router-dom";
import { useEffect } from "react";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import Aos from "aos";

export default function TermsAndConditions() {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Terms & Conditions</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Terms & Conditions</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[940px] mx-auto">
                    <article className="prose prose-h3:!text-3xl prose-h4:!text-2xl sm:prose-lg dark:prose-p:text-white-light dark:prose-li:text-white-light max-w-full prose-li:list-none prose-li:before:relative prose-li:before:content-[url('../img/icon/check.svg')] prose-ol:!pl-0 sm:prose-ol:!pl-0 prose-ul:pl-0 sm:prose-ul:pl-0 prose-li:flex prose-li:items-start prose-li:gap-2">
                        <h3>For Shipping</h3>
                        <p>We strive to ensure timely delivery of your orders. Shipping times may vary based on your location and the selected delivery option. Please review our shipping policies for details on processing times, charges, and tracking updates. Contact us for any shipping-related inquiries or assistance." </p>
                        <h3>For Return</h3>
                        <p>We offer a hassle-free process to ensure your satisfaction. Please review our return policy for eligibility and steps to initiate a return. we offer a hassle-free process to ensure your satisfaction. Please review our return policy for eligibility and steps to initiate a return. </p>
                        <h3>Payment</h3>
                        <p>We offer secure and flexible options to suit your needs. Choose from multiple methods, including credit cards, debit cards, and online payment gateways. All transactions are encrypted to ensure your information remains safe. For any payment-related concerns, our support team is here to assist. </p>
                        <h3>Warranty & Support Services</h3>
                        <p>We provide comprehensive warranty and support services to ensure your satisfaction and peace of mind. Our warranty covers eligible products against defects, ensuring quality and reliability. Additionally, our dedicated support team is available to assist you with any inquiries or technical issues. Whether you need guidance or a solution, we are here to help every step of the way. </p>
                        <ul>
                            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.</li>
                            <li>Nibh purus integer elementum in tellus vulputate habitasse</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li>Generators on the Internet tend to repeat predefined good quality furniture.</li>
                        </ul>
                        <h3>Order cancellation</h3>
                        <p>Our warranty covers eligible products against defects, ensuring quality and reliability. Additionally, our dedicated support team is available to assist you with any inquiries or technical issues. Whether you need guidance or a solution, we are here to help every step of the way.</p>
                        <ol>
                            <li>Nibh purus integer elementum in tellus vulputate habitasse</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            <li>Generators on the Internet tend to repeat predefined good quality furniture.</li>
                        </ol>    
                    </article>
                </div>
            </div>
        </div>
        <FooterOne/>
        <ScrollToTop/>
    </>
  )
}
