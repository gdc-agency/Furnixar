import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import BlogThree from "../../components/blog/blog-three";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { blogOneData } from "../../data/blog";

import Aos from "aos";

export default function BlogV2() {

    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Blog Post</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Blog</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto mb-5 md:mb-6">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl" data-aos="fade-up">Featured Posts</h3>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <BlogThree/>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl mb-5 md:mb-6" data-aos="fade-up">Latest Posts</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                        {blogOneData.slice(0,8).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <Link to={`/blog-details-v2/${item.id}`} className="overflow-hidden block">
                                        <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog-card"/>
                                    </Link>
                                    <div className="p-5 relative z-10 before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-primary dark:before:bg-dark-secondary before:transition-all before:duration-300 overflow-hidden before:opacity-0 group-hover:before:opacity-10 dark:group-hover:before:opacity-100">
                                        <ul className="flex items-center gap-[10px] flex-wrap">
                                            <li className="text-[15px] leading-none dark:text-white">{item.date}</li>
                                            <li><Link to="/blog-tag" className="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum group-hover:bg-primary group-hover:text-white duration-300">{item.tag}</Link></li>
                                        </ul>
                                        <h5 className="mt-3 font-medium dark:text-white leading-[1.5]"><Link to={`/blog-details-v2/${item.id}`} className="text-underline">{item.title}</Link></h5>
                                        <p className="text-base md:text-lg mt-3 dark:text-white-light">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-7 md:mt-12">
                        <Link to="#" className="btn btn-outline" data-text="Load More">
                            <span>Load More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
