import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import contactImg from '../../assets/img/thumb/contact-thumb.jpg'
import about from '../../assets/img/svg/about.svg'

import Aos from "aos";

export default function Contact() {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Contact Us</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Contact</li>
                </ul>
            </div>
        </div>

        <div className="s-pb-100 s-pt-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex justify-between gap-8">
                    <div className="max-w-[894px] w-full hidden lg:block" data-aos="zoom-in">
                        <img className="w-full" src={contactImg} alt="contct"/>
                    </div>
                    <div className="max-w-[725px] w-full mx-auto lg:mx-0">
                        <div data-aos="fade-up">
                            <img src={about} className="size-16" alt="" />
                            <h3 className="leading-none font-medium mt-3 md:mt-6 text-2xl">Get in Touch</h3>
                            <p className="max-w-[474px] mt-3 md:mt-4 font-medium">We're here to address your inquiries, feedback, and partnership opportunities promptly and effectively. </p>
                        </div>
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                            <div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Full Name</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your full name"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Email</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Enter your email address"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Phone No.</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="number" placeholder="Type your phone number"/>
                                    </div>
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Subject</label>
                                        <select className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-slate-400  focus:border-primary p-4 outline-none duration-300"> 
                                            <option value="1">Payment Problem</option>
                                            <option value="2">Furniture Problem</option>
                                            <option value="2">Agreement Problem</option>
                                            <option value="2">Carrying Problem</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-5 sm:gap-6">
                                    <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Your Message</label>
                                    <textarea className="w-full h-28 md:h-[170px] bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" name="Message" placeholder="Type your message"></textarea>
                                </div>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-solid" data-text="Submit">
                                        <span>Submit</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="s-pb-100" data-aos="fade-up">
        <div className="container-fluid">
            <div className="max-w-[1720px] mx-auto">
                <iframe className="w-full h-[400px] md:h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28951.79709608298!2d91.85394430000001!3d24.898846749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1668006237424!5m2!1sen!2sbd" style={{border:'0'}}></iframe>
            </div>
        </div>
    </div>

    <FooterOne/>

    <ScrollToTop/>
    </>
  )
}
