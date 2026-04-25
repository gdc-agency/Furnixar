import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import Aos from "aos";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import BlogTwo from "../../components/blog/blog-two";
import { blogOneData } from "../../data/blog";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

export default function BlogV1() {

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

        <div className="s-py-100 overflow-hidden">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto mb-5 md:mb-6" data-aos="fade-up">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl">Featured Posts</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <BlogTwo/>
            </div>
        </div>

        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl mb-5 md:mb-6" data-aos="fade-up">Latest Posts</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                        {blogOneData.map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <Link to={`/blog-details-v1/${item.id}`} className="overflow-hidden block">
                                        <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog"/>
                                    </Link>
                                    <div className="text-center mt-4 px-3">
                                        <ul className="flex items-center justify-center gap-[10px] flex-wrap">
                                            <li className="text-[15px] leading-none dark:text-white">{item.date}</li>
                                            <li><Link to="/blog-tag" className="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum">{item.tag}</Link></li>
                                        </ul>
                                        <h5 className="mt-3 font-medium dark:text-white leading-[1.5]"><Link to={`/blog-details-v1/${item.id}`} className="text-underline">{item.title}</Link></h5>
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
