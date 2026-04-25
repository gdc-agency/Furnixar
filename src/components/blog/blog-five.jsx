import { Link } from 'react-router-dom'
import { blogData } from '../../data/index-five';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

 let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 20,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }

export default function BlogFive() {
 
  return (
        <div className="home-v5-blog-slider mx-auto  sm:mb-8" >
           <TinySlider settings={settings}> 
              {blogData.map((item,index)=>{
                  return(
                      <div>
                        <div className="relative group" key={index}>
                            <Link to="/blog-details-v1" className="overflow-hidden block">
                                <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog-card"/>
                            </Link>
                            <div className="absolute z-10 w-full h-full inset-0 flex items-center justify-center">
                              <div className='bg-white bg-opacity-90 dark:bg-title dark:bg-opacity-90 w-[60%] p-5 md:p-6'>
                                  <ul className="flex items-center gap-[10px] flex-wrap ">
                                      <li className="text-[15px] leading-none dark:text-white">{item.date}</li>
                                      <li><Link to="/blog-tag" className="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum">{item.tag}</Link></li>
                                  </ul>
                                  <h5 className="mt-3 font-medium dark:text-white leading-[1.5]"><Link to="/blog-details-v1" className="text-underline">{item.title}</Link></h5>
                              </div>
                            </div>
                        </div>
                      </div>
                  )
              })}
          </TinySlider>
        </div>
  )
}
