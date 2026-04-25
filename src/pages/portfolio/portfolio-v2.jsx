import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'

import { portfolioTwo } from "../../data/portfolio-data";

import { LuExpand } from "react-icons/lu";

import Aos from "aos";

export default function PortfolioV2() {
    const [activeFilter, setActiveFilter] = useState("*");

    const filteredItems = activeFilter === "*" ? portfolioTwo : portfolioTwo.filter((item) => item.category?.includes(activeFilter));

    useEffect(()=>{
        Aos.init()
    })

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Portfolio</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Portfolio</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100 overflow-hidden relative">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div className="portfolio1-button flex justify-center gap-[15px] flex-wrap mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "*" ? "active" : ""}`} onClick={() => setActiveFilter("*")} data-text="All">
                            <span>All</span>
                        </button>
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "Sofa" ? "active" : ""}`} onClick={() => setActiveFilter("Sofa")} data-text="Sofa & Chair">
                            <span>Sofa & Chair</span>
                        </button>
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "Interior" ? "active" : ""}`} onClick={() => setActiveFilter("Interior")} data-text="Full Interior">
                            <span>Full Interior</span>
                        </button>
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "Vase" ? "active" : ""}`} onClick={() => setActiveFilter("Vase")} data-text="Lamp & Vase">
                            <span>Lamp & Vase</span>
                        </button>
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "Table" ? "active" : ""}`} onClick={() => setActiveFilter("Table")} data-text="Table">
                            <span>Table</span>
                        </button>
                        <button className={`btn btn-sm btn-theme-outline ${activeFilter === "Design" ? "active" : ""}`} onClick={() => setActiveFilter("Design")} data-text="Art Design">
                            <span>Art Design</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2 -m-[10px] md:-m-[15px] mt-5" data-aos="fade-up" data-aos-delay="300">
                        {filteredItems.map((item,index)=>{
                            return(
                                <div className="portfolio1-item Sofa" key={index}>
                                    <Link to={`/portfolio-details-v2/${item.id}`} className="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden block">
                                        <img className="w-full object-cover" src={item.image} alt="Portfolio"/>
                                        <span className="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 block">
                                            <span className="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{item.tag}</span>
                                            <span className="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                                {item.name}
                                            </span>
                                        </span>
                                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                            <LuExpand className="text-white size-10"/>
                                        </span>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>
        <ScrollToTop/>
    </>
  )
}
