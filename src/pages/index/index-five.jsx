import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import SliderThree from "../../components/banner-slider/slider-three";
import BlogFive from "../../components/blog/blog-five";
import NewsOne from "../../components/news-letter/news-one";
import PartnerTwo from "../../components/partner-two";
import FooterFive from "../../components/footer/footer-five";
import ScrollToTop from "../../components/scroll-to-top";

import bed from '../../assets/img/svg/bed.svg'
import comment from '../../assets/img/svg/comment-2.svg'

import { featureOne, productList } from "../../data/data";
import { feature } from "../../data/index-five";

import { FaHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { LuEye, LuHeart } from "react-icons/lu";
import { RiShoppingBag2Line } from "react-icons/ri";

import Aos from "aos";

export default function IndexFive() {

  const [open, setOpen] = useState(false)

  useEffect(()=>{
      Aos.init()
  })

  return (
    <>
      <NavbarOne/> 

      <div className="bg-primary-light dark:bg-dark-secondary relative overflow-hidden">
        <div className={`absolute min-h-full left-0 top-0 w-[300px] xl:w-96 h-full bg-[#DBCBBD] dark:bg-primary home-v5-ctagory pt-[30px] xl:pt-16 xl:pl-24 2xl:pb-7 z-10 transform translate-x-[-300px] xl:translate-x-0 duration-300  ${open ? 'active' : ''}`}>
            <button onClick={()=>setOpen(!open)} className="ctgry-slider-btn flex items-center gap-2 text-base font-medium text-title dark:text-white bg-primary py-[10px] px-5 absolute left-full top-5 xl:opacity-0">
                Category 
                <svg className="fill-current text-title dark:text-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.28754 10.875C0.104206 10.6917 0.01254 10.4583 0.01254 10.175C0.01254 9.89167 0.104206 9.65833 0.28754 9.475L4.16254 5.575L0.28754 1.675C0.104206 1.49167 0.00853994 1.26233 0.000539938 0.987C-0.00812673 0.712333 0.0875396 0.475 0.28754 0.275C0.470873 0.0916663 0.704207 0 0.98754 0C1.27087 0 1.50421 0.0916663 1.68754 0.275L6.28754 4.875C6.38754 4.975 6.45854 5.08333 6.50054 5.2C6.54187 5.31667 6.56254 5.44167 6.56254 5.575C6.56254 5.70833 6.54187 5.83333 6.50054 5.95C6.45854 6.06667 6.38754 6.175 6.28754 6.275L1.68754 10.875C1.50421 11.0583 1.27487 11.154 0.99954 11.162C0.724873 11.1707 0.48754 11.075 0.28754 10.875ZM6.88754 10.875C6.70421 10.6917 6.61254 10.4583 6.61254 10.175C6.61254 9.89167 6.70421 9.65833 6.88754 9.475L10.7625 5.575L6.88754 1.675C6.70421 1.49167 6.60821 1.26233 6.59954 0.987C6.59154 0.712333 6.68754 0.475 6.88754 0.275C7.07087 0.0916663 7.30421 0 7.58754 0C7.87087 0 8.10421 0.0916663 8.28754 0.275L12.8875 4.875C12.9875 4.975 13.0582 5.08333 13.0995 5.2C13.1415 5.31667 13.1625 5.44167 13.1625 5.575C13.1625 5.70833 13.1415 5.83333 13.0995 5.95C13.0582 6.06667 12.9875 6.175 12.8875 6.275L8.28754 10.875C8.10421 11.0583 7.87521 11.154 7.60054 11.162C7.32521 11.1707 7.08754 11.075 6.88754 10.875Z"/>
                </svg>                    
            </button>
            <h3 className="font-semibold leading-none mb-6 pl-5 xl:pl-0 text-title dark:white">Product Category</h3>
            <ul className={`divide-y divide-[#C5B7AA] dark:divide-bdr-clr-light sm:text-lg leading-none sm:leading-none text-title dark:text-white pb-5`}>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Chair</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Table</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Sofa Set</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Vases</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Lamp & Light</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Almirah</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Dressing table</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Watch</Link></li>
                <li className="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 text-title dark:text-white"><Link to="/product-category">Mirror</Link></li> 
            </ul>
        </div>
        <div className="container-fluid">
            <SliderThree/>
        </div>
      </div>

      <div className="s-py-100-50">
          <div className="container">
              <div className="grid sm:grid-cols-2 lg:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap max-w-1366 mx-auto" data-aos="fade-up" data-aos-delay="100">
                {featureOne.slice(0,4).map((item,index)=>{
                  return(
                      <div className="p-6 pb-0 rounded-[10px] relative" key={index}>
                          <div className={`w-[1px] h-[120px] absolute right-0 top-[30%] ${index === 3 ? '' : 'hidden 2xl:block border-l border-dashed border-primary'}`}></div>
                          <img src={item.image} alt="" className='size-12' />
                          <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">{item.title}</h5>
                          <p className="mt-2 sm:mt-3">{item.desc}</p>
                      </div>
                  )
                })}
              </div>
          </div>
      </div>

      <div className="s-py-50" >
          <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
              <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
                {feature.map((item,index)=>{
                  return(
                    <Link to="/product-category" className="relative group overflow-hidden" key={index}>
                        <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="product"/>
                        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-12 w-full left-0 px-7 flex justify-center">
                            <div className=" bg-white bg-opacity-80 dark:bg-title dark:bg-opacity-80 p-5 z-10">
                                <h4 className="font-semibold leading-[1.5]">{item.name}</h4>
                                <p className="leading-none mt-[10px]">{item.product}</p>
                            </div>
                        </div>
                    </Link>
                  )
                })}
              </div>
          </div>
      </div>

      <div className="s-py-50">
        <div className="container-fluid">
            <div className="max-w-[1720px] mx-auto">
                <div className="max-w-[547px] mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <img src={bed} alt=""  className="mx-auto size-16"/>                  
                    <h2 className="mt-[15px] leading-none">Latest Products</h2>
                    <p className="mt-[10px] md:mt-[15px]">Be the first to experience innovation with our latest arrivals. Stay ahead of the curve and discover what's new in style, technology, and more. </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-[30px]" data-aos="fade-up" data-aos-delay="300">
                  {productList.slice(0,10).map((item,index)=>{
                    return(
                      <div className="relative group z-[5] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:opacity-0 before:duration-300 before:z-[5] overflow-hidden hover:before:opacity-80" key={index}>
                          <img className="w-full transform duration-300 group-hover:scale-110" src={item.image} alt="product-card"/>
                          <div className="absolute z-10 top-0 left-0 w-full h-full items-start justify-end flex flex-col p-7">
                              <div>
                                  <h4 className="font-normal leading-none text-white transition-all group-hover:duration-100 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{item.price}</h4>
                                  <h6 className="font-normal mt-1 text-white transition-all group-hover:duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 leading-[1.5]"><Link to="/product-details">{item.name}</Link></h6>

                                  <ul className="flex items-center gap-2 mt-1 transition-all group-hover:duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                      <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                      <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                      <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                      <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                      <li><GoStarFill className='text-slate-300 size-4'/></li>
                                      <li className="text-gray-100">( 123 )</li>
                                  </ul> 
                              </div>  
                          </div>
                          <div className="flex flex-col gap-[10px] absolute z-20 top-5 right-5">
                              <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-300 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon-2">
                                  <LuEye className="size-6 transition-all duration-300 text-white"/> 
                                  <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick View
                                      <span className="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                  </span>
                              </button>
                              
                              <Link to="/cart" className="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-ce
                              nter justify-center transition-all duration-500 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-60 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                <RiShoppingBag2Line className="size-6 transition-all duration-300 text-white"/>
                                  <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                      <span className="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                  </span>
                              </Link>

                              <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-700 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 faveIcon transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                <LuHeart className="size-6 transition-all duration-300 text-white"/>
                                  <span className="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                      <span className="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                  </span>
                              </button>
                          </div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-center mt-7 md:mt-12" data-aos="fade-up" data-aos-delay="100">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="See all Products">
                        <span>See all Products</span>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      <div className="s-py-50 overflow-hidden">
        <div className="container-fluid mb-28" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-[547px] mx-auto mb-8 sm:mb-[70px] text-center">
              <img src={comment} className="mx-auto size-16" alt="" /> 
                <h2 className="mt-[15px] leading-none">From the Blog</h2>
                <p className="mt-[10px] md:mt-[15px]">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love. </p>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <BlogFive/>
        </div>
      </div>

    <div className="s-py-50-100" data-aos="fade-up" data-aos-delay="100">
      <NewsOne/>
    </div>
    <div className="bg-title dark:bg-dark-secondary">
        <div className="container-fluid max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className=" py-[50px] border-b border-[#3A454F]">
                <div className="md:px-20 relative max-w-1366 mx-auto">
                    <PartnerTwo/>
                    <div className="md:absolute md:top-2/4 md:left-0 transform md:-translate-y-2/4 mt-8 md:mt-0 w-full">
                        <div className="flex gap-2 md:gap-4 justify-center md:justify-between">
                            <button className="icon ptnrSlider02_prev w-9 h-9 border border-white flex items-center justify-center text-white">
                                <span className="lnr lnr-arrow-left"></span>
                            </button>
                            <button className="icon ptnrSlider02_next w-9 h-9 border border-white flex items-center justify-center text-white">
                                <span className="lnr lnr-arrow-right"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           <FooterFive/>
            <div className="py-5 md:py-[30px] text-center">
                <p className="text-white leadint-none inline-flex">© {new Date().getFullYear()} Furnixar Develop with <FaHeart className="fa-solid fa-heart mx-1 text-red-500"></FaHeart>  By <Link to="https://shreethemes.in/" target="_blank" className='ms-1'>Shreethemes</Link></p>
            </div>
        </div>
    </div>
    <ScrollToTop/>
    </>
  )
}
