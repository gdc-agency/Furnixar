import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import NavbarOne from '../../components/navbar/navbar-one'
import SelectOne from '../../components/product/select-one'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { productListTwo } from '../../data/data'

import { GoStarFill } from 'react-icons/go'
import { LuHeart } from 'react-icons/lu'
import { RiShoppingBag2Line } from 'react-icons/ri'

import AOS from 'aos';

export default function ShopV4() {
     const [activeFilter, setActiveFilter] = useState("*");

     const filteredItems = activeFilter === '*' ? productListTwo : productListTwo.filter((item) => item.category?.includes(activeFilter));

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <>
        <NavbarOne/> 

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100" data-aos="fade-up">
            <div className="container-fluid">
                <div className="flex items-start justify-between gap-8 max-w-[1720px] mx-auto flex-col-reverse lg:flex-row pb-8 md:pb-[50px]">
                    <div>
                        <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Category</h4>
                        <div className="shop-button flex gap-[15px] flex-wrap">
                            <button className={`btn btn-sm btn-theme-outline ${activeFilter === '*' ? 'active' : ''}`} onClick={() => setActiveFilter("*")} data-text="Sofa & Chair">
                                <span>Sofa & Chair</span>
                            </button>
                            <button className={`btn btn-sm btn-theme-outline ${activeFilter === 'Interior' ? 'active' : ''}`} onClick={() => setActiveFilter("Interior")} data-text="Full Interior">
                                <span>Full Interior</span>
                            </button>
                            <button className={`btn btn-sm btn-theme-outline ${activeFilter === 'Vase' ? 'active' : ''}`} onClick={() => setActiveFilter("Vase")} data-text="Lamp & Vase">
                                <span>Lamp & Vase</span>
                            </button>
                            <button className={`btn btn-sm btn-theme-outline ${activeFilter === 'Table' ? 'active' : ''}`} onClick={() => setActiveFilter("Table")} data-text="Table">
                                <span>Table</span>
                            </button>
                            <button className={`btn btn-sm btn-theme-outline ${activeFilter === 'Design' ? 'active' : ''}`} onClick={() => setActiveFilter("Design")} data-text="Art Design">
                                <span>Art Design</span>
                            </button>
                        </div>
                    </div>
                    <div className="max-w-[562px] w-full grid sm:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Price Range</h4>
                            <div className="grid grid-cols-2 gap-[15px]">
                                <div className="py-[10px] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span className="text-title dark:text-white font-medium leading-none">Min:</span>
                                    <div className="relative">
                                        <span className="text-title dark:text-white font-medium leading-none absolute left-0 top-1 block">$</span>
                                        <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white placeholder  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="0" value="0"/>
                                    </div>
                                </div>
                                <div className="py-[10] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span className="text-title dark:text-white font-medium leading-none">Max:</span>
                                    <div className="relative">
                                        <span className="text-title dark:text-white  font-medium leading-none absolute left-0 top-1 block">$</span>
                                        <input className="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="100" value="100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Brand</h4>
                            <SelectOne/>
                        </div>
                    </div>
                </div>
                <div className=" max-w-[1722px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
                        {filteredItems.map((item,index)=>{
                            return(
                                <div className="Interior" key={index}>
                                    <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-title before:opacity-0 before:duration-300 hover:before:opacity-70 group overflow-hidden">
                                        <img className="w-full h-full object-cover" src={item.image} alt="shop"/>
                                        {item.offer && 
                                            <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#E13939] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                                                15% OFF
                                            </div>
                                        }
                                        <div className="absolute z-10 top-0 left-0 w-full h-full items-start justify-end flex flex-col p-7">
                                            <div>
                                                <h4 className="text-lg font-medium leading-none text-white transition-all group-hover:duration-100 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{item.price}<span className="text-white/60 line-through pl-2 inline-block">$140.99</span></h4>
                                                <h6 className="text-xl md:text-2xl font-normal mt-3 md:mt-4 text-white transition-all group-hover:duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"><Link to="/product-details">{item.name}</Link></h6>
                                                <ul className="flex items-center gap-2 mt-3 md:mt-4 transition-all group-hover:duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-yellow-500 size-4'/></li>
                                                    <li><GoStarFill className='text-slate-300 size-4'/></li>
                                                    <li className="text-gray-100">( 123 )</li>
                                                </ul>
                                            </div>  
                                        </div>
                                        <div className="absolute z-10 top-[50%] right-7 transform -translate-y-[40%] opacity-0 duration-300 transition-all group-hover:-translate-y-1/2 group-hover:opacity-100 flex flex-col items-end gap-3">
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <LuHeart className="dark:text-white size-6"/>                                                                    
                                                <span className="mt-1">Add to wishlist</span>
                                            </Link>
                                            <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                                <RiShoppingBag2Line className="dark:text-white size-6"/>
                                                <span className="mt-1">Add to Cart</span>
                                            </Link>
                                            <button className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon quick-view">
                                                <LuHeart className="dark:text-white size-6"/>
                                                <span className="mt-1">Quick View</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="text-center mt-7 md:mt-12">
                    <Link to="/shop-v1" className="btn btn-outline" data-text="Load More">
                        <span>Load More</span>
                    </Link>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>

    </>
  )
}
