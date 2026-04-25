/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import AOS from 'aos';
import product1 from '../../assets/img/gallery/product-detls/product-01.jpg'
import product2 from '../../assets/img/gallery/product-detls/product-02.jpg'
import product3 from '../../assets/img/gallery/product-detls/product-03.jpg'
import product4 from '../../assets/img/gallery/product-detls/product-04.jpg'

import IncreDre from '../../components/incre-dre';
import NavbarOne from '../../components/navbar/navbar-one';
import FooterOne from '../../components/footer/footer-one';
import DetailTab from '../../components/product/detail-tab';
import LayoutOne from '../../components/product/layout-one';
import ScrollToTop from '../../components/scroll-to-top';

import { productList, productTag } from '../../data/data';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ProductDetails() {
    const [activeImage, setActiveImage] = useState(1)

    useEffect(()=>{
        AOS.init()
    },[])

    const params = useParams()
    const id = params.id
    
    const data = productList.find((item) => item.id === parseInt(id))
  return (
    <>
        <NavbarOne/>
        <div className="bg-[#F8F5F0] dark:bg-dark-secondary py-5 md:py-[30px]">
            <div className="container-fluid">
                <ul className="flex items-center gap-[10px] text-base md:text-lg leading-none font-normal text-title dark:text-white max-w-[1720px] mx-auto flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li><Link to="/shop-v1">Shop</Link></li>
                    <li>/</li>
                    <li className="text-primary">{data?.name ? data?.name : 'Classic Relaxable Chair'}</li>
                </ul>
            </div>
        </div>

        <div className="s-py-50" data-aos="fade-up">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex justify-between gap-10 flex-col lg:flex-row">
                    <div className="w-full lg:w-[58%]">
                        <div className="relative product-dtls-wrapper">
                            <button className="absolute top-5 left-0 p-2 bg-[#E13939] text-lg leading-none text-white font-medium z-50">-10%</button>
                            <div className="product-dtls-slider ">
                                <div className={activeImage === 1 ? '' : 'hidden'}><img src={data?.image ? data?.image : product1} className='w-full' alt="product"/></div>
                                <div className={activeImage === 2 ? '' : 'hidden'}><img src={product2} alt="product"/></div>
                                <div className={activeImage === 3 ? '' : 'hidden'}><img src={product3} alt="product"/></div>
                                <div className={activeImage === 4 ? '' : 'hidden'}><img src={product4} alt="product"/></div>
                            </div>
                            <div className="product-dtls-nav">
                                <div onClick={()=>setActiveImage(1)} className='mb-2'><img src={data?.image ? data?.image : product1} alt="product"/></div>
                                <div onClick={()=>setActiveImage(2)} className='mb-2'><img src={product2} alt="product"/></div>
                                <div onClick={()=>setActiveImage(3)} className='mb-2'><img src={product3} alt="product"/></div>
                                <div onClick={()=>setActiveImage(4)}><img src={product4} alt="product"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[635px] w-full">
                        <div className="pb-4 sm:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <h2 className="font-semibold leading-none">{data?.name ? data?.name : 'Classic Relaxable Chair'}</h2>
                            <div className="flex gap-4 items-center mt-[15px]">
                                <span className="text-lg sm:text-xl leading-none pb-[5px] text-title line-through pl-2 inline-block dark:text-white">$140.99</span>
                                <span className="text-2xl sm:text-3xl text-primary leading-none block">$85.00</span>
                            </div>

                            <div className="mt-5 md:mt-7 flex items-center gap-4 flex-wrap">
                                <h4 className="text-xl md:text-[22px] font-semibold !leading-none">Hurry Up!</h4>
                                <div className="overflow-auto">
                                    <div className="py-2 px-3 bg-[#FAF2F2] rounded-[51px] flex items-end gap-[6px] w-[360px]">
                                        <svg className="w-[15px]" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6923 7.59087C12.6383 7.52329 12.573 7.53657 12.5387 7.55036C12.51 7.562 12.4442 7.59919 12.4533 7.69239C12.4642 7.80431 12.4704 7.91841 12.4715 8.03157C12.4764 8.50102 12.2881 8.96094 11.9549 9.2934C11.6238 9.62371 11.1884 9.80168 10.7247 9.79652C10.0913 9.78844 9.56601 9.45809 9.20551 8.84118C8.90742 8.33106 9.03844 7.67313 9.17715 6.97654C9.25832 6.5688 9.34227 6.14716 9.34227 5.74588C9.34227 2.62132 7.24173 0.818669 5.98962 0.0222265C5.96373 0.00578123 5.93908 0 5.91724 0C5.88173 0 5.85361 0.0153124 5.83974 0.0246874C5.81287 0.0428905 5.76986 0.0843747 5.78369 0.157812C6.26228 2.69929 4.83478 4.22783 3.32346 5.84611C1.76566 7.51419 0 9.40485 0 12.8147C0 16.7767 3.22331 20 7.18532 20C10.4475 20 13.3237 17.7256 14.1796 14.4692C14.7633 12.2487 14.1517 9.42031 12.6923 7.59087ZM7.36458 18.4663C6.37247 18.5115 5.42896 18.1557 4.7083 17.4667C3.99537 16.7849 3.58647 15.8336 3.58647 14.8565C3.58647 13.0228 4.28756 11.6768 6.17326 9.88973C6.20412 9.86047 6.23572 9.85121 6.26326 9.85121C6.28822 9.85121 6.30986 9.85883 6.32474 9.86598C6.35611 9.88109 6.40767 9.91852 6.40072 9.99945C6.33329 10.784 6.33447 11.4352 6.40415 11.9351C6.58228 13.2118 7.51692 14.0697 8.73 14.0697C9.32477 14.0697 9.89129 13.8458 10.3252 13.4394C10.3756 13.3922 10.4318 13.3982 10.4534 13.4028C10.4819 13.409 10.5202 13.4265 10.5402 13.4748C10.7202 13.9092 10.8121 14.3703 10.8135 14.8453C10.8193 16.7564 9.27207 18.3808 7.36458 18.4663Z" fill="#E13939"/>
                                        </svg>                                
                                        <h6 className="text-lg font-medium leading-none !text-[#E13939] whitespace-nowrap">Sale Ends :</h6>
                                        <div className="countdown-clock flex gap-[10px] items-center">
                                            <div className="countdown-item flex">
                                                <div className="ci-inner text-lg font-medium leading-none text-[#E13939]">
                                                    <div className="clock-days ci-value"></div>
                                                </div>
                                                <p className="text-lg font-medium leading-none text-[#E13939]">D</p>
                                            </div>
                                            <p className="text-lg font-medium leading-none text-[#E13939]">:</p>
                                            <div className="countdown-item flex">
                                                <div className="ci-inner text-lg font-medium leading-none text-[#E13939]">
                                                    <div className="clock-hours ci-value"></div>
                                                </div>
                                                <p className="text-lg font-medium leading-none text-[#E13939]">H</p>
                                            </div>
                                            <p className="text-lg font-medium leading-none text-[#E13939]">:</p>
                                            <div className="countdown-item flex">
                                                <div className="ci-inner text-lg font-medium leading-none text-[#E13939]">
                                                    <div className="clock-minutes ci-value"></div>
                                                </div>
                                                <p className="text-lg font-medium leading-none text-[#E13939]">M</p>
                                            </div>
                                            <p className="text-lg font-medium leading-none text-[#E13939]">:</p>
                                            <div className="countdown-item flex">
                                                <div className="ci-inner text-lg font-medium leading-none text-[#E13939]">
                                                    <div className="clock-seconds ci-value"></div>
                                                </div>
                                                <p className="text-lg font-medium leading-none text-[#E13939]">S</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="sm:text-lg mt-5 md:mt-7">
                                Experience the epitome of relaxation with our Classic Relaxable Chair. Crafted with plush cushioning and ergonomic design, it offers unparalleled comfort for lounging or reading. Its timeless style seamlessly blends with any decor, while the sturdy construction ensures durability for years to come.
                            </p>
                        </div>
                        <div className="py-4 sm:py-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="200">
                           <IncreDre/>
                            <div className="flex gap-4 mt-4 sm:mt-6">
                                <Link to="/cart" className="btn btn-solid" data-text="Add to Cart">
                                    <span>Add to Cart</span>
                                </Link>
                                <Link to="#" className="btn btn-outline" data-text="Add to Wishlist">
                                    <span>Add to Wishlist</span>
                                </Link>
                            </div>
                        </div>
                        <div className="py-4 sm:py-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex gap-x-12 gap-y-3 flex-wrap">
                                <h6 className="leading-none font-medium">SKU : CH_0015</h6>
                                <h6 className="leading-none font-medium">Category : Chair</h6>
                            </div>
                            <div className="flex gap-x-12 lg:gap-x-24 gap-y-3 flex-wrap mt-5 sm:mt-10">
                                <div className="flex gap-[10px] items-center">
                                    <h6 className="leading-none font-medium">Size :</h6>
                                    <div className="flex gap-[10px]">
                                        <label className="product-size">
                                            <input className="appearance-none hidden" type="radio" name="size" checked/>
                                            <span className="w-6 h-6 flex items-center justify-center pt-[2px] text-sm leading-none bg-[#E8E9EA] dark:bg-dark-secondary text-title dark:text-white duration-300">S</span>
                                        </label>
                                        <label className="product-size">
                                            <input className="appearance-none hidden" type="radio" name="size" />
                                            <span className="w-6 h-6 flex items-center justify-center pt-[2px] text-sm leading-none bg-[#E8E9EA] dark:bg-dark-secondary text-title dark:text-white duration-300">M</span>
                                        </label>
                                        <label className="product-size">
                                            <input className="appearance-none hidden" type="radio" name="size"/>
                                            <span className="w-6 h-6 flex items-center justify-center pt-[2px] text-sm leading-none bg-[#E8E9EA] dark:bg-dark-secondary text-title dark:text-white duration-300">L</span>
                                        </label>
                                        <label className="product-size">
                                            <input className="appearance-none hidden" type="radio" name="size"/>
                                            <span className="w-6 h-6 flex items-center justify-center pt-[2px] text-sm leading-none bg-[#E8E9EA] dark:bg-dark-secondary text-title dark:text-white duration-300">XL</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <h6 className="leading-none font-medium">Color :</h6>
                                    <div className="flex gap-[10px] items-center">
                                        <label className="product-color">
                                            <input className="appearance-none hidden" type="radio" name="color" />
                                            <span className="border border-[#D68553] flex rounded-full border-opacity-0 duration-300 p-1">
                                                <span className="w-4 h-4 rounded-full bg-[#D68553] flex"></span>
                                            </span>
                                        </label>
                                        <label className="product-color">
                                            <input className="appearance-none hidden" type="radio" name="color" checked/>
                                            <span className="border border-[#61646E] flex rounded-full border-opacity-0 duration-300 p-1">
                                                <span className="w-4 h-4 rounded-full bg-[#61646E] flex"></span>
                                            </span>
                                        </label>
                                        <label className="product-color">
                                            <input className="appearance-none hidden" type="radio" name="color"/>
                                            <span className="border border-[#E9E3DC] flex rounded-full border-opacity-0 duration-300 p-1">
                                                <span className="w-4 h-4 rounded-full bg-[#E9E3DC] flex"></span>
                                            </span>
                                        </label>
                                        <label className="product-color">
                                            <input className="appearance-none hidden" type="radio" name="color"/>
                                            <span className="border border-[#9A9088] flex rounded-full border-opacity-0 duration-300 p-1">
                                                <span className="w-4 h-4 rounded-full bg-[#9A9088] flex"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 sm:py-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="400">
                            <h4 className="font-medium leading-none">Tags :</h4>
                            <div className="flex flex-wrap gap-[10px] md:gap-[15px] mt-5 md:mt-6">
                                {productTag.map((item,index)=>{
                                    return(
                                        <Link className="btn btn-theme-outline btn-xs" to="#" data-text={item} key={index}><span>{item}</span></Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="pt-4 sm:pt-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center gap-6">
                                <h6 className="font-normal">Share : </h6>
                                <div className="flex gap-6">
                                    <Link to="#" className="text-paragraph duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaFacebookF className='size-5'/>
                                    </Link>
                                    <Link to="#" className="text-paragraph duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaTwitter className='size-5'/>
                                    </Link>
                                    <Link to="#" className="text-paragraph duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaInstagram className='size-5'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-50">
            <div className="container-fluid">
                <DetailTab/>
            </div>
        </div>

        <div className="s-py-50-100" data-aos="fade-up" data-aos-delay="200">
            <div className="container-fluid">
                <div className="max-w-[547px] mx-auto text-center">
                    <h6 className="text-2xl sm:text-3xl md:text-4xl leading-none">Related Products</h6>
                    <p className="mt-3">Explore complementary options that enhance your experience. Discover related products curated just for you. </p>
                </div>
                <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-8 md:pt-[50px]">
                    {productList.slice(0,4).map((item,index)=>{
                        return(
                            <LayoutOne item={item} key={index}/>
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
