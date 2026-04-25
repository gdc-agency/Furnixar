import { Link } from 'react-router-dom'

import bg from '../../assets/img/bg/footer.jpg'

import logoLight from '../../assets/img/svg/logo-light.svg'

import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../data/nav-data'
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function FooterOne() {
  return (
        <div className="relative bg-overlay before:bg-title before:bg-opacity-95" style={{backgroundImage:`url(${bg})`}}>
            <div className="s-pt-100">
                <div className="container-fluid">
                    <div className="max-w-lg lg:max-w-[1052px] mx-auto flex items-end justify-between gap-3 lg:gap-8 flex-col lg:flex-row s-pb-100">
                        <div className="md:max-w-[473px] w-full">
                            <h2 className="font-bold leading-none text-white">Newsletter</h2>
                            <p className="mt-2 sm:mt-4 text-white-light">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions delivered straight to your inbox. </p>
                        </div>
                        <div className="mt-4 lg:mt-6 sm:flex md:max-w-[478px] w-full">
                            <input className="w-full h-12 md:h-14 bg-white bg-opacity-[0.03] border border-white text-white placeholder:text-white-light border-opacity-30 focus:border-primary p-4 outline-none sm:flex-1 sm:border-r-0 duration-300" type="text" placeholder="Enter your email address"/>
                            <button className="w-full h-12 bg-primary text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none">Subscribe</button>
                        </div>
                    </div>

                    <div className="max-w-[1722px] mx-auto flex items-start justify-between gap-10 s-pb-100 flex-wrap lg:flex-nowrap footer-wrapper">

                        <div className="lg:max-w-[366px] sm:w-[45%] lg:w-full flex items-start justify-between gap-10 footer-inner-wrapper">
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Sitemap</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink1.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Others</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink2.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:max-w-[522px] w-full sm:text-center -order-1 lg:order-none">
                            <img className="sm:mx-auto w-[201px] " src={logoLight} alt="logo"/>
                            <p className="mt-4 text-white-light max-w-[522px] sm:mx-auto">Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store for your furniture or home decor business. </p>
                            <div className="flex items-center sm:justify-center gap-4 mt-6">
                                <Link to="#" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaFacebookF className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaTwitter className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaInstagram className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaLinkedin className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:max-w-[460px] sm:w-[45%] lg:w-full flex items-start justify-between gap-10 footer-inner-wrapper">
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Shop</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink3.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Customer Service</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink4.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1722px] mx-auto border-t border-white border-opacity-10 py-5 md:py-7 text-center">
                        <p className="text-white-light inline-flex align-middle">© {new Date().getFullYear()} Furnixar Develop with <FaHeart className="fa-solid fa-heart mx-1 text-red-500"></FaHeart>By  
                        <a href="https://globaldigitalcare.pk"> Global Digital Care</a> </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
