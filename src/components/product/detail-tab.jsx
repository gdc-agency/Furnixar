import { useState } from 'react'
import { Link } from 'react-router-dom'
import { detailReview, shippingAbout, venderInfo } from '../../data/data'
import { GoStarFill } from 'react-icons/go'

export default function DetailTab() {
    const [activeTab, setActiveTab] = useState(1)
  return (
    <div className="max-w-[985px] mx-auto">
        <div className="product-dtls-navtab  border-y border-bdr-clr dark:border-bdr-clr-drk">
            <ul id="user-nav-tabs" className=" text-title dark:text-white text-base sm:text-lg lg:text-xl flex leading-none gap-3 sm:gap-6 md:gap-12 lg:gap-24 justify-between sm:justify-start max-w-md sm:max-w-full">
                <li className={`py-3 sm:py-5 lg:6 relative before:absolute before:w-full before:h-[1px] before:bg-title before:top-full before:left-0 before:duration-300 dark:before:bg-white before:opacity-0 ${activeTab === 1 ? 'active' : ''}`}><Link className="duration-300 hover:text-primary" to="#c" onClick={()=>setActiveTab(1)}>Description</Link></li>
                <li className={`py-3 sm:py-5 lg:6 relative before:absolute before:w-full before:h-[1px] before:bg-title before:top-full before:left-0 before:duration-300 dark:before:bg-white before:opacity-0 ${activeTab === 2 ? 'active' : ''}`}><Link className="duration-300 hover:text-primary" to="#" onClick={()=>setActiveTab(2)}>Vendor Info</Link></li>
                <li className={`py-3 sm:py-5 lg:6 relative before:absolute before:w-full before:h-[1px] before:bg-title before:top-full before:left-0 before:duration-300 dark:before:bg-white before:opacity-0 ${activeTab === 3 ? 'active' : ''}`}><Link className="duration-300 hover:text-primary" to="#" onClick={()=>setActiveTab(3)}>Review</Link></li>
                <li className={`py-3 sm:py-5 lg:6 relative before:absolute before:w-full before:h-[1px] before:bg-title before:top-full before:left-0 before:duration-300 dark:before:bg-white before:opacity-0 ${activeTab === 4 ? 'active' : ''}`}><Link className="duration-300 hover:text-primary" to="#" onClick={()=>setActiveTab(4)}>Shipping</Link></li>
            </ul>
        </div>
        <div id="content" className="mt-5 sm:mt-8 lg:mt-12 mx-0 sm:mr-5 md:mr-8 lg:mr-12">
            {activeTab === 1 && 
                <div>
                    <p className="sm:text-lg">Crafted with plush cushioning and ergonomic design, it offers unparalleled comfort for lounging or reading. Its timeless style seamlessly blends with any decor, while the sturdy construction ensures durability for years to come. Whether you're unwinding after a long day or enjoying a leisurely weekend, this chair provides the perfect retreat.</p>
                    <ul className="mt-4 sm:mt-6 grid gap-4 sm:gap-5 sm:text-lg leading-none">
                        <li>Leather : From Japan</li>
                        <li>Brand : Navana</li>
                        <li>Weight : 1kg</li>
                        <li>Color : Wooden , Whtie , Blue , Orange</li>
                    </ul>
                </div>
            }
            {activeTab === 2 && 
                <div>
                    <div className="max-w-[680px] flex items-start justify-between gap-y-8 gap-x-10 flex-wrap">
                        {venderInfo.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <span className="text-primary sm:text-lg leading-none block">Shop Name</span>
                                    <h4 className="font-medium mt-2 sm:mt-3 text-xl sm:text-2xl leading-none">{item.name}</h4>
                                    <ul className="mt-4 sm:mt-6 grid gap-3 sm:text-lg">
                                        <li>Vendor : {item.vendor}</li>
                                        <li>Shop : {item.shop}</li>
                                        <li>Mail : {item.mail}</li>
                                        <li>Call : {item.call}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {activeTab === 3 && 
                <div>
                    <div className="max-w-[905px] flex items-start xl:justify-between gap-8 flex-wrap">
                        {detailReview.map((item,index)=>{
                            return(
                                <div className="sm:max-w-[260px] w-full" key={index}>
                                    <svg className="fill-current text-[#E8E9EA] dark:text-white-light" width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 25.5539C0 20.8097 0.974729 16.5328 2.92419 12.723C4.94585 8.91332 7.87004 5.89429 11.6968 3.66596C15.5235 1.36575 20.1083 0.143763 25.4513 0V11.2135C20.9025 11.2135 17.509 12.4715 15.2708 14.9873C13.1047 17.5032 12.0217 21.0254 12.0217 25.5539V28.1416H24.3682V51H0V25.5539ZM60 11.2135C55.4513 11.2135 52.0578 12.4715 49.8195 14.9873C47.6534 17.5032 46.5704 21.0254 46.5704 25.5539V28.1416H58.917V51H34.5487V25.5539C34.5487 20.8097 35.5235 16.5328 37.4729 12.723C39.4946 8.91332 42.4188 5.89429 46.2455 3.66596C50.0722 1.36575 54.657 0.143763 60 0V11.2135Z"/>
                                    </svg>
                                    <ul className="flex items-center gap-2 mt-4 sm:mt-6">
                                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                        <li><GoStarFill className='text-slate-300 size-4'/></li>
                                        <li className="dark:text-gray-100">( 125 )</li>
                                    </ul>
                                    <h6 className="font-semibold leading-none mt-[10px]">{item.name}</h6>
                                    <p className="sm:text-lg mt-3">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {activeTab === 4 && 
                <div>
                    {shippingAbout.map((item,index)=>{
                        return(
                            <div key={index} className='mb-4'>
                                <h4 className="text-xl sm:text-2xl leading-none font-medium">{item.title}</h4>
                                <p className="sm:text-lg mt-3">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    </div>
  )
}
