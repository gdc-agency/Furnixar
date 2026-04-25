import { useEffect } from "react";
import { Link } from "react-router-dom";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import about from '../../assets/img/svg/about.svg'
import payment1 from '../../assets/img/Payment/payment-01.png'
import payment2 from '../../assets/img/Payment/payment-02.png'
import payment3 from '../../assets/img/Payment/payment-03.png'
import payment4 from '../../assets/img/Payment/payment-04.png'
import payment04 from '../../assets/img/Payment/payment-04-2.png'
import payment5 from '../../assets/img/Payment/payment-05.png'
import payment6 from '../../assets/img/Payment/payment-06.png'

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function PaymentMethod() {

    useEffect(()=>{
        Aos.init()
    })

  return (
    <>
        <NavbarOne/>
        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Payment Method</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Payment Method</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container">
                <div className="max-w-[940px] mx-auto">
                    <div className="max-w-xl mb-6">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <img src={about} alt=""  className="size-16"/>
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl" data-aos="fade-up" data-aos-delay="200">For Payment We Accept</h3>
                        <p className="mt-3" data-aos="fade-up" data-aos-delay="300">Choose from a variety of secure payment options. Enjoy convenience and peace of mind with our trusted payment methods.</p>
                    </div>
                    <div className="border-b border-dashed border-primary pb-8 md:pb-12">
                        <ul className="flex gap-x-7 gap-y-5 flex-wrap items-center">
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="400">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Visa</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Masted Card</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Paypal</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="700">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Cash on Delivery</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="800">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Skrill</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="900">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Payoneer</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="1000">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21793 12.11L4.07367 11.8643C2.99163 10.0208 0.11345 6.10463 0.0844199 6.06529L0 5.95055L1.08283 4.88088L4.18138 7.04452C6.1234 4.53469 7.93253 2.80738 9.11602 1.7951C10.4234 0.676756 11.2512 0.176333 11.2857 0.155574L11.3248 0.13208H13.2327L12.9096 0.419839C8.82955 4.05384 4.40317 11.7848 4.35892 11.8624L4.21793 12.11Z" fill="#BB976D"/>
                                </svg>
                                <span className="text-title dark:text-white leading-none">Debit / Credit Card</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-12">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl" data-aos="fade-up" data-aos-delay="1100">Payment</h3>
                        <p className="text-base sm:text-lg mt-3 md:mt-4" data-aos="fade-up" data-aos-delay="1200">Seamless transactions await with our secure payment gateway. Choose from a range of trusted payment options for your convenience. Your financial information is safeguarded with the latest encryption technology. Experience hassle-free checkout and peace of mind when you shop with us. </p>
                        <div className="flex items-center gap-x-7 md:gap-x-12 gap-y-5 flex-wrap mt-5 md:mt-6" data-aos="fade-up" data-aos-delay="100">
                            <Link to="#"><img src={payment1} alt="Payment"/></Link>
                            <Link to="#"><img src={payment2} alt="Payment"/></Link>
                            <Link to="#"><img src={payment3} alt="Payment"/></Link>
                            <Link to="#">
                                <img className="dark:hidden" src={payment4} alt="Payment"/>
                                <img className="hidden dark:block" src={payment04} alt="Payment"/>
                            </Link>
                            <Link to="#"><img src={payment5} alt="Payment"/></Link>
                            <Link to="#"><img src={payment6} alt="Payment"/></Link>
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
