import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { Link } from "react-router-dom";
import { productList } from "../../data/data";
import LayoutOne from "../../components/product/layout-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import { useEffect } from "react";
import Aos from "aos";

export default function ProductCategory() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
        <NavbarOne/>
        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
          <div className="text-center w-full">
              <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Room Interior</h2>
              <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                  <li><Link to="/index">Home</Link></li>
                  <li>/</li>
                  <li><Link to="/shop-v1">Shop</Link></li>
                  <li>/</li>
                  <li className="text-primary">Room Interior</li>
              </ul>
          </div>
        </div>

    <div className="s-py-100" >
        <div className="container-fluid">
            <div data-aos="fade-up" data-aos-delay="200">
                <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  {productList.map((item,index)=>{
                    return(
                      <LayoutOne item={item} key={index}/>
                    )
                  })}
                </div>
                <div className="mt-10 md:mt-12 flex items-center justify-center gap-[10px]">
                    <Link to="#" className="text-title dark:text-white text-xl"><span className="lnr lnr-arrow-left"></span></Link>         
                    <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">01</Link>        
                    <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">02</Link>        
                    <Link to="#" className="text-title dark:text-white text-3xl sm:text-4xl transform">...</Link>          
                    <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">09</Link>        
                    <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">10</Link>        
                            
                    <Link to="#" className="text-title dark:text-white text-xl"><span className="lnr lnr-arrow-right"></span></Link>         
                </div>
            </div>
        </div>
    </div>

    <FooterOne/>
    <ScrollToTop/>
    </>
  )
}
