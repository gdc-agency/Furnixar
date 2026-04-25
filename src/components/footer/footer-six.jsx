import { Link } from 'react-router-dom'

import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../data/nav-data'

export default function FooterSix() {
  return (
    <div className="s-pt-100 2xl:pb-[100px]">
        <div className="container max-w-1366 mx-auto">
            <div className="flex flex-col 2xl:flex-row items-start justify-between gap-10">
                <div className="max-w-[360px] 2xl:max-w-[198px] w-full text-left sm:text-center 2xl:text-left sm:mx-auto 2xl:mx-0">
                    <Link to="#">
                      <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                      <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/> 
                    </Link>
                    <p className="mt-[15px] hidden 2xl:block ">© {new Date().getFullYear()} Furnixar Develop   By <Link to="https://shreethemes.in/" target="_blank" className='ms-1'>Shreethemes</Link></p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 2xl:max-w-[1050px] w-full lg:flex items-start justify-between gap-10">
                    <div className="lg:w-[300px] sm:order-7 2xl:order-none col-span-2 md:col-span-1">
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Subscribe Newsletter</h4>
                        <div className="flex flex-col gap-[10px] sm:items-start">
                            <input className="bg-white dark:bg-dark-secondary w-full h-12 md:h-14 p-4 outline-none dark:text-white placeholder:text-title dark:placeholder:text-white" type="text" placeholder="Enter your email address"/>
                            <button className="btn btn-solid" data-text="Subscribe"><span>Subscribe</span></button>
                        </div>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Sitemap</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                          {footerLink1.map((item,index)=>{
                            return(
                              <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                            )
                          })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Others</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                          {footerLink2.map((item,index)=>{
                            return(
                              <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                            )
                          })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Shop</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                          {footerLink3.map((item,index)=>{
                            return(
                              <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                            )
                          })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="leading-none mb-5 md:mb-6 text-xl">Customer Service</h4>
                        <ul className="text-title dark:text-white leading-none flex flex-col gap-4">
                          {footerLink4.map((item,index)=>{
                            return(
                              <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                            )
                          })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex 2xl:hidden py-5 text-center mt-14">
                <p>© {new Date().getFullYear()} Furnixar Develop  By <a href="https://www.globaldigitalcare.pk/" target="_blank" rel="noopener noreferrer">
      Global Digital Care
    </a>.</p>
            </div>
        </div>
    </div>
  )
}
